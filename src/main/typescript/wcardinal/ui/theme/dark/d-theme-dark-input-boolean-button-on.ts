/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeInputBooleanButtonOn } from "../../d-input-boolean-button-on";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkButton } from "./d-theme-dark-button";

export abstract class DThemeDarkInputBooleanButtonOn
	extends DThemeDarkButton<string>
	implements DThemeInputBooleanButtonOn
{
	isToggle(): boolean {
		return true;
	}

	abstract newTextValue(): DStateAwareOrValueMightBe<string>;
}
