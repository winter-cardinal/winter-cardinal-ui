/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkInputTextArea } from "../d-theme-dark-input-text-area";

export const loadThemeDarkInputTextArea = (): void => {
	DThemeDark.set("DInputTextArea", DThemeDarkInputTextArea);
};
