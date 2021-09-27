/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBorderMask } from "../../d-border-mask";
import { DThemeInputBooleanButtonOn } from "../../d-input-boolean-button-on";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteButton } from "./d-theme-white-button";

export class DThemeWhiteInputBooleanButtonOn
	extends DThemeWhiteButton<string>
	implements DThemeInputBooleanButtonOn
{
	getBorderMask(): DBorderMask {
		return DBorderMask.LEFT;
	}

	isToggle(): boolean {
		return true;
	}

	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "ON";
	}
}
