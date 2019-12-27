/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDragMode } from "../../d-drag-mode";
import { DMouseModifier } from "../../d-mouse-modifier";
import { DThemeView } from "../../d-view";

export class DThemeWhiteView implements DThemeView {
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
		return 14 * 0.16;
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
		return 0.05;
	}

	getZoomMax(): number {
		return 20;
	}

	getZoomKeepRatio(): boolean {
		return true;
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
}
