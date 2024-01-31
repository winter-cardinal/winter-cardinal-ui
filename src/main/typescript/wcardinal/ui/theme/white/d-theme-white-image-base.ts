/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeImageBase } from "../../d-image-base";
import { DThemeWhiteTextBase } from "./d-theme-white-text-base";

export class DThemeWhiteImageBase<VALUE = unknown>
	extends DThemeWhiteTextBase<VALUE>
	implements DThemeImageBase<VALUE>
{
	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}

	getImageAlignVertical(): DAlignVertical {
		return DAlignVertical.MIDDLE;
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.TEXT;
	}

	getImageMarginHorizontal(): number {
		return 5;
	}

	getImageMarginVertial(): number {
		return 5;
	}

	getImageTintColor(state: DBaseStateSet): number | null {
		return this.getColor(state);
	}

	getImageTintAlpha(state: DBaseStateSet): number {
		return this.getAlpha(state);
	}

	getImageRotation(state: DBaseStateSet): number {
		return 0;
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return null;
	}

	getSecondaryImageAlignHorizontal(): DAlignHorizontal {
		return this.getImageAlignHorizontal();
	}

	getSecondaryImageAlignVertical(): DAlignVertical {
		return this.getImageAlignVertical();
	}

	getSecondaryImageAlignWith(): DAlignWith {
		return this.getImageAlignWith();
	}

	getSecondaryImageMarginHorizontal(): number {
		return this.getImageMarginHorizontal();
	}

	getSecondaryImageMarginVertial(): number {
		return this.getImageMarginVertial();
	}

	getSecondaryImageTintColor(state: DBaseStateSet): number | null {
		return this.getImageTintColor(state);
	}

	getSecondaryImageTintAlpha(state: DBaseStateSet): number {
		return this.getImageTintAlpha(state);
	}

	getSecondaryImageRotation(state: DBaseStateSet): number {
		return this.getImageRotation(state);
	}

	getTertiaryImageAlignHorizontal(): DAlignHorizontal {
		return this.getImageAlignHorizontal();
	}

	getTertiaryImageAlignVertical(): DAlignVertical {
		return this.getImageAlignVertical();
	}

	getTertiaryImageAlignWith(): DAlignWith {
		return this.getImageAlignWith();
	}

	getTertiaryImageMarginHorizontal(): number {
		return this.getImageMarginHorizontal();
	}

	getTertiaryImageMarginVertial(): number {
		return this.getImageMarginVertial();
	}

	getTertiaryImageTintColor(state: DBaseStateSet): number | null {
		return this.getImageTintColor(state);
	}

	getTertiaryImageTintAlpha(state: DBaseStateSet): number {
		return this.getImageTintAlpha(state);
	}

	getTertiaryImageRotation(state: DBaseStateSet): number {
		return this.getImageRotation(state);
	}
}
