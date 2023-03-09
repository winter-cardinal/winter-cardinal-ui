import { Matrix } from "pixi.js";
import { DBase } from "./d-base";
import { DChartAxisBaseOptionParser } from "./d-chart-axis-base-options-parser";
import { DChartAxisBaseTickMajor } from "./d-chart-axis-base-tick-major";
import { DChartAxisBaseTickMinor } from "./d-chart-axis-base-tick-minor";
import { DChartAxisContainer } from "./d-chart-axis-container";
import { DChartAxisPosition } from "./d-chart-axis-position";
import { DChartAxisTickContainer } from "./d-chart-axis-tick-container";
import { DChartAxisTickMajor } from "./d-chart-axis-tick-major";
import { DChartAxisTickMinor } from "./d-chart-axis-tick-minor";
import { DChartCoordinate } from "./d-chart-coordinate";
import { EShape } from "./shape/e-shape";

export class DChartAxisBaseTickContainer<CHART extends DBase>
	implements DChartAxisTickContainer<CHART>
{
	protected _parser: DChartAxisBaseOptionParser;
	protected _container?: DChartAxisContainer<CHART>;
	protected _index: number;
	protected _major: DChartAxisBaseTickMajor<CHART>;
	protected _minor: DChartAxisBaseTickMinor<CHART>;
	protected _majorTicks: number[];
	protected _minorTicks: number[];

	constructor(parser: DChartAxisBaseOptionParser) {
		this._parser = parser;
		this._index = 0;
		this._major = new DChartAxisBaseTickMajor(parser);
		this._minor = new DChartAxisBaseTickMinor(parser);
		this._majorTicks = [];
		this._minorTicks = [];
	}

	get major(): DChartAxisTickMajor<CHART> {
		return this._major;
	}

	get minor(): DChartAxisTickMinor<CHART> {
		return this._minor;
	}

	bind(container: DChartAxisContainer<CHART>, index: number): void {
		this._container = container;
		this._index = index;
		this._major.bind(container, index);
		this._minor.bind(container, index);
	}

	unbind(): void {
		this._minor.unbind();
		this._major.unbind();
		this._index = 0;
		this._container = undefined;
	}

	update(): boolean {
		const container = this._container;
		const majorShapes = this._major.shapes;
		const minorShapes = this._minor.shapes;
		if (container != null && majorShapes && minorShapes) {
			const plotArea = container.plotArea;
			const bounds = plotArea.getBoundsInContainer();
			const transform = plotArea.container.transform.localTransform;
			const gridlineShapes = this._major.gridline.shapes;

			const parser = this._parser;
			const offset = parser.padding * this._index;
			let coordinate: DChartCoordinate<CHART> | null;
			switch (parser.position) {
				case DChartAxisPosition.TOP:
					coordinate = plotArea.coordinate.x.get(parser.coordinateIndex);
					if (coordinate) {
						const domainFrom = coordinate.unmap(coordinate.transform.unmap(bounds.x));
						const domainTo = coordinate.unmap(
							coordinate.transform.unmap(bounds.x + bounds.width)
						);
						const plotAreaHeight = plotArea.height;
						return this.updateX(
							domainFrom,
							domainTo,
							coordinate,
							majorShapes,
							minorShapes,
							gridlineShapes,
							0 - offset,
							transform,
							plotAreaHeight
						);
					}
					break;
				case DChartAxisPosition.BOTTOM:
					coordinate = plotArea.coordinate.x.get(parser.coordinateIndex);
					if (coordinate) {
						const domainFrom = coordinate.unmap(coordinate.transform.unmap(bounds.x));
						const domainTo = coordinate.unmap(
							coordinate.transform.unmap(bounds.x + bounds.width)
						);
						const plotAreaHeight = plotArea.height;
						return this.updateX(
							domainFrom,
							domainTo,
							coordinate,
							majorShapes,
							minorShapes,
							gridlineShapes,
							plotAreaHeight + offset,
							transform,
							plotAreaHeight
						);
					}
					break;
				case DChartAxisPosition.LEFT:
					coordinate = plotArea.coordinate.y.get(parser.coordinateIndex);
					if (coordinate) {
						const domainFrom = coordinate.unmap(coordinate.transform.unmap(bounds.y));
						const domainTo = coordinate.unmap(
							coordinate.transform.unmap(bounds.y + bounds.height)
						);
						const plotAreaWidth = plotArea.width;
						return this.updateY(
							domainFrom,
							domainTo,
							coordinate,
							majorShapes,
							minorShapes,
							gridlineShapes,
							0 - offset,
							transform,
							plotAreaWidth
						);
					}
					break;
				case DChartAxisPosition.RIGHT:
					coordinate = plotArea.coordinate.y.get(parser.coordinateIndex);
					if (coordinate) {
						const domainFrom = coordinate.unmap(coordinate.transform.unmap(bounds.y));
						const domainTo = coordinate.unmap(
							coordinate.transform.unmap(bounds.y + bounds.height)
						);
						const plotAreaWidth = plotArea.width;
						return this.updateY(
							domainFrom,
							domainTo,
							coordinate,
							majorShapes,
							minorShapes,
							gridlineShapes,
							plotAreaWidth + offset,
							transform,
							plotAreaWidth
						);
					}
					break;
			}
		}
		return false;
	}

	protected updateX(
		domainMin: number,
		domainMax: number,
		coordinate: DChartCoordinate<CHART>,
		majorShapes: EShape[],
		minorShapes: EShape[],
		gridlineShapes: EShape[],
		shapePositionY: number,
		transform: Matrix,
		plotAreaHeight: number
	): boolean {
		const tick = this._parser.tick;
		const majorTick = tick.major;
		const majorCount = majorTick.count;
		const majorCapacity = majorTick.capacity;
		const majorStep = majorTick.step;
		const majorFormatter = majorTick.formatter;
		const minorTick = tick.minor;
		const minorCountPerMajor = minorTick.count;
		const minorCount = (majorCapacity + 1) * minorCountPerMajor;
		const minorStep = minorTick.step;
		const majorTicks = this._majorTicks;
		const minorTicks = this._minorTicks;
		coordinate.ticks(
			domainMin,
			domainMax,
			majorCount,
			majorCapacity,
			majorStep,
			minorCountPerMajor,
			minorCount,
			minorStep,
			majorTicks,
			minorTicks
		);

		const a = transform.a;
		const tx = transform.tx;
		for (let i = 0; i < majorCapacity; ++i) {
			const majorShape = majorShapes[i];
			const imajorTick = i * 3;
			const majorTickPosition = majorTicks[imajorTick + 0];
			if (!isNaN(majorTickPosition)) {
				const majorTickProjectedPosition = majorTicks[imajorTick + 1];
				const majotTickPositionX = a * majorTickProjectedPosition + tx;
				const majorTickStep = majorTicks[imajorTick + 2];

				majorShape.disallowUploadedUpdate();
				majorShape.visible = true;
				majorShape.transform.position.set(majotTickPositionX, shapePositionY);
				majorShape.text.value = majorFormatter.format(majorTickPosition, majorTickStep);
				majorShape.allowUploadedUpdate();

				if (i < gridlineShapes.length) {
					const gridlineShape = gridlineShapes[i];
					gridlineShape.disallowUploadedUpdate();
					gridlineShape.visible = true;
					gridlineShape.transform.position.set(majotTickPositionX, plotAreaHeight * 0.5);
					gridlineShape.size.set(0, plotAreaHeight);
					gridlineShape.allowUploadedUpdate();
				}
			} else {
				majorShape.visible = false;
				if (i < gridlineShapes.length) {
					gridlineShapes[i].visible = false;
				}
			}
		}

		for (let i = 0; i < minorCount; ++i) {
			const minorShape = minorShapes[i];
			const iminorTick = i * 3;
			const minorTickPosition = minorTicks[iminorTick + 0];
			const minorTickProjectedPosition = minorTicks[iminorTick + 1];
			if (!isNaN(minorTickPosition)) {
				minorShape.disallowUploadedUpdate();
				minorShape.visible = true;
				minorShape.transform.position.set(
					a * minorTickProjectedPosition + tx,
					shapePositionY
				);
				minorShape.allowUploadedUpdate();
			} else {
				minorShape.visible = false;
			}
		}
		return true;
	}

	protected updateY(
		domainMin: number,
		domainMax: number,
		coordinate: DChartCoordinate<CHART>,
		majorShapes: EShape[],
		minorShapes: EShape[],
		gridlineShapes: EShape[],
		shapePositionX: number,
		transform: Matrix,
		plotAreaWidth: number
	): boolean {
		const tick = this._parser.tick;
		const majorTick = tick.major;
		const majorCount = majorTick.count;
		const majorCapacity = majorTick.capacity;
		const majorStep = majorTick.step;
		const majorFormatter = majorTick.formatter;
		const minorTick = tick.minor;
		const minorCountPerMajor = minorTick.count;
		const minorCount = (majorCapacity + 1) * minorCountPerMajor;
		const minorStep = minorTick.step;
		const majorTicks = this._majorTicks;
		const minorTicks = this._minorTicks;
		coordinate.ticks(
			domainMin,
			domainMax,
			majorCount,
			majorCapacity,
			majorStep,
			minorCountPerMajor,
			minorCount,
			minorStep,
			majorTicks,
			minorTicks
		);

		const d = transform.d;
		const ty = transform.ty;
		for (let i = 0; i < majorCapacity; ++i) {
			const majorShape = majorShapes[i];
			const imajorTick = i * 3;
			const majorTickPosition = majorTicks[imajorTick + 0];
			if (!isNaN(majorTickPosition)) {
				const majorTickProjectedPosition = majorTicks[imajorTick + 1];
				const majotTickPositionY = d * majorTickProjectedPosition + ty;
				const majorTickStep = majorTicks[imajorTick + 2];

				majorShape.disallowUploadedUpdate();
				majorShape.visible = true;
				majorShape.transform.position.set(shapePositionX, majotTickPositionY);
				majorShape.text.value = majorFormatter.format(majorTickPosition, majorTickStep);
				majorShape.allowUploadedUpdate();

				if (i < gridlineShapes.length) {
					const gridlineShape = gridlineShapes[i];
					gridlineShape.disallowUploadedUpdate();
					gridlineShape.visible = true;
					gridlineShape.transform.position.set(plotAreaWidth * 0.5, majotTickPositionY);
					gridlineShape.size.set(plotAreaWidth, 0);
					gridlineShape.allowUploadedUpdate();
				}
			} else {
				majorShape.visible = false;
				if (i < gridlineShapes.length) {
					gridlineShapes[i].visible = false;
				}
			}
		}

		for (let i = 0; i < minorCount; ++i) {
			const minorShape = minorShapes[i];
			const iminorTick = i * 3;
			const minorTickPosition = minorTicks[iminorTick + 0];
			const minorTickProjectedPosition = minorTicks[iminorTick + 1];
			if (!isNaN(minorTickPosition)) {
				minorShape.disallowUploadedUpdate();
				minorShape.visible = true;
				minorShape.transform.position.set(
					shapePositionX,
					d * minorTickProjectedPosition + ty
				);
				minorShape.allowUploadedUpdate();
			} else {
				minorShape.visible = false;
			}
		}
		return true;
	}

	destroy(): void {
		this._major.destroy();
		this._minor.destroy();
		this._index = 0;
		this._container = undefined;
	}
}
