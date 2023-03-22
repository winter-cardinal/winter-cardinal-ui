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
import { DChartCoordinateTickMajorStepFunction } from "./d-chart-coordinate-tick-major-step-function";
import { DChartCoordinateTickMinorStepFunction } from "./d-chart-coordinate-tick-minor-step-function";
import { DChartPlotArea } from "./d-chart-plot-area";
import { DChartRegion } from "./d-chart-region";
import { DChartRegionImpl } from "./d-chart-region-impl";
import { EShape } from "./shape/e-shape";

export interface DChartAxisBaseTickContainerOptions {}

export class DChartAxisBaseTickContainer<
	CHART extends DBase = DBase,
	OPTIONS extends DChartAxisBaseTickContainerOptions = DChartAxisBaseTickContainerOptions
> implements DChartAxisTickContainer<CHART>
{
	protected _parser: DChartAxisBaseOptionParser;
	protected _container?: DChartAxisContainer<CHART>;
	protected _index: number;
	protected _major: DChartAxisTickMajor<CHART>;
	protected _minor: DChartAxisTickMinor<CHART>;
	protected _majorTicks: number[];
	protected _minorTicks: number[];
	protected _work: DChartRegion;

	constructor(parser: DChartAxisBaseOptionParser, options?: OPTIONS) {
		this._parser = parser;
		this._index = 0;
		this._major = this.newMajor(parser, options);
		this._minor = this.newMinor(parser, options);
		this._majorTicks = [];
		this._minorTicks = [];
		this._work = new DChartRegionImpl(0, 0);
	}

	get major(): DChartAxisTickMajor<CHART> {
		return this._major;
	}

	protected newMajor(
		parser: DChartAxisBaseOptionParser,
		options?: OPTIONS
	): DChartAxisTickMajor<CHART> {
		return new DChartAxisBaseTickMajor(parser);
	}

	get minor(): DChartAxisTickMinor<CHART> {
		return this._minor;
	}

	protected newMinor(
		parser: DChartAxisBaseOptionParser,
		options?: OPTIONS
	): DChartAxisTickMinor<CHART> {
		return new DChartAxisBaseTickMinor(parser);
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
			const transform = plotArea.container.transform.localTransform;
			const gridlineShapes = this._major.gridline.shapes;

			const parser = this._parser;
			const offset = parser.padding * this._index;
			const work = this._work;
			let coordinate: DChartCoordinate<CHART> | null;
			switch (parser.position) {
				case DChartAxisPosition.TOP:
					coordinate = plotArea.coordinate.x.get(parser.coordinate);
					if (coordinate) {
						const domain = this.getDomain(plotArea, coordinate, work);
						const domainFrom = domain.from;
						const domainTo = domain.to;
						const domainVisible = this.getDomainVisible(plotArea, coordinate, work);
						const domainVisibleFrom = domainVisible.from;
						const domainVisibleTo = domainVisible.to;
						const plotAreaHeight = plotArea.height;
						return this.updateX(
							domainFrom,
							domainTo,
							domainVisibleFrom,
							domainVisibleTo,
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
					coordinate = plotArea.coordinate.x.get(parser.coordinate);
					if (coordinate) {
						const domain = this.getDomain(plotArea, coordinate, work);
						const domainFrom = domain.from;
						const domainTo = domain.to;
						const domainVisible = this.getDomainVisible(plotArea, coordinate, work);
						const domainVisibleFrom = domainVisible.from;
						const domainVisibleTo = domainVisible.to;
						const plotAreaHeight = plotArea.height;
						return this.updateX(
							domainFrom,
							domainTo,
							domainVisibleFrom,
							domainVisibleTo,
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
					coordinate = plotArea.coordinate.y.get(parser.coordinate);
					if (coordinate) {
						const range = this.getRange(plotArea, coordinate, work);
						const rangeFrom = range.from;
						const rangeTo = range.to;
						const rangeVisible = this.getRangeVisible(plotArea, coordinate, work);
						const rangeVisibleFrom = rangeVisible.from;
						const rangeVisibleTo = rangeVisible.to;
						const plotAreaWidth = plotArea.width;
						return this.updateY(
							rangeFrom,
							rangeTo,
							rangeVisibleFrom,
							rangeVisibleTo,
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
					coordinate = plotArea.coordinate.y.get(parser.coordinate);
					if (coordinate) {
						const range = this.getRange(plotArea, coordinate, work);
						const rangeFrom = range.from;
						const rangeTo = range.to;
						const rangeVisible = this.getRangeVisible(plotArea, coordinate, work);
						const rangeVisibleFrom = rangeVisible.from;
						const rangeVisibleTo = rangeVisible.to;
						const plotAreaWidth = plotArea.width;
						return this.updateY(
							rangeFrom,
							rangeTo,
							rangeVisibleFrom,
							rangeVisibleTo,
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

	protected getDomain(
		plotArea: DChartPlotArea<CHART>,
		coordinate: DChartCoordinate<CHART>,
		result: DChartRegion
	): DChartRegion {
		const bounds = plotArea.getBoundsInContainer();
		const transform = coordinate.transform;
		return result.set(
			coordinate.unmap(transform.unmap(bounds.x)),
			coordinate.unmap(transform.unmap(bounds.x + bounds.width))
		);
	}

	protected getDomainVisible(
		plotArea: DChartPlotArea<CHART>,
		coordinate: DChartCoordinate<CHART>,
		result: DChartRegion
	): DChartRegion {
		return result;
	}

	protected getRange(
		plotArea: DChartPlotArea<CHART>,
		coordinate: DChartCoordinate<CHART>,
		result: DChartRegion
	): DChartRegion {
		const bounds = plotArea.getBoundsInContainer();
		const transform = coordinate.transform;
		return result.set(
			coordinate.unmap(transform.unmap(bounds.y)),
			coordinate.unmap(transform.unmap(bounds.y + bounds.height))
		);
	}

	protected getRangeVisible(
		plotArea: DChartPlotArea<CHART>,
		coordinate: DChartCoordinate<CHART>,
		result: DChartRegion
	): DChartRegion {
		return result;
	}

	protected updateX(
		domainFrom: number,
		domainTo: number,
		domainVisibleFrom: number,
		domainVisibleTo: number,
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
		const minorFormatter = minorTick.formatter;
		const majorTicks = this._majorTicks;
		const minorTicks = this._minorTicks;
		this.newTicks(
			coordinate,
			domainFrom,
			domainTo,
			domainVisibleFrom,
			domainVisibleTo,
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
				this.showMajor(
					majorShape,
					majotTickPositionX,
					shapePositionY,
					majorFormatter?.format(majorTickPosition, majorTickStep)
				);
				if (i < gridlineShapes.length) {
					this.showMajorGridline(
						gridlineShapes[i],
						majorTickPosition,
						majotTickPositionX,
						plotAreaHeight * 0.5,
						0,
						plotAreaHeight
					);
				}
			} else {
				this.hideMajor(majorShape);
				if (i < gridlineShapes.length) {
					this.hideMajorGridline(gridlineShapes[i]);
				}
			}
		}

		for (let i = 0; i < minorCount; ++i) {
			const minorShape = minorShapes[i];
			const iminorTick = i * 3;
			const minorTickPosition = minorTicks[iminorTick + 0];
			if (!isNaN(minorTickPosition)) {
				const minorTickProjectedPosition = minorTicks[iminorTick + 1];
				const minorTickPositionX = a * minorTickProjectedPosition + tx;
				const minorTickStep = minorTicks[iminorTick + 2];
				this.showMinor(
					minorShape,
					minorTickPositionX,
					shapePositionY,
					minorFormatter?.format(minorTickPosition, minorTickStep)
				);
			} else {
				this.hideMinor(minorShape);
			}
		}
		return true;
	}

	protected updateY(
		rangeFrom: number,
		rangeTo: number,
		rangeVisibleFrom: number,
		rangeVisibleTo: number,
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
		const minorFormatter = minorTick.formatter;
		const majorTicks = this._majorTicks;
		const minorTicks = this._minorTicks;
		this.newTicks(
			coordinate,
			rangeFrom,
			rangeTo,
			rangeVisibleFrom,
			rangeVisibleTo,
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
				this.showMajor(
					majorShape,
					shapePositionX,
					majotTickPositionY,
					majorFormatter?.format(majorTickPosition, majorTickStep)
				);
				if (i < gridlineShapes.length) {
					this.showMajorGridline(
						gridlineShapes[i],
						majorTickPosition,
						plotAreaWidth * 0.5,
						majotTickPositionY,
						plotAreaWidth,
						0
					);
				}
			} else {
				this.hideMajor(majorShape);
				if (i < gridlineShapes.length) {
					this.hideMajorGridline(gridlineShapes[i]);
				}
			}
		}

		for (let i = 0; i < minorCount; ++i) {
			const minorShape = minorShapes[i];
			const iminorTick = i * 3;
			const minorTickPosition = minorTicks[iminorTick + 0];
			if (!isNaN(minorTickPosition)) {
				const minorTickProjectedPosition = minorTicks[iminorTick + 1];
				const minorTickPositionY = d * minorTickProjectedPosition + ty;
				const minorTickStep = minorTicks[iminorTick + 2];
				this.showMinor(
					minorShape,
					shapePositionX,
					minorTickPositionY,
					minorFormatter?.format(minorTickPosition, minorTickStep)
				);
			} else {
				this.hideMinor(minorShape);
			}
		}
		return true;
	}

	protected showMajor(shape: EShape, x: number, y: number, text?: string): void {
		shape.disallowUploadedUpdate();
		shape.visible = true;
		shape.transform.position.set(x, y);
		shape.text.value = text != null ? text : "";
		shape.allowUploadedUpdate();
	}

	protected showMajorGridline(
		shape: EShape,
		value: number,
		x: number,
		y: number,
		sx: number,
		sy: number
	): void {
		shape.disallowUploadedUpdate();
		shape.visible = true;
		shape.transform.position.set(x, y);
		shape.size.set(sx, sy);
		shape.allowUploadedUpdate();
	}

	protected hideMajor(shape: EShape): void {
		shape.visible = false;
	}

	protected hideMajorGridline(shape: EShape): void {
		shape.visible = false;
	}

	protected showMinor(shape: EShape, x: number, y: number, text?: string): void {
		shape.disallowUploadedUpdate();
		shape.visible = true;
		shape.transform.position.set(x, y);
		shape.text.value = text != null ? text : "";
		shape.allowUploadedUpdate();
	}

	protected hideMinor(shape: EShape): void {
		shape.visible = false;
	}

	protected newTicks(
		coordinate: DChartCoordinate<CHART>,
		domainFrom: number,
		domainTo: number,
		domainVisibleFrom: number,
		domainVisibleTo: number,
		majorCount: number,
		majorCapacity: number,
		majorStep: number | DChartCoordinateTickMajorStepFunction | undefined,
		minorCountPerMajor: number,
		minorCount: number,
		minorStep: number | DChartCoordinateTickMinorStepFunction | undefined,
		majorResult: number[],
		minorResult: number[]
	): void {
		coordinate.ticks(
			domainFrom,
			domainTo,
			domainVisibleFrom,
			domainVisibleTo,
			majorCount,
			majorCapacity,
			majorStep,
			minorCountPerMajor,
			minorCount,
			minorStep,
			majorResult,
			minorResult
		);
	}

	destroy(): void {
		this._major.destroy();
		this._minor.destroy();
		this._index = 0;
		this._container = undefined;
	}
}
