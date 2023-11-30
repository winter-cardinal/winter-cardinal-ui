/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteInputBoolean } from "../d-theme-white-input-boolean";
import { DThemeWhiteJaJpInputBooleanButtonOff } from "../d-theme-white-ja-jp-input-boolean-button-off";
import { DThemeWhiteJaJpInputBooleanButtonOn } from "../d-theme-white-ja-jp-input-boolean-button-on";

export const loadThemeWhiteJaJpInputBoolean = (): void => {
	DThemeWhite.set("DInputBoolean", DThemeWhiteInputBoolean);
	DThemeWhite.set("DInputBooleanButtonOn", DThemeWhiteJaJpInputBooleanButtonOn);
	DThemeWhite.set("DInputBooleanButtonOff", DThemeWhiteJaJpInputBooleanButtonOff);
};
