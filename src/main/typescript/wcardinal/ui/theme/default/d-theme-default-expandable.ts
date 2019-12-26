/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCornerMask } from "../../d-corner";
import { DThemeExpandable } from "../../d-expandable";
import { DThemeDefaultLayoutVertical } from "./d-theme-default-layout-vertical";

export class DThemeDefaultExpandable extends DThemeDefaultLayoutVertical implements DThemeExpandable {
	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isActive( state ) ) {
			return this.dThemeConfiguration.getExpandableActiveBackgroundColor();
		}
		return this.dThemeConfiguration.getExpandableBackgroundColor();
	}

	getBackgroundAlpha( state: DBaseState ): number {
		if( DBaseStates.isActive( state ) ) {
			return 0.1;
		}
		return 0;
	}

	getMargin(): number {
		return 0;
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}
}
