/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeStrokeSide } from "./e-shape-stroke";

export class EShapeDefaults {
	static IS_EDIT_MODE: boolean = false;

	static FILL_COLOR: number = 0xffffff;
	static FILL_ALPHA: number = 0.5;
	static STROKE_COLOR: number = 0x4f4f4f;
	static STROKE_COLOR_DARK: number = 0x4f4f4f;
	static STROKE_COLOR_LIGHT: number = 0xd0d0d0;
	static STROKE_ALPHA: number = 1;
	static STROKE_WIDTH: number = 2;
	static STROKE_ALIGN: number = 0;
	static STROKE_SIDE: number = EShapeStrokeSide.ALL;
	static TEXT_VALUE: string = "";
	static TEXT_FAMILY: string = "auto";
	static TEXT_SIZE: number = 14;
	static CURSOR: string = "";
	static RADIUS: number = 0.25;
	static SIZE_X: number = 100;
	static SIZE_Y: number = 100;
	static ANTIALIAS_WEIGHT: number = 0.75 * (window.devicePixelRatio || 1);
	static HIGHLIGHT_COLOR: number = 0x1e87f0;
}
