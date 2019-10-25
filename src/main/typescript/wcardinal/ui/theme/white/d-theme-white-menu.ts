/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinate } from "../../d-coordinate";
import { DThemeMenu } from "../../d-menu";
import { DShadow } from "../../d-shadow";
import { DThemeWhiteLayoutVertical } from "./d-theme-white-layout-vertical";

export class DThemeWhiteMenu extends DThemeWhiteLayoutVertical implements DThemeMenu {
	getBackgroundColor( state: DBaseState ): number | null {
		return 0xffffff;
	}

	getOffsetX(): number {
		return 5;
	}

	getOffsetY(): number {
		return 5;
	}

	getPaddingTop(): number {
		return 5;
	}

	getPaddingBottom(): number {
		return 5;
	}

	getWidth(): DCoordinate {
		return 200;
	}

	getMargin(): number {
		return 0;
	}

	getShadow(): DShadow | null {
		return this.newShadowWeak();
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
