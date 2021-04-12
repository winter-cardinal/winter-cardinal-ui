/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBorderMask } from "../../d-border-mask";
import { DThemeInputBooleanButtonOff } from "../../d-input-boolean-button-off";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkButton } from "./d-theme-dark-button";

export class DThemeDarkInputBooleanButtonOff
	extends DThemeDarkButton<string>
	implements DThemeInputBooleanButtonOff {
	getBorderMask(): DBorderMask {
		return DBorderMask.RIGHT;
	}

	isToggle(): boolean {
		return true;
	}

	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "OFF";
	}
}
