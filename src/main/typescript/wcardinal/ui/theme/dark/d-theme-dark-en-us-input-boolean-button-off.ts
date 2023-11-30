/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkInputBooleanButtonOff } from "./d-theme-dark-input-boolean-button-off";

export class DThemeDarkEnUsInputBooleanButtonOff extends DThemeDarkInputBooleanButtonOff {
	override newTextValue(): DStateAwareOrValueMightBe<string> {
		return "OFF";
	}
}
