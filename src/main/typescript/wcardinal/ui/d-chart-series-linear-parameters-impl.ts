/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DChartSeriesLinearParameters,
	DChartSeriesLinearParametersOptions
} from "./d-chart-series-linear-parameters";

export class DChartSeriesExpressionParametersImpl implements DChartSeriesLinearParameters {
	protected _id: number;
	protected _idUpdated: number;
	protected _a: number;
	protected _b: number;
	protected _x0: number;
	protected _y0: number;

	constructor(a: number, b: number, x0: number, y0: number) {
		this._id = 0;
		this._idUpdated = NaN;
		this._a = a;
		this._b = b;
		this._x0 = x0;
		this._y0 = y0;
	}

	get a(): number {
		return this._a;
	}

	set a(a: number) {
		if (this._a !== a) {
			this._id += 1;
			this._a = a;
		}
	}

	get b(): number {
		return this._b;
	}

	set b(b: number) {
		if (this._b !== b) {
			this._id += 1;
			this._b = b;
		}
	}

	get x0(): number {
		return this._x0;
	}

	set x0(x0: number) {
		if (this._x0 !== x0) {
			this._id += 1;
			this._x0 = x0;
		}
	}

	get y0(): number {
		return this._y0;
	}

	set y0(y0: number) {
		if (this._y0 !== y0) {
			this._id += 1;
			this._y0 = y0;
		}
	}

	toDirty(): void {
		this._id += 1;
	}

	isDirty(): boolean {
		return this._id !== this._idUpdated;
	}

	toClean(): void {
		this._idUpdated = this._id;
	}

	static from(
		options?: DChartSeriesLinearParametersOptions
	): DChartSeriesExpressionParametersImpl {
		return new DChartSeriesExpressionParametersImpl(
			options?.a ?? 1,
			options?.b ?? 1,
			options?.x0 ?? 0,
			options?.y0 ?? 0
		);
	}
}
