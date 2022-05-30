/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplicationTarget } from "./d-application-like";
import { DApplications } from "./d-applications";
import { EShapeDataValue } from "./shape/e-shape-data-value";

export interface DDiagramTickerParent extends DApplicationTarget {}

export class DDiagramTicker {
	protected _parent: DDiagramTickerParent;
	protected _interval: number;
	protected _timeoutId?: number;
	protected _onTimeBound: () => void;
	protected _values: EShapeDataValue[];

	constructor(parent: DDiagramTickerParent, interval: number) {
		this._parent = parent;
		this._values = [];
		this._interval = interval;
		this._onTimeBound = (): void => {
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
			DApplications.update(this._parent);
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
