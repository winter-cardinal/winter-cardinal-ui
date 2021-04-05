/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DCoordinateSize } from "./d-coordinate";
import { DInputIntegerOptions } from "./d-input-integer";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutVertical } from "./d-layout-vertical";
import { DPickerDatetimeButtonBack, DPickerDatetimeButtonBackOptions } from "./d-picker-datetime-button-back";
import { DPickerDatetimeButtonDate } from "./d-picker-datetime-button-date";
import { DPickerDatetimeButtonNext, DPickerDatetimeButtonNextOptions } from "./d-picker-datetime-button-next";
import { DPickerDatetimeLabel, DPickerDatetimeLabelOptions } from "./d-picker-datetime-label";
import { DPickerDatetimeLabelDate } from "./d-picker-datetime-label-date";
import { DPickerDatetimeSpace } from "./d-picker-datetime-space";
import { DPickerTime, DPickerTimeOptions, DThemePickerTime } from "./d-picker-time";

export type DPickerDatetimeLabelFormatter = ( date: Date ) => string;
export type DPickerDatetimeDateDecorator = ( date: Date, button: DPickerDatetimeButtonDate ) => void;
export type DPickerDatetimeDayLabels = [ string, string, string, string, string, string, string ];

export interface DPickerDatetimeDayOptions {
	start?: number;
	labels?: DPickerDatetimeDayLabels;
}

export interface DPickerDatetimeDateOptions {
	decorator?: DPickerDatetimeDateDecorator;
}

export interface DPickerDatetimeOptions<
	THEME extends DThemePickerDatetime = DThemePickerDatetime
> extends DPickerTimeOptions<THEME> {
	back?: DPickerDatetimeButtonBackOptions | null;
	next?: DPickerDatetimeButtonNextOptions | null;
	day?: DPickerDatetimeDayOptions;
	label?: DPickerDatetimeLabelOptions;
	date?: DPickerDatetimeDateOptions;
}

export interface DThemePickerDatetime extends DThemePickerTime {
	getDayLabels(): DPickerDatetimeDayLabels;
	getDayStart(): number;
	getLabelFormatter(): DPickerDatetimeLabelFormatter;
	getDateDecorator(): DPickerDatetimeDateDecorator;
	getBackButtonOptions(): DPickerDatetimeButtonBackOptions | null;
	getNextButtonOptions(): DPickerDatetimeButtonNextOptions | null;
}

export class DPickerDatetime<
	THEME extends DThemePickerDatetime = DThemePickerDatetime,
	OPTIONS extends DPickerDatetimeOptions<THEME> = DPickerDatetimeOptions<THEME>
