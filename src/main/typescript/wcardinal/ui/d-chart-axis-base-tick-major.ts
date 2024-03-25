import { DBase } from "./d-base";
import { DChartAxisBaseOptionParser } from "./d-chart-axis-base-options-parser";
import { DChartAxisBaseTickMajorGridline } from "./d-chart-axis-base-tick-major-gridline";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisTickMajor } from "./d-chart-axis-tick-major";
import { EShape } from "./shape/e-shape";
import { EShapePointsStyle } from "./shape/e-shape-points-style";
import { EShapeBar } from "./shape/variant/e-shape-bar";

export class DChartAxisBaseTickMajor<CHART extends DBase = DBase>
	implements DChartAxisTickMajor<CHART>
{
	protected _parser: DChartAxisBaseOptionParser;
	protected _container?: DChartAxisContainer<CHART>;
	protected _index: number;
	protected _shapes?: EShape[];
	protected _gridline: DChartAxisBaseTickMajorGridline<CHART>;

	constructor(parser: DChartAxisBaseOptionParser) {
		this._parser = parser;
		this._index = 0;
		this._gridline = new DChartAxisBaseTickMajorGridline(parser);
	}

	get shapes(): EShape[] {
		return (this._shapes ??= this.newShapes());
	}

	protected newShapes(): EShape[] {
		const result: EShape[] = [];
		const tick = this._parser.tick;
		if (tick.enable) {
			const major = tick.major;
			const capacity = major.capacity;
			const size = major.size;
			const position = major.position;
			const style = major.style ?? EShapePointsStyle.NONE;
			for (let i = 0; i < capacity; ++i) {
				const shape = new EShapeBar();
				shape.points.position = position;
				shape.points.size = size;
				shape.points.style = style;
				shape.stroke.copy(major.stroke);
				shape.text.copy(major.text);
				shape.size.set(0, 0);
				result.push(shape);
			}
		}
		return result;
	}

	get gridline(): DChartAxisBaseTickMajorGridline<CHART> {
		return this._gridline;
	}

	bind(container: DChartAxisContainer<CHART>, index: number): void {
		this._container = container;
		this._index = index;

		// Gridline
		this._gridline.bind(container, index);

		// Ticks
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
		this._gridline.unbind();
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
		this._gridline.destroy();
		this._index = 0;
		this._container = undefined;
	}
}
