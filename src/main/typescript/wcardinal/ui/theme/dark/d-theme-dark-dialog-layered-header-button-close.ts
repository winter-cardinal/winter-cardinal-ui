/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeDialogLayeredHeaderButtonClose } from "../../d-dialog-layered-header-button-close";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";

/* eslint-disable prettier/prettier */
DThemeDarkAtlas.add("dialog_layered_header_button_close", 20, 14,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="15 2 5 12"></polyline>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="5 2 15 12"></polyline>` +
	`</g>`
);
/* eslint-enable prettier/prettier */

const X: DCoordinatePosition = (p, s) => {
	return p - 34;
};

export class DThemeDarkDialogLayeredHeaderButtonClose
	extends DThemeDarkButtonAmbient<string>
	implements DThemeDialogLayeredHeaderButtonClose
{
	getX(): DCoordinatePosition {
		return X;
	}

	getY(): DCoordinatePosition {
		return "center";
	}

	getWidth(): DCoordinateSize {
		return 30;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	getSecondaryImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getSecondaryImageAlignVertical(): DAlignVertical {
		return DAlignVertical.MIDDLE;
	}

	getSecondaryImageAlignWith(): DAlignWith {
		return DAlignWith.PADDING;
	}

	getSecondaryImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeDarkAtlas.mappings.dialog_layered_header_button_close;
	}
}
