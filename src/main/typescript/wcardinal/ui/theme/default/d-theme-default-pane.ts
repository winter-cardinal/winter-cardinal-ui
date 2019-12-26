/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DDragMode } from "../../d-drag-mode";
import { DThemePane } from "../../d-pane";
import { DThemeDefaultBase } from "./d-theme-default-base";
import { DThemeDefaultConstants } from "./d-theme-default-constants";

export class DThemeDefaultPane extends DThemeDefaultBase implements DThemePane {
	isOverflowMaskEnabled() {
		return true;
	}

	getBackgroundColor( state: DBaseState ): number | null {
		return DThemeDefaultConstants.BACKGROUND_COLOR;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}

	getWheelSpeed(): number {
		return 2.24;
	}

	getDragMode(): DDragMode {
		return DDragMode.TOUCH;
	}
}
