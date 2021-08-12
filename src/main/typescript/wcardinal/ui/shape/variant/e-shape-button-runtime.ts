/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeState } from "../e-shape-state";
import { EShapeButton } from "./e-shape-button";
import { EShapeButtonRuntimeAction } from "./e-shape-button-runtime-action";
import { EShapeButtonRuntimeActionToggle } from "./e-shape-button-runtime-action-toggle";

export class EShapeButtonRuntime extends EShapeRuntime {
	protected _isToggle?: boolean;
	protected _isGrouped?: boolean;

	constructor(shape: EShape) {
		super(shape);
		if (shape instanceof EShapeButton) {
			this._isToggle = shape.isToggle;
			this._isGrouped = shape.isGrouped;
		}
	}

	isActionable(): boolean {
		return true;
	}

	initialize(shape: EShape): void {
		this.actions.unshift(
			this._isToggle
				? new EShapeButtonRuntimeActionToggle(this)
				: new EShapeButtonRuntimeAction(this)
		);
		super.initialize(shape);
	}

	onClick(shape: EShape, e: interaction.InteractionEvent | KeyboardEvent): void {
		const state = shape.state;
		const wasClicked = state.isClicked;
		state.lock();
		super.onClick(shape, e);
		if (!wasClicked && state.isClicked) {
			if (this._isToggle) {
				state.isActive = !state.isActive;
			} else {
				if (!state.isActive) {
					state.isActivated = true;
				}
			}
		}
		state.unlock();
	}

	onStateChange(shape: EShape, newState: DBaseStateSet, oldState: DBaseStateSet): void {
		super.onStateChange(shape, newState, oldState);
		if (this._isToggle && this._isGrouped && newState.is(EShapeState.ACTIVATED)) {
			this.onActivated(shape);
		}
	}

	protected onActivated(shape: EShape): void {
		// Deactivate other group buttons
		const parent = shape.parent;
		if (parent != null) {
			const children = parent.children;
			for (let i = 0, imax = children.length; i < imax; ++i) {
				const child = children[i];
				if (
					child !== shape &&
					child instanceof EShapeButton &&
					child.isToggle &&
					child.isGrouped
				) {
					child.state.isActive = false;
				}
			}
		}
	}
}
