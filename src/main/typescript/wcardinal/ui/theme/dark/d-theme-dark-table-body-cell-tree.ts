/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
import { DThemeTableBodyCellTree } from "../../d-table-body-cell-tree";
import { DThemeDarkLinks } from "./d-theme-dark-links";
import { DThemeDarkTableBodyCellButton } from "./d-theme-dark-table-body-cell-button";
import { DThemeDarkTableBodyCellTrees } from "./d-theme-dark-table-body-cell-trees";

DThemeDarkLinks.init();
DThemeDarkTableBodyCellTrees.init();

export class DThemeDarkTableBodyCellTree extends DThemeDarkTableBodyCellButton implements DThemeTableBodyCellTree {
	getLevelPadding( level: number ): number {
		return 24 + level * 20 - this.getPaddingLeft();
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.PADDING;
	}

	getImageMarginHorizontal(): number {
		return -19;
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return DThemeDarkTableBodyCellTrees.getImageSource( state );
	}

	getLinkMenuOptions(): DMenuOptions<DLinkMenuItemId> {
		return DThemeDarkLinks.getLinkMenuOptions();
	}
}
