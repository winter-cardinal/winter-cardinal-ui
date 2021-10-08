/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeInputText } from "../../d-input-text";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkInputInput } from "./d-theme-dark-input-input";

export class DThemeDarkInputText extends DThemeDarkInputInput<string> implements DThemeInputText {
	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "";
	}
}
