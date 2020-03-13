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
import { loadThemeDarkButtonDanger } from "./load-theme-dark-button-danger";
import { loadThemeDarkButtonDate } from "./load-theme-dark-button-date";
import { loadThemeDarkButtonDatetime } from "./load-theme-dark-button-datetime";
import { loadThemeDarkButtonFile } from "./load-theme-dark-button-file";
import { loadThemeDarkButtonLink } from "./load-theme-dark-button-link";
import { loadThemeDarkButtonPrimary } from "./load-theme-dark-button-primary";
import { loadThemeDarkButtonRadio } from "./load-theme-dark-button-radio";
import { loadThemeDarkButtonRadioRight } from "./load-theme-dark-button-radio-right";
import { loadThemeDarkButtonSecondary } from "./load-theme-dark-button-secondary";
import { loadThemeDarkButtonSelect } from "./load-theme-dark-button-select";
import { loadThemeDarkButtonTime } from "./load-theme-dark-button-time";

export const loadThemeDarkButtonAll = () => {
	loadThemeDarkButtonAmbient();
	loadThemeDarkButtonCheck();
	loadThemeDarkButtonCheckRight();
	loadThemeDarkButtonColor();
	loadThemeDarkButtonColorGradient();
	loadThemeDarkButtonSelect();
	loadThemeDarkButtonDanger();
	loadThemeDarkButtonDate();
	loadThemeDarkButtonDatetime();
	loadThemeDarkButtonFile();
	loadThemeDarkButtonLink();
	loadThemeDarkButtonPrimary();
	loadThemeDarkButtonRadio();
	loadThemeDarkButtonRadioRight();
	loadThemeDarkButtonSecondary();
	loadThemeDarkButtonTime();
	loadThemeDarkButton();
};
