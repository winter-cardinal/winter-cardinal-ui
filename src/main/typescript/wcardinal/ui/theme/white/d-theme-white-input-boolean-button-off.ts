/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBorderMask } from "../../d-border-mask";
import { DThemeInputBooleanButtonOff } from "../../d-input-boolean-button-off";
import { DThemeWhiteButton } from "./d-theme-white-button";

export class DThemeWhiteInputBooleanButtonOff extends DThemeWhiteButton implements DThemeInputBooleanButtonOff {
	getBorderMask(): DBorderMask {
		return DBorderMask.RIGHT;
	}

	isToggle(): boolean {
		return true;
	}

	newTextValue(): string {
		return "OFF";
	}
}
