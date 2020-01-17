/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { loadThemeDarkButton } from "./load-theme-dark-button";
import { loadThemeDarkButtonAmbient } from "./load-theme-dark-button-ambient";
import { loadThemeDarkButtonCheck } from "./load-theme-dark-button-check";
import { loadThemeDarkButtonCheckRight } from "./load-theme-dark-button-check-right";

export const loadThemeDarkButtonAll = () => {
	loadThemeDarkButtonAmbient();
	loadThemeDarkButtonCheck();
	loadThemeDarkButtonCheckRight();
	loadThemeDarkButton();
};
