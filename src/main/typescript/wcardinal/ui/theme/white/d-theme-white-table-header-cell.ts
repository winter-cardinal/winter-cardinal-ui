/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DTableState } from "../../d-table-state";
import { DThemeTableHeaderCell } from "../../d-table-header-cell";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButtonChecks } from "./d-theme-white-button-checks";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteImage } from "./d-theme-white-image";

// Material Design icons by Google.
// Apache license version 2.0.
DThemeWhiteAtlas.add( "sorted_descending", 24, 24,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M7 16l5-5 5 5H7z" fill="#fff" />` +
	`</g>`
);

DThemeWhiteAtlas.add( "sorted_ascending", 24, 24,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M7 12l5 5 5-5H7z" fill="#fff" />` +
	`</g>`
);

export class DThemeWhiteTableHeaderCell extends DThemeWhiteImage<string | null> implements DThemeTableHeaderCell {
	protected readonly BACKGROUND_COLOR = UtilRgb.darken( DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.02 );
	protected readonly BACKGROUND_COLOR_HOVERED = UtilRgb.darken( this.BACKGROUND_COLOR, 0.017 );
	protected readonly BACKGROUND_COLOR_PRESSED = UtilRgb.darken( this.BACKGROUND_COLOR, 0.034 );
	protected readonly BORDER_COLOR = UtilRgb.darken( DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD, 0.055 );

	getBackgroundColor( state: DBaseStateSet ): number | null {
		if( state.inDisabled ) {
			return ( state.is( DTableState.FROZEN ) ) ?
				this.BACKGROUND_COLOR : null;
		} else if( state.isPressed ) {
			return this.BACKGROUND_COLOR_PRESSED;
		} else if( state.isFocused || state.isHovered ) {
			return this.BACKGROUND_COLOR_HOVERED;
		} else {
			return ( state.is( DTableState.FROZEN ) ) ?
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
		if( state.is( DTableState.END ) ) {
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

	newTextValue(): DStateAwareOrValueMightBe<string | null> {
		return null;
	}

	getSecondaryImageTintColor( state: DBaseStateSet ): number | null {
		if( state.is( DTableState.CHECKABLE ) ) {
			return DThemeWhiteButtonChecks.getImageTintColor( state );
		}
		return super.getSecondaryImageTintColor( state );
	}

	getSecondaryImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		if( state.is( DTableState.CHECKABLE ) ) {
			return DThemeWhiteButtonChecks.getImageSource( state );
		}
		return null;
	}

	getSecondaryImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}

	getSecondaryImageAlignVertical(): DAlignVertical {
		return DAlignVertical.MIDDLE;
	}

	getSecondaryImageAlignWith(): DAlignWith {
		return DAlignWith.TEXT;
	}

	getTertiaryImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		if( state.is( DTableState.SORTED_ASCENDING ) ) {
			return DThemeWhiteAtlas.mappings.sorted_ascending;
		} else if( state.is( DTableState.SORTED_DESCENDING ) ) {
			return DThemeWhiteAtlas.mappings.sorted_descending;
		} else {
			return null;
		}
	}

	getTertiaryImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getTertiaryImageAlignWith(): DAlignWith {
		return DAlignWith.PADDING;
	}

	getCursor( state: DBaseStateSet ): string {
		if( ! state.isActionable ) {
			return "";
		}
		if( state.is( DTableState.CHECKABLE ) || state.is( DTableState.SORTABLE ) ) {
			return "pointer";
		}
		return "";
	}
}
