/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";

export interface EShapeGroupSize {
	x: number;
	y: number;

	init(): void;
	fit(): void;
	clone(): IPoint;
	copy(): void;
	copyFrom(p: IPoint): IPoint;
	copyTo(p: IPoint): IPoint;
	equals(p: IPoint): boolean;
	set( x?: number | undefined, y?: number | undefined ): void;
}
