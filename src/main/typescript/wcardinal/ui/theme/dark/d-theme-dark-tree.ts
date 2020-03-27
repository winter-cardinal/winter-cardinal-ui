/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DThemeTree } from "../../d-tree";
import { DThemeDarkPane } from "./d-theme-dark-pane";

export class DThemeDarkTree extends DThemeDarkPane implements DThemeTree {
	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderAlign( state: DBaseState ): number {
		return 1;
	}
}
