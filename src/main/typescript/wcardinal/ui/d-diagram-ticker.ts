/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDataValue } from "./shape/e-shape-data-value";

export class DDiagramTicker {
	protected _interval: number;
	protected _timeoutId?: number;
	protected _onTimeBound: () => void;
	protected _values: EShapeDataValue[];

	constructor(interval: number) {
		this._values = [];
		this._interval = interval;
		this._onTimeBound = () => {
			this.onTime();
		};
	}

	add(value: EShapeDataValue): void {
		this._values.push(value);
	}

	start(): void {
		if (this._timeoutId == null) {
			this.onTime();
		}
	}

	protected getInterval(): number {
		const now = Date.now();
		const interval = this._interval;
		return Math.max(0, interval - (now % interval));
	}

	protected onTime(): void {
		const values = this._values;
		if (0 < values.length) {
			const t = Date.now() / this._interval;
			for (let i = 0, imax = values.length; i < imax; ++i) {
				values[i].value = t;
			}
		}
		this._timeoutId = window.setTimeout(this._onTimeBound, this.getInterval());
	}

	stop(): void {
		const timeoutId = this._timeoutId;
		if (timeoutId != null) {
			clearTimeout(timeoutId);
			this._timeoutId = undefined;
		}
	}
}
