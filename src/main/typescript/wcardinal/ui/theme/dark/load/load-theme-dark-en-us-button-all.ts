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
import { loadThemeDarkEnUsButtonDate } from "./load-theme-dark-en-us-button-date";
import { loadThemeDarkEnUsButtonDatetime } from "./load-theme-dark-en-us-button-datetime";
import { loadThemeDarkButtonFile } from "./load-theme-dark-button-file";
import { loadThemeDarkButtonLink } from "./load-theme-dark-button-link";
import { loadThemeDarkButtonPrimary } from "./load-theme-dark-button-primary";
import { loadThemeDarkButtonRadio } from "./load-theme-dark-button-radio";
import { loadThemeDarkButtonRadioRight } from "./load-theme-dark-button-radio-right";
import { loadThemeDarkButtonSecondary } from "./load-theme-dark-button-secondary";
import { loadThemeDarkEnUsButtonSelect } from "./load-theme-dark-en-us-button-select";
import { loadThemeDarkEnUsButtonTime } from "./load-theme-dark-en-us-button-time";

export const loadThemeDarkEnUsButtonAll = (): void => {
	loadThemeDarkButtonAmbient();
	loadThemeDarkButtonCheckRight();
	loadThemeDarkButtonCheck();
	loadThemeDarkButtonColorGradient();
	loadThemeDarkButtonColor();
	loadThemeDarkEnUsButtonSelect();
	loadThemeDarkButtonDanger();
	loadThemeDarkEnUsButtonDate();
	loadThemeDarkEnUsButtonDatetime();
	loadThemeDarkButtonFile();
	loadThemeDarkButtonLink();
	loadThemeDarkButtonPrimary();
	loadThemeDarkButtonRadioRight();
	loadThemeDarkButtonRadio();
	loadThemeDarkButtonSecondary();
	loadThemeDarkEnUsButtonTime();
	loadThemeDarkButton();
};
