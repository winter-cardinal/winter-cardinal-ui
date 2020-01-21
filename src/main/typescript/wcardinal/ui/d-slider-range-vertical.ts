/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DSliderBarChosenVertical } from "./d-slider-bar-chosen-vertical";
import { DSliderBarVertical } from "./d-slider-bar-vertical";
import { DSliderButton } from "./d-slider-button";
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
	protected _sliderValue!: DSliderValue;
	protected _sliderButton!: DSliderButton;
	protected _sliderBar!: DSliderBarVertical;
	protected _sliderBarChosen!: DSliderBarChosenVertical;
	protected _onSliderButtonMove!: ( e: InteractionEvent ) => void;
	protected _onSliderButtonUp!: ( e: InteractionEvent ) => void;
	protected _onSliderBarUp!: ( e: InteractionEvent ) => void;
	protected _onSliderBarChosenUp!: ( e: InteractionEvent ) => void;
	protected _sliderBarHeight !: any;
	protected _sliderButtonHeight !: any;
	protected _ratioValue!: number;
	protected _Yoffset !: number;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._ratioValue = DEFAULT_RATIO;

		this._sliderValue = new DSliderValue({
			x: "CENTER"
		});
		this._sliderBar = new DSliderBarVertical();
		this._sliderBarChosen = new DSliderBarChosenVertical();

		this._sliderButton = new DSliderButton({
			x: "CENTER"
		});
		// offset for y-coordinate beetween slider value and slider button
		this._Yoffset = VERTICAL_PIXEL_BALANCE + this._sliderValue.height;
		this._sliderBar.y = this._Yoffset;
		this._sliderButton.y = this.height - this._sliderButton.height;
		this._sliderBarChosen.y = this._sliderButton.y;
		this._sliderBarChosen.height = this.height - this._sliderBarChosen.y;
		this._sliderValue.y = this._sliderButton.y - this._Yoffset;

		this.addChild(this._sliderBar);
		this.addChild(this._sliderBarChosen);
		this.addChild(this._sliderButton);

		this._sliderBarHeight = this._sliderBar.theme.getHeight();
		this._sliderButtonHeight = this._sliderButton.theme.getHeight();

		this._sliderBar.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			if (this._sliderValue) {
				this.addChild(this._sliderValue);
			}
			this.onSliderBarDown(e.data.global);
		});
		this._sliderBarChosen.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			if (this._sliderValue) {
				this.addChild(this._sliderValue);
			}
			this.onSliderBarChosenDown(e.data.global);
		});
		this._onSliderBarUp = ( e: InteractionEvent ): void => {
			this.onSliderBarUp( e );
			if (this._sliderValue) {
				this.removeChild(this._sliderValue);
			}
		};
		this._onSliderBarChosenUp = ( e: InteractionEvent ): void => {
			this.onSliderBarChosenUp( e );
			if (this._sliderValue) {
				this.removeChild(this._sliderValue);
			}
		};
		this._sliderButton.on(UtilPointerEvent.down, ( e: InteractionEvent ) => {
			if (this._sliderValue) {
				this.addChild(this._sliderValue);
			}
			this.onSliderButtonDown( e );
		});

		this._onSliderButtonMove = ( e: InteractionEvent ): void => {
			this.onSliderButtonMove( e );
		};
		this._onSliderButtonUp = ( e: InteractionEvent ): void => {
			this.onSliderButtonUp( e );
			if (this._sliderValue) {
				this.removeChild(this._sliderValue);
			}
		};
	}
	protected onSliderBarDown( global: Point ) {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.up, this._onSliderBarUp );
		}
		this.onPick( global );
	}
	protected onSliderBarChosenDown( global: Point ) {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.up, this._onSliderBarChosenUp );
		}
		this.onPick( global );
	}
	protected onSliderBarUp( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.up, this._onSliderBarUp );
		}
	}
	protected onSliderBarChosenUp( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.up, this._onSliderBarChosenUp );
		}
	}
	protected onSliderButtonMove( e: InteractionEvent ): void {
		this.onPick( e.data.global );
	}
	protected onSliderButtonDown( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.on( UtilPointerEvent.move, this._onSliderButtonMove );
			stage.on( UtilPointerEvent.up, this._onSliderButtonUp );
		}
	}
	protected onSliderButtonUp( e: InteractionEvent ): void {
		const layer = DApplications.getLayer( this );
		if ( layer ) {
			const stage = layer.stage;
			stage.off( UtilPointerEvent.move, this._onSliderButtonMove );
			stage.off( UtilPointerEvent.up, this._onSliderButtonUp );
		}
	}
	protected onPick( global: Point ) {
		const point = new Point(0, 0);
		this.toLocal( global, undefined, point );
		const y = Math.max( this._Yoffset, Math.min( this.height, point.y ) );
		if (y < (this._sliderButtonHeight / 2 + this._Yoffset)) {
			this._sliderButton.y = this._Yoffset;
		} else if (y > (this.height - this._sliderButtonHeight / 2)) {
			this._sliderButton.y = this.height - this._sliderButtonHeight;
		} else {
			this._sliderButton.y = y - this._sliderButtonHeight / 2;
		}
		this._ratioValue = (this.height - y) / this._sliderBar.height;
		this._sliderBarChosen.y = this._sliderButton.y;
		this._sliderBarChosen.height = this.height - this._sliderBarChosen.y;
		this._sliderValue.y = this._sliderButton.y - this._Yoffset;
	}

	updateSliderValue(min: number, max: number) {
		const value: number = min + this._ratioValue * (max - min);
		this._sliderValue.value = Math.round(value);
		this._sliderValue.text = String(this._sliderValue.value);
	}
	get sliderButton(): DSliderButton {
		return this._sliderButton;
	}
	get sliderBar(): DSliderBarVertical {
		return this._sliderBar;
	}
	get sliderBarChosen(): DSliderBarChosenVertical {
		return this._sliderBarChosen;
	}
	get Yoffset(): number {
		return this._Yoffset;
	}
	protected getType(): string {
		return "DSliderRangeVertical";
	}
}
