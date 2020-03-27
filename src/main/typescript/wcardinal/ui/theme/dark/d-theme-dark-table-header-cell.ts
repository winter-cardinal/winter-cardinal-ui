/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DTableCellState } from "../../d-table-cell-state";
import { DThemeTableHeaderCell } from "../../d-table-header-cell";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkImage } from "./d-theme-dark-image";

// Material Design icons by Google.
// Apache license version 2.0.
DThemeDarkAtlas.add( "sorted_descending", 24, 24,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M7 16l5-5 5 5H7z" fill="#fff" />` +
	`</g>`
);

DThemeDarkAtlas.add( "sorted_ascending", 24, 24,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M7 12l5 5 5-5H7z" fill="#fff" />` +
	`</g>`
);

export class DThemeDarkTableHeaderCell extends DThemeDarkImage implements DThemeTableHeaderCell {
	COLOR = 0x4f4f4f;
	COLOR_HOVERED = UtilRgb.brighten( this.COLOR, 0.04 );
	COLOR_PRESSED = UtilRgb.brighten( this.COLOR, 0.16 );

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return ( state & DTableCellState.FROZEN ) ?
				this.COLOR : null;
		} else if( DBaseStates.isActive( state ) ) {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		} else if( DBaseStates.isPressed( state ) ) {
			return this.COLOR_PRESSED;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.COLOR_HOVERED;
		} else {
			return ( state & DTableCellState.FROZEN ) ?
				this.COLOR : null;
		}
	}

	getBackgroundAlpha( state: DBaseState ): number {
		return 1;
	}

	getBorderColor( state: DBaseState ): number | null {
		return 0x525252;
	}

	getBorderAlign( state: DBaseState ): number {
		return 0;
	}

	getBorderMask( state: DBaseState ): DBorderMask {
		if( state & DTableCellState.END ) {
			return DBorderMask.ALL;
		} else {
			return DBorderMask.NOT_RIGHT;
		}
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}

	getHeight(): DCoordinateSize {
		return "padding";
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	getTextValue( state: DBaseState ): string | null {
		return null;
	}

	newTextValue(): DStateAwareOrValueMightBe<string | null> {
		return null;
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		if( state & DTableCellState.SORTED_ASCENDING ) {
			return DThemeDarkAtlas.mappings.sorted_ascending;
		} else if( state & DTableCellState.SORTED_DESCENDING ) {
			return DThemeDarkAtlas.mappings.sorted_descending;
		} else {
			return null;
		}
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.PADDING;
	}
}
