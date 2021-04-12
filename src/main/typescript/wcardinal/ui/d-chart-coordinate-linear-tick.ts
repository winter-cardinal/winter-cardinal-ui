/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinate } from "./d-chart-coordinate";

export interface DThemeChartCoordinateLinearTick {
	toStepScale(scale: number): number;
}

export class DChartCoordinateLinearTick {
	protected _theme: DThemeChartCoordinateLinearTick;

	constructor(theme: DThemeChartCoordinateLinearTick) {
		this._theme = theme;
	}

	protected calcStepMajor(domainMin: number, domainMax: number, count: number): number {
		if (0 < count) {
			const span = Math.abs(domainMax - domainMin) / count;
			const power = Math.floor(Math.log(span) / Math.LN10);
			const base = Math.pow(10, power);
			return this._theme.toStepScale(span / base) * base;
		}
		return -1;
	}

	protected calcStepMinor(step: number, minorCount: number): number {
		if (0 <= step) {
			return step / (minorCount + 1);
		} else {
			return -1;
		}
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
		minorCountPerMajor: number,
		minorCount: number,
		majorResult: Float64Array,
		minorResult: Float64Array,
		coordinate: DChartCoordinate
	): void {
		if (majorCount <= 0) {
			return;
		}

		const transform = coordinate.transform;

		const domainMin = Math.min(domainFrom, domainTo);
		const domainMax = Math.max(domainFrom, domainTo);

		const majorStep = this.calcStepMajor(domainMin, domainMax, majorCount);
		if (majorStep <= 0) {
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
		const idomainStart = Math.floor(domainMin / majorStep) - 1;
		const idomainEnd = Math.ceil(domainMax / majorStep) + 1;

		// Major / minor tick positions
		const minorStep = this.calcStepMinor(majorStep, minorCountPerMajor);
		let imajor = 0;
		let iminor = 0;
		for (let i = idomainStart; i <= idomainEnd; ++i) {
			const majorPosition = i * majorStep;
			if (imajor < majorCount) {
				if (domainMin <= majorPosition && majorPosition <= domainMax) {
					const majorProjectedPosition = transform.map(coordinate.map(majorPosition));
					const imajorResult = imajor * 3;
					majorResult[imajorResult + 0] = majorPosition;
					majorResult[imajorResult + 1] = majorProjectedPosition;
					majorResult[imajorResult + 2] = majorStep;
					imajor += 1;
				}
			}

			for (let j = 0; j < minorCountPerMajor; j += 1) {
				if (iminor < minorCount) {
					const minorPosition = majorPosition + (j + 1) * minorStep;
					if (domainMin <= minorPosition && minorPosition <= domainMax) {
						const minorProjectedPosition = transform.map(coordinate.map(minorPosition));
						const iminorResult = iminor * 3;
						minorResult[iminorResult + 0] = minorPosition;
						minorResult[iminorResult + 1] = minorProjectedPosition;
						minorResult[iminorResult + 2] = minorStep;
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
