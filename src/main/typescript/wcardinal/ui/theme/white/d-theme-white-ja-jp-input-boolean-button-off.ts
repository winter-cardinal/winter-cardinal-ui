/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteInputBooleanButtonOff } from "./d-theme-white-input-boolean-button-off";

export class DThemeWhiteJaJpInputBooleanButtonOff extends DThemeWhiteInputBooleanButtonOff {
	override newTextValue(): DStateAwareOrValueMightBe<string> {
		return "OFF";
	}
}
