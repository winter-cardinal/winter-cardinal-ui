import { DisplayObject, Graphics, Sprite, Texture } from "pixi.js";
import { DApplicationTarget } from "./d-application-like";
import { DApplications } from "./d-applications";
import { DBaseStateSet } from "./d-base-state-set";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { isFunction } from "./util/is-function";
import { DImagePieceTint } from "./d-image-piece-tint";
import { DImagePieceTintImpl } from "./d-image-piece-tint-impl";
import { DImagePieceMarginImpl } from "./d-image-piece-margin-impl";
import { DImagePieceMargin } from "./d-image-piece-margin";
import { DImagePieceAlign } from "./d-image-piece-align";
import { DImagePieceAlignImpl } from "./d-image-piece-align-impl";
import { DImagePiece, DImagePieceOptions, DThemeImagePiece } from "./d-image-piece";

export interface DImagePieceImplParent extends DApplicationTarget {
	readonly state: DBaseStateSet;
	addChild(displayObject: DisplayObject): void;
	removeChild(displayObject: DisplayObject): void;
	toDirty(): void;
	getOverflowMask(): Graphics | null;
}

export class DImagePieceImpl implements DImagePiece {
	protected _parent: DImagePieceImplParent;
	protected _theme: DThemeImagePiece;

	protected _object: DisplayObject | null;
	protected _computed: Texture | DisplayObject | null;
	protected _source: DStateAwareOrValueMightBe<Texture | DisplayObject | null>;
	protected _align: DImagePieceAlignImpl;
	protected _margin: DImagePieceMarginImpl;
	protected _tint: DImagePieceTint;
	protected _rotation: DStateAwareOrValueMightBe<number> | undefined;

	protected _onUpdateBound: () => void;

	constructor(
		parent: DImagePieceImplParent,
		theme: DThemeImagePiece,
		options?: DImagePieceOptions
	) {
		this._parent = parent;
		this._theme = theme;

		this._object = null;
		this._align = new DImagePieceAlignImpl(this, theme, options?.align);
		this._margin = new DImagePieceMarginImpl(this, theme, options?.margin);
		this._tint = new DImagePieceTintImpl(this, theme, options?.tint);
		this._rotation = options?.rotation;
		this._source = options?.source;
		this._computed = null;

		this._onUpdateBound = () => {
			this.onUpdate();
		};
	}

	get object(): DisplayObject | null {
		return this._object;
	}

	get align(): DImagePieceAlign {
		return this._align;
	}

	get margin(): DImagePieceMargin {
		return this._margin;
	}

	get tint(): DImagePieceTint {
		return this._tint;
	}

	get source(): DStateAwareOrValueMightBe<Texture | DisplayObject | null> {
		return this._source;
	}

	set source(source: DStateAwareOrValueMightBe<Texture | DisplayObject | null>) {
		if (this._source !== source) {
			this._source = source;
			if (this.updateSource()) {
				this.onUpdate();
			}
		}
	}

	get rotation(): DStateAwareOrValueMightBe<number> {
		return this._rotation;
	}

	set rotation(rotation: DStateAwareOrValueMightBe<number>) {
		if (this._rotation !== rotation) {
			this._rotation = rotation;
			if (this.updateRotation()) {
				DApplications.update(this._parent);
			}
		}
	}

	protected computeSource(): Texture | DisplayObject | null {
		const source = this._source;
		if (source !== undefined) {
			if (isFunction(source)) {
				const result = source(this._parent.state);
				if (result !== undefined) {
					return result;
				}
			} else {
				return source;
			}
		}
		return this._theme.getImageSource(this._parent.state);
	}

	onStateChange(newState: DBaseStateSet, oldState: DBaseStateSet): void {
		this.updateTint();
		this.updateRotation();
	}

	protected isTintAware(
		target: DisplayObject | null
	): target is DisplayObject & { tint: number } {
		return target != null && "tint" in target;
	}

	/**
	 * Updates the tint.
	 *
	 * @returns True if the tint is changed.
	 */
	updateTint(): boolean {
		const object = this._object;
		if (object) {
			if (this.isTintAware(object)) {
				const state = this._parent.state;
				const color = this._tint.getColor(state);
				if (color != null) {
					let result = false;
					if (object.tint !== color) {
						object.tint = color;
						result = true;
					}
					const alpha = this._tint.getAlpha(state);
					if (object.alpha !== alpha) {
						object.alpha = alpha;
						result = true;
					}
					return result;
				}
			}
		}
		return false;
	}

	protected toRotation(theme: DThemeImagePiece, state: DBaseStateSet): number | null {
		const rotation = this._rotation;
		if (rotation != null) {
			if (isFunction(rotation)) {
				const result = rotation(state);
				if (result !== undefined) {
					return result;
				}
			} else {
				return rotation;
			}
		}
		return theme.getImageRotation(state);
	}

	updateRotation(): boolean {
		const object = this._object;
		if (object) {
			const theme = this._theme;
			const state = this._parent.state;
			const rotation = this.toRotation(theme, state);
			if (rotation != null) {
				const transform = object.transform;
				if (transform.rotation !== rotation) {
					transform.rotation = rotation;
					return true;
				}
			}
		}
		return false;
	}

	/**
	 * Updates the computed source.
	 *
	 * @returns True if the computed source is changed
	 */
	updateSource(): boolean {
		const newComputed = this.computeSource();
		const oldComputed = this._computed;
		if (newComputed !== oldComputed) {
			this._computed = newComputed;

			const parent = this._parent;
			const oldObject = this._object;
			const onUpdateBound = this._onUpdateBound;
			if (newComputed instanceof Texture) {
				if (oldComputed instanceof Texture) {
					oldComputed.off("update", onUpdateBound);
					if (oldObject instanceof Sprite) {
						oldObject.texture = newComputed;
						newComputed.on("update", onUpdateBound);
					}
				} else {
					if (oldObject != null) {
						parent.removeChild(oldObject);
					}

					const newObject = new Sprite(newComputed);
					newObject.anchor.set(0.5, 0.5);
					const overflowMask = parent.getOverflowMask();
					if (overflowMask) {
						newObject.mask = overflowMask;
					}
					newComputed.on("update", onUpdateBound);
					parent.addChild(newObject);
					this._object = newObject;
				}
			} else {
				if (oldComputed instanceof Texture) {
					oldComputed.off("update", onUpdateBound);
					if (oldObject != null) {
						parent.removeChild(oldObject);
						oldObject.destroy();
					}
				} else if (oldObject != null) {
					parent.removeChild(oldObject);
				}

				if (newComputed != null) {
					const overflowMask = parent.getOverflowMask();
					if (overflowMask) {
						newComputed.mask = overflowMask;
					}
					parent.addChild(newComputed);
				}
				this._object = newComputed;
			}
			return true;
		}
		return false;
	}

	isRefitable(target: any): boolean {
		return target != null && target === this._object;
	}

	destroy(): void {
		this.source = null;
	}

	onUpdate(): void {
		this._parent.toDirty();
		DApplications.update(this._parent);
	}
}
