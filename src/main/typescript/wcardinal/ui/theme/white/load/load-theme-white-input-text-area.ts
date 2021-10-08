/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteInputTextArea } from "../d-theme-white-input-text-area";

export const loadThemeWhiteInputTextArea = (): void => {
	DThemeWhite.set("DInputTextArea", DThemeWhiteInputTextArea);
};
