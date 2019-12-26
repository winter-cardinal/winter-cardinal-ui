/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeDefaultInputAndLabel } from "./load-theme-default-input-and-label";
import { loadThemeDefaultInputInteger } from "./load-theme-default-input-integer";
import { loadThemeDefaultInputLabel } from "./load-theme-default-input-label";
import { loadThemeDefaultInputReal } from "./load-theme-default-input-real";
import { loadThemeDefaultInputText } from "./load-theme-default-input-text";

export const loadThemeDefaultInputAll = () => {
	loadThemeDefaultInputAndLabel();
	loadThemeDefaultInputInteger();
	loadThemeDefaultInputLabel();
	loadThemeDefaultInputReal();
	loadThemeDefaultInputText();
};
