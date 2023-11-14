import { DBase } from "./d-base";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { EShapeBar } from "./shape/variant/e-shape-bar";
import { EShapeBarPosition } from "./shape/variant/e-shape-bar-position";
import { DChartAxis } from "./d-chart-axis";
import {
	DChartAxisGuideSimpleShape,
	DChartAxisGuideSimpleShapeOptions,
	DChartAxisGuideSimpleShapeStrokeOptions,
	DChartAxisGuideSimpleShapeTextAlignOptions,
	DChartAxisGuideSimpleShapeTextOptions
} from "./d-chart-axis-guide-simple-shape";
import { EShapeStrokeLike } from "./shape/e-shape-stroke";
import { EShapeStrokeSide } from "./shape/e-shape-stroke-side";
import { EShapeStrokeStyle } from "./shape/e-shape-stroke-style";
import { toEnum } from "./util/to-enum";
import { EShapeRectangleRounded } from "./shape/variant/e-shape-rectangle-rounded";
import { EShapeTextLike, EShapeTextStyle, EShapeTextWeight } from "./shape/e-shape-text";
import { DeepPartial } from "./util/deep-partial";
import { EShapeTextDirection } from "./shape/e-shape-text-direction";
import { EShapeTextAlignLike } from "./shape/e-shape-text-align";
import { EShapeTextAlignHorizontal } from "./shape/e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "./shape/e-shape-text-align-vertical";
import { EShapeLockPart } from "./shape/variant/e-shape-lock-part";

