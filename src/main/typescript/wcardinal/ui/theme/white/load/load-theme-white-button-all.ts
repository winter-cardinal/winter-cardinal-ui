/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeWhiteButton } from "./load-theme-white-button";
import { loadThemeWhiteButtonAmbient } from "./load-theme-white-button-ambient";
import { loadThemeWhiteButtonCheck } from "./load-theme-white-button-check";
import { loadThemeWhiteButtonCheckRight } from "./load-theme-white-button-check-right";
import { loadThemeWhiteButtonColor } from "./load-theme-white-button-color";
import { loadThemeWhiteButtonColorGradient } from "./load-theme-white-button-color-gradient";
import { loadThemeWhiteButtonDanger } from "./load-theme-white-button-danger";
import { loadThemeWhiteButtonDate } from "./load-theme-white-button-date";
import { loadThemeWhiteButtonDatetime } from "./load-theme-white-button-datetime";
import { loadThemeWhiteButtonFile } from "./load-theme-white-button-file";
import { loadThemeWhiteButtonPrimary } from "./load-theme-white-button-primary";
import { loadThemeWhiteButtonRadio } from "./load-theme-white-button-radio";
import { loadThemeWhiteButtonRadioRight } from "./load-theme-white-button-radio-right";
import { loadThemeWhiteButtonSecondary } from "./load-theme-white-button-secondary";
import { loadThemeWhiteButtonSelect } from "./load-theme-white-button-select";
import { loadThemeWhiteButtonTime } from "./load-theme-white-button-time";

export const loadThemeWhiteButtonAll = () => {
	loadThemeWhiteButtonAmbient();
	loadThemeWhiteButtonCheckRight();
	loadThemeWhiteButtonCheck();
	loadThemeWhiteButtonColorGradient();
	loadThemeWhiteButtonColor();
	loadThemeWhiteButtonSelect();
	loadThemeWhiteButtonDanger();
	loadThemeWhiteButtonDate();
	loadThemeWhiteButtonDatetime();
	loadThemeWhiteButtonFile();
	loadThemeWhiteButtonPrimary();
	loadThemeWhiteButtonRadioRight();
	loadThemeWhiteButtonRadio();
	loadThemeWhiteButtonSecondary();
	loadThemeWhiteButtonTime();
	loadThemeWhiteButton();
};
