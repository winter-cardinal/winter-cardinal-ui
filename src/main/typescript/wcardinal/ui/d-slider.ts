/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DSliderMax } from "./d-slider-max";
import { DSliderMin } from "./d-slider-min";
import { DSliderRange } from "./d-slider-range";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DSliderValues {
	min: number;
	max: number;
	value: number;
}

export interface DSliderOptions<THEME extends DThemeSlider> extends DBaseOptions<THEME> {

}

export interface DThemeSlider extends DThemeBase {

}

export abstract class DSlider<
	THEME extends DThemeSlider = DThemeSlider,
	OPTIONS extends DSliderOptions<THEME> = DSliderOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _min!: DSliderMin;
	protected _range!: DSliderRange;
	protected _max!: DSliderMax;
	protected _onThumbMove!: ( e: InteractionEvent ) => void;
	protected _onThumbUp!: ( e: InteractionEvent ) => void;

	protected init( options?: OPTIONS ) {
		super.init( options );

		/* Init elements for slider */
		this._min = this.createMin();
		this._max = this.createMax();
		this._range = this.createRange();
		this.updateCoordinate();

		this._min.text = String(this._min.value);
		this._max.text = String(this._max.value);

		const track = this._range.track;
		const trackSelected = this._range.trackSelected;
		const thumb = this._range.thumb;

		// this._range.updateValue(this._min.value, this._max.value);

		this.addChild(this._min);
		this.addChild(this._range);
		this.addChild(this._max);

		track.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			this.onTrackDown( e );
		});
		trackSelected.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			this.onTrackSelectedDown( e );
		});
		thumb.on(UtilPointerEvent.down, ( e: InteractionEvent ) => {
			this.onThumbDown( e );
		});
		this._onThumbMove = ( e: InteractionEvent ): void => {
			this.onThumbMove();
		};
		this._onThumbUp = ( e: InteractionEvent ): void => {
			this.onThumbUp( e );
		};

	}

	protected abstract createRange(): DSliderRange;
	protected abstract createMax(): DSliderMax;
	protected abstract createMin(): DSliderMin;
	protected abstract updateCoordinate(): void;

	protected onTrackDown(e: InteractionEvent ): void {
		this._range.updateValue(this._min.value, this._max.value);
	}

	protected onTrackSelectedDown(e: InteractionEvent ): void {
		this._range.updateValue(this._min.value, this._max.value);
	}

	protected onThumbDown(e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.move, this._onThumbMove );
			stage.on( UtilPointerEvent.up, this._onThumbUp );
		}
	}

	protected onThumbUp( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.move, this._onThumbMove );
			stage.off( UtilPointerEvent.up, this._onThumbUp );
		}
	}

	protected onThumbMove(): void {
		this._range.updateValue(this._min.value, this._max.value);
	}

	set values(values: DSliderValues) {
		if (this.isValuesValid(values)) {
			this._min.value = values.min;
			this._min.text = String(this._min.value);
			this._max.value = values.max;
			this._max.text = String(this._max.value);
			this._range.updateThumb(values.min, values.max, values.value);
		}
	}

	get values(): DSliderValues {
		return {
			min: this._min.value,
			max: this._max.value,
			value: this._range.value
		};
	}

	isValuesValid(values: DSliderValues): boolean {
		if (values.max < values.min) {
			return false;
		}
		if (values.value < values.min || values.max < values.value) {
			return false;
		}
		return true;
	}

	protected getType(): string {

		return "DSlider";

	}

}
