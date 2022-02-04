/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import {
	DChartCoordinate,
	DChartCoordinateDirection,
	DChartCoordinateTickMajorStepFunction,
	DChartCoordinateTickMinorStepFunction
} from "./d-chart-coordinate";
import { DChartCoordinateContainerSub } from "./d-chart-coordinate-container-sub";
import {
	DChartCoordinateLinearTick,
	DThemeChartCoordinateLinearTick
} from "./d-chart-coordinate-linear-tick";
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

export interface DThemeChartCoordinateLinear
	extends DThemeChartCoordinateTransform,
		DThemeChartCoordinateLinearTick {}

export interface DChartCoordinateLinearOptions {
	theme?: DThemeChartCoordinateLinear;
}

export class DChartCoordinateLinear<CHART extends DBase = DBase>
	implements DChartCoordinate<CHART>
{
	protected _id: number;
	protected _transform: DChartCoordinateTransform<CHART>;
	protected _container?: DChartCoordinateContainerSub<CHART>;
	protected _direction: DChartCoordinateDirection;
	protected _theme: DThemeChartCoordinateLinear;
	protected _work: DChartRegionImpl;
	protected _tick: DChartCoordinateLinearTick<CHART>;
	protected _mark: DChartCoordinateTransformMarkImpl;

	constructor(options?: DChartCoordinateLinearOptions) {
		this._id = 0;
		this._direction = DChartCoordinateDirection.X;
		const theme = this.toTheme(options);
		this._theme = theme;
		this._transform = new DChartCoordinateTransformImpl(theme);
		this._tick = new DChartCoordinateLinearTick(theme);
		this._work = new DChartRegionImpl(NaN, NaN);
		this._mark = new DChartCoordinateTransformMarkImpl();
	}

	bind(
		container: DChartCoordinateContainerSub<CHART>,
		direction: DChartCoordinateDirection
	): void {
		this._container = container;
		this._direction = direction;
		this._transform.bind(container, direction);
	}

	unbind(): void {
		this._container = undefined;
		this._transform.unbind();
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
			const regionSize = regionTo - regionFrom;
			if (!this._theme.isZero(regionSize)) {
				const pixelSize = pixelTo - pixelFrom;
				newScale = pixelSize / regionSize;
			} else {
				newScale = pixelTo < pixelFrom ? -1 : 1;
			}

			// Translation
			const newTranslation = pixelFrom - regionFrom * newScale;

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
		return value;
	}

	mapAll(values: number[], ifrom: number, iend: number, stride: number, offset: number): void {
		// DO NOTHING
	}

	unmap(value: number): number {
		return value;
	}

	unmapAll(values: number[], ifrom: number, iend: number, stride: number, offset: number): void {
		// DO NOTHING
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

	protected toTheme(options?: DChartCoordinateLinearOptions): DThemeChartCoordinateLinear {
		return (options && options.theme) || this.getThemeDefault();
	}

	protected getThemeDefault(): DThemeChartCoordinateLinear {
		return DThemes.getInstance().get(this.getType());
	}

	protected getType(): string {
		return "DChartCoordinateLinear";
	}
}
