/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkInputBoolean } from "../d-theme-dark-input-boolean";
import { DThemeDarkJaJpInputBooleanButtonOff } from "../d-theme-dark-ja-jp-input-boolean-button-off";
import { DThemeDarkJaJpInputBooleanButtonOn } from "../d-theme-dark-ja-jp-input-boolean-button-on";

export const loadThemeDarkJaJpInputBoolean = (): void => {
	DThemeDark.set("DInputBoolean", DThemeDarkInputBoolean);
	DThemeDark.set("DInputBooleanButtonOn", DThemeDarkJaJpInputBooleanButtonOn);
	DThemeDark.set("DInputBooleanButtonOff", DThemeDarkJaJpInputBooleanButtonOff);
};
