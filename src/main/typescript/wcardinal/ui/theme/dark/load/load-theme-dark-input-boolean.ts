/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkInputBoolean } from "../d-theme-dark-input-boolean";
import { DThemeDarkInputBooleanButtonOff } from "../d-theme-dark-input-boolean-button-off";
import { DThemeDarkInputBooleanButtonOn } from "../d-theme-dark-input-boolean-button-on";

export const loadThemeDarkInputBoolean = (): void => {
	DThemeDark.set("DInputBoolean", DThemeDarkInputBoolean);
	DThemeDark.set("DInputBooleanButtonOn", DThemeDarkInputBooleanButtonOn);
	DThemeDark.set("DInputBooleanButtonOff", DThemeDarkInputBooleanButtonOff);
};
