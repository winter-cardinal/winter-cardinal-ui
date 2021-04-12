/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DPickerTimeBoundOptions {
	date?: Date | null;
	inclusive?: boolean;
}

export class DPickerTimeBound {
	protected _date: Date | null;
	protected _inclusive: boolean;
	protected _onChange: () => void;

	constructor(options: DPickerTimeBoundOptions | undefined, onChange: () => void) {
		this._date = options?.date ?? null;
		this._inclusive = options?.inclusive ?? false;
		this._onChange = onChange;
	}

	get date(): Date | null {
		return this._date;
	}

	set date(date: Date | null) {
		if (this._date !== date) {
			this._date = date;
			this._onChange();
		}
	}

	get inclusive(): boolean {
		return this._inclusive;
	}

	set inclusive(inclusive: boolean) {
		if (this._inclusive !== inclusive) {
			this._inclusive = inclusive;
			this._onChange();
		}
	}
}
