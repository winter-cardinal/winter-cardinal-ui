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

export class DChartCoordinateLinearTick<CHART extends DBase = DBase>
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
		majorCount: number,
		majorCapacity: number,
		majorStep: number | DChartCoordinateTickMajorStepFunction | undefined,
		majorFixed: number[] | undefined,
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

		const majorStepMapped = this.toMajorStep(domainMin, domainMax, majorCount, majorStep);
		if (majorStepMapped <= 0) {
			majorResult[0] = domainMin;
			majorResult[1] = transform.map(coordinate.map(domainMin));
			majorResult[2] = 0;
			for (let i = 1; i < majorCapacity; ++i) {
				const imajorResult = i * 3;
				majorResult[imajorResult + 0] = NaN;
				majorResult[imajorResult + 1] = NaN;
				majorResult[imajorResult + 2] = NaN;
			}
			for (let i = 0; i < minorCount; ++i) {
				const iminorResult = i * 3;
				minorResult[iminorResult + 0] = NaN;
				minorResult[iminorResult + 1] = NaN;
				minorResult[iminorResult + 2] = NaN;
			}
			return;
		}

		// Major tick start position
		const idomainStart = Math.floor(domainMin / majorStepMapped) - 1;
		const idomainEnd = Math.ceil(domainMax / majorStepMapped) + 1;
		const domainMinMapped = transform.map(coordinate.map(domainMin));
		const domainMaxMapped = transform.map(coordinate.map(domainMax));
		const from = Math.min(domainMinMapped, domainMaxMapped) - 0.5;
		const to = Math.max(domainMinMapped, domainMaxMapped) + 0.5;

		// Major / minor tick positions
		const minorStepMapped = this.toMinorStep(majorStepMapped, minorCountPerMajor, minorStep);
		let imajor = 0;
		let iminor = 0;
		for (let i = idomainStart; i <= idomainEnd; ++i) {
			const majorPosition = i * majorStepMapped;
			if (imajor < majorCapacity) {
				const majorPositionMapped = transform.map(coordinate.map(majorPosition));
				if (from <= majorPositionMapped && majorPositionMapped <= to) {
					const imajorResult = imajor * 3;
					majorResult[imajorResult + 0] = majorPosition;
					majorResult[imajorResult + 1] = majorPositionMapped;
					majorResult[imajorResult + 2] = majorStepMapped;
					imajor += 1;
				}
			}

			for (let j = 0; j < minorCountPerMajor; j += 1) {
				if (iminor < minorCount) {
					const minorPosition = majorPosition + (j + 1) * minorStepMapped;
					const minorPositionMapped = transform.map(coordinate.map(minorPosition));
					if (from <= minorPositionMapped && minorPositionMapped <= to) {
						const iminorResult = iminor * 3;
						minorResult[iminorResult + 0] = minorPosition;
						minorResult[iminorResult + 1] = minorPositionMapped;
						minorResult[iminorResult + 2] = minorStepMapped;
						iminor += 1;
					}
				}
			}
		}
		// Add fixed major ticks
		const startIMajor = 0;
		const endIMajor = imajor - 1;
		majorFixed = majorFixed ?? [];
		for (let i = 0; i < majorFixed.length; i++) {
			const imajorResult = imajor * 3;
			const fixedPossition = majorFixed[i];
			if (domainMin <= fixedPossition && fixedPossition <= domainMax) {
				if (fixedPossition % majorStepMapped === 0) {
					majorResult[imajorResult + 0] = NaN;
					majorResult[imajorResult + 1] = NaN;
					majorResult[imajorResult + 2] = NaN;
				} else {
					const startMajorPossition = majorResult[startIMajor * 3 + 0];
					const startMajorPossitionMapped = majorResult[startIMajor * 3 + 1];
					const endMajorPossition = majorResult[endIMajor * 3 + 0];
					const endMajorPossitionMapped = majorResult[endIMajor * 3 + 1];
					const d =
						(endMajorPossitionMapped - startMajorPossitionMapped) /
						(endMajorPossition - startMajorPossition);
					const fixMajorPossitionMapped =
						(fixedPossition - startMajorPossition) * d + startMajorPossitionMapped;
					majorResult[imajorResult + 0] = fixedPossition;
					majorResult[imajorResult + 1] = fixMajorPossitionMapped;
					majorResult[imajorResult + 2] = fixedPossition % majorStepMapped;
				}
				imajor += 1;
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
