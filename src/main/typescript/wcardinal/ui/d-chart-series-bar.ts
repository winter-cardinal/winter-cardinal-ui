/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartRegion } from "./d-chart-region";
import { DChartSeriesContainer } from "./d-chart-series-container";
import {
	DChartSeriesLineOfAny,
	DChartSeriesLineOfAnyOptions,
	DChartSeriesLineOfAnyRegion
} from "./d-chart-series-line-of-any";
import { DChartSeriesPaddingComputed } from "./d-chart-series-padding-computed";
import { DChartSeriesPointComputedOptions } from "./d-chart-series-point-computed";
import { EShapeLineOfAny } from "./shape/variant/e-shape-line-of-any";
import { EShapeLineOfRectangles } from "./shape/variant/e-shape-line-of-rectangles";
import { isArray } from "./util/is-array";

export interface DChartSeriesBarSizeOptions extends DChartSeriesPointComputedOptions {
	auto?: boolean;
}

export interface DChartSeriesBarOptions extends DChartSeriesLineOfAnyOptions {
	size?: DChartSeriesBarSizeOptions;
}

/**
 * A series represents bars.
 * Data points must be sorted in ascending order on the X axis.
 */
export class DChartSeriesBar extends DChartSeriesLineOfAny {
	protected _barCount: number;
	protected _barIndex: number;
	protected _xcoordinateId: number;
	protected _xcoordinateTransformId: number;
	protected _padding?: DChartSeriesPaddingComputed;
	protected _isSizeAutomatic: boolean;

	constructor(options?: DChartSeriesBarOptions) {
		super(options);
		this._barCount = -1;
		this._barIndex = -1;
		this._xcoordinateId = -1;
		this._xcoordinateTransformId = -1;
		this._isSizeAutomatic = (options && options.size && options.size.auto) !== false;
	}

	bind(container: DChartSeriesContainer, index: number): void {
		this._barCount = -1;
		this._barIndex = -1;
		this._xcoordinateId = -1;
		this._xcoordinateTransformId = -1;
		super.bind(container, index);
	}

	protected initLine(
		line: EShapeLineOfAny,
		options: DChartSeriesLineOfAnyOptions | undefined,
		container: DChartSeriesContainer,
		index: number
	): void {
		super.initLine(line, options, container, index);
		this._padding = container.newPadding(index, options && options.padding);
	}

	protected newLineOfAny(): EShapeLineOfAny {
		return new EShapeLineOfRectangles();
	}

	protected getSizeDefault(): number {
		return 1;
	}

	protected adjustLineRegion(
		xmin: number,
		xmax: number,
		ymin: number,
		ymax: number,
		result: DChartSeriesLineOfAnyRegion
	): DChartSeriesLineOfAnyRegion {
		return super.adjustLineRegion(xmin, xmax, Math.min(0, ymin), Math.max(0, ymax), result);
	}

	protected updateBarCountAndIndex(): boolean {
		if (this._barIndex < 0 || this._barCount < 0) {
			let barIndex = 0;
			let barCount = 0;
			const container = this._container;
			if (container) {
				for (let i = 0, imax = container.size(); i < imax; ++i) {
					const series = container.get(i);
					if (series === this) {
						barIndex = barCount;
					}
					if (series instanceof DChartSeriesBar) {
						barCount += 1;
					}
				}
			}
			barCount = Math.max(1, barCount);
			this._barCount = barCount;
			this._barIndex = barIndex;
			return true;
		}
		return false;
	}

	protected applyLine(
		line: EShapeLineOfAny,
		xcoordinate: DChartCoordinate,
		ycoordinate: DChartCoordinate,
		sx: number,
		sy: number,
		cx: number,
		cy: number,
		values: number[]
	): void {
		const linePoints = line.points;
		const linePointsOffset = linePoints.offset;
		const linePointsSize = linePoints.size;

		// Offset
		const size = this._size;
		const offset = this._offset;
		const padding = this._padding;
		if (size && offset && padding) {
			const xcoordinateId = xcoordinate.id;
			const xcoordinateTransformId = xcoordinate.transform.id;
			if (
				this.updateBarCountAndIndex() ||
				this._xcoordinateId !== xcoordinateId ||
				this._xcoordinateTransformId !== xcoordinateTransformId
			) {
				const barCount = this._barCount;
				const barIndex = this._barIndex;
				this._xcoordinateId = xcoordinateId;
				this._xcoordinateTransformId = xcoordinateTransformId;

				const x0 = xcoordinate.transform.map(xcoordinate.map(0));
				const x1 = xcoordinate.transform.map(xcoordinate.map(size.x));
				const totalBandWidth = Math.abs(x0 - x1) * (1 - padding.outer);
				if (barCount <= 1) {
					linePointsOffset.x = offset.x;
					linePointsSize.x = totalBandWidth;
				} else {
					const totalBarWidth = totalBandWidth * (1 - padding.inner);
					const totalPaddingInner = totalBandWidth - totalBarWidth;
					const barWidth = totalBarWidth / barCount;
					const barPadding = totalPaddingInner / (barCount - 1);
					const barX = barWidth * (barIndex + 0.5) + barIndex * barPadding;
					linePointsOffset.x = offset.x + barX - totalBandWidth * 0.5;
					linePointsSize.x = barWidth;
				}
			}
		}

		// Sizes & Offsets
		let sizes = linePointsSize.y;
		if (!isArray(sizes)) {
			sizes = [];
		}
		const sizesLength = sizes.length;

		let offsets = linePointsOffset.y;
		if (!isArray(offsets)) {
			offsets = [];
		}
		const offsetsLength = offsets.length;

		let isize = 0;
		const y0 = ycoordinate.transform.map(ycoordinate.map(0)) - cy;
		for (let i = 0, imax = values.length; i < imax; i += 2, isize += 1) {
			const distance = values[i + 1] - y0;

			const s = Math.abs(distance);
			if (isize < sizesLength) {
				sizes[isize] = s;
			} else {
				sizes.push(s);
			}

			const o = -0.5 * distance;
			if (isize < offsetsLength) {
				offsets[isize] = o;
			} else {
				offsets.push(o);
			}
		}
		if (sizes.length !== isize) {
			sizes.length = isize;
		}
		if (offsets.length !== isize) {
			offsets.length = isize;
		}

		linePointsOffset.y = offsets;
		linePointsSize.y = sizes;

		// Others
		super.applyLine(line, xcoordinate, ycoordinate, sx, sy, cx, cy, values);
	}

	protected calcSizeX(def: number): number {
		const points = this._points;
		if (2 < points.length) {
			const pointsLength = points.length;
			let x0: number | null = points[pointsLength - 2];
			for (let i = pointsLength - 4; 0 <= i; i -= 2) {
				const x1 = points[i];
				if (x0 != null && x1 != null) {
					return Math.abs(x0 - x1);
				} else {
					x0 = x1;
				}
			}
		}
		return def;
	}

	protected calcRegion(
		points: Array<number | null>,
		domain: DChartRegion,
		range: DChartRegion
	): void {
		super.calcRegion(points, domain, range);

		const size = this._size;
		if (size) {
			let sx = size.x;
			if (this._isSizeAutomatic) {
				sx = this.calcSizeX(sx);
				size.x = sx;
			}
			const sxh = sx * 0.5;
			domain.set(domain.from - sxh, domain.to + sxh);
		}
		range.add(0, 0);
	}
}
