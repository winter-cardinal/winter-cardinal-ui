/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeButton } from "../../d-button";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";

export class DThemeWhiteButton<VALUE = unknown>
	extends DThemeWhiteButtonBase<VALUE>
	implements DThemeButton<VALUE> {}
