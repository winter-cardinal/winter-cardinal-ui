import { DBase } from "./d-base";
import { DChartAxisBaseOptionParser } from "./d-chart-axis-base-options-parser";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisTickMinor } from "./d-chart-axis-tick-minor";
import { EShape } from "./shape/e-shape";
import { EShapePointsStyle } from "./shape/e-shape-points-style";
import { EShapeBar } from "./shape/variant/e-shape-bar";

export class DChartAxisBaseTickMinor<CHART extends DBase = DBase>
	implements DChartAxisTickMinor<CHART>
{
	protected _parser: DChartAxisBaseOptionParser;
	protected _container?: DChartAxisContainer<CHART>;
	protected _index: number;
	protected _shapes?: EShape[];

	constructor(parser: DChartAxisBaseOptionParser) {
		this._parser = parser;
		this._index = 0;
	}

	get shapes(): EShape[] {
		return (this._shapes ??= this.newShapes());
	}

	protected newShapes(): EShape[] {
		const result: EShape[] = [];
		const tick = this._parser.tick;
		if (tick.enable) {
			const minor = tick.minor;
			const count = minor.count;
			const size = minor.size;
			const position = minor.position;
			const style = minor.style ?? EShapePointsStyle.NONE;
			const major = tick.major;
			for (let i = 0, imax = (major.capacity + 1) * count; i < imax; ++i) {
				const shape = new EShapeBar();
				shape.points.position = position;
				shape.points.size = size;
				shape.points.style = style;
				shape.stroke.copy(minor.stroke);
				shape.text.copy(minor.text);
				shape.size.set(0, 0);
				result.push(shape);
			}
		}
		return result;
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
