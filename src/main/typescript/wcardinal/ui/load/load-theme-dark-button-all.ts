/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeDarkButton } from "./load-theme-dark-button";
import { loadThemeDarkButtonAmbient } from "./load-theme-dark-button-ambient";
import { loadThemeDarkButtonCheck } from "./load-theme-dark-button-check";
import { loadThemeDarkButtonCheckRight } from "./load-theme-dark-button-check-right";
import { loadThemeDarkButtonColor } from "./load-theme-dark-button-color";
import { loadThemeDarkButtonColorGradient } from "./load-theme-dark-button-color-gradient";
import { loadThemeDarkButtonPrimary } from "./load-theme-dark-button-primary";

export const loadThemeDarkButtonAll = () => {
	loadThemeDarkButtonAmbient();
	loadThemeDarkButtonCheck();
	loadThemeDarkButtonCheckRight();
	loadThemeDarkButtonColor();
	loadThemeDarkButtonColorGradient();
	loadThemeDarkButtonPrimary();
	loadThemeDarkButton();
};
