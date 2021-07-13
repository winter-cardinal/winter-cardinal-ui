/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilGestureMode } from "../../util/util-gesture-mode";
import { UtilGestureModifier } from "../../util/util-gesture-modifier";
import { DThemeView } from "../../d-view";

export class DThemeWhiteView implements DThemeView {
	isWheelZoomEnabled(): boolean {
		return true;
	}

	getWheelZoomSpeed(): number {
		return 0.004;
	}

	getWheelZoomModifier(): UtilGestureModifier {
		return UtilGestureModifier.NOT_NONE;
	}

	isWheelTranslationEnabled(): boolean {
		return true;
	}

	getWheelTranslationSpeed(): number {
		return 14 * 0.16;
	}

	getWheelTranslationModifier(): UtilGestureModifier {
		return UtilGestureModifier.NONE;
	}

	isDblClickZoomEnabled(): boolean {
		return true;
	}

	getDblClickZoomSpeed(): number {
		return 2;
	}

	getDblClickZoomModifier(): UtilGestureModifier {
		return UtilGestureModifier.NONE;
	}

	getDblClickZoomDuration(): number {
		return 333;
	}

	getZoomMin(): number {
		return 0.05;
	}

	getZoomMax(): number {
		return 20;
	}

	getZoomKeepRatio(): boolean {
		return true;
	}

	getGestureMode(): UtilGestureMode {
		return UtilGestureMode.ON;
	}

	getGestureModifier(): UtilGestureModifier {
		return UtilGestureModifier.NONE;
	}

	getGestureDurationPosition(): number {
		return 1;
	}

	getGestureDurationScale(): number {
		return 1;
	}
}
