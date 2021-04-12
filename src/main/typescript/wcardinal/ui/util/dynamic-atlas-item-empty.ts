/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DynamicAtlasItem } from "./dynamic-atlas-item";

export class DynamicAtlasItemEmpty extends DynamicAtlasItem {
	render(context: CanvasRenderingContext2D): void {
		// DO NOTHING
	}
}
