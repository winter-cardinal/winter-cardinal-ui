/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeMenuSided } from "../../d-menu-sided";
import { DThemeDefaultPane } from "./d-theme-default-pane";

export class DThemeDefaultMenuSided extends DThemeDefaultPane implements DThemeMenuSided {
	getBackgroundColor( state: DBaseState ): number | null {
		return 0xffffff;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
