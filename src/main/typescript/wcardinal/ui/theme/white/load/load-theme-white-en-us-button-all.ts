/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeWhiteButton } from "./load-theme-white-button";
import { loadThemeWhiteButtonAmbient } from "./load-theme-white-button-ambient";
import { loadThemeWhiteButtonCheck } from "./load-theme-white-button-check";
import { loadThemeWhiteButtonCheckRight } from "./load-theme-white-button-check-right";
import { loadThemeWhiteEnUsButtonColor } from "./load-theme-white-en-us-button-color";
import { loadThemeWhiteEnUsButtonColorGradient } from "./load-theme-white-en-us-button-color-gradient";
import { loadThemeWhiteButtonDanger } from "./load-theme-white-button-danger";
import { loadThemeWhiteEnUsButtonDate } from "./load-theme-white-en-us-button-date";
import { loadThemeWhiteEnUsButtonDatetime } from "./load-theme-white-en-us-button-datetime";
import { loadThemeWhiteButtonFile } from "./load-theme-white-button-file";
import { loadThemeWhiteButtonLink } from "./load-theme-white-button-link";
import { loadThemeWhiteButtonPrimary } from "./load-theme-white-button-primary";
import { loadThemeWhiteButtonRadio } from "./load-theme-white-button-radio";
import { loadThemeWhiteButtonRadioRight } from "./load-theme-white-button-radio-right";
import { loadThemeWhiteButtonSecondary } from "./load-theme-white-button-secondary";
import { loadThemeWhiteEnUsButtonSelect } from "./load-theme-white-en-us-button-select";
import { loadThemeWhiteEnUsButtonTime } from "./load-theme-white-en-us-button-time";

export const loadThemeWhiteEnUsButtonAll = (): void => {
	loadThemeWhiteButtonAmbient();
	loadThemeWhiteButtonCheckRight();
	loadThemeWhiteButtonCheck();
	loadThemeWhiteEnUsButtonColorGradient();
	loadThemeWhiteEnUsButtonColor();
	loadThemeWhiteEnUsButtonSelect();
	loadThemeWhiteButtonDanger();
	loadThemeWhiteEnUsButtonDate();
	loadThemeWhiteEnUsButtonDatetime();
	loadThemeWhiteButtonFile();
	loadThemeWhiteButtonLink();
	loadThemeWhiteButtonPrimary();
	loadThemeWhiteButtonRadioRight();
	loadThemeWhiteButtonRadio();
	loadThemeWhiteButtonSecondary();
	loadThemeWhiteEnUsButtonTime();
	loadThemeWhiteButton();
};
