/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBorderMask } from "../../d-border-mask";
import { DThemeInputBooleanButtonOn } from "../../d-input-boolean-button-on";
import { DThemeDarkButton } from "./d-theme-dark-button";

export class DThemeDarkInputBooleanButtonOn extends DThemeDarkButton implements DThemeInputBooleanButtonOn {
	getBorderMask(): DBorderMask {
		return DBorderMask.LEFT;
	}

	isToggle(): boolean {
		return true;
	}

	newTextValue(): string {
		return "ON";
	}
}
