/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DScrollBarThumb } from "./d-scroll-bar-thumb";
import { DScrollBarThumbReflowableHorizontal } from "./d-scroll-bar-thumb-reflowable-horizontal";

export class DScrollBarThumbHorizontal extends DScrollBarThumb {
	protected onDragMove( dx: number, dy: number ): void {
		this.emit( "regionmove", dx, this );
	}

	protected initReflowable(): void {
		new DScrollBarThumbReflowableHorizontal( this );
	}
}
