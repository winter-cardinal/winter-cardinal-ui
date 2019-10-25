/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimeBound } from "./d-picker-time-bound";
import { SECONDS_MAX, SECONDS_MIN } from "./d-picker-time-bound-constant";

export interface DPickerTimeBoundSecondsParent {
	lower: DPickerTimeBound;
	upper: DPickerTimeBound;
	mask: DPickerDatetimeMask;
}

export class DPickerTimeBoundSeconds {
	protected _parent: DPickerTimeBoundSecondsParent;

	constructor( parent: DPickerTimeBoundSecondsParent ) {
		this._parent = parent;
	}

	min( date: Date ): number {
		const parent = this._parent;
		const lower = parent.lower;
		const lowerDate = lower.date;
		if( lowerDate != null ) {
			const mask = parent.mask;
			if( mask & DPickerDatetimeMask.DATE ) {
				if( lowerDate.getFullYear() < date.getFullYear() ) {
					return SECONDS_MIN;
				}
				if( lowerDate.getMonth() < date.getMonth() ) {
					return SECONDS_MIN;
				}
				if( lowerDate.getDate() < date.getDate() ) {
					return SECONDS_MIN;
				}
			}
			if( mask & DPickerDatetimeMask.HOURS ) {
				if( lowerDate.getHours() < date.getHours() ) {
					return SECONDS_MIN;
				}
			}
			if( mask & DPickerDatetimeMask.MINUTES ) {
				if( lowerDate.getMinutes() < date.getMinutes() ) {
					return SECONDS_MIN;
				}
			}
			return lowerDate.getSeconds() + ( lower.inclusive ? 0 : 1 );
		}
		return SECONDS_MIN;
	}

	max( date: Date ): number {
		const parent = this._parent;
		const upper = parent.upper;
		const upperDate = upper.date;
		if( upperDate != null ) {
			const mask = parent.mask;
			if( mask & DPickerDatetimeMask.DATE ) {
				if( date.getFullYear() < upperDate.getFullYear() ) {
					return SECONDS_MAX;
				}
				if( date.getMonth() < upperDate.getMonth() ) {
					return SECONDS_MAX;
				}
				if( date.getDate() < upperDate.getDate() ) {
					return SECONDS_MAX;
				}
			}
			if( mask & DPickerDatetimeMask.HOURS ) {
				if( date.getHours() < upperDate.getHours() ) {
					return SECONDS_MAX;
				}
			}
			if( mask & DPickerDatetimeMask.MINUTES ) {
				if( date.getMinutes() < upperDate.getMinutes() ) {
					return SECONDS_MAX;
				}
			}
			return upperDate.getSeconds() - ( upper.inclusive ? 0 : 1 );
		}
		return SECONDS_MAX;
	}
}
