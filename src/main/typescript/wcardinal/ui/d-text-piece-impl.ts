import { DisplayObject, Graphics, utils } from "pixi.js";
import { DBaseStateSet } from "./d-base-state-set";
import { DDynamicText } from "./d-dynamic-text";
import { DDynamicTextStyle } from "./d-dynamic-text-style";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { isFunction } from "./util/is-function";
import { DApplications } from "./d-applications";
import { DImagePieceLayouter } from "./d-image-piece-layouter";
import {
	DTextPiece,
	DTextPieceFormatter,
	DTextPieceOptions,
	DThemeTextPiece
} from "./d-text-piece";
import { DApplicationTarget } from "./d-application-like";
import { DTextPieceAlign } from "./d-text-piece-align";
import { DTextPieceAlignImpl } from "./d-text-piece-align-impl";
import { DTextPieceStyle } from "./d-text-piece-style";
import { DTextPieceStyleImpl } from "./d-text-piece-style-impl";

export interface DTextPieceImplParent extends DApplicationTarget {
	readonly state: DBaseStateSet;
	addChild(displayObject: DisplayObject): void;
	removeChild(displayObject: DisplayObject): void;
	toDirty(): void;
	getOverflowMask(): Graphics | null;
}

export class DTextPieceImpl<VALUE> extends utils.EventEmitter implements DTextPiece<VALUE> {
	protected _parent: DTextPieceImplParent;
	protected _theme: DThemeTextPiece<VALUE>;
	protected _object?: DDynamicText | null;
	protected _value?: DStateAwareOrValueMightBe<VALUE>;
	protected _computed?: VALUE;
	protected _color: DStateAwareOrValueMightBe<number>;
	protected _alpha: DStateAwareOrValueMightBe<number>;
	protected _style: DTextPieceStyleImpl;
	protected _dstyle: DDynamicTextStyle;
	protected _align: DTextPieceAlign;
	protected _formatter: DTextPieceFormatter<VALUE>;
	protected _isVisible: boolean;

	constructor(
		parent: DTextPieceImplParent,
		theme: DThemeTextPiece<VALUE>,
		options?: DTextPieceOptions<VALUE> | undefined
	) {
		super();
		this._parent = parent;
		this._theme = theme;
		this._value = options?.value ?? theme.newTextValue();
		this._computed = this.newComputed();
		this._color = options?.color;
		this._alpha = options?.alpha;
		const dstyle = new DDynamicTextStyle(parent, theme, options?.style);
		this._dstyle = dstyle;
		this._style = new DTextPieceStyleImpl(parent, dstyle);
		this._align = new DTextPieceAlignImpl(parent, theme, options?.align);
		this._formatter = options?.formatter ?? theme.getTextFormatter();
		this._isVisible = true;
		this.onComputedChange();
		if (this.updateObject()) {
			parent.toDirty();
			DApplications.update(parent);
		}
	}

	get value(): DStateAwareOrValueMightBe<VALUE> {
		return this._value;
	}

	set value(value: DStateAwareOrValueMightBe<VALUE>) {
		if (this._value !== value) {
			this._value = value;
			this.onValueChange();
		}
	}

	getValue(): DStateAwareOrValueMightBe<VALUE> {
		return this._value;
	}

	setValue(value: DStateAwareOrValueMightBe<VALUE>, forcibly?: boolean): void {
		if (forcibly || this._value !== value) {
			this._value = value;
			this.onValueChange(forcibly);
		}
	}

	protected onValueChange(forcibly?: boolean): void {
		const newComputed = this.newComputed();
		if (forcibly || this._computed !== newComputed) {
			this._computed = newComputed;
			this.onComputedChange();
			if (this.updateObject()) {
				const parent = this._parent;
				parent.toDirty();
				DApplications.update(parent);
			}
		}
	}

	compute(forcibly?: boolean): void {
		this.onValueChange(forcibly);
	}

	get computed(): VALUE | undefined {
		return this._computed;
	}

	get formatter(): DTextPieceFormatter<VALUE> {
		return this._formatter;
	}

	set formatter(formatter: DTextPieceFormatter<VALUE>) {
		if (this._formatter !== formatter) {
			this._formatter = formatter;
			this.onValueChange(true);
		}
	}

