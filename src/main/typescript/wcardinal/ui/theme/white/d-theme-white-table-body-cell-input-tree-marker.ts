/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeTableBodyCellInputTreeMarker } from "../../d-table-body-cell-input-tree-marker";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";
import { DThemeWhiteTableBodyCellTrees } from "./d-theme-white-table-body-cell-trees";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";

export class DThemeWhiteTableBodyCellInputTreeMarker extends DThemeWhiteButtonBase
	implements DThemeTableBodyCellInputTreeMarker {

	getHeight(): DCoordinateSize {
		return "100%";
	}

	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getOutlineColor( state: DBaseState ): number | null {
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

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return DThemeWhiteTableBodyCellTrees.getImageSource( state );
	}

	getImageTintColor( state: DBaseState ): number | null {
		return DThemeWhiteTableBodyCellTrees.getImageTintColor( state );
	}

	getImageTintAlpha( state: DBaseState ): number {
		return DThemeWhiteTableBodyCellTrees.getImageTintAlpha( state );
	}
}
