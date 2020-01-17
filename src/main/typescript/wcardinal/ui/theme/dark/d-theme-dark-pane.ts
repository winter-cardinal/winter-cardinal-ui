/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DDragMode } from "../../d-drag-mode";
import { DThemePane } from "../../d-pane";
import { DThemeDarkBase } from "./d-theme-dark-base";

export class DThemeDarkPane extends DThemeDarkBase implements DThemePane {
	COLOR = 0x2C2C2C;

	isOverflowMaskEnabled(): boolean {
		return true;
	}

	getBackgroundColor( state: DBaseState ): number | null {
		return this.COLOR;
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
