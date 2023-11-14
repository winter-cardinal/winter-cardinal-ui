/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Renderer } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import InteractionManager = interaction.InteractionManager;
import { DApplications } from "../d-applications";
import { UtilKeyboardEvent } from "../util/util-keyboard-event";
import { EShapeActionRuntime } from "./action/e-shape-action-runtime";
import { EShape } from "./e-shape";
import { EShapeFillLike } from "./e-shape-fill";
import { EShapeState } from "./e-shape-state";
import { EShapeStrokeLike } from "./e-shape-stroke";
import { EShapeTextLike } from "./e-shape-text";
import { DBaseState } from "../d-base-state";
import { DBaseStateSet } from "../d-base-state-set";
import { EShapeRuntime } from "./e-shape-runtime";
import { EShapeRuntimeReset } from "./e-shape-runtime-reset";
import { EShapeLockPart } from "./variant/e-shape-lock-part";

export class EShapeRuntimeImpl implements EShapeRuntime {
	static readonly TRANSIENT_STATES = [
		EShapeState.CLICKED,
		EShapeState.DBL_CLICKED,
		EShapeState.DOWN,
		EShapeState.UP,
		EShapeState.UP_OUTSIDE,

		EShapeState.RIGHT_CLICKED,
		EShapeState.RIGHT_DOWN,
		EShapeState.RIGHT_UP,
		EShapeState.RIGHT_UP_OUTSIDE,

		EShapeState.ACTIVATED,
		EShapeState.DEACTIVATED
	];

	readonly x: number;
	readonly y: number;
	readonly sizeX: number;
	readonly sizeY: number;
	readonly rotation: number;
	readonly actions: EShapeActionRuntime[];
	readonly fill: EShapeFillLike;
	readonly stroke: EShapeStrokeLike;
	readonly text: EShapeTextLike;
	readonly cursor?: string;
	readonly interactive: boolean;

	reset: EShapeRuntimeReset;
	written: EShapeRuntimeReset;
	effect: number;
	isStateChanged: boolean;

	constructor(shape: EShape) {
		const transform = shape.transform;
		const position = transform.position;
		this.x = position.x;
		this.y = position.y;
		const size = shape.size;
		this.sizeX = size.x;
		this.sizeY = size.y;
		this.rotation = transform.rotation;
		this.actions = [];
		this.fill = shape.fill.toObject();
		this.stroke = shape.stroke.toObject();
		this.text = shape.text.toObject();
		this.cursor = shape.cursor;
		this.reset = EShapeRuntimeReset.NONE;
		this.written = EShapeRuntimeReset.NONE;
		this.effect = NaN;
		this.isStateChanged = false;
		this.interactive = false;
	}

