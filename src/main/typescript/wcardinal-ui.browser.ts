/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import * as ui from "./wcardinal/ui";

ui.loadAll();

const global = window as any;
global.wcardinal = global.wcardinal || {};
global.wcardinal.ui = ui;
