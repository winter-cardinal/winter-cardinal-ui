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

export interface DChartAxisGuideSimpleOptions extends DChartAxisGuideSimpleShapeOptions {
	position?: number;
}

export class DChartAxisGuideSimple<CHART extends DBase = DBase> implements DChartAxisGuide<CHART> {
	protected _axis?: DChartAxis<CHART>;
	protected _options?: DChartAxisGuideSimpleOptions;
	protected _container?: DChartAxisContainer<CHART>;
	protected _index: number;
	protected _shape?: DChartAxisGuideSimpleShape;
	protected _position: number;
	protected _work: Point;
	protected _isShown: boolean;

	constructor(options?: DChartAxisGuideSimpleOptions) {
		this._options = options;
		this._index = 0;
		this._position = options?.position ?? 0;
		this._work = new Point();
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
			const transform = plotArea.container.transform.localTransform;
			const plotAreaWidth = plotArea.width;
			const plotAreaHeight = plotArea.height;
			const offset = axis.padding * index;
			switch (axis.position) {
				case DChartAxisPosition.TOP:
				case DChartAxisPosition.BOTTOM:
					const coordinateX = plotArea.coordinate.x.get(axis.coordinate);
					if (coordinateX) {
						const work = this._work;
						work.set(coordinateX.transform.map(coordinateX.map(this._position)), 0);
						transform.apply(work, work);
						const x = work.x;
						shape.update(
							axis.position,
							x,
							plotAreaHeight * 0.5,
							this._isShown && 0 <= x && x <= plotAreaWidth,
							plotAreaWidth,
							plotAreaHeight,
							offset
						);
					} else {
						shape.update(
							axis.position,
							0,
							plotAreaHeight * 0.5,
							false,
							plotAreaWidth,
							plotAreaHeight,
							offset
						);
					}
					break;
				case DChartAxisPosition.LEFT:
				case DChartAxisPosition.RIGHT:
					const coordinateY = plotArea.coordinate.y.get(axis.coordinate);
					if (coordinateY) {
						const work = this._work;
						work.set(0, coordinateY.transform.map(coordinateY.map(this._position)));
						transform.apply(work, work);
						const y = work.y;
						shape.update(
							axis.position,
							plotAreaWidth * 0.5,
							y,
							this._isShown && 0 <= y && y <= plotAreaHeight,
							plotAreaWidth,
							plotAreaHeight,
							offset
						);
					} else {
						shape.update(
							axis.position,
							plotAreaWidth * 0.5,
							0,
							false,
							plotAreaWidth,
							plotAreaHeight,
							offset
						);
					}
					break;
			}
			return true;
		}
		return false;
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
