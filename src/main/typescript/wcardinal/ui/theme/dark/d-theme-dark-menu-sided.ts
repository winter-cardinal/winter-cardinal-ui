/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeMenuSided } from "../../d-menu-sided";
import { DThemeDarkPane } from "./d-theme-dark-pane";

export class DThemeDarkMenuSided extends DThemeDarkPane implements DThemeMenuSided {
	COLOR = 0x646464;

	getBackgroundColor( state: DBaseState ): number | null {
		return 0x000000;
	}

	getBorderColor( state: DBaseState ): number | null {
		return this.COLOR;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