export class DChartAxisGuideSimpleShapeImpl<CHART extends DBase = DBase>
	implements DChartAxisGuideSimpleShape<CHART>
{
	protected _options?: DChartAxisGuideSimpleShapeOptions;
	protected _bar?: EShapeBar | null;
	protected _label?: EShapeRectangleRounded | null;
	protected _labelMargin?: number;
	protected _tick?: EShapeBar | null;
	protected _tickMargin?: number;

	constructor(options?: DChartAxisGuideSimpleShapeOptions) {
		this._options = options;
	}

	get bar(): EShapeBar | null {
		let result = this._bar;
		if (result === undefined) {
			result = this.newBar();
			this._bar = result;
		}
		return result;
	}

	protected newBar(): EShapeBar | null {
		const bar = this._options?.bar ?? {};
		if (bar.enable !== false) {
			const result = new EShapeBar();
			result.stroke.copy(this.toStrokeOptions(bar.stroke, EShapeStrokeStyle.DASHED));
			result.text.copy(this.toTextOptions(bar.text));
			return result;
		}
		return null;
	}

	protected toStrokeOptions(
		options?: DChartAxisGuideSimpleShapeStrokeOptions,
		style?: EShapeStrokeStyle
	): Partial<EShapeStrokeLike> {
		options = options || {};
		return {
			enable: options.enable,
			color: options.color,
			alpha: options.alpha,
			width: options.width,
			align: options.align,
			side: toEnum(options.side, EShapeStrokeSide),
			style: toEnum(options.style ?? style, EShapeStrokeStyle)
		};
	}

	protected toTextOptions(
		options?: DChartAxisGuideSimpleShapeTextOptions
	): DeepPartial<EShapeTextLike> {
		options = options || {};
		return {
			value: options.value,
			color: options.color,
			alpha: options.alpha,
			family: options.family,
			size: options.size,
			weight: toEnum(options.weight, EShapeTextWeight),
			align: this.toTextAlignOptions(options.align),
			offset: options.offset,
			style: toEnum(options.style, EShapeTextStyle),
			outline: options.outline,
			spacing: options.spacing,
			direction: toEnum(options.direction, EShapeTextDirection),
			padding: options.padding,
			clipping: options.clipping,
			fitting: options.fitting
		};
	}

	protected toTextAlignOptions(
		options?: DChartAxisGuideSimpleShapeTextAlignOptions
	): Partial<EShapeTextAlignLike> {
		options = options || {};
		return {
			horizontal: toEnum(options?.horizontal, EShapeTextAlignHorizontal),
			vertical: toEnum(options?.vertical, EShapeTextAlignVertical)
		};
	}

	protected toBarPosition(axis: DChartAxis<CHART>): EShapeBarPosition {
		switch (axis.position) {
			case DChartAxisPosition.LEFT:
			case DChartAxisPosition.RIGHT:
				return EShapeBarPosition.LEFT;
			default:
				return EShapeBarPosition.TOP;
		}
	}

	get label(): EShapeRectangleRounded | null {
		let result = this._label;
		if (result === undefined) {
			result = this.newLabel();
			this._label = result;
		}
		return result;
	}

	protected newLabel(): EShapeRectangleRounded | null {
		const label = this._options?.label ?? {};
		if (label.enable === true) {
			const result = new EShapeRectangleRounded();
			result.stroke.copy(this.toStrokeOptions(label.stroke));
			result.fill.copy(label.fill);
			result.text.copy(this.toTextOptions(label.text));
			result.size.set(label.width ?? 50, label.height ?? 30);
			return result;
		}
		return null;
	}

	get labelMargin(): number {
		let result = this._labelMargin;
		if (result == null) {
			result = this.newLabelMargin();
			this._labelMargin = result;
		}
		return result;
	}

	protected newLabelMargin(): number {
		const options = this._options;
		if (options != null) {
			const label = options.label;
			if (label != null) {
				const result = label.margin;
				if (result != null) {
					return result;
				}
			}
		}
		return 10;
	}

	get tick(): EShapeBar | null {
		let result = this._tick;
		if (result === undefined) {
			result = this.newTick();
			this._tick = result;
		}
		return result;
	}

	protected newTick(): EShapeBar | null {
		const tick = this._options?.tick ?? {};
		if (tick.enable === true) {
			const result = new EShapeBar();
			result.stroke.copy(this.toStrokeOptions(tick.stroke));
			result.text.copy(this.toTextOptions(tick.text));
			const size = tick.size ?? 5;
			result.size.set(size, size);
			return result;
		}
		return null;
	}

	get tickMargin(): number {
		let result = this._tickMargin;
		if (result == null) {
			result = this.newTickMargin();
			this._tickMargin = result;
		}
		return result;
	}

	protected newTickMargin(): number {
		const options = this._options;
		if (options != null) {
			const tick = options.tick;
			if (tick != null) {
				const result = tick.margin;
				if (result != null) {
					return result;
				}
			}
		}
		return 0;
	}

	protected toTickPosition(axis: DChartAxis<CHART>): EShapeBarPosition {
		switch (axis.position) {
			case DChartAxisPosition.LEFT:
			case DChartAxisPosition.RIGHT:
				return EShapeBarPosition.LEFT;
			default:
				return EShapeBarPosition.TOP;
		}
	}

	bind(container: DChartAxisContainer<CHART>, index: number, axis: DChartAxis<CHART>): void {
		const bar = this.bar;
		if (bar != null) {
			bar.points.position = this.toBarPosition(axis);
			bar.attach(container.container);
		}
		const label = this.label;
		if (label != null) {
			label.attach(container.container);
		}
		const tick = this.tick;
		if (tick != null) {
			tick.points.position = this.toTickPosition(axis);
			tick.attach(container.container);
		}
	}

	unbind(): void {
		const bar = this._bar;
		if (bar != null) {
			bar.detach();
		}
		const label = this._label;
		if (label != null) {
			label.detach();
		}
		const tick = this._tick;
		if (tick != null) {
			tick.detach();
		}
	}

	update(
		position: DChartAxisPosition,
		x: number,
		y: number,
		visible: boolean,
		width: number,
		height: number,
		offset: number
	): boolean {
		const bar = this._bar;
		if (bar != null) {
			bar.lock(EShapeLockPart.UPLOADED);
			switch (position) {
				case DChartAxisPosition.TOP:
					bar.transform.position.set(x, y);
					bar.size.set(0, height);
					bar.visible = visible;
					break;
				case DChartAxisPosition.BOTTOM:
					bar.transform.position.set(x, y);
					bar.size.set(0, height);
					bar.visible = visible;
					break;
				case DChartAxisPosition.LEFT:
					bar.transform.position.set(x, y);
					bar.size.set(width, 0);
					bar.visible = visible;
					break;
				case DChartAxisPosition.RIGHT:
					bar.transform.position.set(x, y);
					bar.size.set(width, 0);
					bar.visible = visible;
					break;
			}
			bar.unlock(EShapeLockPart.UPLOADED, true);
		}
		const label = this._label;
		if (label != null) {
			const m = this.labelMargin;
			const s = label.size;
			const ox = offset + s.x * 0.5 + m;
			const oy = offset + s.y * 0.5 + m;
			label.lock(EShapeLockPart.UPLOADED);
			switch (position) {
				case DChartAxisPosition.TOP:
					label.transform.position.set(x, -oy);
					label.visible = visible;
					break;
				case DChartAxisPosition.BOTTOM:
					label.transform.position.set(x, height + oy);
					label.visible = visible;
					break;
				case DChartAxisPosition.LEFT:
					label.transform.position.set(-ox, y);
					label.visible = visible;
					break;
				case DChartAxisPosition.RIGHT:
					label.transform.position.set(width + ox, y);
					label.visible = visible;
					break;
			}
			label.unlock(EShapeLockPart.UPLOADED, true);
		}
		const tick = this._tick;
		if (tick != null) {
			const m = this.tickMargin;
			const s = tick.size;
			const ox = offset + s.x * 0.5 + m;
			const oy = offset + s.y * 0.5 + m;
			tick.lock(EShapeLockPart.UPLOADED);
			switch (position) {
				case DChartAxisPosition.TOP:
					tick.transform.position.set(x, -oy);
					tick.visible = visible;
					break;
				case DChartAxisPosition.BOTTOM:
					tick.transform.position.set(x, height + oy);
					tick.visible = visible;
					break;
				case DChartAxisPosition.LEFT:
					tick.transform.position.set(-ox, y);
					tick.visible = visible;
					break;
				case DChartAxisPosition.RIGHT:
					tick.transform.position.set(width + ox, y);
					tick.visible = visible;
					break;
			}
			tick.unlock(EShapeLockPart.UPLOADED, true);
		}
		return true;
	}

	destroy(): void {
		const bar = this._bar;
		if (bar != null) {
			bar.destroy();
		}
		const label = this._label;
		if (label != null) {
			label.destroy();
		}
		const tick = this._tick;
		if (tick != null) {
			tick.destroy();
		}
	}
}
