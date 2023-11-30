/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteInputBoolean } from "../d-theme-white-input-boolean";
import { DThemeWhiteEnUsInputBooleanButtonOff } from "../d-theme-white-en-us-input-boolean-button-off";
import { DThemeWhiteEnUsInputBooleanButtonOn } from "../d-theme-white-en-us-input-boolean-button-on";

export const loadThemeWhiteEnUsInputBoolean = (): void => {
	DThemeWhite.set("DInputBoolean", DThemeWhiteInputBoolean);
	DThemeWhite.set("DInputBooleanButtonOn", DThemeWhiteEnUsInputBooleanButtonOn);
	DThemeWhite.set("DInputBooleanButtonOff", DThemeWhiteEnUsInputBooleanButtonOff);
};
