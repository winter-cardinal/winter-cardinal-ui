/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import * as load from "./wcardinal/ui/load";
import * as white from "./wcardinal/ui/theme/white";

load.loadThemeWhiteAll();

const global = window as any;
global.wcardinal = global.wcardinal || {};
const dest = global.wcardinal.ui = global.wcardinal.ui || {};

const l = load as any;
for( const name in l ) {
	dest[ name ] = l[ name ];
}

const w = white as any;
for( const name in w ) {
	dest[ name ] = w[ name ];
}
