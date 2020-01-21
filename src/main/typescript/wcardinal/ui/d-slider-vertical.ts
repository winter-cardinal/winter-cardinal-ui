/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DSliderMax } from "./d-slider-max";
import { DSliderMin } from "./d-slider-min";
import { DSliderRangeVertical } from "./d-slider-range-vertical";
import InteractionEvent = interaction.InteractionEvent;
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DSliderVerticalOptions<
	THEME extends DThemeSliderVertical = DThemeSliderVertical
> extends DBaseOptions<THEME> {

}

export interface DThemeSliderVertical extends DThemeBase {

}

export class DSliderVertical<
	THEME extends DThemeSliderVertical = DThemeSliderVertical,
	OPTIONS extends DSliderVerticalOptions<THEME> = DSliderVerticalOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _minRange!: DSliderMin;
	protected _sliderRange!: DSliderRangeVertical;
	protected _maxRange!: DSliderMax;
	protected _onSliderButtonMove!: ( e: InteractionEvent ) => void;
	protected _onSliderButtonUp!: ( e: InteractionEvent ) => void;

	protected init( options?: OPTIONS ) {
		super.init( options );

		/* Init elements for slider */
		this._sliderRange = new DSliderRangeVertical({
			y: 0
		});
		this._minRange = new DSliderMin({
			x: 0
		});
		this._minRange.text = String(this._minRange.value);
		this._maxRange = new DSliderMax({
			x: 0
		});
		this._maxRange.text = String(this._maxRange.value);
		// calculate x,y coordinate for slider elements
		this._sliderRange.x = this._minRange.width;
		this._minRange.y = this._sliderRange.height - this._minRange.height;
		this._maxRange.y = this._sliderRange.Yoffset;
		this._sliderRange.updateSliderValue(this._minRange.value, this._maxRange.value);

		this.addChild(this._minRange);
		this.addChild(this._sliderRange);
		this.addChild(this._maxRange);

		const sliderBar = this._sliderRange.sliderBar;
		const sliderBarChosen = this._sliderRange.sliderBarChosen;
		const sliderButton = this._sliderRange.sliderButton;
		sliderBar.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			this.onsliderBarDown( e );
		});
		sliderBarChosen.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			this.onsliderBarChosenDown( e );
		});
		sliderButton.on(UtilPointerEvent.down, ( e: InteractionEvent ) => {
			this.onSliderButtonDown( e );
		});
		this._onSliderButtonMove = ( e: InteractionEvent ): void => {
			this.onSliderButtonMove();
		};
		this._onSliderButtonUp = ( e: InteractionEvent ): void => {
			this.onSliderButtonUp( e );
		};
	}
	protected onsliderBarDown(e: InteractionEvent ): void {
		this._sliderRange.updateSliderValue(this._minRange.value, this._maxRange.value);
	}
	protected onsliderBarChosenDown(e: InteractionEvent ): void {
		this._sliderRange.updateSliderValue(this._minRange.value, this._maxRange.value);
	}
	protected onSliderButtonDown(e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.move, this._onSliderButtonMove );
			stage.on( UtilPointerEvent.up, this._onSliderButtonUp );
		}
	}
	protected onSliderButtonUp( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.move, this._onSliderButtonMove );
			stage.off( UtilPointerEvent.up, this._onSliderButtonUp );
		}
	}
	protected onSliderButtonMove(): void {
		this._sliderRange.updateSliderValue(this._minRange.value, this._maxRange.value);
	}
	protected getType(): string {
		return "DSliderVertical";
	}
}
