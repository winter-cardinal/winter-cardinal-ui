/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeDefaultButton } from "./load-theme-default-button";
import { loadThemeDefaultButtonAmbient } from "./load-theme-default-button-ambient";
import { loadThemeDefaultButtonCheck } from "./load-theme-default-button-check";
import { loadThemeDefaultButtonCheckRight } from "./load-theme-default-button-check-right";
import { loadThemeDefaultButtonColor } from "./load-theme-default-button-color";
import { loadThemeDefaultButtonColorGradient } from "./load-theme-default-button-color-gradient";
import { loadThemeDefaultButtonDanger } from "./load-theme-default-button-danger";
import { loadThemeDefaultButtonDate } from "./load-theme-default-button-date";
import { loadThemeDefaultButtonDatetime } from "./load-theme-default-button-datetime";
import { loadThemeDefaultButtonFile } from "./load-theme-default-button-file";
import { loadThemeDefaultButtonPrimary } from "./load-theme-default-button-primary";
import { loadThemeDefaultButtonRadio } from "./load-theme-default-button-radio";
import { loadThemeDefaultButtonRadioRight } from "./load-theme-default-button-radio-right";
import { loadThemeDefaultButtonSecondary } from "./load-theme-default-button-secondary";
import { loadThemeDefaultButtonTime } from "./load-theme-default-button-time";

export const loadThemeDefaultButtonAll = () => {
	loadThemeDefaultButtonAmbient();
	loadThemeDefaultButtonCheckRight();
	loadThemeDefaultButtonCheck();
	loadThemeDefaultButtonColorGradient();
	loadThemeDefaultButtonColor();
	loadThemeDefaultButtonDanger();
	loadThemeDefaultButtonDate();
	loadThemeDefaultButtonDatetime();
	loadThemeDefaultButtonFile();
	loadThemeDefaultButtonPrimary();
	loadThemeDefaultButtonRadioRight();
	loadThemeDefaultButtonRadio();
	loadThemeDefaultButtonSecondary();
	loadThemeDefaultButtonTime();
	loadThemeDefaultButton();
};
