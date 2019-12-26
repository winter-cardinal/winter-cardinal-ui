/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DThemeDefaultPane } from "./d-theme-default-pane";

export class DThemeDefaultList extends DThemeDefaultPane {
	getBackgroundColor( state: DBaseState ): number | null {
		return 0xffffff;
	}

	getBorderAlign( state: DBaseState ): number {
		return 1;
	}
}
