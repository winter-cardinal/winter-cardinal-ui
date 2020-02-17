/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DSliderLabel, DSliderLabelOptions } from "./d-slider-label";
import { DSliderThumb, DSliderThumbOptions } from "./d-slider-thumb";
import { DSliderTrack, DSliderTrackOptions } from "./d-slider-track";
import { DSliderValue, DSliderValueOptions } from "./d-slider-value";
import InteractionEvent = interaction.InteractionEvent;
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DSliderOptions<THEME extends DThemeSlider> extends DBaseOptions<THEME> {
	min?: DSliderLabelOptions;
	max?: DSliderLabelOptions;
	value?: DSliderValueOptions;
	track?: DSliderTrackOptions;
	thumb?: DSliderThumbOptions;
}

export interface DThemeSlider extends DThemeBase {

}

export abstract class DSlider<
	THEME extends DThemeSlider = DThemeSlider,
	OPTIONS extends DSliderOptions<THEME> = DSliderOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _track!: DSliderTrack;
	protected _thumb!: DSliderThumb;
	protected _trackSelected!: DSliderTrack;
	protected _value!: DSliderValue;
	protected _roundNumber!: number;
	protected _offset!: number;
	protected _yOffset!: number;
	protected _ratioValue!: number;
	protected _min!: DSliderLabel;
	protected _max!: DSliderLabel;
	protected _onThumbMove!: ( e: InteractionEvent ) => void;
	protected _onThumbUp!: ( e: InteractionEvent ) => void;
	protected _onTrackUpBound!: ( e: InteractionEvent ) => void;
	protected _onTrackSelectedUpBound!: ( e: InteractionEvent ) => void;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this.prepareValues( options );
		this.assertSize( options );
		this.updateCoordinates();
		this.appendChildToView();
		this.initListeners();
		this.updateThumb( this._min.value, this._max.value, this._value.value );
	}

	protected prepareValues( options?: OPTIONS ): void {
		this._ratioValue = 0;
		this._value = this.newValue( options );
		this._track = this.newTrack( options );
		this._min = this.newMin( options );
		this._max = this.newMax( options );
		this._thumb = this.newThumb();

		this._min.text = `${this._min.value}`;
		this._max.text = `${this._max.value}`;

		this._trackSelected = this.newTrackSelected( options );
		this._trackSelected.setActive( true );
		this._value.visible = false;
	}

	protected appendChildToView() {
		this.addChild( this._track );
		this.addChild( this._trackSelected );
		this.addChild( this._thumb );
		this.addChild( this._min );
		this.addChild( this._max );
		this.addChild( this._value );
	}

	protected initListeners() {
		this._track.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			this._value.visible = true;
			this.onTrackDown( e.data.global );
		});

		this._trackSelected.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			this._value.visible = true;
			this.onTrackSelectedDown( e.data.global );
		});

		this._onTrackUpBound = ( e: InteractionEvent ): void => {
			this.onTrackUpBound( e );
			this._value.visible = false;
		};

		this._onTrackSelectedUpBound = ( e: InteractionEvent ): void => {
			this.onTrackSelectedUpBound( e );
			this._value.visible = false;
		};

		this._thumb.on( UtilPointerEvent.down, ( e: InteractionEvent ) => {
			this._value.visible = true;
			this.onThumbDown( e );
		});

		this._onThumbMove = ( e: InteractionEvent ): void => {
			this.onThumbMove( e );
		};

		this._onThumbUp = ( e: InteractionEvent ): void => {
			this.onThumbUp( e );
			this._value.visible = false;
		};
	}

	protected newValue( options?: OPTIONS ): DSliderValue {
		return new DSliderValue( options && options.value );
	}

	protected newMax(options?: OPTIONS): DSliderLabel {
		const max = options && options.max;
		return new DSliderLabel({
			value: ( max && max.value ) ?? 1
		});
	}

	protected newMin( options?: OPTIONS ): DSliderLabel {
		const min = options && options.min;
		return new DSliderLabel({
			value: ( min && min.value ) ?? 0
		});
	}

	protected newThumb( options?: OPTIONS ): DSliderThumb {
		return new DSliderThumb( options && options.thumb );
	}

	protected abstract newTrack(options?: OPTIONS): DSliderTrack;
	protected abstract newTrackSelected(options?: OPTIONS): DSliderTrack;
	protected abstract updateCoordinates(): void;
	protected abstract onPick( global: Point ): void;
	protected abstract updateThumb( min: number, max: number, value: number ): void;
	protected abstract assertSize( options?: OPTIONS ): void;

	protected onTrackDown( global: Point ) {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.up, this._onTrackUpBound );
		}
		this.onPick( global );
	}

	protected onTrackSelectedDown( global: Point ) {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.up, this._onTrackSelectedUpBound );
		}
		this.onPick( global );
	}

	protected onTrackUpBound( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.up, this._onTrackUpBound );
		}
	}

	protected onTrackSelectedUpBound( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.up, this._onTrackSelectedUpBound );
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

	protected updateValue( min: number, max: number ) {
		const value: number = min + this._ratioValue * ( max - min );
		this._value.value = this._value.round( value );
		this._value.text = this._value.value;
	}

	get value(): number {
		return this._value.value;
	}

	set value( value: number ) {
		this._value.value = Math.max( this._min.value, Math.min( this._max.value, value ) );
	}

	set min( min: number ) {
		if( min < this.max ) {
			this._min.value = min;
		}
	}

	get min(): number {
		return this._min.value;
	}

	set max( max: number ) {
		if( max > this.min ) {
			this._max.value = max;
		}
	}

	get max(): number {
		return this._max.value;
	}

	get thumb(): DSliderThumb {
		return this._thumb;
	}

	get track(): DSliderTrack {
		return this._track;
	}

	get trackSelected(): DSliderTrack {
		return this._trackSelected;
	}

	get yOffset(): number {
		return this._yOffset;
	}

	protected getType(): string {
		return "DSlider";
	}

}
