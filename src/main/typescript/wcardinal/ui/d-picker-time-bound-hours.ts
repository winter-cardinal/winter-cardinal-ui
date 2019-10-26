/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimeBound } from "./d-picker-time-bound";
import { DPickerTimeBoundConstant } from "./d-picker-time-bound-constant";

export interface DPickerTimeBoundHoursParent {
	lower: DPickerTimeBound;
	upper: DPickerTimeBound;
	mask: DPickerDatetimeMask;
	constant: DPickerTimeBoundConstant;
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
		const constant = parent.constant;
		if( lowerDate != null ) {
			const mask = parent.mask;
			if( mask & DPickerDatetimeMask.DATE ) {
				if( lowerDate.getFullYear() < date.getFullYear() ) {
					return constant.hour.min;
				}
				if( lowerDate.getMonth() < date.getMonth() ) {
					return constant.hour.min;
				}
				if( lowerDate.getDate() < date.getDate() ) {
					return constant.hour.min;
				}
			}
			const lowerDateHours = lowerDate.getHours();
			if( lower.inclusive ) {
				return lowerDateHours;
			} else {
				if( mask & DPickerDatetimeMask.SECONDS ) {
					if( lowerDate.getSeconds() < constant.second.max ) {
						return lowerDateHours;
					}
				}
				if( mask & DPickerDatetimeMask.MINUTES ) {
					if( lowerDate.getMinutes() < constant.minute.max ) {
						return lowerDateHours;
					}
				}
				return lowerDateHours + 1;
			}
		}
		return constant.hour.min;
	}

	max( date: Date ): number {
		const parent = this._parent;
		const upper = parent.upper;
		const upperDate = upper.date;
		const constant = parent.constant;
		if( upperDate != null ) {
			const mask = parent.mask;
			if( mask & DPickerDatetimeMask.DATE ) {
				if( date.getFullYear() < upperDate.getFullYear() ) {
					return constant.hour.max;
				}
				if( date.getMonth() < upperDate.getMonth() ) {
					return constant.hour.max;
				}
				if( date.getDate() < upperDate.getDate() ) {
					return constant.hour.max;
				}
			}
			const upperDateHours = upperDate.getHours();
			if( upper.inclusive ) {
				return upperDateHours;
			} else {
				if( mask & DPickerDatetimeMask.SECONDS ) {
					if( constant.second.min < upperDate.getSeconds() ) {
						return upperDateHours;
					}
				}
				if( mask & DPickerDatetimeMask.MINUTES ) {
					if( constant.minute.min < upperDate.getMinutes() ) {
						return upperDateHours;
					}
				}
				return upperDateHours - 1;
			}
		}
		return constant.hour.max;
	}
}
