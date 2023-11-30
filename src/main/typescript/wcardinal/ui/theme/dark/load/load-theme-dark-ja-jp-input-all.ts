/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeDarkInputAndLabel } from "./load-theme-dark-input-and-label";
import { loadThemeDarkJaJpInputBoolean } from "./load-theme-dark-ja-jp-input-boolean";
import { loadThemeDarkInputInteger } from "./load-theme-dark-input-integer";
import { loadThemeDarkInputLabel } from "./load-theme-dark-input-label";
import { loadThemeDarkInputReal } from "./load-theme-dark-input-real";
import { loadThemeDarkInputSearch } from "./load-theme-dark-input-search";
import { loadThemeDarkInputText } from "./load-theme-dark-input-text";
import { loadThemeDarkInputTextArea } from "./load-theme-dark-input-text-area";

export const loadThemeDarkJaJpInputAll = (): void => {
	loadThemeDarkInputAndLabel();
	loadThemeDarkJaJpInputBoolean();
	loadThemeDarkInputInteger();
	loadThemeDarkInputLabel();
	loadThemeDarkInputReal();
	loadThemeDarkInputSearch();
	loadThemeDarkInputTextArea();
	loadThemeDarkInputText();
};
