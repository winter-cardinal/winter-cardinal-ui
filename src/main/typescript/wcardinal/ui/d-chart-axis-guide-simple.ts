import { Point } from "pixi.js";
import { DBase } from "./d-base";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisGuide } from "./d-chart-axis-guide";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartAxis } from "./d-chart-axis";
import {
	DChartAxisGuideSimpleShape,
	DChartAxisGuideSimpleShapeOptions
} from "./d-chart-axis-guide-simple-shape";
import { DChartAxisGuideSimpleShapeImpl } from "./d-chart-axis-guide-simple-shape-impl";
import { DChartPlotArea, DChartPlotAreaLike } from "./d-chart-plot-area";
import { DChartRegionImpl } from "./d-chart-region-impl";
import { DChartRegion } from "./d-chart-region";

export interface DChartAxisGuideSimpleOptions extends DChartAxisGuideSimpleShapeOptions {
	position?: number;
	fixed?: boolean;
}

export class DChartAxisGuideSimple<CHART extends DBase = DBase> implements DChartAxisGuide<CHART> {
	protected static WORK_POINT?: Point;
	protected static WORK_REGION?: DChartRegion;

	protected _axis?: DChartAxis<CHART>;
	protected _options?: DChartAxisGuideSimpleOptions;
	protected _container?: DChartAxisContainer<CHART>;
	protected _index: number;
	protected _shape?: DChartAxisGuideSimpleShape;
	protected _position: number;
	protected _fixed: boolean;
	protected _isShown: boolean;

	constructor(options?: DChartAxisGuideSimpleOptions) {
		this._options = options;
		this._index = 0;
		if (options != null) {
			this._position = options.position ?? 0;
			this._fixed = options.fixed ?? false;
		} else {
			this._position = 0;
			this._fixed = false;
		}
		this._isShown = true;
	}

	get shape(): DChartAxisGuideSimpleShape {
		let result = this._shape;
		if (result == null) {
			result = this.newShape();
			this._shape = result;
		}
		return result;
	}

	protected newShape(): DChartAxisGuideSimpleShape {
		return new DChartAxisGuideSimpleShapeImpl(this._options);
	}

	get position(): number {
		return this._position;
	}

	set position(position: number) {
		this._position = position;
	}

	show(): this {
		this._isShown = true;
		return this;
	}

	isShown(): boolean {
		return this._isShown;
	}

	hide(): this {
		this._isShown = false;
		return this;
	}

	isHidden(): boolean {
		return !this._isShown;
	}

	bind(container: DChartAxisContainer<CHART>, index: number, axis: DChartAxis<CHART>): void {
		this._container = container;
		this._index = index;
		this._axis = axis;
		this.shape.bind(container, index, axis);
	}

	unbind(): void {
		const shape = this._shape;
		if (shape != null) {
			shape.unbind();
		}
		this._axis = undefined;
		this._index = 0;
		this._container = undefined;
	}

	update(): boolean {
		const container = this._container;
		const index = this._index;
		const shape = this._shape;
		const axis = this._axis;
		if (shape != null && container != null && axis != null) {
			const plotArea = container.plotArea;
			const plotAreaBounds = plotArea.getAxisBounds(axis.position);
			const plotAreaX = plotAreaBounds.x;
			const plotAreaY = plotAreaBounds.y;
			const plotAreaWidth = plotAreaBounds.width;
			const plotAreaHeight = plotAreaBounds.height;
			const offset = axis.padding * index;
			switch (axis.position) {
				case DChartAxisPosition.TOP:
				case DChartAxisPosition.BOTTOM:
					const x = this.getPositionX(axis, plotArea, plotAreaX);
					shape.update(
						axis.position,
						x,
						plotAreaY + plotAreaHeight * 0.5,
						this._isShown && plotAreaX <= x && x <= plotAreaX + plotAreaWidth,
						plotAreaWidth,
						plotAreaHeight,
						offset
					);
					break;
				case DChartAxisPosition.LEFT:
				case DChartAxisPosition.RIGHT:
					const y = this.getPositionY(axis, plotArea, plotAreaY);
					shape.update(
						axis.position,
						plotAreaX + plotAreaWidth * 0.5,
						y,
						this._isShown && plotAreaY <= y && y <= plotAreaY + plotAreaHeight,
						plotAreaWidth,
						plotAreaHeight,
						offset
					);
					break;
			}
			return true;
		}
		return false;
	}

	protected getPositionX(
		axis: DChartAxis<CHART>,
		plotArea: DChartPlotArea<CHART> | DChartPlotAreaLike<CHART>,
		plotAreaX: number
	): number {
		if (this._fixed) {
			const work = (DChartAxisGuideSimple.WORK_REGION ??= new DChartRegionImpl(0, 0));
			plotArea.getPixelDomain(work);
			return work.from + this._position * (work.to - work.from);
		} else {
			const coordinateX = plotArea.coordinate.x.get(axis.coordinate);
			if (coordinateX) {
				const work = (DChartAxisGuideSimple.WORK_POINT ??= new Point());
				work.set(coordinateX.transform.map(coordinateX.map(this._position)), 0);
				plotArea.container.transform.localTransform.apply(work, work);
				return work.x;
			} else {
				return plotAreaX - 100;
			}
		}
	}

	protected getPositionY(
		axis: DChartAxis<CHART>,
		plotArea: DChartPlotArea<CHART> | DChartPlotAreaLike<CHART>,
		plotAreaY: number
	): number {
		if (this._fixed) {
			const work = (DChartAxisGuideSimple.WORK_REGION ??= new DChartRegionImpl(0, 0));
			plotArea.getPixelRange(work);
			return work.to + (1 - this._position) * (work.from - work.to);
		} else {
			const coordinateY = plotArea.coordinate.y.get(axis.coordinate);
			if (coordinateY) {
				const work = (DChartAxisGuideSimple.WORK_POINT ??= new Point());
				work.set(0, coordinateY.transform.map(coordinateY.map(this._position)));
				plotArea.container.transform.localTransform.apply(work, work);
				return work.y;
			} else {
				return plotAreaY - 100;
			}
		}
	}

	destroy(): void {
		const shape = this._shape;
		if (shape != null) {
			shape.destroy();
		}
		this._index = 0;
		this._container = undefined;
	}
}