	initialize(shape: EShape): void {
		shape.lock(EShapeLockPart.UPLOADED);
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].initialize(shape, this);
		}
		shape.unlock(EShapeLockPart.UPLOADED, true);
	}

	isActionable(): boolean {
		return 0 < this.actions.length;
	}

	onResize(shape: EShape): void {
		// Actions
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onResize(shape, this);
		}
	}

	onClick(shape: EShape, e: InteractionEvent | KeyboardEvent): void {
		// State
		const state = shape.state;
		if (state.isActionable) {
			state.isClicked = true;
		}

		// Actions
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onClick(shape, this, e);
		}
	}

	onDblClick(
		shape: EShape,
		e: MouseEvent | TouchEvent,
		interactionManager: InteractionManager
	): boolean {
		// State
		const state = shape.state;
		if (state.isActionable) {
			state.isDblClicked = true;
		}

		// Actions
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onDblClick(shape, this, e, interactionManager);
		}

		// Done
		return false;
	}

	onOver(shape: EShape, e: InteractionEvent): void {
		const state = shape.state;
		if (!state.isHovered) {
			// State
			state.isHovered = true;

			// Actions
			const actions = this.actions;
			for (let i = 0, imax = actions.length; i < imax; ++i) {
				actions[i].onOver(shape, this, e);
			}
		}
	}

	onOut(shape: EShape, e: InteractionEvent): void {
		const state = shape.state;
		if (state.isHovered) {
			// State
			shape.state.isHovered = false;

			// Actions
			const actions = this.actions;
			for (let i = 0, imax = actions.length; i < imax; ++i) {
				actions[i].onOut(shape, this, e);
			}
		}
	}

	onDown(shape: EShape, e: InteractionEvent | KeyboardEvent): void {
		// Actions
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onDowning(shape, this, e);
		}

		const state = shape.state;
		if (!state.isDown) {
			if (!state.isPressed) {
				// State
				state.addAll(EShapeState.DOWN, DBaseState.PRESSED);

				// Focus
				const layer = DApplications.getLayer(shape);
				if (layer) {
					// Focus
					const focusController = layer.getFocusController();
					focusController.focus(focusController.findParent(shape));
				}

				// Actions
				for (let i = 0, imax = actions.length; i < imax; ++i) {
					const action = actions[i];
					action.onDown(shape, this, e);
					action.onPressed(shape, this, e);
				}
			} else {
				// State
				state.isDown = true;

				// Focus
				const layer = DApplications.getLayer(shape);
				if (layer) {
					const focusController = layer.getFocusController();
					focusController.focus(focusController.findParent(shape));
				}

				// Actions
				for (let i = 0, imax = actions.length; i < imax; ++i) {
					actions[i].onDown(shape, this, e);
				}
			}
		}
	}

	onUp(shape: EShape, e: InteractionEvent | KeyboardEvent): void {
		const state = shape.state;
		if (!state.isUp) {
			if (state.isPressed) {
				// State
				state.set(EShapeState.UP, DBaseState.PRESSED);

				// Actions
				const actions = this.actions;
				for (let i = 0, imax = actions.length; i < imax; ++i) {
					const action = actions[i];
					action.onUp(shape, this, e);
					action.onUnpressed(shape, this, e);
				}
			} else {
				// State
				state.isUp = true;

				// Actions
				const actions = this.actions;
				for (let i = 0, imax = actions.length; i < imax; ++i) {
					actions[i].onUp(shape, this, e);
				}
			}
		}
	}

	onUpOutside(shape: EShape, e: InteractionEvent): void {
		const state = shape.state;
		if (state.isPressed) {
			// State
			state.set(EShapeState.UP_OUTSIDE, DBaseState.PRESSED);

			// Actions
			const actions = this.actions;
			for (let i = 0, imax = actions.length; i < imax; ++i) {
				const action = actions[i];
				action.onUpOutside(shape, this, e);
				action.onUnpressed(shape, this, e);
			}
		} else {
			// State
			state.isUpOutside = true;

			// Actions
			const actions = this.actions;
			for (let i = 0, imax = actions.length; i < imax; ++i) {
				actions[i].onUpOutside(shape, this, e);
			}
		}
	}

	onMove(shape: EShape, e: InteractionEvent): void {
		// Actions
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onMove(shape, this, e);
		}
	}

	onKeyDown(shape: EShape, e: KeyboardEvent): boolean {
		// State
		if (UtilKeyboardEvent.isActivateKey(e)) {
			this.onDown(shape, e);
		}

		// Actions
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onKeyDown(shape, this, e);
		}

		// Done
		return false;
	}

	onKeyUp(shape: EShape, e: KeyboardEvent): boolean {
		// State
		if (UtilKeyboardEvent.isActivateKey(e)) {
			const state = shape.state;
			if (state.isPressed) {
				const wasUp = state.isUp;
				this.onUp(shape, e);
				if (!wasUp && state.isUp) {
					this.onClick(shape, e);
				}
			}
		}

		// Actions
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onKeyUp(shape, this, e);
		}

		// Done
		return false;
	}

	onStateChange(shape: EShape, newState: DBaseStateSet, oldState: DBaseStateSet): void {
		this.isStateChanged = true;
		DApplications.update(shape);

		if (newState.isFocused) {
			if (!oldState.isFocused) {
				this.onFocus(shape);
			}
		} else if (oldState.isFocused) {
			this.onBlur(shape);
		}
	}

	onFocus(shape: EShape): void {
		// Actions
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onFocus(shape, this);
		}
	}

	onBlur(shape: EShape): void {
		// Actions
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onBlur(shape, this);
		}
	}

	onRightClick(shape: EShape, e: InteractionEvent): void {
		// State
		const state = shape.state;
		if (state.isActionable) {
			state.isRightClicked = true;
		}

		// Actions
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onRightClick(shape, this, e);
		}
	}

	onRightDown(shape: EShape, e: InteractionEvent): void {
		// Actions
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onRightDowning(shape, this, e);
		}

		const state = shape.state;
		if (!state.isRightDown) {
			if (state.isRightPressed) {
				// State
				state.addAll(EShapeState.RIGHT_DOWN, EShapeState.RIGHT_PRESSED);

				// Focus
				const layer = DApplications.getLayer(shape);
				if (layer) {
					// Focus
					const focusController = layer.getFocusController();
					focusController.focus(focusController.findParent(shape));
				}

				// Actions
				for (let i = 0, imax = actions.length; i < imax; ++i) {
					const action = actions[i];
					action.onRightDown(shape, this, e);
					action.onRightPressed(shape, this, e);
				}
			} else {
				// State
				state.isRightDown = false;

				// Focus
				const layer = DApplications.getLayer(shape);
				if (layer) {
					const focusController = layer.getFocusController();
					focusController.focus(focusController.findParent(shape));
				}

				// Actions
				for (let i = 0, imax = actions.length; i < imax; ++i) {
					actions[i].onRightDown(shape, this, e);
				}
			}
		}
	}

	onRightUp(shape: EShape, e: InteractionEvent): void {
		const state = shape.state;
		if (!state.isRightUp) {
			if (state.isRightPressed) {
				// State
				state.set(EShapeState.RIGHT_UP, EShapeState.RIGHT_PRESSED);

				// Actions
				const actions = this.actions;
				for (let i = 0, imax = actions.length; i < imax; ++i) {
					const action = actions[i];
					action.onRightUp(shape, this, e);
					action.onRightUnpressed(shape, this, e);
				}
			} else {
				// State
				state.isRightUp = true;

				// Actions
				const actions = this.actions;
				for (let i = 0, imax = actions.length; i < imax; ++i) {
					actions[i].onRightUp(shape, this, e);
				}
			}
		}
	}

	onRightUpOutside(shape: EShape, e: InteractionEvent): void {
		const state = shape.state;
		if (state.isRightPressed) {
			// State
			state.set(EShapeState.RIGHT_UP_OUTSIDE, EShapeState.RIGHT_PRESSED);

			// Actions
			const actions = this.actions;
			for (let i = 0, imax = actions.length; i < imax; ++i) {
				const action = actions[i];
				action.onRightUpOutside(shape, this, e);
				action.onRightUnpressed(shape, this, e);
			}
		} else {
			// State
			state.isRightUpOutside = true;

			// Actions
			const actions = this.actions;
			for (let i = 0, imax = actions.length; i < imax; ++i) {
				actions[i].onRightUpOutside(shape, this, e);
			}
		}
	}

	update(shape: EShape, time: number): void {
		const data = shape.data;
		const isEffectTimeUp = this.effect <= time;
		if (data.isChanged || this.isStateChanged || isEffectTimeUp) {
			this.isStateChanged = false;
			data.isChanged = false;
			if (isEffectTimeUp) {
				this.effect = NaN;
			}
			shape.lock(EShapeLockPart.UPLOADED);
			this.onUpdate(shape, time);
			shape.unlock(EShapeLockPart.UPLOADED, true);
			const wasStateChanged = this.isStateChanged;
			shape.state.removeAll(EShapeRuntimeImpl.TRANSIENT_STATES);
			this.isStateChanged = wasStateChanged;
		}
	}

	onRender(shape: EShape, time: number, renderer: Renderer): void {
		const actions = this.actions;
		for (let i = 0, imax = actions.length; i < imax; ++i) {
			actions[i].onRender(shape, this, time, renderer);
		}
		this.update(shape, time);
	}

	protected onUpdate(shape: EShape, time: number): void {
		const actions = this.actions;
		if (0 < actions.length) {
			this.written = EShapeRuntimeReset.NONE;
			for (let i = 0, imax = actions.length; i < imax; ++i) {
				actions[i].execute(shape, this, time);
			}
			this.doReset(shape);
		}
	}

	protected doReset(shape: EShape): void {
		const target = ~this.written & this.reset;
		if (target !== EShapeRuntimeReset.NONE) {
			if (target & EShapeRuntimeReset.POSITION_X) {
				shape.transform.position.x = this.x;
			}
			if (target & EShapeRuntimeReset.POSITION_Y) {
				shape.transform.position.y = this.y;
			}
			if (target & EShapeRuntimeReset.VISIBILITY) {
				shape.visible = true;
			}
			if (target & EShapeRuntimeReset.COLOR_FILL) {
				const fill = this.fill;
				shape.fill.set(undefined, fill.color, fill.alpha);
			}
			if (target & EShapeRuntimeReset.COLOR_STROKE) {
				const stroke = this.stroke;
				shape.stroke.set(undefined, stroke.color, stroke.alpha);
			}
			if (target & EShapeRuntimeReset.COLOR_TEXT) {
				const text = this.text;
				shape.text.set(undefined, text.color, text.alpha);
			}
			if (target & EShapeRuntimeReset.COLOR_TEXT_OUTLINE) {
				const outline = this.text.outline;
				shape.text.outline.set(undefined, outline.color, outline.alpha);
			}
			if (target & EShapeRuntimeReset.HEIGHT) {
				shape.size.y = this.sizeY;
			}
			if (target & EShapeRuntimeReset.WIDTH) {
				shape.size.x = this.sizeX;
			}
			if (target & EShapeRuntimeReset.ROTATION) {
				shape.transform.rotation = this.rotation;
			}
			if (target & EShapeRuntimeReset.TEXT) {
				shape.text.value = this.text.value;
			}
			if (target & EShapeRuntimeReset.CURSOR) {
				shape.cursor = this.cursor;
			}
		}
	}
}
