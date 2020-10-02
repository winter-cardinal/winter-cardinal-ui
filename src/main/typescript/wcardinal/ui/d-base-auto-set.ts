/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseAuto } from "./d-base-auto";

export class DBaseAutoSet {
	readonly width: DBaseAuto;
	readonly height: DBaseAuto;

	constructor() {
		this.width = new DBaseAuto();
		this.height = new DBaseAuto();
	}
}
