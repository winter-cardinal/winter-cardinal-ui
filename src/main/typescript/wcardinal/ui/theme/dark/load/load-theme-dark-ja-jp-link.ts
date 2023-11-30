/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkJaJpLink } from "../d-theme-dark-ja-jp-link";

export const loadThemeDarkJaJpLink = (): void => {
	DThemeDark.set("DLink", DThemeDarkJaJpLink);
};
