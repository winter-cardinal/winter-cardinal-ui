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
import { loadThemeDarkButtonDate } from "./load-theme-dark-button-date";
import { loadThemeDarkButtonDatetime } from "./load-theme-dark-button-datetime";
import { loadThemeDarkButtonPrimary } from "./load-theme-dark-button-primary";
import { loadThemeDarkButtonTime } from "./load-theme-dark-button-time";

export const loadThemeDarkButtonAll = () => {
	loadThemeDarkButtonAmbient();
	loadThemeDarkButtonCheck();
	loadThemeDarkButtonCheckRight();
	loadThemeDarkButtonColor();
	loadThemeDarkButtonColorGradient();
	loadThemeDarkButtonDate();
	loadThemeDarkButtonDatetime();
	loadThemeDarkButtonPrimary();
	loadThemeDarkButtonTime();
	loadThemeDarkButton();
};
