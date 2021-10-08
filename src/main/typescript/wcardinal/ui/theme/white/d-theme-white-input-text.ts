/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeInputText } from "../../d-input-text";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteInputInput } from "./d-theme-white-input-input";

export class DThemeWhiteInputText extends DThemeWhiteInputInput<string> implements DThemeInputText {
	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "";
	}
}
