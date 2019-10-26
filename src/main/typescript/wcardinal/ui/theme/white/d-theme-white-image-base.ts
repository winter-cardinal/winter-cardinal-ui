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
}
