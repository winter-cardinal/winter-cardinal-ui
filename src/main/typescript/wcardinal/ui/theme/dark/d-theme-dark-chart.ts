/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DThemeChart } from "../../d-chart";
import { DThemeDarkBase } from "./d-theme-dark-base";

export class DThemeDarkChart extends DThemeDarkBase implements DThemeChart {
	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
