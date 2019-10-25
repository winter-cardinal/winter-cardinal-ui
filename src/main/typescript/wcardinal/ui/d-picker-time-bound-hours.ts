/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimeBound } from "./d-picker-time-bound";
import {
	HOURS_MAX, HOURS_MIN, MINUTES_MAX,
	MINUTES_MIN, SECONDS_MAX, SECONDS_MIN
} from "./d-picker-time-bound-constant";

export interface DPickerTimeBoundHoursParent {
	lower: DPickerTimeBound;
	upper: DPickerTimeBound;
	mask: DPickerDatetimeMask;
}

export class DPickerTimeBoundHours {
	protected _parent: DPickerTimeBoundHoursParent;

	constructor( parent: DPickerTimeBoundHoursParent ) {
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
					return HOURS_MIN;
				}
				if( lowerDate.getMonth() < date.getMonth() ) {
					return HOURS_MIN;
				}
				if( lowerDate.getDate() < date.getDate() ) {
					return HOURS_MIN;
				}
			}
			const lowerDateHours = lowerDate.getHours();
			if( lower.inclusive ) {
				return lowerDateHours;
			} else {
				if( mask & DPickerDatetimeMask.SECONDS ) {
					if( lowerDate.getSeconds() < SECONDS_MAX ) {
						return lowerDateHours;
					}
				}
				if( mask & DPickerDatetimeMask.MINUTES ) {
					if( lowerDate.getMinutes() < MINUTES_MAX ) {
						return lowerDateHours;
					}
				}
				return lowerDateHours + 1;
			}
		}
		return HOURS_MIN;
	}

	max( date: Date ): number {
		const parent = this._parent;
		const upper = parent.upper;
		const upperDate = upper.date;
		if( upperDate != null ) {
			const mask = parent.mask;
			if( mask & DPickerDatetimeMask.DATE ) {
				if( date.getFullYear() < upperDate.getFullYear() ) {
					return HOURS_MAX;
				}
				if( date.getMonth() < upperDate.getMonth() ) {
					return HOURS_MAX;
				}
				if( date.getDate() < upperDate.getDate() ) {
					return HOURS_MAX;
				}
			}
			const upperDateHours = upperDate.getHours();
			if( upper.inclusive ) {
				return upperDateHours;
			} else {
				if( mask & DPickerDatetimeMask.SECONDS ) {
					if( SECONDS_MIN < upperDate.getSeconds() ) {
						return upperDateHours;
					}
				}
				if( mask & DPickerDatetimeMask.MINUTES ) {
					if( MINUTES_MIN < upperDate.getMinutes() ) {
						return upperDateHours;
					}
				}
				return upperDateHours - 1;
			}
		}
		return HOURS_MAX;
	}
}
