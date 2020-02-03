/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DSliderThumb } from "./d-slider-thumb";
import { DSliderTrackHorizontal } from "./d-slider-track-horizontal";
import { DSliderTrackSelectedHorizontal } from "./d-slider-track-selected-horizontal";
import { DSliderValue } from "./d-slider-value";
import InteractionEvent = interaction.InteractionEvent;
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DSliderRangeHorizontalOptions<THEME extends DThemeSliderRangeHorizontal> extends DBaseOptions<THEME> {

}

export interface DThemeSliderRangeHorizontal extends DThemeBase {

}

// RATIO to calculate slider value from min, max values.
// Default ratio is zero mean default slider value is zero
const DEFAULT_RATIO = 0;
// this is space beetween slider value and slider button
const VERTICAL_PIXEL_BALANCE = 2;

export class DSliderRangeHorizontal<
	THEME extends DThemeSliderRangeHorizontal = DThemeSliderRangeHorizontal,
	OPTIONS extends DSliderRangeHorizontalOptions<THEME> = DSliderRangeHorizontalOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _track!: DSliderTrackHorizontal;
	protected _thumb!: DSliderThumb;
	protected _trackSelected!: DSliderTrackSelectedHorizontal;
	protected _value!: DSliderValue;
	protected _trackWidth!: number;
	protected _thumbWidth!: number;
	protected _offset!: number;
	protected _yOffset!: number;
	protected _ratioValue!: number;
	protected _onThumbMove!: ( e: InteractionEvent ) => void;
	protected _onThumbUp!: ( e: InteractionEvent ) => void;
	protected _onTrackUp!: ( e: InteractionEvent ) => void;
	protected _onTrackSelectedUp!: ( e: InteractionEvent ) => void;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._ratioValue = DEFAULT_RATIO;

		this._value = new DSliderValue({
			y: 0
		});
		this._value.text = this._value.value;
		this._track = new DSliderTrackHorizontal();
		this._thumb = new DSliderThumb({
			x: 0,
			y: this._value.height + VERTICAL_PIXEL_BALANCE
		});
		this._trackSelected = new DSliderTrackSelectedHorizontal();
		this._trackSelected.width = 0;

		// calculate y-offset to determine y-coordinate of slider bar
		this._yOffset = this._value.height + VERTICAL_PIXEL_BALANCE +
						this._thumb.height / 2 - this._track.height / 2;
		this._track.y = this._yOffset;
		this._trackSelected.y = this._yOffset;

		this._trackWidth = Number(this._track.theme.getWidth());
		this._thumbWidth = Number(this._thumb.theme.getWidth());

		// this is offset beetween x-coordinate of slider value and slider button
		this._offset = this._value.width / 2 - this._thumb.width / 2;
		this._value.x = this._thumb.x - this._offset;

		this.addChild(this._track);
		this.addChild(this._trackSelected);
		this.addChild(this._thumb);

		this._track.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			if ( this._value ) {
				this.addChild(this._value);
			}
			this.onTrackDown(e.data.global);
		});
		this._trackSelected.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			if ( this._value ) {
				this.addChild(this._value);
			}
			this.onTrackSelectedDown(e.data.global);
		});
		this._onTrackUp = ( e: InteractionEvent ): void => {
			this.onTrackUp( e );
			if ( this._value ) {
				this.removeChild(this._value);
			}
		};
		this._onTrackSelectedUp = ( e: InteractionEvent ): void => {
			this.onTrackSelectedUp( e );
			if ( this._value ) {
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
		const x = Math.max( 0, Math.min( this._trackWidth, point.x ) );
		if ( x < this._thumbWidth / 2 ) {
			this._thumb.x = 0;
		} else if (x > (this._trackWidth - this._thumbWidth / 2)) {
			this._thumb.x = this._trackWidth - this._thumbWidth;
		} else {
			this._thumb.x = x - this._thumbWidth / 2;
		}
		this._ratioValue = x / this._trackWidth;
		this._trackSelected.width = this._thumb.x;
		this._value.x = this._thumb.x - this._offset;
	}
	updateValue(min: number, max: number) {
		const value: number = min + this._ratioValue * (max - min);
		this._value.value = Math.round(value);
		this._value.text = String(this._value.value);
	}
	updateThumb(min: number, max: number, value: number) {
		this._ratioValue = (value - min) / (max - min);
		const x =  this._ratioValue * this._trackWidth;
		if (x > (this._trackWidth - this._thumbWidth / 2)) {
			this._thumb.x = this._trackWidth - this._thumbWidth;
		} else {
			this._thumb.x = x;
		}
		this._trackSelected.width = this._thumb.x;
		this._value.x = this._thumb.x - this._offset;
		this._value.value = value;
		this._value.text = String(value);
	}
	get value(): number {
		return this._value.value;
	}
	get thumb(): DSliderThumb {
		return this._thumb;
	}
	get track(): DSliderTrackHorizontal {
		return this._track;
	}
	get trackSelected(): DSliderTrackSelectedHorizontal {
		return this._trackSelected;
	}
	get yOffset(): number {
		return this._yOffset;
	}
	protected getType(): string {
		return "DSliderRangeHorizontal";
	}

}
