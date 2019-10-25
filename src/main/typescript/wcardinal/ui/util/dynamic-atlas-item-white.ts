/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DynamicAtlasItem } from "./dynamic-atlas-item";

export class DynamicAtlasItemWhite extends DynamicAtlasItem {
	render( context: CanvasRenderingContext2D ): void {
		const frame = this.frame;

		context.save();
		context.fillStyle = "#ffffff";
		context.fillRect( frame.x - 1, frame.y - 1, frame.width + 2, frame.height + 2 );
		context.restore();
	}
}
