/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DCoordinateSize } from "./d-coordinate";
import { DInputInteger, DInputIntegerOptions } from "./d-input-integer";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerDatetimeMasks } from "./d-picker-datetime-masks";
import { DPickerTimeBoundDate, DPickerTimeBoundOptions } from "./d-picker-time-bound";
import { DPickerTimeBounds, DPickerTimeBoundsOptions } from "./d-picker-time-bounds";
import { DText } from "./d-text";

export interface DPickerTimeOptions<THEME extends DThemePickerTime = DThemePickerTime> extends DBaseOptions<THEME> {
	margin?: number;
	hours?: DInputIntegerOptions;
	minutes?: DInputIntegerOptions;
	seconds?: DInputIntegerOptions;
	mask?: keyof typeof DPickerDatetimeMask | Array<keyof typeof DPickerDatetimeMask> | DPickerDatetimeMask;
	bounds?: DPickerTimeBoundsOptions;
}

export interface DThemePickerTime extends DThemeBase {
	getMargin(): number;
	getHoursOptions(): DInputIntegerOptions;
	getMinutesOptions(): DInputIntegerOptions;
	getSecondsOptions(): DInputIntegerOptions;
	getMask(): DPickerDatetimeMask;
	getLowerBound(): DPickerTimeBoundDate;
	isLowerBoundInclusive(): boolean;
	getUpperBound(): DPickerTimeBoundDate;
	isUpperBoundInclusive(): boolean;
}

const toBoundOptions = (
	options: DPickerTimeBoundOptions | undefined,
	date: DPickerTimeBoundDate,
	inclusive: boolean
): DPickerTimeBoundOptions => {
	if( options ) {
		return {
			date: ( options.date !== undefined ? options.date : date ),
			inclusive: ( options.inclusive !== undefined ? options.inclusive : inclusive )
		};
	}
	return {
		date,
		inclusive
	};
};

const toBoundsOptions = (
	theme: DThemePickerTime,
	options: DPickerTimeBoundsOptions | undefined
): DPickerTimeBoundsOptions => {
	if( options ) {
		return {
			lower: toBoundOptions(
				options.lower,
				theme.getLowerBound(),
				theme.isLowerBoundInclusive()
			),
			upper: toBoundOptions(
				options.upper,
				theme.getUpperBound(),
				theme.isUpperBoundInclusive()
			)
		};
	}
	return {
		lower: {
			date: theme.getLowerBound(),
			inclusive: theme.isLowerBoundInclusive()
		},
		upper: {
			date: theme.getUpperBound(),
			inclusive: theme.isUpperBoundInclusive()
		}
	};
};

