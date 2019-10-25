/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DScrollBarThumb } from "./d-scroll-bar-thumb";
import { DScrollBarThumbReflowableVertical } from "./d-scroll-bar-thumb-reflowable-vertical";

export class DScrollBarThumbVertocal extends DScrollBarThumb {
	protected onDragMove( dx: number, dy: number ) {
		this.emit( "regionmove", dy, this );
	}

	protected initReflowable(): void {
		new DScrollBarThumbReflowableVertical( this );
	}
}
