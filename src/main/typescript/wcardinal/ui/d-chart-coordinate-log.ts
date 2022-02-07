/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import {
	DChartCoordinate,
	DChartCoordinateOptions,
	DThemeChartCoordinate
} from "./d-chart-coordinate";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import { DChartCoordinateDirection } from "./d-chart-coordinate-direction";
import { DChartCoordinateLogTick } from "./d-chart-coordinate-log-tick";
import { DChartCoordinateTick } from "./d-chart-coordinate-tick";
import { DChartCoordinateTickMajorStepFunction } from "./d-chart-coordinate-tick-major-step-function";
import { DChartCoordinateTickMinorStepFunction } from "./d-chart-coordinate-tick-minor-step-function";
import { DChartCoordinateTransform } from "./d-chart-coordinate-transform";
import { DChartCoordinateTransformImpl } from "./d-chart-coordinate-transform-impl";
import {
	DChartCoordinateTransformMark,
	DChartCoordinateTransformMarkImpl
} from "./d-chart-coordinate-transform-mark";
import { DChartPlotArea } from "./d-chart-plot-area";
import { DChartRegion } from "./d-chart-region";
import { DChartRegionImpl } from "./d-chart-region-impl";
import { DThemes } from "./theme/d-themes";
import { isNaN } from "./util/is-nan";

export class DChartCoordinateLog<CHART extends DBase = DBase> implements DChartCoordinate<CHART> {
	protected _id: number;
	protected _transform: DChartCoordinateTransform<CHART>;
	protected _container?: DChartCoordinateContainerSub<CHART>;
	protected _direction: DChartCoordinateDirection;
	protected _theme: DThemeChartCoordinate;
	protected _work: DChartRegionImpl;
	protected _tick: DChartCoordinateTick<CHART>;
	protected _mark: DChartCoordinateTransformMarkImpl;
	protected _from?: number;
	protected _to?: number;

	constructor(options?: DChartCoordinateOptions) {
		this._id = 0;
		this._direction = DChartCoordinateDirection.X;
		this._theme = this.toTheme(options);
		this._transform = new DChartCoordinateTransformImpl(options?.transform);
		this._tick = new DChartCoordinateLogTick<CHART>(options?.tick);
		this._work = new DChartRegionImpl(NaN, NaN);
		this._mark = new DChartCoordinateTransformMarkImpl();
		this._from = options?.from;
		this._to = options?.to;
	}

	get from(): number | undefined {
		return this._from;
	}

	set from(from: number | undefined) {
		this._from = from;
	}

	get to(): number | undefined {
		return this._to;
	}

	set to(to: number | undefined) {
		this._to = to;
	}

	bind(
		container: DChartCoordinateContainerSub<CHART>,
		direction: DChartCoordinateDirection
	): void {
		this._container = container;
		this._direction = direction;
	}

	unbind(): void {
		this._container = undefined;
	}

	fit(from?: number, to?: number): void {
		this.doFit(from, to, this._transform);
	}

	mark(from?: number, to?: number): void {
		const mark = this._mark;
		const transform = this._transform;
		mark.oldTranslate = transform.translate;
		mark.oldScale = transform.scale;
		this.doFit(from, to, mark);
	}

	blend(ratio: number): void {
		this._transform.blend(ratio, this._mark);
	}

	protected doFit(
		from: number | undefined,
		to: number | undefined,
		result: DChartCoordinateTransformMark | DChartCoordinateTransform<CHART>
	): void {
		const container = this._container;
		if (container) {
			const plotArea = container.container.plotArea;
			const padding = plotArea.padding;
			const work = this._work;
			switch (this._direction) {
				case DChartCoordinateDirection.X:
					this.doFit_(
						padding.getLeft(),
						plotArea.width - padding.getRight(),
						this.toFitDomain(from, to, plotArea, work),
						result
					);
					break;
				case DChartCoordinateDirection.Y:
					this.doFit_(
						plotArea.height - padding.getBottom(),
						padding.getTop(),
						this.toFitRange(from, to, plotArea, work),
						result
					);
					break;
			}
		}
	}

	protected toFitDomain(
		from: number | undefined,
		to: number | undefined,
		plotArea: DChartPlotArea<CHART>,
		result: DChartRegion
	): DChartRegion {
		if (from == null) {
			from = this._from;
		}
		if (to == null) {
			to = this._to;
		}
		if (from != null && to != null) {
			result.set(from, to);
		} else {
			plotArea.series.getDomain(this, result);
			result.set(from, to);
		}
		return result;
	}

	protected toFitRange(
		from: number | undefined,
		to: number | undefined,
		plotArea: DChartPlotArea<CHART>,
		result: DChartRegion
	): DChartRegion {
		if (from == null) {
			from = this._from;
		}
		if (to == null) {
			to = this._to;
		}
		if (from != null && to != null) {
			result.set(from, to);
		} else {
			plotArea.series.getRange(this, result);
			result.set(from, to);
		}
		return result;
	}

	protected doFit_(
		pixelFrom: number,
		pixelTo: number,
		region: DChartRegion,
		result: DChartCoordinateTransformMark | DChartCoordinateTransform<CHART>
	): void {
		const regionFrom = region.from;
		const regionTo = region.to;
		if (!(isNaN(regionFrom) || isNaN(regionTo))) {
			// Scale
			let newScale = 1;
			const regionFromMapped = this.map(regionFrom);
			const regionToMapped = this.map(regionTo);
			const regionSizeMapped = regionToMapped - regionFromMapped;
			if (!this._theme.isZero(regionSizeMapped)) {
				const pixelSize = pixelTo - pixelFrom;
				newScale = pixelSize / regionSizeMapped;
			} else {
				newScale = pixelTo < pixelFrom ? -1 : 1;
			}

			// Translation
			const newTranslation = pixelFrom - regionFromMapped * newScale;

			// Done
			result.set(newTranslation, newScale);
		}
	}

	get id(): number {
		return this._id;
	}

	get transform(): DChartCoordinateTransform<CHART> {
		return this._transform;
	}

	map(value: number): number {
		return Math.log(Math.max(0, value)) / Math.LN10;
	}

	mapAll(values: number[], ifrom: number, iend: number, stride: number, offset: number): void {
		const factor = 1 / Math.LN10;
		for (let i = ifrom + offset; i < iend; i += stride) {
			const value = values[i];
			values[i] = Math.log(Math.max(0, value)) * factor;
		}
	}

	unmap(value: number): number {
		return Math.pow(10, value);
	}

	unmapAll(values: number[], ifrom: number, iend: number, stride: number, offset: number): void {
		for (let i = ifrom + offset; i < iend; i += stride) {
			values[i] = Math.pow(10, values[i]);
		}
	}

	ticks(
		domainFrom: number,
		domainTo: number,
		majorCount: number,
		majorStep: number | DChartCoordinateTickMajorStepFunction | undefined,
		minorCountPerMajor: number,
		minorCount: number,
		minorStep: number | DChartCoordinateTickMinorStepFunction | undefined,
		majorResult: Float64Array,
		minorResult: Float64Array
	): void {
		this._tick.calculate(
			domainFrom,
			domainTo,
			majorCount,
			majorStep,
			minorCountPerMajor,
			minorCount,
			minorStep,
			majorResult,
			minorResult,
			this
		);
	}

	protected toTheme(options?: DChartCoordinateOptions): DThemeChartCoordinate {
		return (options && options.theme) || this.getThemeDefault();
	}

	protected getThemeDefault(): DThemeChartCoordinate {
		return DThemes.getInstance().get(this.getType());
	}

	protected getType(): string {
		return "DChartCoordinate";
	}
}
