/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartCoordinate } from "./d-chart-coordinate";
import {
	DChartCoordinateTick,
	DChartCoordinateTickOptions,
	DThemeChartCoordinateTick
} from "./d-chart-coordinate-tick";
import { DChartCoordinateTickMajorStepFunction } from "./d-chart-coordinate-tick-major-step-function";
import { DChartCoordinateTickMinorStepFunction } from "./d-chart-coordinate-tick-minor-step-function";
import { DThemes } from "./theme/d-themes";
import { isNumber } from "./util/is-number";

export interface DThemeChartCoordinateLogTick extends DThemeChartCoordinateTick {}

export class DChartCoordinateLogTick<CHART extends DBase = DBase>
	implements DChartCoordinateTick<CHART>
{
	protected _theme: DThemeChartCoordinateTick;

	constructor(options?: DChartCoordinateTickOptions) {
		this._theme = this.toTheme(options);
	}

	protected toMajorStep(
		domainMin: number,
		domainMax: number,
		majorCount: number,
		majorStep?: number | DChartCoordinateTickMajorStepFunction
	): number {
		if (majorStep == null) {
			if (0 < majorCount) {
				return this._theme.toStep(domainMin, domainMax, majorCount);
			}
			return -1;
		} else if (isNumber(majorStep)) {
			return majorStep;
		} else {
			return majorStep(domainMin, domainMax, majorCount);
		}
	}

	protected toMinorStep(
		majorStep: number,
		minorCount: number,
		minorStep?: number | DChartCoordinateTickMinorStepFunction
	): number {
		if (minorStep == null) {
			if (0 <= majorStep) {
				return this.calcStepMinor(majorStep, minorCount);
			}
			return -1;
		} else if (isNumber(minorStep)) {
			return minorStep;
		} else {
			return minorStep(majorStep, minorCount);
		}
	}

	protected calcStepMinor(majorStep: number, minorCount: number): number {
		return majorStep / (minorCount + 1);
	}

	protected calcTickMinorPositions(
		step: number,
		count: number,
		majorPosition: number,
		rangeMin: number,
		rangeMax: number,
		iresult: number,
		result: Float64Array
	): void {
		for (let i = 0; i < count; i += 1) {
			const minorPosition = majorPosition + (i + 1) * step;
			if (rangeMin <= minorPosition && minorPosition <= rangeMax) {
				result[iresult++] = minorPosition;
			}
		}
	}

	calculate(
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
		minorResult: number[],
		coordinate: DChartCoordinate<CHART>
	): void {
		if (majorCount <= 0) {
			return;
		}

		const transform = coordinate.transform;

		const domainMin = Math.min(domainFrom, domainTo);
		const domainMax = Math.max(domainFrom, domainTo);
		const domainVisibleMin = Math.min(domainVisibleFrom, domainVisibleTo);
		const domainVisibleMax = Math.max(domainVisibleFrom, domainVisibleTo);
		const domainVisibleMinMapped = coordinate.map(domainVisibleMin);
		const domainVisibleMaxMapped = coordinate.map(domainVisibleMax);
		const from0 = Math.min(domainVisibleMinMapped, domainVisibleMaxMapped);
		const to0 = Math.max(domainVisibleMinMapped, domainVisibleMaxMapped);
		const domainMinMapped = coordinate.map(domainMin);
		const domainMaxMapped = coordinate.map(domainMax);
		const from1 = Math.min(domainMinMapped, domainMaxMapped);
		const to1 = Math.max(domainMinMapped, domainMaxMapped);
		const from = Math.max(from0, from1);
		const to = Math.min(to0, to1);

		let imajor = 0;
		let iminor = 0;
		const majorStepMapped = this.toMajorStep(
			domainMinMapped,
			domainMaxMapped,
			majorCount,
			majorStep
		);
		if (majorStepMapped <= 0) {
			if (from <= domainMinMapped && domainMinMapped <= to) {
				majorResult[0] = domainMin;
				majorResult[1] = transform.map(domainMinMapped);
				majorResult[2] = 0;
				imajor += 1;
			}
		} else {
			// Major tick start position
			const idomainStartMapped = Math.floor(domainMinMapped / majorStepMapped) - 1;
			const idomainEndMapped = Math.ceil(domainMaxMapped / majorStepMapped) + 1;

			// Major / minor tick positions
			const minorStepMapped = this.toMinorStep(
				majorStepMapped,
				minorCountPerMajor,
				minorStep
			);
			for (let i = idomainStartMapped; i <= idomainEndMapped; ++i) {
				const majorPositionMapped = i * majorStepMapped;
				if (imajor < majorCapacity) {
					if (from <= majorPositionMapped && majorPositionMapped <= to) {
						const imajorResult = imajor * 3;
						majorResult[imajorResult + 0] = coordinate.unmap(majorPositionMapped);
						majorResult[imajorResult + 1] = transform.map(majorPositionMapped);
						majorResult[imajorResult + 2] = coordinate.unmap(majorPositionMapped - 1);
						imajor += 1;
					}
				}

				for (let j = 0; j < minorCountPerMajor; j += 1) {
					if (iminor < minorCount) {
						const minorPositionMapped = majorPositionMapped + (j + 1) * minorStepMapped;
						if (from <= minorPositionMapped && minorPositionMapped <= to) {
							const iminorResult = iminor * 3;
							minorResult[iminorResult + 0] = coordinate.unmap(minorPositionMapped);
							minorResult[iminorResult + 1] = transform.map(minorPositionMapped);
							minorResult[iminorResult + 2] = coordinate.unmap(
								minorPositionMapped - 1
							);
							iminor += 1;
						}
					}
				}
			}
		}
		for (let i = imajor; i < majorCapacity; ++i) {
			const imajorResult = i * 3;
			majorResult[imajorResult + 0] = NaN;
			majorResult[imajorResult + 1] = NaN;
			majorResult[imajorResult + 2] = NaN;
		}
		for (let i = iminor; i < minorCount; ++i) {
			const iminorResult = i * 3;
			minorResult[iminorResult + 0] = NaN;
			minorResult[iminorResult + 1] = NaN;
			minorResult[iminorResult + 2] = NaN;
		}
	}

	protected toTheme(options?: DChartCoordinateTickOptions): DThemeChartCoordinateTick {
		return options?.theme ?? this.getThemeDefault();
	}

	protected getThemeDefault(): DThemeChartCoordinateTick {
		return DThemes.getInstance().get(this.getType());
	}

	protected getType(): string {
		return "DChartCoordinateTick";
	}
}
