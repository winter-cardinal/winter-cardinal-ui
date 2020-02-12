/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DSliderLabel, DSliderLabelOptions } from "./d-slider-label";
import { DSliderThumb } from "./d-slider-thumb";
import { DSliderTrack } from "./d-slider-track";
import { DSliderValue, DSliderValueOptions } from "./d-slider-value";
import InteractionEvent = interaction.InteractionEvent;
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DSliderOptions<THEME extends DThemeSlider> extends DBaseOptions<THEME> {
	min?: DSliderLabelOptions;
	max?: DSliderLabelOptions;
	value?: DSliderValueOptions;
}

export interface DThemeSlider extends DThemeBase {

}

// RATIO to calculate slider value from min, max values.
// Default ratio is zero mean default slider value is zero
const DEFAULT_RATIO = 0;

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
	protected _onThumbMoveBound!: ( e: InteractionEvent ) => void;
	protected _onThumbUpBound!: ( e: InteractionEvent ) => void;
	protected _onTrackUp!: ( e: InteractionEvent ) => void;
	protected _onTrackSelectedUp!: ( e: InteractionEvent ) => void;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this.prepareValues( options );
		this.updateCoordinates();
		this.appendChildToView();
		this.initListeners();
	}

	protected prepareValues( options?: OPTIONS ): void {
		this._ratioValue = DEFAULT_RATIO;

		this._value = this.newValue( options );
		this._track = this.newTrack();
		this._thumb = this.newThumb();
		this._min = this.newMin( options );
		this._max = this.newMax( options );

		this._min.text = `${this._min.value}`;
		this._max.text = `${this._max.value}`;

		this._trackSelected = this.newTrackSelected();
		this._trackSelected.setActive(true);
	}

	protected appendChildToView() {
		this.addChild(this._track);
		this.addChild(this._trackSelected);
		this.addChild(this._thumb);
		this.addChild(this._min);
		this.addChild(this._max);
	}

	protected initListeners() {
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
			this.onThumbDownBound( e );
		});

		this._onThumbMoveBound = ( e: InteractionEvent ): void => {
			this.onThumbMoveBound( e );
		};

		this._onThumbUpBound = ( e: InteractionEvent ): void => {
			this.onThumbUpBound( e );
			if (this._value) {
				this.removeChild(this._value);
			}
		};
	}

	protected newValue( options?: OPTIONS ): DSliderValue {
		if( options && options.value ) {
			return new DSliderValue( options.value );
		}
		return new DSliderValue();
	}

	protected newMax(options?: OPTIONS): DSliderLabel {
		let maxNumber: number = 1;
		if( options && options.max && options.max.value ) {
			maxNumber = options.max.value;
		}
		return new DSliderLabel({
			value: maxNumber
		});
	}

	protected newMin( options?: OPTIONS ): DSliderLabel {
		let minNumber: number = 0;
		if( options && options.min && options.min.value ) {
			minNumber = options.min.value;
		}
		return new DSliderLabel({
			value: minNumber
		});
	}

	protected newThumb(): DSliderThumb {
		return new DSliderThumb();
	}

	protected abstract newTrack(): DSliderTrack;
	protected abstract newTrackSelected(): DSliderTrack;
	protected abstract updateCoordinates(): void;
	protected abstract onPick( global: Point ): void;
	protected abstract updateThumb(min: number, max: number, value: number): void;

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

	protected onThumbMoveBound( e: InteractionEvent ): void {
		this.onPick( e.data.global );
	}

	protected onThumbDownBound( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.move, this._onThumbMoveBound );
			stage.on( UtilPointerEvent.up, this._onThumbUpBound );
		}
	}

	protected onThumbUpBound( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.move, this._onThumbMoveBound );
			stage.off( UtilPointerEvent.up, this._onThumbUpBound );
		}
	}

	protected updateValue(min: number, max: number) {
		const precision = this._value.precision;
		const value: number = min + this._ratioValue * (max - min);
		this._value.value = this.round( value, precision );
		this._value.text = this._value.value;
	}

	protected round(value: number, precision: number): number {
		if ( precision > 0 ) {
			return value = Math.round((value) * Math.pow(10, precision)) / Math.pow(10, precision);
		}
		return	value = Math.round((value));
	}

	get value(): number {
		return this._value.value;
	}

	set value( value: number ) {
		if( this.min <= value  && value <= this.max) {
			this._value.value = value;
		}
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
