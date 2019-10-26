/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";

export interface DFocusableMightBe {
	parent: DFocusableContainer | null;
	visible: boolean;
}

export interface DFocusableContainer extends DFocusableMightBe {
	children: DFocusableMightBe[];
}

export interface DFocusable extends DFocusableMightBe {
	setState( state: DBaseState, isOn: boolean ): void;
	hasState( state: DBaseState ): boolean;
}

export interface DControllerFocus {
	setFocused( focusable: DFocusable | null, isFocussed: boolean, select: boolean ): DFocusable | null;
	getFocused(): DFocusable | null;
	findFocusable(
		target: DFocusableMightBe, includesTarget: boolean, includesTargetChildren: boolean, direction: boolean
	): DFocusable | null;

	/**
	 * Returns the first focusable element on the hierarchy path from the specified target to the stage.
	 * If the specified target is focusable, returns the specified target.
	 *
	 * @param mightBeFocusable
	 */
	findFocusableParent( mightBeFocusable: DFocusableMightBe | null ): DFocusable | null;
}
