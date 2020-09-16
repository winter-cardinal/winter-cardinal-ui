/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteInputBoolean } from "../d-theme-white-input-boolean";
import { DThemeWhiteInputBooleanButtonOff } from "../d-theme-white-input-boolean-button-off";
import { DThemeWhiteInputBooleanButtonOn } from "../d-theme-white-input-boolean-button-on";

export const loadThemeWhiteInputBoolean = () => {
	DThemeWhite.set( "DInputBoolean", DThemeWhiteInputBoolean );
	DThemeWhite.set( "DInputBooleanButtonOn", DThemeWhiteInputBooleanButtonOn );
	DThemeWhite.set( "DInputBooleanButtonOff", DThemeWhiteInputBooleanButtonOff );
};