export class DPickerTime<
	THEME extends DThemePickerTime = DThemePickerTime,
	OPTIONS extends DPickerTimeOptions<THEME> = DPickerTimeOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _dateBounds!: DPickerTimeBounds;
	protected _dateCurrent!: Date;
	protected _dateNew!: Date;
	protected _inputHours!: DInputInteger | null;
	protected _inputMinutes!: DInputInteger | null;
	protected _inputSeconds!: DInputInteger | null;

	constructor( options?: OPTIONS ) {
		super( options );
		this.onNewChange();
	}

	protected init( options?: OPTIONS ): void {
		super.init( options );

		this.state.isFocusable = false;

		const theme = this.theme;
		this._dateCurrent = new Date();
		const dateCurrentTime = this._dateCurrent.getTime();
		this._dateNew = new Date( dateCurrentTime );
		this._dateBounds = new DPickerTimeBounds(
			toBoundsOptions( theme, options && options.bounds ),
			(): void => { this.onNewChange(); }
		);
		const margin = ( options && options.margin != null ?
			options.margin : theme.getMargin() );
		new DLayoutVertical({
			parent: this,
			x: "padding", y: "padding",
			width: "auto", height: "auto",
			margin,
			children: this.newChildren( theme, options, margin )
		});
	}

	get current(): Date {
		return this._dateCurrent;
	}

	set current( dateCurrent: Date ) {
		if( this._dateCurrent.getTime() !== dateCurrent.getTime() ) {
			this._dateCurrent = dateCurrent;
		}
	}

	get new(): Date {
		return this._dateNew;
	}

	set new( dateNew: Date ) {
		if( this._dateNew.getTime() !== dateNew.getTime() ) {
			this._dateNew = dateNew;
			this.onNewChange();
		}
	}

	get bounds(): DPickerTimeBounds {
		return this._dateBounds;
	}

	hasHours(): boolean {
		return this._inputHours != null;
	}

	hasMinutes(): boolean {
		return this._inputMinutes != null;
	}

	hasSeconds(): boolean {
		return this._inputSeconds != null;
	}

	reset(): void {
		const currentTime = this._dateCurrent.getTime();
		this._dateNew.setTime( currentTime );
		this.onReset();
	}

	protected onReset(): void {
		this.onNewChange();
	}

	protected onNewChange(): void {
		const dateNew = this._dateNew;
		const dateBounds = this._dateBounds;
		dateBounds.adjust( this._dateNew );

		const inputHours = this._inputHours;
		if( inputHours ) {
			const hours = dateBounds.hours;
			inputHours.value = dateNew.getHours();
			inputHours.min = hours.min( dateNew );
			inputHours.max = hours.max( dateNew );
		}

		const inputMinutes = this._inputMinutes;
		if( inputMinutes ) {
			const minutes = dateBounds.minutes;
			inputMinutes.value = dateNew.getMinutes();
			inputMinutes.min = minutes.min( dateNew );
			inputMinutes.max = minutes.max( dateNew );
		}

		const inputSeconds = this._inputSeconds;
		if( inputSeconds ) {
			const seconds = dateBounds.seconds;
			inputSeconds.value = dateNew.getSeconds();
			inputSeconds.min = seconds.min( dateNew );
			inputSeconds.max = seconds.max( dateNew );
		}
	}

	protected newChildren( theme: THEME, options: OPTIONS | undefined, margin: number ): Array<DisplayObject | null> {
		const mask = DPickerDatetimeMasks.from( theme, options );
		this._dateBounds.mask = mask;
		this._inputHours = ( (mask & DPickerDatetimeMask.HOURS) ? this.newInputHours( theme, options ) : null );
		this._inputMinutes = ( (mask & DPickerDatetimeMask.MINUTES) ? this.newInputMinutes( theme, options ) : null );
		this._inputSeconds = ( (mask & DPickerDatetimeMask.SECONDS) ? this.newInputSeconds( theme, options ) : null );
		return [
			this.newTimeLayout(
				this._inputHours,
				this._inputMinutes,
				this._inputSeconds,
				margin
			)
		];
	}

	protected newTimeLayout(
		hours: DInputInteger | null,
		minutes: DInputInteger | null,
		seconds: DInputInteger | null,
		margin: number
	): DLayoutHorizontal | null {
		const children = this.newTimeLayoutChildren( hours, minutes, seconds );
		if( 0 < children.length ) {
			return new DLayoutHorizontal({
				width: this.getTimeLayoutWidth(),
				height: this.getTimeLayoutHeight(),
				margin,
				children
			});
		}
		return null;
	}

	protected getTimeLayoutWidth(): DCoordinateSize {
		return "auto";
	}

	protected getTimeLayoutHeight(): DCoordinateSize {
		return "auto";
	}

	protected newTimeLayoutChildren(
		hours: DInputInteger | null,
		minutes: DInputInteger | null,
		seconds: DInputInteger | null
	): Array<DisplayObject | null> {
		const result = [];
		if( hours != null ) {
			result.push( hours );
		}
		if( minutes != null ) {
			if( 0 < result.length ) {
				result.push( this.newMinuteSeparator() );
			}
			result.push( minutes );
		}
		if( seconds != null ) {
			if( 0 < result.length ) {
				result.push( this.newSecondSeparator() );
			}
			result.push( seconds );
		}
		return result;
	}

	protected newMinuteSeparator(): DText | null {
		return new DText({
			width: "auto",
			text: {
				value: this.getMinuteSeparator()
			}
		});
	}

	getMinuteSeparator(): string {
		return ":";
	}

	protected newSecondSeparator(): DText | null {
		return new DText({
			width: "auto",
			text: {
				value: this.getSecondSeparator()
			}
		});
	}

	getSecondSeparator(): string {
		return ":";
	}

	protected adjustInputOptions( theme: THEME, options: DInputIntegerOptions, max: number ): DInputIntegerOptions {
		if( options.step == null ) {
			options.step = 1;
		}
		if( options.min == null ) {
			options.min = 0;
		}
		if( options.max == null ) {
			options.max = max;
		}
		return options;
	}

	protected newInputHours( theme: THEME, options?: OPTIONS ): DInputInteger | null {
		const inputOptions = ( options && options.hours ) || theme.getHoursOptions();
		const max = this._dateBounds.constant.hour.max;
		const input = new DInputInteger( this.adjustInputOptions( theme, inputOptions, max ) );
		input.on( "change", ( value: number ): void => {
			this.onHoursChange( value );
		});
		return input;
	}

	protected onHoursChange( value: number ): void {
		const dateNew = this._dateNew;
		dateNew.setHours( value );
		this.onNewChange();
	}

	protected newInputMinutes( theme: THEME, options?: OPTIONS ): DInputInteger | null {
		const inputOptions = ( options && options.minutes ) || theme.getMinutesOptions();
		const max = this._dateBounds.constant.minute.max;
		const input = new DInputInteger( this.adjustInputOptions( theme, inputOptions, max ) );
		input.on( "change", ( value: number ): void => {
			this.onMinutesChange( value );
		});
		return input;
	}

	protected onMinutesChange( value: number ): void {
		const dateNew = this._dateNew;
		dateNew.setMinutes( value );
		this.onNewChange();
	}

	protected newInputSeconds( theme: THEME, options?: OPTIONS ): DInputInteger | null {
		const inputOptions = ( options && options.seconds ) || theme.getSecondsOptions();
		const max = this._dateBounds.constant.second.max;
		const input = new DInputInteger( this.adjustInputOptions( theme, inputOptions, max ) );
		input.on( "change", ( value: number ): void => {
			this.onSecondsChange( value );
		});
		return input;
	}

	protected onSecondsChange( value: number ): void {
		this._dateNew.setSeconds( value );
	}

	protected getType(): string {
		return "DPickerTime";
	}
}
