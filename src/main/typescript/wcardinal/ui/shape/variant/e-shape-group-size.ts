/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, ObservablePoint } from "pixi.js";

export interface EShapeGroupSize {
	x: number;
	y: number;

	init(): void;
	fit(): void;
	clone(): ObservablePoint;
	copyFrom(p: IPoint): this;
	copyTo(p: IPoint): IPoint;
	equals(p: IPoint): boolean;
	set(x?: number, y?: number): this;
}
