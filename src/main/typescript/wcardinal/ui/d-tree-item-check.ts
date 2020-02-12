/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButtonCheck, DButtonCheckOptions, DThemeButtonCheck } from "./d-button-check";

export interface DTreeItemCheckOptions<
	THEME extends DThemeTreeItemCheck = DThemeTreeItemCheck
> extends DButtonCheckOptions<unknown, THEME> {
}

export interface DThemeTreeItemCheck extends DThemeButtonCheck {

}

export class DTreeItemCheck<
	THEME extends DThemeTreeItemCheck = DThemeTreeItemCheck,
> extends DButtonCheck<THEME> {

	protected mergeState( stateLocal: DBaseState, stateParent: DBaseState ): DBaseState {
		return super.mergeState( stateLocal, stateParent ) |
			( stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE );
	}

	protected getType(): string {
		return "DTreeItemCheck";
	}
}
