/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DThemeImageBase } from "../../d-image-base";
import { DThemeWhiteTextBase } from "./d-theme-white-text-base";

export class DThemeWhiteImageBase extends DThemeWhiteTextBase implements DThemeImageBase {
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

	getImageTintColor( state: DBaseState ): number | null {
		return this.getColor( state );
	}

	getImageTintAlpha( state: DBaseState ): number {
		return this.getAlpha( state );
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
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

	getSecondaryImageTintColor( state: DBaseState ): number | null {
		return this.getImageTintColor( state );
	}

	getSecondaryImageTintAlpha( state: DBaseState ): number {
		return this.getImageTintAlpha( state );
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

	getTertiaryImageTintColor( state: DBaseState ): number | null {
		return this.getImageTintColor( state );
	}

	getTertiaryImageTintAlpha( state: DBaseState ): number {
		return this.getImageTintAlpha( state );
	}
}