> extends DPickerTime<THEME, OPTIONS> {
	protected _datePage!: Date;
	protected _dateButtons!: Array<DPickerDatetimeSpace | DPickerDatetimeButtonDate>;
	protected _dateDecorator!: DPickerDatetimeDateDecorator;
	protected _label!: DPickerDatetimeLabel;

	protected init( options?: OPTIONS ): void {
		super.init( options );
		this._datePage = new Date( this._dateCurrent.getTime() );
	}

	protected newChildren( theme: THEME, options: OPTIONS | undefined, margin: number ): Array<DisplayObject | null> {
		this._dateButtons = this.newDateButtons( theme, options );
		this._dateDecorator = ( options && options.date && options.date.decorator ) ||
			theme.getDateDecorator();
		this._label = this.newLabel( theme, options );
		const result = super.newChildren( theme, options, margin );
		result.unshift(
			new DLayoutHorizontal({
				width: "100%", height: "auto",
				children: [
					this.newBackButton( theme, options ),
					this._label,
					this.newNextButton( theme, options )
				]
			}),
			new DLayoutHorizontal({
				width: "auto", height: "auto",
				margin,
				children: this.newDateLabels( theme, options )
			}),
			new DLayoutVertical({
				width: "auto", height: "auto",
				margin,
				column: 7,
				children: this._dateButtons
			})
		);
		return result;
	}

	get page(): Date {
		return this._datePage;
	}

	set page( datePage: Date ) {
		if( this._datePage.getTime() !== datePage.getTime() ) {
			this._datePage = datePage;
			this.onPageChange();
		}
	}

	protected onReset(): void {
		this._datePage.setTime( this._dateCurrent.getTime() );
		super.onReset();
	}

	next(): void {
		const work = this._datePage;
		work.setFullYear( work.getFullYear(), work.getMonth() + 1, 1 );
		work.setHours( 0, 0, 0, 0 );
		this.onPageChange();
	}

	back(): void {
		const work = this._datePage;
		work.setFullYear( work.getFullYear(), work.getMonth() - 1, 1 );
		work.setHours( 0, 0, 0, 0 );
		this.onPageChange();
	}

	onNewChange(): void {
		this._dateBounds.adjust( this._datePage );
		super.onNewChange();
		this.onPageChange();
	}

	protected onPageChange(): void {
		const buttons = this._dateButtons;
		const bounds = this._dateBounds;
		const datePage = this._datePage;
		const dateNew = this._dateNew;

		const tmp = new Date( datePage.getTime() );
		tmp.setDate( 1 );
		tmp.setHours( 0, 0, 0, 0 );

		// Spaces
		const theme = this.theme;
		const spaceCount = ( tmp.getDay() - theme.getDayStart() + 7 ) % 7;
		for( let i = 0; i < spaceCount; ++i ) {
			buttons[ i ].show();
		}
		for( let i = spaceCount; i < 7; ++i ) {
			buttons[ i ].hide();
		}

		// Date buttons
		const dateDecorator = this._dateDecorator;
		tmp.setFullYear( tmp.getFullYear(), tmp.getMonth() + 1, 0 );
		const dateCount = tmp.getDate();
		const dateNewDate = ( dateNew.getFullYear() === tmp.getFullYear() &&
			dateNew.getMonth() === tmp.getMonth() ? dateNew.getDate() : 0 );
		for( let i = 0; i < dateCount; ++i ) {
			tmp.setDate( i + 1 );

			const button = buttons[ i + 7 ];
			button.state.isActive = dateNewDate === i + 1;
			button.state.isDisabled = ! bounds.contains( tmp );
			button.show();

			dateDecorator( tmp, button as DPickerDatetimeButtonDate );
		}
		for( let i = dateCount; i < 31; ++i ) {
			const button = buttons[ i + 7 ];
			button.state.isActive = false;
			button.hide();
		}

		// Label
		tmp.setTime( datePage.getTime() );
		this._label.text = tmp;
	}

	protected adjustInputOptions( theme: THEME, options: DInputIntegerOptions, max: number ): DInputIntegerOptions {
		if( options.weight == null ) {
			options.weight = 1;
		}
		return super.adjustInputOptions( theme, options, max );
	}

	protected getTimeLayoutWidth(): DCoordinateSize {
		return "100%";
	}

	protected toLabelOptions( theme: THEME, options?: DPickerDatetimeOptions ): DPickerDatetimeLabelOptions {
		const result = (options && options.label) || {};
		if( result.weight === undefined ) {
			result.weight = 1;
		}

		if( result.padding === undefined ) {
			result.padding = 0;
		}

		const labelText = result.text = result.text || {};
		const labelTextAlign = labelText.align = labelText.align || {};
		if( labelTextAlign.horizontal === undefined ) {
			labelTextAlign.horizontal = "CENTER";
		}

		if( labelText.formatter === undefined ) {
			labelText.formatter = theme.getLabelFormatter();
		}
		return result;
	}

	protected newLabel( theme: THEME, options?: DPickerDatetimeOptions ): DPickerDatetimeLabel {
		return new DPickerDatetimeLabel( this.toLabelOptions( theme, options ) );
	}

	protected newBackButton( theme: THEME, options?: OPTIONS ): DPickerDatetimeButtonBack | null {
		const buttonOptions = ( options && options.back !== undefined ?
			options.back : theme.getBackButtonOptions() );
		if( buttonOptions != null ) {
			const button = new DPickerDatetimeButtonBack( buttonOptions );
			button.on( "active", (): void => {
				this.back();
			});
			return button;
		}
		return null;
	}

	protected newNextButton( theme: THEME, options?: OPTIONS ): DPickerDatetimeButtonNext | null {
		const buttonOptions = ( options && options.next !== undefined ?
			options.next : theme.getNextButtonOptions() );
		if( buttonOptions != null ) {
			const button = new DPickerDatetimeButtonNext( buttonOptions );
			button.on( "active", (): void => {
				this.next();
			});
			return button;
		}
		return null;
	}

	protected newDateLabels( theme: THEME, options: OPTIONS | undefined ): DPickerDatetimeLabelDate[] {
		const dateLabels = theme.getDayLabels();
		const dayStart = theme.getDayStart();
		const result: DPickerDatetimeLabelDate[] = [];
		for( let i = 0; i < 7; ++i ) {
			const label = dateLabels[ (dayStart + i) % 7 ];
			result.push(
				this.newDateLabel( theme, options, label )
			);
		}
		return result;
	}

	protected newDateLabel( theme: THEME, options: OPTIONS | undefined, label: string ): DPickerDatetimeLabelDate {
		return new DPickerDatetimeLabelDate({
			text: {
				value: label
			}
		});
	}

	protected newDateButtons(
		theme: THEME, options: OPTIONS | undefined
	): Array<DPickerDatetimeSpace | DPickerDatetimeButtonDate> {
		const result: Array<DPickerDatetimeSpace | DPickerDatetimeButtonDate> = [];
		for( let i = 0; i < 7; ++i ) {
			result.push(
				this.newSpace( theme, options )
			);
		}
		for( let i = 1; i <= 31; ++i ) {
			result.push(
				this.newDateButton( theme, options, i )
			);
		}
		return result;
	}

	protected newSpace( theme: THEME, options: OPTIONS | undefined ): DPickerDatetimeSpace {
		return new DPickerDatetimeSpace();
	}

	protected newDateButton( theme: THEME, options: OPTIONS | undefined, date: number ): DPickerDatetimeButtonDate {
		return new DPickerDatetimeButtonDate({
			text: {
				value: String( date )
			},
			on: {
				active: (): void => {
					this.onDateButtonClicked( date );
				}
			}
		});
	}

	protected onDateButtonClicked( date: number ): void {
		const dateNew = this._dateNew;
		if( dateNew.getDate() !== date ) {
			const datePage = this._datePage;
			dateNew.setFullYear( datePage.getFullYear() );
			dateNew.setMonth( datePage.getMonth() );
			dateNew.setDate( date );
			this.onNewChange();
		}
	}

	protected getType(): string {
		return "DPickerDatetime";
	}
}
