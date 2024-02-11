/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import type { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseInteractive } from "../../d-base-interactive";
import type { DBaseStateSet } from "../../d-base-state-set";
import type { DCoordinateSize } from "../../d-coordinate";
import type { DThemePaginationDots } from "../../d-pagination-dots";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";

/* eslint-disable prettier/prettier */
DThemeWhiteAtlas.add("pagination_dots", 21, 21,
	`<g>` +
		`<circle cx="2" cy="11" r="1.1" fill="#fff" stroke="none" />` +
		`<circle cx="10.5" cy="11" r="1.1" fill="#fff" stroke="none" />` +
		`<circle cx="19" cy="11" r="1.1" fill="#fff" stroke="none" />` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeWhitePaginationDots
	extends DThemeWhiteImageBase<string>
	implements DThemePaginationDots
{
	getWidth(): DCoordinateSize {
		return 30;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.NONE;
	}

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusable = false;
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeWhiteAtlas.mappings.pagination_dots;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.BORDER;
	}
}
