/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDragMode } from "./d-drag-mode";
import { DMouseModifier } from "./d-mouse-modifier";
import { UtilDragCheckerOptions } from "./util/util-drag";
import { UtilDragEasingOptions } from "./util/util-drag-easing";

export interface DViewDragOptions extends UtilDragEasingOptions {
	mode?: keyof typeof DDragMode | DDragMode;
	modifier?: keyof typeof DMouseModifier | DMouseModifier;
	checker?: UtilDragCheckerOptions;
}

export interface DThemeViewDrag {
	getDragMode(): DDragMode;
	getDragModifier(): DMouseModifier;
	getDragDurationPosition(): number;
	getDragDurationScale(): number;
}

export interface DViewDrag {
	/**
	 * Stops an animation if sxists.
	 */
	stop(): void;
}
