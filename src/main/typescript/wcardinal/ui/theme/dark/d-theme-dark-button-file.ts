/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeButtonFile } from "../../d-button-file";
import { DThemeDarkButton } from "./d-theme-dark-button";

export class DThemeDarkButtonFile<VALUE = unknown>
	extends DThemeDarkButton<VALUE>
	implements DThemeButtonFile<VALUE> {}
