/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkInputBoolean } from "../d-theme-dark-input-boolean";
import { DThemeDarkEnUsInputBooleanButtonOff } from "../d-theme-dark-en-us-input-boolean-button-off";
import { DThemeDarkEnUsInputBooleanButtonOn } from "../d-theme-dark-en-us-input-boolean-button-on";

export const loadThemeDarkEnUsInputBoolean = (): void => {
	DThemeDark.set("DInputBoolean", DThemeDarkInputBoolean);
	DThemeDark.set("DInputBooleanButtonOn", DThemeDarkEnUsInputBooleanButtonOn);
	DThemeDark.set("DInputBooleanButtonOff", DThemeDarkEnUsInputBooleanButtonOff);
};
