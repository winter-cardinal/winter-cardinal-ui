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
import { loadThemeDarkJaJpButtonDate } from "./load-theme-dark-ja-jp-button-date";
import { loadThemeDarkJaJpButtonDatetime } from "./load-theme-dark-ja-jp-button-datetime";
import { loadThemeDarkButtonFile } from "./load-theme-dark-button-file";
import { loadThemeDarkButtonLink } from "./load-theme-dark-button-link";
import { loadThemeDarkButtonPrimary } from "./load-theme-dark-button-primary";
import { loadThemeDarkButtonRadio } from "./load-theme-dark-button-radio";
import { loadThemeDarkButtonRadioRight } from "./load-theme-dark-button-radio-right";
import { loadThemeDarkButtonSecondary } from "./load-theme-dark-button-secondary";
import { loadThemeDarkJaJpButtonSelect } from "./load-theme-dark-ja-jp-button-select";
import { loadThemeDarkJaJpButtonTime } from "./load-theme-dark-ja-jp-button-time";

export const loadThemeDarkJaJpButtonAll = (): void => {
	loadThemeDarkButtonAmbient();
	loadThemeDarkButtonCheckRight();
	loadThemeDarkButtonCheck();
	loadThemeDarkButtonColorGradient();
	loadThemeDarkButtonColor();
	loadThemeDarkJaJpButtonSelect();
	loadThemeDarkButtonDanger();
	loadThemeDarkJaJpButtonDate();
	loadThemeDarkJaJpButtonDatetime();
	loadThemeDarkButtonFile();
	loadThemeDarkButtonLink();
	loadThemeDarkButtonPrimary();
	loadThemeDarkButtonRadioRight();
	loadThemeDarkButtonRadio();
	loadThemeDarkButtonSecondary();
	loadThemeDarkJaJpButtonTime();
	loadThemeDarkButton();
};
