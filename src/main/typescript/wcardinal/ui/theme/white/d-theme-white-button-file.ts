/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeButtonFile } from "../../d-button-file";
import { DThemeWhiteButton } from "./d-theme-white-button";

export class DThemeWhiteButtonFile<VALUE = unknown>
	extends DThemeWhiteButton<VALUE>
	implements DThemeButtonFile<VALUE> {}
