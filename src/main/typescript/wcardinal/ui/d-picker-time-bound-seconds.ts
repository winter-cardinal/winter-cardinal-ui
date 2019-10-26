/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimeBound } from "./d-picker-time-bound";
import { DPickerTimeBoundConstant } from "./d-picker-time-bound-constant";

export interface DPickerTimeBoundSecondsParent {
	lower: DPickerTimeBound;
	upper: DPickerTimeBound;
	mask: DPickerDatetimeMask;
	constant: DPickerTimeBoundConstant;
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
		const constant = parent.constant;
		if( lowerDate != null ) {
			const mask = parent.mask;
			if( mask & DPickerDatetimeMask.DATE ) {
				if( lowerDate.getFullYear() < date.getFullYear() ) {
					return constant.second.min;
				}
				if( lowerDate.getMonth() < date.getMonth() ) {
					return constant.second.min;
				}
				if( lowerDate.getDate() < date.getDate() ) {
					return constant.second.min;
				}
			}
			if( mask & DPickerDatetimeMask.HOURS ) {
				if( lowerDate.getHours() < date.getHours() ) {
					return constant.second.min;
				}
			}
			if( mask & DPickerDatetimeMask.MINUTES ) {
				if( lowerDate.getMinutes() < date.getMinutes() ) {
					return constant.second.min;
				}
			}
			return lowerDate.getSeconds() + ( lower.inclusive ? 0 : 1 );
		}
		return constant.second.min;
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
					return constant.second.max;
				}
				if( date.getMonth() < upperDate.getMonth() ) {
					return constant.second.max;
				}
				if( date.getDate() < upperDate.getDate() ) {
					return constant.second.max;
				}
			}
			if( mask & DPickerDatetimeMask.HOURS ) {
				if( date.getHours() < upperDate.getHours() ) {
					return constant.second.max;
				}
			}
			if( mask & DPickerDatetimeMask.MINUTES ) {
				if( date.getMinutes() < upperDate.getMinutes() ) {
					return constant.second.max;
				}
			}
			return upperDate.getSeconds() - ( upper.inclusive ? 0 : 1 );
		}
		return constant.second.max;
	}
}
