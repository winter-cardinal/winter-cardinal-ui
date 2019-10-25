/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type DPickerTimeBoundDate = Date | null;

export interface DPickerTimeBoundOptions {
	date?: DPickerTimeBoundDate;
	inclusive?: boolean;
}

export class DPickerTimeBound {
	protected _date: DPickerTimeBoundDate;
	protected _inclusive: boolean;
	protected _onChange: () => void;

	constructor( options: DPickerTimeBoundOptions | undefined, onChange: () => void ) {
		this._date = ( options && options.date !== undefined ? options.date : null );
		this._inclusive = ( options && options.inclusive !== undefined ? options.inclusive : false );
		this._onChange = onChange;
	}

	get date(): DPickerTimeBoundDate {
		return this._date;
	}

	set date( date: DPickerTimeBoundDate ) {
		if( this._date !== date ) {
			this._date = date;
			this._onChange();
		}
	}

	get inclusive(): boolean {
		return this._inclusive;
	}

	set inclusive( inclusive: boolean ) {
		if( this._inclusive !== inclusive ) {
			this._inclusive = inclusive;
			this._onChange();
		}
	}
}
