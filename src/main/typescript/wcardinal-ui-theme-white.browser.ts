/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import * as white from "./wcardinal/ui/theme/white";

white.loadThemeWhiteAll();

const global = window as any;
global.wcardinal = global.wcardinal || {};
const dest = global.wcardinal.ui = global.wcardinal.ui || {};

const src = white as any;
for( const name in src ) {
	dest[ name ] = src[ name ];
}
