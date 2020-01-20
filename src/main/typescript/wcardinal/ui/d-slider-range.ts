/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DSliderBarChosen } from './d-slider-bar-chosen';
import { DSliderBar } from './d-slider-bar';
import { DSliderButton } from './d-slider-button';
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
// this is space beetween slider value and slider button
const VERTICAL_PIXEL_BALANCE = 2;

export class DSliderRange<
	THEME extends DThemeSliderRange = DThemeSliderRange,
	OPTIONS extends DSliderRangeOptions<THEME> = DSliderRangeOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _sliderBar?: DSliderBar;
	protected _sliderButton?: DSliderButton;
	protected _sliderBarChosen?: DSliderBarChosen;
	protected _sliderValue?: DSliderValue;
	protected _sliderBarWidth!: number;
	protected _sliderButtonWidth!: number;
	protected _offset!: number;
	protected _yOffset!: number;
	protected _ratioValue!: number;
	protected _onSliderButtonMove!: ( e: InteractionEvent ) => void;
	protected _onSliderButtonUp!: ( e: InteractionEvent ) => void;
	protected _onSliderBarUp!: ( e: InteractionEvent ) => void;
	protected _onSliderBarChosenUp!: ( e: InteractionEvent ) => void;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._ratioValue = DEFAULT_RATIO;

		this._sliderValue = new DSliderValue({
			y: 0
		});
		this._sliderValue.text = this._sliderValue.value;
		this._sliderBar = new DSliderBar();
		this._sliderButton = new DSliderButton({
			x: 0,
			y: this._sliderValue.height + VERTICAL_PIXEL_BALANCE
		});
		this._sliderBarChosen = new DSliderBarChosen();
		this._sliderBarChosen.width = 0;

		// calculate y-offset to determine y-coordinate of slider bar
		this._yOffset = this._sliderValue.height + VERTICAL_PIXEL_BALANCE + this._sliderButton.height / 2 - this._sliderBar.height / 2;
		this._sliderBar.y = this._yOffset;
		this._sliderBarChosen.y = this._yOffset;

		this._sliderBarWidth = Number(this._sliderBar.theme.getWidth());
		this._sliderButtonWidth = Number(this._sliderButton.theme.getWidth());

		// this is offset beetween x-coordinate of slider value and slider button
		this._offset = this._sliderValue.width / 2 - this._sliderButton.width / 2;
		this._sliderValue.x = this._sliderButton.x - this._offset;

		this.addChild(this._sliderBar);
		this.addChild(this._sliderBarChosen);
		this.addChild(this._sliderButton);

		this._sliderBar.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			if ( this._sliderValue ) {
				this.addChild(this._sliderValue);
			}
			this.onSliderBarDown(e.data.global);
		});
		this._sliderBarChosen.on( UtilPointerEvent.down, ( e: InteractionEvent) => {
			if ( this._sliderValue ) {
				this.addChild(this._sliderValue);
			}
			this.onSliderBarChosenDown(e.data.global);
		});
		this._onSliderBarUp = ( e: InteractionEvent ): void => {
			this.onSliderBarUp( e );
			if ( this._sliderValue ) {
				this.removeChild(this._sliderValue);
			}
		};
		this._onSliderBarChosenUp = ( e: InteractionEvent ): void => {
			this.onSliderBarChosenUp( e );
			if ( this._sliderValue ) {
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
		const x = Math.max( 0, Math.min( this._sliderBarWidth, point.x ) );
		if (this._sliderButton && this._sliderValue && this._sliderBarChosen) {
			if ( x < this._sliderButtonWidth / 2 ) {
				this._sliderButton.x = 0;
			} else if (x > (this._sliderBarWidth - this._sliderButtonWidth / 2)) {
				this._sliderButton.x = this._sliderBarWidth - this._sliderButtonWidth;
			} else {
				this._sliderButton.x = x - this._sliderButtonWidth / 2;
			}
			this._ratioValue = x / this._sliderBarWidth;
			this._sliderBarChosen.width = this._sliderButton.x;
			this._sliderValue.x = this._sliderButton.x - this._offset;
		}
	}
	updateSliderValue(min: number, max: number) {
		const value: number = min + this._ratioValue * (max - min);
		if (this._sliderValue) {
			this._sliderValue.value = Math.round(value);
			this._sliderValue.text = String(this._sliderValue.value);
		}
	}
	get sliderButton() : DSliderButton | null {
		if (this._sliderButton) {
			return this._sliderButton;
		}
		return null;
	}
	get sliderBar() : DSliderBar | null {
		if (this._sliderBar) {
			return this._sliderBar;
		}
		return null;
	}
	get sliderBarChosen() : DSliderBarChosen | null {
		if (this._sliderBarChosen) {
			return this._sliderBarChosen;
		}
		return null;
	}
	get yOffset(): number{
		if (this._yOffset) {
			return this._yOffset;
		}
		return 0;
	}
	protected getType(): string {
		return "DSliderRange";
	}


}
