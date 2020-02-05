/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkPane } from "./d-theme-dark-pane";

export class DThemeDarkList extends DThemeDarkPane {
	COLOR = 0x646464;

	getBackgroundColor( state: DBaseState ): number | null {
		return 0x000000;
	}

	getBorderColor( state: DBaseState ): number | null {
		if( DBaseStates.isFocused( state ) ) {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		}
		return this.COLOR;
	}

	getBorderAlign( state: DBaseState ): number {
		return 1;
	}
}
