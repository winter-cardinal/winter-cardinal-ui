/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { UtilGestureMode } from "./util/util-gesture-mode";
import { UtilGestureModifier } from "./util/util-gesture-modifier";
import { UtilGestureCheckerOptions } from "./util/util-gesture";
import { UtilGestureEasingOptions } from "./util/util-gesture-easing";

export interface DViewGestureOptions extends UtilGestureEasingOptions {
	mode?: keyof typeof UtilGestureMode | UtilGestureMode;
	modifier?: keyof typeof UtilGestureModifier | UtilGestureModifier;
	checker?: UtilGestureCheckerOptions<DBase>;
}

export interface DThemeViewGesture {
	getGestureMode(): UtilGestureMode;
	getGestureModifier(): UtilGestureModifier;
	getGestureDuration(): number;
}

export interface DViewGesture {
	/**
	 * Stops an animation if sxists.
	 */
	stop(): void;
}
