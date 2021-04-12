/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "./d-base-state-set";

export interface DFocusableMightBe {
	parent: DFocusableContainer | null;
	visible: boolean;
}

export interface DFocusableContainer extends DFocusableMightBe {
	children: DFocusableMightBe[];
}

export interface DFocusable extends DFocusableMightBe {
	readonly state: DBaseStateSet;
}

export interface DControllerFocus {
	focus(focusable: DFocusable | null): DFocusable | null;
	blur(focusable: DFocusable): DFocusable | null;
	clear(): DFocusable | null;

	set(focusable: DFocusable | null, isFocused: boolean): DFocusable | null;
	get(): DFocusable | null;

	/**
	 * Searches a focusable and returns a firstly-found focusable.
	 * If no focusable is found, returns null.
	 * The search starts from the given target in the depth-first manner.
	 * If the root is given, the search will be limited to the root's children.
	 * The root itself will not be checked.
	 * This method assumes the root is the one of the parents of the given target.
	 *
	 * @param target a target where a search starts at
	 * @param includesTarget true to check the target itself
	 * @param includesTargetChildren true to check the target's children
	 * @param direction true to search in the descending order
	 * @param root a root of a search
	 */
	find(
		target: DFocusableMightBe,
		includesTarget: boolean,
		includesTargetChildren: boolean,
		direction: boolean,
		root?: unknown
	): DFocusable | null;

	/**
	 * Returns the closest focusable parent of the specified target.
	 * If the specified target is focusable, returns the specified target.
	 *
	 * @param mightBeFocusable the node a search starts from
	 */
	findParent(mightBeFocusable: DFocusableMightBe | null): DFocusable | null;
}
