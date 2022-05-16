/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplicationLayerLike } from "./d-application-layer-like";
import { DBase } from "./d-base";
import { DDialogGestureMode } from "./d-dialog-gesture-mode";

export type DDialogGestureConstraint = (
	target: DBase,
	layer: DApplicationLayerLike,
	x: number,
	y: number
) => void;

export interface DDialogGestureOptions {
	enable?: boolean;
	mode?: DDialogGestureMode | keyof typeof DDialogGestureMode;
	constraint?: DDialogGestureConstraint;
}

export interface DDialogGestureParent extends DBase {
	readonly layer: DApplicationLayerLike | null;
}

export interface DDialogGesture<PARENT extends DDialogGestureParent> {
	parent: PARENT;

	mode: DDialogGestureMode;

	constraint: DDialogGestureConstraint;

	/**
	 * Returns true if thhe dialog position is changed by gestures.
	 */
	isDirty(): boolean;

	/**
	 * Returns true if the dialog position is not changed by gestures.
	 */
	isClean(): boolean;

	/**
	 * Marks the dialog position is not changed by gestures.
	 */
	toClean(): void;
}
