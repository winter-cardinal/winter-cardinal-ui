/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeInputBooleanButtonOff } from "../../d-input-boolean-button-off";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteButton } from "./d-theme-white-button";

export abstract class DThemeWhiteInputBooleanButtonOff
	extends DThemeWhiteButton<string>
	implements DThemeInputBooleanButtonOff
{
	isToggle(): boolean {
		return true;
	}

	abstract newTextValue(): DStateAwareOrValueMightBe<string>;
}
