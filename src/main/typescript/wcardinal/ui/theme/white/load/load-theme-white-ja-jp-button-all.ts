/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeWhiteButton } from "./load-theme-white-button";
import { loadThemeWhiteButtonAmbient } from "./load-theme-white-button-ambient";
import { loadThemeWhiteButtonCheck } from "./load-theme-white-button-check";
import { loadThemeWhiteButtonCheckRight } from "./load-theme-white-button-check-right";
import { loadThemeWhiteJaJpButtonColor } from "./load-theme-white-ja-jp-button-color";
import { loadThemeWhiteJaJpButtonColorGradient } from "./load-theme-white-ja-jp-button-color-gradient";
import { loadThemeWhiteButtonDanger } from "./load-theme-white-button-danger";
import { loadThemeWhiteJaJpButtonDate } from "./load-theme-white-ja-jp-button-date";
import { loadThemeWhiteJaJpButtonDatetime } from "./load-theme-white-ja-jp-button-datetime";
import { loadThemeWhiteButtonFile } from "./load-theme-white-button-file";
import { loadThemeWhiteButtonLink } from "./load-theme-white-button-link";
import { loadThemeWhiteButtonPrimary } from "./load-theme-white-button-primary";
import { loadThemeWhiteButtonRadio } from "./load-theme-white-button-radio";
import { loadThemeWhiteButtonRadioRight } from "./load-theme-white-button-radio-right";
import { loadThemeWhiteButtonSecondary } from "./load-theme-white-button-secondary";
import { loadThemeWhiteJaJpButtonSelect } from "./load-theme-white-ja-jp-button-select";
import { loadThemeWhiteJaJpButtonTime } from "./load-theme-white-ja-jp-button-time";

export const loadThemeWhiteJaJpButtonAll = (): void => {
	loadThemeWhiteButtonAmbient();
	loadThemeWhiteButtonCheckRight();
	loadThemeWhiteButtonCheck();
	loadThemeWhiteJaJpButtonColorGradient();
	loadThemeWhiteJaJpButtonColor();
	loadThemeWhiteJaJpButtonSelect();
	loadThemeWhiteButtonDanger();
	loadThemeWhiteJaJpButtonDate();
	loadThemeWhiteJaJpButtonDatetime();
	loadThemeWhiteButtonFile();
	loadThemeWhiteButtonLink();
	loadThemeWhiteButtonPrimary();
	loadThemeWhiteButtonRadioRight();
	loadThemeWhiteButtonRadio();
	loadThemeWhiteButtonSecondary();
	loadThemeWhiteJaJpButtonTime();
	loadThemeWhiteButton();
};
