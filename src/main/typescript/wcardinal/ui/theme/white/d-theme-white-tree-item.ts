/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DThemeTreeItem } from "../../d-Tree-item";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteImage } from "./d-theme-white-image";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DTreeItemState } from '../../d-tree-item-state';

DThemeWhiteAtlas.add( "menu_item_expandable_header_closed", 14, 14,
	`<g transform="scale(1, 0.7)">` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="6 16 10 10 6 4"></polyline>` +
	`</g>`
);

DThemeWhiteAtlas.add( "menu_item_expandable_header_opened", 14, 14,
	`<g transform="scale(0.7, 1)">` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="16 6 10 10 4 6"></polyline>` +
	`</g>`
);

export class DThemeWhiteTreeItem extends DThemeWhiteImage implements DThemeTreeItem {
	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return null;
		} else if( DBaseStates.isActive( state ) ) {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
		} else {
			return null;
		}
	}

	getBackgroundAlpha( state: DBaseState ): number {
		return DThemeWhiteConstants.HIGHLIGHT_ALPHA;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	getWidth(): DCoordinateSize {
		return "100%";
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	getCornerMask(): number {
		return DCornerMask.ALL;
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {

		if (state & DTreeItemState.EXPAND) {
			return DThemeWhiteAtlas.mappings.menu_item_expandable_header_closed;
		}
		else if (state & DTreeItemState.COLLAPSE){
			return DThemeWhiteAtlas.mappings.menu_item_expandable_header_opened;
		}
		else {
			return null;
		}
	}
}
