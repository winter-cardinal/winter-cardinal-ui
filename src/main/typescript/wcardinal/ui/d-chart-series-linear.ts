/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
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
import { EShapeLockPart } from "./shape/variant/e-shape-lock-part";

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
export class DChartSeriesLinear<CHART extends DBase = DBase> extends DChartSeriesBase<CHART> {
	protected static WORK: Point = new Point();
	protected _line: EShapeLine | null;
	protected _options?: DChartSeriesLinearOptions;
	protected _parameters: DChartSeriesExpressionParametersImpl;
	protected _stroke?: DChartSeriesStrokeComputed;

	constructor(options?: DChartSeriesLinearOptions) {
		super(options);
		this._line = null;
		this._options = options;
		this._parameters = DChartSeriesExpressionParametersImpl.from(options);
	}

	bind(container: DChartSeriesContainer<CHART>, index: number): this {
		let line = this._line;
		if (!line) {
			const stroke = container.newStroke(index, this._options?.stroke);
			this._stroke = stroke;
			line = new EShapeLine();
			line.stroke.copy(stroke);
			line.visible = this._isShown;
			this._line = line;
		}
		line.attach(container.plotArea.container, index);
		super.bind(container, index);
		return this;
	}

	unbind(): this {
		const line = this._line;
		if (line) {
			line.detach();
		}
		super.unbind();
		return this;
	}

	get shape(): EShapeLine | null {
		return this._line;
	}

	get parameters(): DChartSeriesLinearParameters {
		return this._parameters;
	}

	toDirty(): this {
		this._parameters.toDirty();
		return this;
	}

	update(): this {
		this.doUpdate(true);
		return this;
	}

	onRender(): this {
		this.doUpdate(false);
		return this;
	}

	protected doUpdate(render: boolean): boolean {
		const line = this._line;
		const container = this._container;
		if (line && container) {
			const coordinate = this._coordinate;
			const coordinateX = coordinate.x;
			const coordinateY = coordinate.y;
			if (coordinateX && coordinateY) {
				this.doUpdateLine(line, container, coordinateX, coordinateY);
				if (render) {
					DApplications.update(line);
				}
				return true;
			}
		}
		return false;
	}

	protected doUpdateLine(
		line: EShapeLine,
		container: DChartSeriesContainer<CHART>,
		xcoordinate: DChartCoordinate<CHART>,
		ycoordinate: DChartCoordinate<CHART>
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
		const bounds = container.plotArea.getContainerBounds();
		if (babs <= aabs) {
			const xfrom = xcoordinate.unmap(xcoordinate.transform.unmap(bounds.x));
			const xto = xcoordinate.unmap(xcoordinate.transform.unmap(bounds.x + bounds.width));
			p0x = Math.min(xfrom, xto);
			p1x = Math.max(xfrom, xto);

			const yfrom = ycoordinate.unmap(ycoordinate.transform.unmap(bounds.y));
			const yto = ycoordinate.unmap(ycoordinate.transform.unmap(bounds.y + bounds.height));
			p0y = Math.min(yfrom, yto);
			p1y = Math.max(yfrom, yto);

			if (threshold < babs) {
				const f = b / a;
				const xfrom1 = f * (yfrom - y0) + x0;
				const xto1 = f * (yto - y0) + x0;
				const p2x = Math.min(xfrom1, xto1);
				const p3x = Math.max(xfrom1, xto1);
				p0x = Math.max(p0x, p2x);
				p1x = Math.min(p1x, p3x);
				const g = 1 / f;
				p0y = g * (p0x - x0) + b * y0;
				p1y = g * (p1x - x0) + b * y0;
			} else {
				p0x = x0;
				p1x = x0;
			}
		} else {
			const yfrom = ycoordinate.unmap(ycoordinate.transform.unmap(bounds.y));
			const yto = ycoordinate.unmap(ycoordinate.transform.unmap(bounds.y + bounds.height));
			p0y = Math.min(yfrom, yto);
			p1y = Math.max(yfrom, yto);

			const xfrom = xcoordinate.unmap(xcoordinate.transform.unmap(bounds.x));
			const xto = xcoordinate.unmap(xcoordinate.transform.unmap(bounds.x + bounds.width));
			p0x = Math.min(xfrom, xto);
			p1x = Math.max(xfrom, xto);

			if (threshold < aabs) {
				const f = a / b;
				const yfrom1 = f * (xfrom - x0) + y0;
				const yto1 = f * (xto - x0) + y0;
				const p2y = Math.min(yfrom1, yto1);
				const p3y = Math.max(yfrom1, yto1);
				p0y = Math.max(p0y, p2y);
				p1y = Math.min(p1y, p3y);
				const g = 1 / f;
				p0x = g * (p0y - y0) + a * x0;
				p1x = g * (p1y - y0) + a * x0;
			} else {
				p0y = y0;
				p1y = y0;
			}
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
		line.lock(EShapeLockPart.UPLOADED);
		line.points.set(values, segments);
		line.points.toFitted(sx, sy);
		line.size.set(sx, sy);
		line.transform.position.set(cx, cy);
		line.unlock(EShapeLockPart.UPLOADED, true);
	}

	protected updateRegion(): void {
		// DO NOTHING
	}

	destroy(): this {
		const line = this._line;
		if (line) {
			this._line = null;
			line.detach();
			line.destroy();
		}
		super.destroy();
		return this;
	}

	hitTest(x: number, y: number): boolean {
		const line = this._line;
		if (line) {
			const local = DChartSeriesLinear.WORK;
			local.set(x, y);
			line.toLocal(local, undefined, local);
			return line.contains(local.x, local.y) != null;
		}
		return false;
	}

	calcHitPoint(x: number, y: number, result: DChartSeriesHitResult): boolean {
		const line = this._line;
		if (line) {
			const local = DChartSeriesLinear.WORK;
			local.set(x, y);
			line.toLocal(local, undefined, local);
			result.shape = line;
			return line.calcHitPoint(
				local.x,
				local.y,
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
