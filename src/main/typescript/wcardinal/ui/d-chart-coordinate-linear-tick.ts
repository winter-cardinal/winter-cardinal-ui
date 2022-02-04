/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import {
	DChartCoordinate,
	DChartCoordinateTickMajorStepFunction,
	DChartCoordinateTickMinorStepFunction
} from "./d-chart-coordinate";
import { isNumber } from "./util/is-number";

export interface DThemeChartCoordinateLinearTick {
	toStepScale(scale: number): number;
}

export class DChartCoordinateLinearTick<CHART extends DBase = DBase> {
	protected _theme: DThemeChartCoordinateLinearTick;

	constructor(theme: DThemeChartCoordinateLinearTick) {
		this._theme = theme;
	}

	protected toMajorStep(
		domainMin: number,
		domainMax: number,
		majorCount: number,
		majorStep?: number | DChartCoordinateTickMajorStepFunction
	): number {
		if (majorStep == null) {
			if (0 < majorCount) {
				return this.calcStepMajor(domainMin, domainMax, majorCount);
			}
			return -1;
		} else if (isNumber(majorStep)) {
			return majorStep;
		} else {
			return majorStep(domainMin, domainMax, majorCount);
		}
	}

	protected calcStepMajor(domainMin: number, domainMax: number, majorCount: number): number {
		const span = Math.abs(domainMax - domainMin) / majorCount;
		const power = Math.floor(Math.log(span) / Math.LN10);
		const base = Math.pow(10, power);
		return this._theme.toStepScale(span / base) * base;
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
		majorStep: number | DChartCoordinateTickMajorStepFunction | undefined,
		minorCountPerMajor: number,
		minorCount: number,
		minorStep: number | DChartCoordinateTickMinorStepFunction | undefined,
		majorResult: Float64Array,
		minorResult: Float64Array,
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
			for (let i = 1; i < majorCount; ++i) {
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

		// Major / minor tick positions
		const minorStepMapped = this.toMinorStep(majorStepMapped, minorCountPerMajor, minorStep);
		let imajor = 0;
		let iminor = 0;
		for (let i = idomainStart; i <= idomainEnd; ++i) {
			const majorPosition = i * majorStepMapped;
			if (imajor < majorCount) {
				if (domainMin <= majorPosition && majorPosition <= domainMax) {
					const majorProjectedPosition = transform.map(coordinate.map(majorPosition));
					const imajorResult = imajor * 3;
					majorResult[imajorResult + 0] = majorPosition;
					majorResult[imajorResult + 1] = majorProjectedPosition;
					majorResult[imajorResult + 2] = majorStepMapped;
					imajor += 1;
				}
			}

			for (let j = 0; j < minorCountPerMajor; j += 1) {
				if (iminor < minorCount) {
					const minorPosition = majorPosition + (j + 1) * minorStepMapped;
					if (domainMin <= minorPosition && minorPosition <= domainMax) {
						const minorProjectedPosition = transform.map(coordinate.map(minorPosition));
						const iminorResult = iminor * 3;
						minorResult[iminorResult + 0] = minorPosition;
						minorResult[iminorResult + 1] = minorProjectedPosition;
						minorResult[iminorResult + 2] = minorStepMapped;
						iminor += 1;
					}
				}
			}
		}
		for (let i = imajor; i < majorCount; ++i) {
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
}
