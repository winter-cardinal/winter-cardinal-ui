/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { EThemeDarkShapeActionValue } from "../e-theme-dark-shape-action-value";
import { EThemeDarkShapeActionValueOpen } from "../e-theme-dark-shape-action-value-open";

export const loadThemeDarkShapeActionValue = (): void => {
	DThemeDark.set("EShapeActionValue", EThemeDarkShapeActionValue);
	DThemeDark.set("EShapeActionValueOpen", EThemeDarkShapeActionValueOpen);
};
