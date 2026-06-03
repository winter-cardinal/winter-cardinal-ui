/*
 * Copyright (C) 2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeState } from "./e-shape-state";

export class EShapeRuntimeDragStates {
	protected static _STATE = EShapeState.DRAGGED;

	public static get(): string {
		return this._STATE;
	}

	public static set(state: string): void {
		this._STATE = state;
	}
}
