/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeInputText } from "../../d-input-text";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkInput } from "./d-theme-dark-input";

export class DThemeDarkInputText extends DThemeDarkInput<string> implements DThemeInputText {
	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "";
	}
}
