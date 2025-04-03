import { DBase } from "./d-base";
import { DChartAxisBaseOptionParser } from "./d-chart-axis-base-options-parser";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartAxisTickMajorGridline } from "./d-chart-axis-tick-major-gridline";
import { EShape } from "./shape/e-shape";
import { EShapePointsStyle } from "./shape/e-shape-points-style";
import { EShapeBar } from "./shape/variant/e-shape-bar";
import { EShapeBarPosition } from "./shape/variant/e-shape-bar-position";

export class DChartAxisBaseTickMajorGridline<CHART extends DBase = DBase>
	implements DChartAxisTickMajorGridline<CHART>
{
	protected _parser: DChartAxisBaseOptionParser;
	protected _container?: DChartAxisContainer<CHART>;
	protected _index: number;
	protected _shapes?: EShape[];

	constructor(parser: DChartAxisBaseOptionParser) {
		this._parser = parser;
		this._index = 0;
	}

	get parser(): DChartAxisBaseOptionParser {
		return this._parser;
	}

	get index(): number {
		return this._index;
	}

	get shapes(): EShape[] {
		return (this._shapes ??= this.newShapes());
	}

	protected newShapes(): EShape[] {
		const result: EShape[] = [];
		const tick = this._parser.tick;
		const major = tick.major;
		const gridline = major.gridline;
		if (tick.enable && gridline.enable) {
			const capacity = major.capacity;
			const style = gridline.style ?? EShapePointsStyle.NONE;
			const position = this.newShapePosition();
			for (let i = 0; i < capacity; ++i) {
				const shape = new EShapeBar();
				shape.points.position = position;
				shape.points.style = style;
				shape.stroke.copy(gridline.stroke);
				result.push(shape);
			}
		}
		return result;
	}

	protected newShapePosition(): EShapeBarPosition {
		switch (this._parser.position) {
			case DChartAxisPosition.LEFT:
			case DChartAxisPosition.RIGHT:
				return EShapeBarPosition.LEFT;
			default:
				return EShapeBarPosition.TOP;
		}
	}

	bind(container: DChartAxisContainer<CHART>, index: number): void {
		this._container = container;
		this._index = index;
		const shapes = this.shapes;
		const containerContainer = container.container;
		for (let i = 0, imax = shapes.length; i < imax; ++i) {
			shapes[i].attach(containerContainer);
		}
	}

	unbind(): void {
		const shapes = this._shapes;
		if (shapes != null) {
			for (let i = 0, imax = shapes.length; i < imax; ++i) {
				shapes[i].detach();
			}
		}
		this._index = 0;
		this._container = undefined;
	}

	destroy(): void {
		const shapes = this._shapes;
		if (shapes != null) {
			for (let i = 0, imax = shapes.length; i < imax; ++i) {
				shapes[i].destroy();
			}
			shapes.length = 0;
			this._shapes = undefined;
		}
		this._index = 0;
		this._container = undefined;
	}
}
