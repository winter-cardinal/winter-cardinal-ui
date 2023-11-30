/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkInputBooleanButtonOn } from "./d-theme-dark-input-boolean-button-on";

export class DThemeDarkEnUsInputBooleanButtonOn extends DThemeDarkInputBooleanButtonOn {
	override newTextValue(): DStateAwareOrValueMightBe<string> {
		return "ON";
	}
}