	get color(): DStateAwareOrValueMightBe<number> {
		return this._color;
	}

	set color(color: DStateAwareOrValueMightBe<number>) {
		if (this._color !== color) {
			this._color = color;
			this.onColorChange();
		}
	}

	get alpha(): DStateAwareOrValueMightBe<number> {
		return this._alpha;
	}

	set alpha(alpha: DStateAwareOrValueMightBe<number>) {
		if (this._alpha !== alpha) {
			this._alpha = alpha;
			this.onColorChange();
		}
	}

	protected onColorChange(): void {
		const object = this._object;
		if (object != null) {
			const parent = this._parent;
			const state = parent.state;
			const color = this.newColor(state);
			const alpha = this.newAlpha(state);
			const style = object.style;
			if (style.fill !== color || object.alpha !== alpha) {
				style.fill = color;
				object.alpha = alpha;
				DApplications.update(parent);
			}
		}
	}

	get align(): DTextPieceAlign {
		return this._align;
	}

	get style(): DTextPieceStyle {
		return this._style;
	}

	get object(): DDynamicText | null | undefined {
		return this._object;
	}

	update(layouter: DImagePieceLayouter): void {
		// Compute a value
		const newComputed = this.newComputed();
		if (this._computed !== newComputed) {
			this._computed = newComputed;
			this.onComputedChange();
			this.updateObject();
		}

		const object = this._object;
		if (object != null) {
			// Update the color
			const state = this._parent.state;
			object.style.fill = this.newColor(state);
			object.alpha = this.newAlpha(state);

			// Layout
			layouter.set(object);
		} else {
			// Layout
			layouter.set(null);
		}
	}

	protected updateObject(): boolean {
		const computed = this._computed;
		if (computed !== undefined) {
			const formatted = this._formatter(computed, this);
			const object = this._object;
			if (object == null) {
				if (0 < formatted.length) {
					const newObject = this.newObject();
					newObject.visible = this._isVisible;
					this._object = newObject;
					const parent = this._parent;
					parent.addChild(newObject);
					const overflowMask = parent.getOverflowMask();
					if (overflowMask) {
						newObject.mask = overflowMask;
					}
					newObject.text = formatted;
					return true;
				}
			} else if (object.text !== formatted) {
				object.text = formatted;
				return true;
			}
		} else {
			const object = this._object;
			if (object != null && object.text !== "") {
				object.text = "";
				return true;
			}
		}
		return false;
	}

	protected newComputed(): VALUE | undefined {
		const value = this._value;
		if (value !== undefined) {
			if (isFunction(value)) {
				const result = value(this._parent.state);
				if (result !== undefined) {
					return result;
				}
			} else {
				return value;
			}
		}
		return this._theme.getTextValue(this._parent.state);
	}

	protected newColor(state: DBaseStateSet): number {
		const color = this._color;
		if (color !== undefined) {
			if (isFunction(color)) {
				const result = color(state);
				if (result !== undefined) {
					return result;
				}
			} else {
				return color;
			}
		}
		return this._theme.getColor(state);
	}

	protected newAlpha(state: DBaseStateSet): number {
		const alpha = this._alpha;
		if (alpha !== undefined) {
			if (isFunction(alpha)) {
				const result = alpha(state);
				if (result !== undefined) {
					return result;
				}
			} else {
				return alpha;
			}
		}
		return this._theme.getAlpha(state);
	}

	protected newObject(): DDynamicText {
		return new DDynamicText(this._dstyle);
	}

	get visible(): boolean {
		const object = this._object;
		if (object != null) {
			return object.visible;
		}
		return this._isVisible;
	}

	set visible(visible: boolean) {
		const object = this._object;
		if (object != null) {
			object.visible = visible;
		}
		this._isVisible = visible;
	}

	show(): this {
		this.visible = true;
		return this;
	}

	hide(): this {
		this.visible = false;
		return this;
	}

	isShown(): boolean {
		return this.visible;
	}

	protected onComputedChange(): void {
		this.emit("change", this);
	}

	destroy(): this {
		const object = this._object;
		if (object) {
			this._object = undefined;
			object.destroy();
		}

		return this;
	}
}
