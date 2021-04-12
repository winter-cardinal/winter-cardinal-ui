/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartSeriesHitResult } from "./d-chart-series";
import { DChartSeriesBase, DChartSeriesBaseOptions } from "./d-chart-series-base";
import { DChartSeriesContainer } from "./d-chart-series-container";
import {
	DChartSeriesLinearParameters,
	DChartSeriesLinearParametersOptions
} from "./d-chart-series-linear-parameters";
import { DChartSeriesExpressionParametersImpl } from "./d-chart-series-linear-parameters-impl";
import {
	DChartSeriesStrokeComputed,
	DChartSeriesStrokeComputedOptions
} from "./d-chart-series-stroke-computed";
import { EShapeLine } from "./shape/variant/e-shape-line";

/**
 * {@link DChartSeriesLinear} options.
 */
export interface DChartSeriesLinearOptions
	extends DChartSeriesLinearParametersOptions,
		DChartSeriesBaseOptions {
	stroke?: DChartSeriesStrokeComputedOptions;
}

/**
 * A series represents a linear equation `a (x - x0) === b (y - y0)`.
 */
export class DChartSeriesLinear extends DChartSeriesBase {
	protected static WORK: Point = new Point();
	protected _line: EShapeLine | null;
	protected _options?: DChartSeriesLinearOptions;
	protected _plotAreaSizeXUpdated: number;
	protected _plotAreaSizeYUpdated: number;
	protected _parameters: DChartSeriesExpressionParametersImpl;
	protected _stroke?: DChartSeriesStrokeComputed;

	constructor(options?: DChartSeriesLinearOptions) {
		super(options);
		this._line = null;
		this._options = options;
		this._plotAreaSizeXUpdated = NaN;
		this._plotAreaSizeYUpdated = NaN;
		this._parameters = DChartSeriesExpressionParametersImpl.from(options);
	}

	bind(container: DChartSeriesContainer, index: number): void {
		let line = this._line;
		if (!line) {
			const stroke = container.newStroke(index, this._options?.stroke);
			this._stroke = stroke;
			line = new EShapeLine([], [], stroke.width, stroke.style);
			line.stroke.color = stroke.color;
			line.stroke.alpha = stroke.alpha;
			this._line = line;
		}
		line.attach(container.plotArea.container, index);
		this._parameters.toDirty();
		this._plotAreaSizeXUpdated = NaN;
		this._plotAreaSizeYUpdated = NaN;
		super.bind(container, index);
	}

	unbind(): void {
		const line = this._line;
		if (line) {
			line.detach();
		}
		super.unbind();
	}

	get shape(): EShapeLine | null {
		return this._line;
	}

	get parameters(): DChartSeriesLinearParameters {
		return this._parameters;
	}

	toDirty(): void {
		this._parameters.toDirty();
	}

	update(): void {
		const line = this._line;
		const container = this._container;
		if (line && container) {
			const plotArea = container.plotArea;
			const coordinate = this._coordinate;
			const coordinateX = coordinate.x;
			const coordinateY = coordinate.y;
			if (coordinateX && coordinateY) {
				const plotAreaWidth = plotArea.width;
				const plotAreaHeight = plotArea.height;

				const parameters = this._parameters;
				const isParametersChanged = parameters.isDirty();
				const isCoordinateChanged = coordinate.isDirty(coordinateX, coordinateY);
				const isCoordinateTransformChanged = coordinate.isTransformDirty(
					coordinateX,
					coordinateY
				);
				const isPlotAreaSizeChagned =
					plotAreaWidth !== this._plotAreaSizeXUpdated ||
					plotAreaHeight !== this._plotAreaSizeYUpdated;
				if (
					isParametersChanged ||
					isCoordinateChanged ||
					isCoordinateTransformChanged ||
					isPlotAreaSizeChagned
				) {
					parameters.toClean();
					this._plotAreaSizeXUpdated = plotAreaWidth;
					this._plotAreaSizeYUpdated = plotAreaHeight;
					this.updateLine(line, coordinateX, coordinateY, plotAreaWidth, plotAreaHeight);
				}
			}
		}
	}

