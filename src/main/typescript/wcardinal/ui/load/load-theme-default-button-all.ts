/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeWhiteButton } from "./load-theme-default-button";
import { loadThemeWhiteButtonAmbient } from "./load-theme-default-button-ambient";
import { loadThemeWhiteButtonCheck } from "./load-theme-default-button-check";
import { loadThemeWhiteButtonCheckRight } from "./load-theme-default-button-check-right";
import { loadThemeWhiteButtonColor } from "./load-theme-default-button-color";
import { loadThemeWhiteButtonColorGradient } from "./load-theme-default-button-color-gradient";
import { loadThemeWhiteButtonDanger } from "./load-theme-default-button-danger";
import { loadThemeWhiteButtonDate } from "./load-theme-default-button-date";
import { loadThemeWhiteButtonDatetime } from "./load-theme-default-button-datetime";
import { loadThemeWhiteButtonFile } from "./load-theme-default-button-file";
import { loadThemeWhiteButtonPrimary } from "./load-theme-default-button-primary";
import { loadThemeWhiteButtonRadio } from "./load-theme-default-button-radio";
import { loadThemeWhiteButtonRadioRight } from "./load-theme-default-button-radio-right";
import { loadThemeWhiteButtonSecondary } from "./load-theme-default-button-secondary";
import { loadThemeWhiteButtonTime } from "./load-theme-default-button-time";

export const loadThemeWhiteButtonAll = () => {
	loadThemeWhiteButtonAmbient();
	loadThemeWhiteButtonCheckRight();
	loadThemeWhiteButtonCheck();
	loadThemeWhiteButtonColorGradient();
	loadThemeWhiteButtonColor();
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
