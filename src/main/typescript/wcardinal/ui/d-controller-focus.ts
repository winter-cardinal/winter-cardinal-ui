/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";

export interface MightBeFocusable {
	parent: FocusableContainer | null;
	visible: boolean;
}

export interface FocusableContainer extends MightBeFocusable {
	children: MightBeFocusable[];
}

export interface Focusable extends MightBeFocusable {
	setState( state: DBaseState, isOn: boolean ): void;
	hasState( state: DBaseState ): boolean;
}

export const isFocusable = ( target: any ): target is Focusable => {
	return ( target != null && ("setState" in target) );
};

export const isFocusableContainer = ( target: any ): target is FocusableContainer => {
	return ( target != null && "children" in target );
};

export interface Selectable {
	select(): void;
}

export const isSelectable = ( target: any ): target is Selectable => {
	return ( target != null && "select" in target );
};

export interface DControllerFocus {
	setFocused( focusable: Focusable | null, isFocussed: boolean, select: boolean ): Focusable | null;
	getFocused(): Focusable | null;
	findFocusable(
		target: MightBeFocusable, includesTarget: boolean, includesTargetChildren: boolean, direction: boolean
	): Focusable | null;

	/**
	 * Returns the first focusable element on the hierarchy path from the specified target to the stage.
	 * If the specified target is focusable, returns the specified target.
	 *
	 * @param mightBeFocusable
	 */
	findFocusableParent( mightBeFocusable: MightBeFocusable | null ): Focusable | null;
}
