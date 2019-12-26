/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeChart } from "../../d-chart";
import { DThemeWhiteBase } from "./d-theme-default-base";

export class DThemeWhiteChart extends DThemeWhiteBase implements DThemeChart {
	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
