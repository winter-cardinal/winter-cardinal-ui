/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DAlignHorizontal } from "./d-align-horizontal";
import { DSlider, DSliderOptions, DThemeSlider } from "./d-slider";
import { DSliderLabelOptions } from "./d-slider-label";
import { DSliderTrack } from "./d-slider-track";
import { DSliderTrackVertical } from "./d-slider-track-vertical";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";

export interface DSliderVerticalOptions<THEME extends DThemeSliderVertical = DThemeSliderVertical>
	extends DSliderOptions<THEME> {}

export interface DThemeSliderVertical extends DThemeSlider {}

export class DSliderVertical<
	THEME extends DThemeSliderVertical = DThemeSliderVertical,
	OPTIONS extends DSliderVerticalOptions<THEME> = DSliderVerticalOptions<THEME>
> extends DSlider<THEME, OPTIONS> {
	protected newTrack(options?: OPTIONS): DSliderTrack {
		return new DSliderTrackVertical(options?.track);
	}

	protected newTrackSelected(options?: OPTIONS): DSliderTrack {
		return new DSliderTrackVertical(options?.track);
	}

	protected toLabelMinOptions(options?: DSliderLabelOptions): DSliderLabelOptions {
		options = super.toLabelMinOptions(options);
		if (options.x == null) {
			options.x = (p, s) => -s;
		}
		if (options.y == null) {
			options.y = (p, s) => p - s * 0.5;
		}
		const text = options.text || {};
		options.text = text;
		const textAlign = text.align || {};
		text.align = textAlign;
		if (textAlign.horizontal == null) {
			textAlign.horizontal = DAlignHorizontal.RIGHT;
		}
		return options;
	}

	protected toLabelMaxOptions(options?: DSliderLabelOptions): DSliderLabelOptions {
		options = super.toLabelMaxOptions(options);
		if (options.x == null) {
			options.x = (p, s) => -s;
		}
		if (options.y == null) {
			options.y = (p, s) => -s * 0.5;
		}
		const text = options.text || {};
		options.text = text;
		const textAlign = text.align || {};
		text.align = textAlign;
		if (textAlign.horizontal == null) {
			textAlign.horizontal = DAlignHorizontal.RIGHT;
		}
		return options;
	}

	protected onPick(global: Point): void {
		const point = new Point(0, 0);
		this.toLocal(global, undefined, point);
		const height = this.height;
		const y = Math.max(0, Math.min(height, point.y));
		this._ratioValue = (height - y) / height;
		this.moveThumbPosition(y);
	}

	protected onValuesChange(): void {
		const min = this._min.value;
		const max = this._max.value;
		const value = this._value.value;
		this._ratioValue = (value - min) / (max - min);
		const y = this.height * (1 - this._ratioValue);
		this.moveThumbPosition(y);
	}

	protected moveThumbPosition(y: number): void {
		const thumb = this._thumb;
		thumb.y = y - thumb.height * 0.5;

		const trackSelected = this._trackSelected;
		trackSelected.y = y;
		trackSelected.height = this.height - y;

		const value = this._value;
		value.y = y - value.height - this.getValueMargin();

		this.updateValue();
	}

	protected onKeyDown(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isArrowUpKey(e)) {
			this.value += this._value.delta;
		} else if (UtilKeyboardEvent.isArrowDownKey(e)) {
			this.value -= this._value.delta;
		}
		return super.onKeyDown(e);
	}

	protected getType(): string {
		return "DSliderVertical";
	}
}
