/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeButtonLink } from "../../d-button-link";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";

export class DThemeWhiteButtonLink<VALUE = unknown>
	extends DThemeWhiteButtonAmbient<VALUE>
	implements DThemeButtonLink<VALUE> {}
