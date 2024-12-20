/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import * as dark from "./wcardinal/ui/theme/dark/index-ja-jp";

dark.loadThemeDarkJaJpAll();

const global = window as any;
global.wcardinal = global.wcardinal || {};
const dest = (global.wcardinal.ui = global.wcardinal.ui || {});

const src = dark as any;
for (const name in src) {
	dest[name] = src[name];
}
