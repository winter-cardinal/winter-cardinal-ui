/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeCanvasContainer } from "../../d-canvas-container";
import { DDragMode } from "../../d-drag-mode";
import { DMouseModifier } from "../../d-mouse-modifier";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhiteCanvasContainer extends DThemeWhiteBase implements DThemeCanvasContainer {
	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
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

	isWheelZoomEnabled(): boolean {
		return true;
	}

	getWheelZoomSpeed(): number {
		return 0.004;
	}

	getWheelZoomModifier(): DMouseModifier {
		return DMouseModifier.NOT_NONE;
	}

	isWheelTranslationEnabled(): boolean {
		return true;
	}

	getWheelTranslationSpeed(): number {
		return this.getFontSize() * 0.16;
	}

	getWheelTranslationModifier(): DMouseModifier {
		return DMouseModifier.NONE;
	}

	isDblClickZoomEnabled(): boolean {
		return true;
	}

	getDblClickZoomSpeed(): number {
		return 2;
	}

	getDblClickZoomModifier(): DMouseModifier {
		return DMouseModifier.NONE;
	}

	getDblClickZoomDuration(): number {
		return 333;
	}

	getZoomMin(): number {
		return 0.1;
	}

	getZoomMax(): number {
		return 20;
	}

	getDragMode(): DDragMode {
		return DDragMode.ON;
	}

	getDragModifier(): DMouseModifier {
		return DMouseModifier.NONE;
	}

	getDragDurationPosition(): number {
		return 1;
	}

	getDragDurationScale(): number {
		return 1;
	}

	isOverflowMaskEnabled(): boolean {
		return false;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
