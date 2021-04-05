/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeDarkInputAndLabel } from "./load-theme-dark-input-and-label";
import { loadThemeDarkInputBoolean } from "./load-theme-dark-input-boolean";
import { loadThemeDarkInputInteger } from "./load-theme-dark-input-integer";
import { loadThemeDarkInputLabel } from "./load-theme-dark-input-label";
import { loadThemeDarkInputReal } from "./load-theme-dark-input-real";
import { loadThemeDarkInputText } from "./load-theme-dark-input-text";

export const loadThemeDarkInputAll = (): void => {
	loadThemeDarkInputAndLabel();
	loadThemeDarkInputBoolean();
	loadThemeDarkInputInteger();
	loadThemeDarkInputLabel();
	loadThemeDarkInputReal();
	loadThemeDarkInputText();
};
