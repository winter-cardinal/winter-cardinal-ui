/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DThemeWhitePane } from "./d-theme-default-pane";

export class DThemeWhiteList extends DThemeWhitePane {
	getBackgroundColor( state: DBaseState ): number | null {
		return 0xffffff;
	}

	getBorderAlign( state: DBaseState ): number {
		return 1;
	}
}
