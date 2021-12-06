/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeButtonLink } from "../../d-button-link";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";

export class DThemeDarkButtonLink<VALUE = unknown>
	extends DThemeDarkButtonAmbient<VALUE>
	implements DThemeButtonLink<VALUE> {}
