/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DThemeInputText } from "../../d-input-text";
import { DStateAware } from "../../d-state-aware";
import { DThemeWhiteInput } from "./d-theme-white-input";

export class DThemeWhiteInputText extends DThemeWhiteInput implements DThemeInputText {
	newTextValue(): DStateAware<string | undefined> | string | undefined {
		return "";
	}

	getTextValue( state: DBaseState ): string {
		return "";
	}
}
