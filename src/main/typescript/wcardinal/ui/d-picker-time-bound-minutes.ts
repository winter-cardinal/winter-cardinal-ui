/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimeBound } from "./d-picker-time-bound";
import { MINUTES_MAX, MINUTES_MIN, SECONDS_MAX, SECONDS_MIN } from "./d-picker-time-bound-constant";

export interface DPickerTimeBoundMinutesParent {
	lower: DPickerTimeBound;
	upper: DPickerTimeBound;
	mask: DPickerDatetimeMask;
}

export class DPickerTimeBoundMinutes {
	protected _parent: DPickerTimeBoundMinutesParent;

	constructor( parent: DPickerTimeBoundMinutesParent ) {
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
					return MINUTES_MIN;
				}
				if( lowerDate.getMonth() < date.getMonth() ) {
					return MINUTES_MIN;
				}
				if( lowerDate.getDate() < date.getDate() ) {
					return MINUTES_MIN;
				}
			}
			if( mask & DPickerDatetimeMask.HOURS ) {
				if( lowerDate.getHours() < date.getHours() ) {
					return MINUTES_MIN;
				}
			}
			const lowerDateMinutes = lowerDate.getMinutes();
			if( lower.inclusive ) {
				return lowerDateMinutes;
			} else {
				if( mask & DPickerDatetimeMask.SECONDS ) {
					if( lowerDate.getSeconds() < SECONDS_MAX ) {
						return lowerDateMinutes;
					}
				}
				return lowerDateMinutes + 1;
			}
		}
		return MINUTES_MIN;
	}

	max( date: Date ): number {
		const parent = this._parent;
		const upper = parent.upper;
		const upperDate = upper.date;
		if( upperDate != null ) {
			const mask = parent.mask;
			if( mask & DPickerDatetimeMask.DATE ) {
				if( date.getFullYear() < upperDate.getFullYear() ) {
					return MINUTES_MAX;
				}
				if( date.getMonth() < upperDate.getMonth() ) {
					return MINUTES_MAX;
				}
				if( date.getDate() < upperDate.getDate() ) {
					return MINUTES_MAX;
				}
			}
			if( mask & DPickerDatetimeMask.HOURS ) {
				if( date.getHours() < upperDate.getHours() ) {
					return MINUTES_MAX;
				}
			}
			const upperDateMinutes = upperDate.getMinutes();
			if( upper.inclusive ) {
				return upperDateMinutes;
			} else {
				if( mask & DPickerDatetimeMask.SECONDS ) {
					if( SECONDS_MIN < upperDate.getSeconds() ) {
						return upperDateMinutes;
					}
				}
				return upperDateMinutes - 1;
			}
		}
		return MINUTES_MAX;
	}
}
