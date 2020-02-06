/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeTableBodyCellLinkEdit } from "../../d-table-body-cell-link-edit";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkTableBodyCellLink } from "./d-theme-dark-table-body-cell-link";

// Material Design icons by Google.
// Apache license version 2.0.
DThemeDarkAtlas.add( "button_edit_mark", 21, 21,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83` +
		` 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm` +
		`-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" fill="#fff"/>` +
	`</g>`
);

export class DThemeDarkTableBodyCellLinkEdit extends DThemeDarkTableBodyCellLink
	implements DThemeTableBodyCellLinkEdit {
	readonly IMAGE_TINT_COLOR = 0x646464;
	readonly IMAGE_TINT_COLOR_FOCUSED = UtilRgb.darken( this.IMAGE_TINT_COLOR, DThemeDarkConstants.TINT_FOCUS_ALPHA );

	getImageTintColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) || DBaseStates.isReadOnly( state ) ) {
			if( DBaseStates.isFocused( state ) ) {
				return this.IMAGE_TINT_COLOR_FOCUSED;
			} else {
				return this.IMAGE_TINT_COLOR;
			}
		} else {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		}
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return DThemeDarkAtlas.mappings.button_edit_mark;
	}
}