	protected updateLine(
		line: EShapeLine,
		xcoordinate: DChartCoordinate,
		ycoordinate: DChartCoordinate,
		plotAreaSizeX: number,
		plotAreaSizeY: number
	): void {
		const values = line.points.values;
		const segments = line.points.segments;

		const parameters = this._parameters;
		const a = parameters.a;
		const b = parameters.b;
		const x0 = parameters.x0;
		const y0 = parameters.y0;
		const aabs = Math.abs(a);
		const babs = Math.abs(b);

		let p0x = NaN;
		let p0y = NaN;
		let p1x = NaN;
		let p1y = NaN;

		const threshold = 0.00001;
		if (babs <= aabs) {
			const xfrom0 = xcoordinate.unmap(xcoordinate.transform.unmap(0));
			const xto0 = xcoordinate.unmap(xcoordinate.transform.unmap(plotAreaSizeX));
			p0x = Math.min(xfrom0, xto0);
			p1x = Math.max(xfrom0, xto0);

			if (threshold < aabs) {
				const yfrom = ycoordinate.unmap(ycoordinate.transform.unmap(0));
				const yto = ycoordinate.unmap(ycoordinate.transform.unmap(plotAreaSizeY));
				const xfrom1 = (b * (yfrom - y0)) / a + x0;
				const xto1 = (b * (yto - y0)) / a + x0;
				const p2x = Math.min(xfrom1, xto1);
				const p3x = Math.max(xfrom1, xto1);

				if (p0x < p2x) {
					p0x = p2x;
				}

				if (p3x < p1x) {
					p1x = p3x;
				}
			}

			p0y = a * (p0x - x0) + b * y0;
			p1y = a * (p1x - x0) + b * y0;
		} else {
			const yfrom0 = ycoordinate.unmap(ycoordinate.transform.unmap(0));
			const yto0 = ycoordinate.unmap(ycoordinate.transform.unmap(plotAreaSizeY));
			p0y = Math.min(yfrom0, yto0);
			p1y = Math.max(yfrom0, yto0);

			if (threshold < babs) {
				const xfrom = xcoordinate.unmap(xcoordinate.transform.unmap(0));
				const xto = xcoordinate.unmap(xcoordinate.transform.unmap(plotAreaSizeX));
				const yfrom1 = (a * (xfrom - x0)) / b + y0;
				const yto1 = (a * (xto - x0)) / b + y0;
				const p2y = Math.min(yfrom1, yto1);
				const p3y = Math.max(yfrom1, yto1);

				if (p0y < p2y) {
					p0y = p2y;
				}

				if (p3y < p1y) {
					p1y = p3y;
				}
			}

			p0x = b * (p0y - y0) + a * x0;
			p1x = b * (p1y - y0) + a * x0;
		}

		p0x = xcoordinate.transform.map(xcoordinate.map(p0x));
		p0y = ycoordinate.transform.map(ycoordinate.map(p0y));
		p1x = xcoordinate.transform.map(xcoordinate.map(p1x));
		p1y = ycoordinate.transform.map(ycoordinate.map(p1y));

		const cx = (p0x + p1x) * 0.5;
		const cy = (p0y + p1y) * 0.5;
		const sx = Math.abs(p1x - p0x);
		const sy = Math.abs(p1y - p0y);

		p0x -= cx;
		p0y -= cy;
		p1x -= cx;
		p1y -= cy;

		if (values.length !== 4) {
			values.length = 0;
			values.push(p0x, p0y, p1x, p1y);
		} else {
			values[0] = p0x;
			values[1] = p0y;
			values[2] = p1x;
			values[3] = p1y;
		}
		if (0 < segments.length) {
			segments.length = 0;
		}
		line.disallowUploadedUpdate();
		line.points.set(values, segments);
		line.size.set(sx, sy);
		line.transform.position.set(cx, cy);
		line.allowUploadedUpdate();
		DApplications.update(line);
	}

	protected updateRegion(): void {
		// DO NOTHING
	}

	destroy(): void {
		const line = this._line;
		if (line) {
			this._line = null;
			line.detach();
			line.destroy();
		}
		super.destroy();
	}

	hitTest(global: IPoint): boolean {
		const line = this._line;
		if (line) {
			const work = DChartSeriesLinear.WORK;
			const local = line.toLocal(global, undefined, work);
			return line.contains(local) != null;
		}
		return false;
	}

	calcHitPoint(global: IPoint, result: DChartSeriesHitResult): boolean {
		const line = this._line;
		if (line) {
			const work = DChartSeriesLinear.WORK;
			const local = line.toLocal(global, undefined, work);
			result.shape = line;
			return line.calcHitPoint(
				local,
				this.toThreshold,
				null,
				this.calcHitPointHitTester,
				result
			);
		}
		return false;
	}

	protected toThreshold(this: unknown, strokeWidth: number, strokeScale: number): number {
		return +Infinity;
	}

	calcHitPointHitTester(
		this: unknown,
		x: number,
		y: number,
		p0x: number,
		p0y: number,
		p1x: number,
		p1y: number,
		index: number,
		threshold: number,
		result: DChartSeriesHitResult
	): boolean {
		if (p0x <= x && x < p1x) {
			const l = p1x - p0x;
			if (0.0001 < Math.abs(l)) {
				const t = (x - p0x) / l;
				const p2x = x;
				const p2y = p0y + t * (p1y - p0y);
				const distance = Math.abs(p2y - y);
				if (distance < threshold) {
					const transform = result.shape!.transform;
					const position = transform.position;
					const px = position.x;
					const py = position.y;
					const scale = transform.scale;
					const sx = scale.x;
					const sy = scale.y;
					result.x = result.p0x = result.p1x = px + sx * p2x;
					result.y = result.p0y = result.p1y = py + sy * p2y;
					result.t = t;
					result.index = index;
					result.distance = distance;
					return true;
				}
			}
		}
		return false;
	}
}
