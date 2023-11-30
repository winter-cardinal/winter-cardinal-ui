/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteInputBooleanButtonOn } from "./d-theme-white-input-boolean-button-on";

export class DThemeWhiteEnUsInputBooleanButtonOn extends DThemeWhiteInputBooleanButtonOn {
	override newTextValue(): DStateAwareOrValueMightBe<string> {
		return "ON";
	}
}
