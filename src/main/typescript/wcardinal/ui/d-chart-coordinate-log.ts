/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinate, DChartCoordinateDirection } from "./d-chart-coordinate";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import {
	DChartCoordinateLogTick,
	DThemeChartCoordinateLogTick
} from "./d-chart-coordinate-log-tick";
import {
	DChartCoordinateTransform,
	DThemeChartCoordinateTransform
} from "./d-chart-coordinate-transform";
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

export interface DThemeChartCoordinateLog
	extends DThemeChartCoordinateTransform,
		DThemeChartCoordinateLogTick {}

export interface DChartCoordinateLogOptions {
	theme?: DThemeChartCoordinateLog;
}

export class DChartCoordinateLog<CHART extends DBase = DBase> implements DChartCoordinate<CHART> {
	protected _id: number;
	protected _transform: DChartCoordinateTransform<CHART>;
	protected _container?: DChartCoordinateContainerSub<CHART>;
	protected _direction: DChartCoordinateDirection;
	protected _theme: DThemeChartCoordinateLog;
	protected _work: DChartRegionImpl;
	protected _tick: DChartCoordinateLogTick<CHART>;
	protected _mark: DChartCoordinateTransformMarkImpl;

	constructor(options?: DChartCoordinateLogOptions) {
		this._id = 0;
		this._direction = DChartCoordinateDirection.X;
		const theme = this.toTheme(options);
		this._theme = theme;
		this._transform = new DChartCoordinateTransformImpl(theme);
		this._tick = new DChartCoordinateLogTick(theme);
		this._work = new DChartRegionImpl(NaN, NaN);
		this._mark = new DChartCoordinateTransformMarkImpl();
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
		minorCountPerMajor: number,
		minorCount: number,
		majorResult: Float64Array,
		minorResult: Float64Array
	): void {
		this._tick.calculate(
			domainFrom,
			domainTo,
			majorCount,
			minorCountPerMajor,
			minorCount,
			majorResult,
			minorResult,
			this
		);
	}

	protected toTheme(options?: DChartCoordinateLogOptions): DThemeChartCoordinateLog {
		return (options && options.theme) || this.getThemeDefault();
	}

	protected getThemeDefault(): DThemeChartCoordinateLog {
		return DThemes.getInstance().get(this.getType());
	}

	protected getType(): string {
		return "DChartCoordinateLog";
	}
}
