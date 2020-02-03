/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DSliderThumb } from "./d-slider-thumb";
import { DSliderTrackSelectedVertical } from "./d-slider-track-selected-vertical";
import { DSliderTrackVertical } from "./d-slider-track-vertical";
import { DSliderValue } from "./d-slider-value";
import InteractionEvent = interaction.InteractionEvent;
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DSliderRangeVerticalOptions<
	THEME extends DThemeSliderRangeVertical = DThemeSliderRangeVertical,
> extends DBaseOptions<THEME> {

}

export interface DThemeSliderRangeVertical extends DThemeBase {

}

// RATIO to calculate slider value from min, max values.
// Default ratio is zero mean default slider value is zero
const DEFAULT_RATIO = 0;
// this is space beetween slider value and slider button
const VERTICAL_PIXEL_BALANCE = 2;

export class DSliderRangeVertical<
	THEME extends DThemeSliderRangeVertical = DThemeSliderRangeVertical,
	OPTIONS extends DSliderRangeVerticalOptions<THEME> = DSliderRangeVerticalOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _value!: DSliderValue;
	protected _thumb!: DSliderThumb;
	protected _track!: DSliderTrackVertical;
	protected _trackSelected!: DSliderTrackSelectedVertical;
	protected _onThumbMove!: ( e: InteractionEvent ) => void;
	protected _onThumbUp!: ( e: InteractionEvent ) => void;
	protected _onTrackUp!: ( e: InteractionEvent ) => void;
	protected _onTrackSelectedUp!: ( e: InteractionEvent ) => void;
	protected _trackHeight !: any;
	protected _thumbHeight !: any;
	protected _ratioValue!: number;
	protected _Yoffset !: number;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._ratioValue = DEFAULT_RATIO;

		this._value = new DSliderValue({
			x: "CENTER"
		});
		this._track = new DSliderTrackVertical();
		this._trackSelected = new DSliderTrackSelectedVertical();

		this._thumb = new DSliderThumb({
			x: "CENTER"
		});
		// offset for y-coordinate beetween slider value and slider button
		this._Yoffset = VERTICAL_PIXEL_BALANCE + this._value.height;
		this._track.y = this._Yoffset;
		this._thumb.y = this.height - this._thumb.height;
		this._trackSelected.y = this._thumb.y;
		this._trackSelected.height = this.height - this._trackSelected.y;
		this._value.y = this._thumb.y - this._Yoffset;

		this.addChild(this._track);
		this.addChild(this._trackSelected);
		this.addChild(this._thumb);

		this._trackHeight = this._track.theme.getHeight();
		this._thumbHeight = this._thumb.theme.getHeight();

		this._track.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			if (this._value) {
				this.addChild(this._value);
			}
			this.onTrackDown(e.data.global);
		});
		this._trackSelected.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			if (this._value) {
				this.addChild(this._value);
			}
			this.onTrackSelectedDown(e.data.global);
		});
		this._onTrackUp = ( e: InteractionEvent ): void => {
			this.onTrackUp( e );
			if (this._value) {
				this.removeChild(this._value);
			}
		};
		this._onTrackSelectedUp = ( e: InteractionEvent ): void => {
			this.onTrackSelectedUp( e );
			if (this._value) {
				this.removeChild(this._value);
			}
		};
		this._thumb.on(UtilPointerEvent.down, ( e: InteractionEvent ) => {
			if (this._value) {
				this.addChild(this._value);
			}
			this.onThumbDown( e );
		});

		this._onThumbMove = ( e: InteractionEvent ): void => {
			this.onThumbMove( e );
		};
		this._onThumbUp = ( e: InteractionEvent ): void => {
			this.onThumbUp( e );
			if (this._value) {
				this.removeChild(this._value);
			}
		};
	}
	protected onTrackDown( global: Point ) {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.up, this._onTrackUp );
		}
		this.onPick( global );
	}
	protected onTrackSelectedDown( global: Point ) {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.up, this._onTrackSelectedUp );
		}
		this.onPick( global );
	}
	protected onTrackUp( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.up, this._onTrackUp );
		}
	}
	protected onTrackSelectedUp( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.up, this._onTrackSelectedUp );
		}
	}
	protected onThumbMove( e: InteractionEvent ): void {
		this.onPick( e.data.global );
	}
	protected onThumbDown( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.move, this._onThumbMove );
			stage.on( UtilPointerEvent.up, this._onThumbUp );
		}
	}
	protected onThumbUp( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.move, this._onThumbMove );
			stage.off( UtilPointerEvent.up, this._onThumbUp );
		}
	}
	protected onPick( global: Point ) {
		const point = new Point(0, 0);
		this.toLocal( global, undefined, point );
		const y = Math.max( this._Yoffset, Math.min( this.height, point.y ) );
		if (y < (this._thumbHeight / 2 + this._Yoffset)) {
			this._thumb.y = this._Yoffset;
		} else if (y > (this.height - this._thumbHeight / 2)) {
			this._thumb.y = this.height - this._thumbHeight;
		} else {
			this._thumb.y = y - this._thumbHeight / 2;
		}
		this._ratioValue = (this.height - y) / this._track.height;
		this._trackSelected.y = this._thumb.y;
		this._trackSelected.height = this.height - this._trackSelected.y;
		this._value.y = this._thumb.y - this._Yoffset;
	}

	updateValue(min: number, max: number) {
		const value: number = min + this._ratioValue * (max - min);
		this._value.value = Math.round(value);
		this._value.text = String(this._value.value);
	}
	updateThumb(min: number, max: number, value: number) {
		this._ratioValue = (value - min) / (max - min);
		const y = this.height - this._ratioValue * this._trackHeight;
		if (y > (this.height - this._thumbHeight / 2)) {
			this._thumb.y = this._trackHeight - this._thumbHeight;
		} else {
			this._thumb.y = y;
		}
		this._trackSelected.y = this._thumb.y;
		this._trackSelected.height = this.height - this._trackSelected.y;
		this._value.y = this._thumb.y - this._Yoffset;
		this._value.value = value;
		this._value.text = String(value);
	}
	get value(): number {
		return this._value.value;
	}
	get thumb(): DSliderThumb {
		return this._thumb;
	}
	get track(): DSliderTrackVertical {
		return this._track;
	}
	get trackSelected(): DSliderTrackSelectedVertical {
		return this._trackSelected;
	}
	get Yoffset(): number {
		return this._Yoffset;
	}
	protected getType(): string {
		return "DSliderRangeVertical";
	}
}
