/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
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
	protected readonly BACKGROUND_COLOR = UtilRgb.brighten( DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, 0.02 );
	protected readonly BACKGROUND_COLOR_HOVERED = UtilRgb.brighten( this.BACKGROUND_COLOR, 0.08 );
	protected readonly BACKGROUND_COLOR_PRESSED = UtilRgb.brighten( this.BACKGROUND_COLOR, 0.32 );
	protected readonly BORDER_COLOR = UtilRgb.darken( DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD, 0.05 );

	getBackgroundColor( state: DBaseStateSet ): number | null {
		if( state.inDisabled ) {
			return ( state.is( DTableCellState.FROZEN ) ) ?
				this.BACKGROUND_COLOR : null;
		} else if( state.isActive ) {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		} else if( state.isPressed ) {
			return this.BACKGROUND_COLOR_PRESSED;
		} else if( state.isFocused || state.isHovered ) {
			return this.BACKGROUND_COLOR_HOVERED;
		} else {
			return ( state.is( DTableCellState.FROZEN ) ) ?
				this.BACKGROUND_COLOR : null;
		}
	}

	getBackgroundAlpha( state: DBaseStateSet ): number {
		return 1;
	}

	getBorderColor( state: DBaseStateSet ): number | null {
		return this.BORDER_COLOR;
	}

	getBorderAlign( state: DBaseStateSet ): number {
		return 0;
	}

	getBorderMask( state: DBaseStateSet ): DBorderMask {
		if( state.is( DTableCellState.END ) ) {
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

	getTextValue( state: DBaseStateSet ): string | null {
		return null;
	}

	newTextValue(): DStateAwareOrValueMightBe<string | null> {
		return null;
	}

	getImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		if( state.is( DTableCellState.SORTED_ASCENDING ) ) {
			return DThemeDarkAtlas.mappings.sorted_ascending;
		} else if( state.is( DTableCellState.SORTED_DESCENDING ) ) {
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
