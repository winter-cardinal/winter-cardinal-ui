/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeWhiteInputAndLabel } from "./load-theme-default-input-and-label";
import { loadThemeWhiteInputInteger } from "./load-theme-default-input-integer";
import { loadThemeWhiteInputLabel } from "./load-theme-default-input-label";
import { loadThemeWhiteInputReal } from "./load-theme-default-input-real";
import { loadThemeWhiteInputText } from "./load-theme-default-input-text";

export const loadThemeWhiteInputAll = () => {
	loadThemeWhiteInputAndLabel();
	loadThemeWhiteInputInteger();
	loadThemeWhiteInputLabel();
	loadThemeWhiteInputReal();
	loadThemeWhiteInputText();
};
