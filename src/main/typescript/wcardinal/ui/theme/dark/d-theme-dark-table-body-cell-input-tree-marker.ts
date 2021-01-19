/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableBodyCellInputTreeMarker } from "../../d-table-body-cell-input-tree-marker";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";
import { DThemeDarkTableBodyCellTrees } from "./d-theme-dark-table-body-cell-trees";

export class DThemeDarkTableBodyCellInputTreeMarker<VALUE = unknown> extends DThemeDarkButtonBase<VALUE>
	implements DThemeTableBodyCellInputTreeMarker<VALUE> {

	getHeight(): DCoordinateSize {
		return "100%";
	}

	getBackgroundColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getBorderColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getOutlineColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getCursor( state: DBaseStateSet ): string {
		if( state.inDisabled ) {
			return "";
		}
		return "pointer";
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.BORDER;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		return DThemeDarkTableBodyCellTrees.getImageSource( state );
	}

	getImageTintColor( state: DBaseStateSet ): number | null {
		return DThemeDarkTableBodyCellTrees.getImageTintColor( state );
	}

	getImageTintAlpha( state: DBaseStateSet ): number {
		return DThemeDarkTableBodyCellTrees.getImageTintAlpha( state );
	}
}
