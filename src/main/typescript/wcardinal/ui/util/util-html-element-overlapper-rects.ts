/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface UtilHtmlElementOverlapperRects {
	readonly data: number[];
	readonly size: number;
	isDirty(): boolean;
	toClean(): void;
	begin(): this;
	end(): this;
	add(x0: number, y0: number, x1: number, y2: number): this;
}
