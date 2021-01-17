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
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";
import { DThemeWhiteTableBodyCellTrees } from "./d-theme-white-table-body-cell-trees";

export class DThemeWhiteTableBodyCellInputTreeMarker<VALUE> extends DThemeWhiteButtonBase<VALUE>
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

	getCursor(): string {
		return "pointer";
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.BORDER;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		return DThemeWhiteTableBodyCellTrees.getImageSource( state );
	}

	getImageTintColor( state: DBaseStateSet ): number | null {
		return DThemeWhiteTableBodyCellTrees.getImageTintColor( state );
	}

	getImageTintAlpha( state: DBaseStateSet ): number {
		return DThemeWhiteTableBodyCellTrees.getImageTintAlpha( state );
	}
}
