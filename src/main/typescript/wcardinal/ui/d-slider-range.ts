/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DSliderThumb } from "./d-slider-thumb";
import { DSliderTrack, DSliderTrackOptions } from "./d-slider-track";
import { DSliderTrackSelected } from "./d-slider-track-selected";
import { DSliderValue } from "./d-slider-value";
import InteractionEvent = interaction.InteractionEvent;
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DSliderRangeOptions<THEME extends DThemeSliderRange> extends DBaseOptions<THEME> {

}

export interface DThemeSliderRange extends DThemeBase {

}

// RATIO to calculate slider value from min, max values.
// Default ratio is zero mean default slider value is zero
const DEFAULT_RATIO = 0;

export abstract class DSliderRange<
	THEME extends DThemeSliderRange = DThemeSliderRange,
	OPTIONS extends DSliderRangeOptions<THEME> = DSliderRangeOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _track!: DSliderTrack;
	protected _thumb!: DSliderThumb;
	protected _trackSelected!: DSliderTrackSelected;
	protected _value!: DSliderValue;
	protected _trackWidth!: number;
	protected _thumbWidth!: number;
	protected _trackHeight !: any;
	protected _thumbHeight !: any;
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

		this._value = this.createValue();
		this._track = this.createTrack();
		this._thumb = this.createThumb();
		this._trackSelected = this.createTrackSelected();
		this.updateCoordinate();

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

	protected abstract createTrack(): DSliderTrack;
	protected abstract createValue(): DSliderValue;
	protected abstract createThumb(): DSliderThumb;
	protected abstract createTrackSelected(): DSliderTrackSelected;
	protected abstract updateCoordinate(): void;

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
	protected abstract onPick( global: Point ): void;

	updateValue(min: number, max: number) {
		const value: number = min + this._ratioValue * (max - min);
		this._value.value = Math.round(value);
		this._value.text = String(this._value.value);
	}
	abstract updateThumb(min: number, max: number, value: number): void;

	get value(): number {
		return this._value.value;
	}
	get thumb(): DSliderThumb {
		return this._thumb;
	}
	get track(): DSliderTrack {
		return this._track;
	}
	get trackSelected(): DSliderTrackSelected {
		return this._trackSelected;
	}
	get yOffset(): number {
		return this._yOffset;
	}
	protected getType(): string {
		return "DSliderRange";
	}

}
