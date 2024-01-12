/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeInputBooleanButtonOff } from "../../d-input-boolean-button-off";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkButton } from "./d-theme-dark-button";

export abstract class DThemeDarkInputBooleanButtonOff
	extends DThemeDarkButton<string>
	implements DThemeInputBooleanButtonOff
{
	isToggle(): boolean {
		return true;
	}

	abstract newTextValue(): DStateAwareOrValueMightBe<string>;
}
