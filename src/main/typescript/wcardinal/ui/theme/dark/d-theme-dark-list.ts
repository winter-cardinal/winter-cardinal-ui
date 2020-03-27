/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DThemeDarkPane } from "./d-theme-dark-pane";

export class DThemeDarkList extends DThemeDarkPane {
	getBackgroundColor( state: DBaseState ): number | null {
		return 0x484848;
	}

	getBorderAlign( state: DBaseState ): number {
		return 1;
	}
}
