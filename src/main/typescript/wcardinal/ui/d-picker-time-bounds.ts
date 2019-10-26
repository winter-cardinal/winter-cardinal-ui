/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimeBound, DPickerTimeBoundOptions } from "./d-picker-time-bound";
import { DPickerTimeBoundConstant } from "./d-picker-time-bound-constant";
import { DPickerTimeBoundHours } from "./d-picker-time-bound-hours";
import { DPickerTimeBoundMinutes } from "./d-picker-time-bound-minutes";
import { DPickerTimeBoundSeconds } from "./d-picker-time-bound-seconds";

export interface DPickerTimeBoundsOptions {
	lower?: DPickerTimeBoundOptions;
	upper?: DPickerTimeBoundOptions;
}

export class DPickerTimeBounds {
	lower: DPickerTimeBound;
	upper: DPickerTimeBound;
	mask: DPickerDatetimeMask;
	hours: DPickerTimeBoundHours;
	minutes: DPickerTimeBoundMinutes;
	seconds: DPickerTimeBoundSeconds;
	constant: DPickerTimeBoundConstant;

	constructor( options: DPickerTimeBoundsOptions | undefined, onChange: () => void ) {
		this.constant = this.newConstant();
		this.lower = new DPickerTimeBound( options && options.lower, onChange );
		this.upper = new DPickerTimeBound( options && options.upper, onChange );
		this.mask = DPickerDatetimeMask.ALL;
		this.hours = new DPickerTimeBoundHours( this );
		this.minutes = new DPickerTimeBoundMinutes( this );
		this.seconds = new DPickerTimeBoundSeconds( this );
	}

	newConstant(): DPickerTimeBoundConstant {
		return {
			second: {
				min: 0,
				max: 59
			},

			minute: {
				min: 0,
				max: 59
			},

			hour: {
				min: 0,
				max: 23
			}
		};
	}

	adjust( date: Date ): boolean {
		const result = this.test( date );
		if( result < 0 ) {
			const lower = this.lower;
			const lowerDate = lower.date;
			if( lowerDate ) {
				date.setTime( lowerDate.getTime() );
				if( ! lower.inclusive ) {
					const mask = this.mask;
					if( mask & DPickerDatetimeMask.SECONDS ) {
						date.setSeconds( lowerDate.getSeconds() + 1 );
					} else if( mask & DPickerDatetimeMask.MINUTES ) {
						date.setMinutes( lowerDate.getMinutes() + 1 );
					} else if( mask & DPickerDatetimeMask.HOURS ) {
						date.setHours( lowerDate.getHours() + 1 );
					} else if( mask & DPickerDatetimeMask.DATE ) {
						date.setDate( lowerDate.getDate() + 1 );
					}
				}
				return true;
			}
		} else if( 0 < result ) {
			const upper = this.upper;
			const upperDate = upper.date;
			if( upperDate ) {
				date.setTime( upperDate.getTime() );
				if( ! upper.inclusive ) {
					const mask = this.mask;
					if( mask & DPickerDatetimeMask.SECONDS ) {
						date.setSeconds( upperDate.getSeconds() - 1 );
					} else if( mask & DPickerDatetimeMask.MINUTES ) {
						date.setMinutes( upperDate.getMinutes() - 1 );
					} else if( mask & DPickerDatetimeMask.HOURS ) {
						date.setHours( upperDate.getHours() - 1 );
					} else if( mask & DPickerDatetimeMask.DATE ) {
						date.setDate( upperDate.getDate() - 1 );
					}
				}
				return true;
			}
		}
		return false;
	}

	compare( a: Date, b: Date ): number {
		const mask = this.mask;
		if( mask & DPickerDatetimeMask.DATE ) {
			const ay = a.getFullYear();
			const by = b.getFullYear();
			if( ay !== by ) {
				return ( ay < by ? -1 : +1 );
			}

			const am = a.getMonth();
			const bm = b.getMonth();
			if( am !== bm ) {
				return ( am < bm ? -1 : +1 );
			}

			const ad = a.getDate();
			const bd = b.getDate();
			if( ad !== bd ) {
				return ( ad < bd ? -1 : +1 );
			}
		}
		if( mask & DPickerDatetimeMask.HOURS ) {
			const ah = a.getHours();
			const bh = b.getHours();
			if( ah !== bh ) {
				return ( ah < bh ? -1 : +1 );
			}
		}
		if( mask & DPickerDatetimeMask.MINUTES ) {
			const am = a.getMinutes();
			const bm = b.getMinutes();
			if( am !== bm ) {
				return ( am < bm ? -1 : +1 );
			}
		}
		if( mask & DPickerDatetimeMask.SECONDS ) {
			const ad = a.getSeconds();
			const bd = b.getSeconds();
			if( ad !== bd ) {
				return ( ad < bd ? -1 : +1 );
			}
		}
		return 0;
	}

	test( date: Date ): number {
		// Lower bound
		const lower = this.lower;
		const lowerDate = lower.date;
		if( lowerDate != null ) {
			const result = this.compare( lowerDate, date );
			if( lower.inclusive ) {
				return ( result <= 0 ? 0 : -1 );
			} else {
				return ( result < 0 ? 0 : -1 );
			}
		}

		// Upper bound
		const upper = this.upper;
		const upperDate = upper.date;
		if( upperDate != null ) {
			const result = this.compare( date, upperDate );
			if( upper.inclusive ) {
				return ( result <= 0 ? 0 : +1 );
			} else {
				return ( result < 0 ? 0 : +1 );
			}
		}

		return 0;
	}

	contains( date: Date ): boolean {
		return this.test( date ) === 0;
	}
}
