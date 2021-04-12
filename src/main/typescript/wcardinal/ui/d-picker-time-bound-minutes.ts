/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimeBound } from "./d-picker-time-bound";
import { DPickerTimeBoundConstant } from "./d-picker-time-bound-constant";

export interface DPickerTimeBoundMinutesParent {
	lower: DPickerTimeBound;
	upper: DPickerTimeBound;
	mask: DPickerDatetimeMask;
	constant: DPickerTimeBoundConstant;
}

export class DPickerTimeBoundMinutes {
	protected _parent: DPickerTimeBoundMinutesParent;

	constructor(parent: DPickerTimeBoundMinutesParent) {
		this._parent = parent;
	}

	min(date: Date): number {
		const parent = this._parent;
		const lower = parent.lower;
		const lowerDate = lower.date;
		const constant = parent.constant;
		if (lowerDate != null) {
			const mask = parent.mask;
			if (mask & DPickerDatetimeMask.DATE) {
				if (lowerDate.getFullYear() < date.getFullYear()) {
					return constant.minute.min;
				}
				if (lowerDate.getMonth() < date.getMonth()) {
					return constant.minute.min;
				}
				if (lowerDate.getDate() < date.getDate()) {
					return constant.minute.min;
				}
			}
			if (mask & DPickerDatetimeMask.HOURS) {
				if (lowerDate.getHours() < date.getHours()) {
					return constant.minute.min;
				}
			}
			const lowerDateMinutes = lowerDate.getMinutes();
			if (lower.inclusive) {
				return lowerDateMinutes;
			} else {
				if (mask & DPickerDatetimeMask.SECONDS) {
					if (lowerDate.getSeconds() < constant.second.max) {
						return lowerDateMinutes;
					}
				}
				return lowerDateMinutes + 1;
			}
		}
		return constant.minute.min;
	}

	max(date: Date): number {
		const parent = this._parent;
		const upper = parent.upper;
		const upperDate = upper.date;
		const constant = parent.constant;
		if (upperDate != null) {
			const mask = parent.mask;
			if (mask & DPickerDatetimeMask.DATE) {
				if (date.getFullYear() < upperDate.getFullYear()) {
					return constant.minute.max;
				}
				if (date.getMonth() < upperDate.getMonth()) {
					return constant.minute.max;
				}
				if (date.getDate() < upperDate.getDate()) {
					return constant.minute.max;
				}
			}
			if (mask & DPickerDatetimeMask.HOURS) {
				if (date.getHours() < upperDate.getHours()) {
					return constant.minute.max;
				}
			}
			const upperDateMinutes = upperDate.getMinutes();
			if (upper.inclusive) {
				return upperDateMinutes;
			} else {
				if (mask & DPickerDatetimeMask.SECONDS) {
					if (constant.second.min < upperDate.getSeconds()) {
						return upperDateMinutes;
					}
				}
				return upperDateMinutes - 1;
			}
		}
		return constant.minute.max;
	}
}
