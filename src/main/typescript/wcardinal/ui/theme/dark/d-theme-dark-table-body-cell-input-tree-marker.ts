/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBodyCellInputTreeMarker } from "../../d-table-body-cell-input-tree-marker";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";
import { DThemeDarkTableBodyCellTrees } from "./d-theme-dark-table-body-cell-trees";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";

export class DThemeDarkTableBodyCellInputTreeMarker<VALUE = unknown>
	extends DThemeDarkButtonBase<VALUE>
	implements DThemeTableBodyCellInputTreeMarker<VALUE>
{
	getX(): DCoordinatePosition {
		return "padding";
	}

	getY(): DCoordinatePosition {
		return "padding";
	}

	getHeight(): DCoordinateSize {
		return DThemeDarkTableBodyCells.getHeight();
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeDarkTableBodyCells.getBackgroundColor(state);
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return DThemeDarkTableBodyCells.getBackgroundAlpha(state);
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getBorderAlign(state: DBaseStateSet): number {
		return DThemeDarkTableBodyCells.getBorderAlign(state);
	}

	getBorderMask(state: DBaseStateSet): DBorderMask {
		return DThemeDarkTableBodyCells.getBorderMask(state);
	}

	getColor(state: DBaseStateSet): number {
		return DThemeDarkTableBodyCells.getColor(state);
	}

	getAlpha(state: DBaseStateSet): number {
		return DThemeDarkTableBodyCells.getAlpha(state);
	}

	getCornerMask(): DCornerMask {
		return DThemeDarkTableBodyCells.getCornerMask();
	}

	getOutlineColor(state: DBaseStateSet): number | null {
		return null;
	}

	getOutlineAlign(state: DBaseStateSet): number {
		return DThemeDarkTableBodyCells.getOutlineAlign(state);
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.BORDER;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeDarkTableBodyCellTrees.getImageSource(state);
	}

	getImageTintColor(state: DBaseStateSet): number | null {
		return this.getColor(state);
	}

	getImageTintAlpha(state: DBaseStateSet): number {
		return this.getAlpha(state) * 0.5;
	}
}
