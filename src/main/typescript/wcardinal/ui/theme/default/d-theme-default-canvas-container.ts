/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeCanvasContainer } from "../../d-canvas-container";
import { DDragMode } from "../../d-drag-mode";
import { DMouseModifier } from "../../d-mouse-modifier";
import { DThemeDefaultBase } from "./d-theme-default-base";

export class DThemeDefaultCanvasContainer extends DThemeDefaultBase implements DThemeCanvasContainer {
	getBackgroundColor( state: DBaseState ): number | null {
		return this.dThemeConfiguration.getCanvasContainerBackgroundColor();
	}

	getBorderColor( state: DBaseState ): number | null {
		return this.dThemeConfiguration.getCanvasContainerBorderColor();
	}

	getPaddingLeft() {
		return 50;
	}

	getPaddingTop() {
		return 50;
	}

	getPaddingRight() {
		return 50;
	}

	getPaddingBottom() {
		return 50;
	}

	isOverflowMaskEnabled(): boolean {
		return false;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
