/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DThemeInputText } from "../../d-input-text";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteInput } from "./d-theme-default-input";

export class DThemeWhiteInputText extends DThemeWhiteInput implements DThemeInputText {
	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "";
	}

	getTextValue( state: DBaseState ): string {
		return "";
	}
}
