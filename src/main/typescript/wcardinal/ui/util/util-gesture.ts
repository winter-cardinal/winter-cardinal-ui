/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, utils } from "pixi.js";
import { DApplicationTarget } from "../d-application-like";
import { DApplications } from "../d-applications";
import { DBaseStateSet } from "../d-base-state-set";
import { UtilGestureModifier } from "./util-gesture-modifier";
import { UtilGestureModifiers } from "./util-gesture-modifiers";
import { UtilGestureData } from "./util-gesture-data";
import { UtilGestureEasing, UtilGestureEasingOptions } from "./util-gesture-easing";
import { UtilPointerEvent } from "./util-pointer-event";
import InteractionEvent = interaction.InteractionEvent;

export interface UtilGestureTarget extends DApplicationTarget {
	state: DBaseStateSet;
}
export type UtilGestureOnMove<TARGET> = (
	target: TARGET,
	dx: number,
	dy: number,
	x: number,
	y: number,
	ds: number
) => void;
export type UtilGestureOnStart<TARGET> = (target: TARGET) => void;
export type UtilGestureOnEnd<TARGET> = (target: TARGET) => void;
export type UtilGestureOnStop<TARGET> = (target: TARGET) => void;
export type UtilGestureOnEasingStart<TARGET> = (target: TARGET) => void;
export type UtilGestureOnEasingEnd<TARGET> = (target: TARGET) => void;
export type UtilGestureChecker<TARGET> = (
	e: InteractionEvent,
	modifier: UtilGestureModifier,
	target: TARGET
) => boolean;

export interface UtilGestureCheckerOptions<TARGET> {
	start?: UtilGestureChecker<TARGET>;
	move?: UtilGestureChecker<TARGET>;
}

export interface UtilGestureOnEasingOptions<TARGET> {
	start?: UtilGestureOnEasingStart<TARGET>;
	end?: UtilGestureOnEasingEnd<TARGET>;
}

export interface UtilGestureOnOptions<TARGET> {
	start?: UtilGestureOnStart<TARGET>;
	move?: UtilGestureOnMove<TARGET>;
	end?: UtilGestureOnEnd<TARGET>;
	stop?: UtilGestureOnStop<TARGET>;
	easing?: UtilGestureOnEasingOptions<TARGET>;
}

export interface UtilGestureOptions<TARGET> {
	/**
	 * True to restrict to touch gestures only.
	 */
	touch?: boolean;

	/**
	 * Expected mouse modifiers
	 */
	modifier?: UtilGestureModifier;

	/**
	 * Checker options
	 */
	checker?: UtilGestureCheckerOptions<TARGET>;

	/**
	 * Easing options
	 */
	easing?: boolean | UtilGestureEasingOptions;

	/** Binds the pointerdown event of the given target. */
	bind?: TARGET & utils.EventEmitter;

	/** Event options */
	on?: UtilGestureOnOptions<TARGET>;
}

export class UtilGesture<TARGET extends UtilGestureTarget> {
	protected _onStart?: UtilGestureOnStart<TARGET>;
	protected _onMove?: UtilGestureOnMove<TARGET>;
	protected _onEnd?: UtilGestureOnEnd<TARGET>;
	protected _onStop?: UtilGestureOnStop<TARGET>;
	protected _onEasingStart?: UtilGestureOnEasingStart<TARGET>;
	protected _onEasingEnd?: UtilGestureOnEasingEnd<TARGET>;
	protected _modifier: UtilGestureModifier;
	protected _checkerStart: UtilGestureChecker<TARGET>;
	protected _checkerMove: UtilGestureChecker<TARGET>;
	protected _easing?: boolean | UtilGestureEasingOptions;
	protected _touch: boolean;

	protected _unused: Array<UtilGestureData<TARGET>>;
	protected _used: Map<TARGET, UtilGestureData<TARGET>>;

	constructor(options: UtilGestureOptions<TARGET>) {
		const on = options.on;
		if (on) {
			this._onStart = on.start;
			this._onMove = on.move;
			this._onEnd = on.end;
			this._onStop = on.stop;
			const easing = on.easing;
			if (easing != null) {
				this._onEasingStart = easing.start;
				this._onEasingEnd = easing.end;
			}
		}
		this._modifier = options?.modifier ?? UtilGestureModifier.NONE;
		const checker = options.checker;
		const defaultChecker = UtilGestureModifiers.match;
		this._checkerStart = checker?.start ?? defaultChecker;
		this._checkerMove = checker?.move ?? defaultChecker;
		this._easing = options.easing;
		this._touch = !!options.touch;

		this._unused = [];
		this._used = new Map<TARGET, UtilGestureData<TARGET>>();

		const bind = options.bind;
		if (bind != null) {
			this.bind(bind);
		}
	}

	protected newData(target: TARGET): UtilGestureData<TARGET> {
		const used = this._used;
		const result = used.get(target);
		if (result != null) {
			return result;
		}
		const poped = this._unused.pop();
		if (poped != null) {
			used.set(target, poped);
			return poped;
		}
		const created = new UtilGestureData<TARGET>();
		created.easing = this.newEasing(created);
		created.onMove = this.newOnMove(created);
		created.onEnd = this.newOnEnd(created);
		used.set(target, created);
		return created;
	}

	protected newEasing(data: UtilGestureData<TARGET>): UtilGestureEasing | undefined {
		const easing = this._easing;
		if (easing == null || easing !== false) {
			const onEasingMoveBound = (dx: number, dy: number, ds: number, time: number): void => {
				this.onEasingMove(dx, dy, ds, time, data);
			};
			const onEasingEndBound = (): void => {
				this.onEasingEnd(data);
			};
			return new UtilGestureEasing(
				onEasingMoveBound,
				onEasingEndBound,
				this.toEasingOptions(easing)
			);
		}
		return undefined;
	}

	protected toEasingOptions(
		options?: true | UtilGestureEasingOptions
	): UtilGestureEasingOptions | undefined {
		return options == null || options === true ? undefined : options;
	}

	protected deleteData(data: UtilGestureData<TARGET>): void {
		const target = data.target;
		if (target) {
			if (this._used.delete(target)) {
				data.target = undefined;
				data.pointers.clear();
				this._unused.push(data);
			}
		}
	}

	bind(target: TARGET & utils.EventEmitter): this {
		target.on(UtilPointerEvent.down, (e: InteractionEvent): void => {
			this.onDown(target, e);
		});
		return this;
	}

	protected isTouch(e: InteractionEvent): boolean {
		const oe = e.data.originalEvent;
		if ("touches" in oe) {
			return true;
		} else if ("pointerId" in oe) {
			return oe.pointerType !== "mouse";
		} else {
			return false;
		}
	}

	onDown(target: TARGET, e: InteractionEvent): void {
		if (this._touch && !this.isTouch(e)) {
			return;
		}
		if (!this._checkerStart(e, this._modifier, target)) {
			return;
		}
		const layer = DApplications.getLayer(target);
		if (layer == null) {
			return;
		}

		e.stopPropagation();
		if (target.state.isGesturing) {
			this._used.get(target)?.start(e);
		} else {
			// User-defined handler
			const onStart = this._onStart;
			if (onStart != null) {
				onStart(target);
			}

			const data = this.newData(target);
			data.target = target;
			target.state.isGesturing = true;

			// Interaction manager
			const interactionManager = layer.renderer.plugins.interaction;
			data.interactionManager = interactionManager;

			// Update the center
			data.start(e);

			// Easing util
			const easing = data.easing;
			if (easing) {
				easing.onStart();
			}

			// Event handler
			data.bind(e);
		}
	}

	protected newOnMove(data: UtilGestureData<TARGET>): (e: InteractionEvent) => void {
		return (e: InteractionEvent): void => {
			this.onMove(e, data);
		};
	}

	protected newOnEnd(data: UtilGestureData<TARGET>): (e: InteractionEvent) => void {
		return (e: InteractionEvent): void => {
			this.onEnd(e, data);
		};
	}

	protected onMove(e: InteractionEvent, data: UtilGestureData<TARGET>): void {
		const target = data.target;
		if (target == null || !target.state.isGesturing) {
			return;
		}
		if (!data.isUpdatable(e) || !this._checkerMove(e, this._modifier, target)) {
			return;
		}

		// Update the center
		const center = data.center;
		const oldCenterX = center.x;
		const oldCenterY = center.y;
		const oldScale = data.scale;
		const oldTime = data.time;
		data.update(e);
		const newCenterX = center.x;
		const newCenterY = center.y;
		const newScale = data.scale;
		const newTime = data.time;

		// Calculate the position
		const dx = newCenterX - oldCenterX;
		const dy = newCenterY - oldCenterY;
		const dt = newTime - oldTime;
		const epsilon = 0.00001;
		const ds = epsilon < oldScale && epsilon < newScale ? newScale / oldScale : 1;

		// Easing
		const easing = data.easing;
		if (easing) {
			easing.onMove(dx, dy, ds, dt);
		}

		// Call the user-defined handler
		const onMove = this._onMove;
		if (onMove != null) {
			if (dx !== 0 || dy !== 0 || ds !== 1) {
				onMove(target, dx, dy, newCenterX, newCenterY, ds);
			}
		}
	}

	protected onEnd(e: InteractionEvent, data: UtilGestureData<TARGET>): void {
		const target = data.target;
		if (target == null || !target.state.isGesturing) {
			return;
		}
		if (!data.end(e)) {
			return;
		}

		// State
		target.state.isGesturing = false;

		// Remove event handlers
		const interactionManager = data.interactionManager;
		data.interactionManager = undefined;
		if (interactionManager) {
			const onMoveBound = data.onMove;
			if (onMoveBound) {
				interactionManager.off(UtilPointerEvent.move, onMoveBound);
			}
			const onEndBound = data.onEnd;
			if (onEndBound) {
				interactionManager.off(UtilPointerEvent.up, onEndBound);
				interactionManager.off(UtilPointerEvent.cancel, onEndBound);
			}
		}

		// Call the user-defined handler
		const onEnd = this._onEnd;
		if (onEnd != null) {
			onEnd(target);
		}

		// Start the Easing
		const onEasingStart = this._onEasingStart;
		if (onEasingStart) {
			onEasingStart(data.target!);
		}
		const easing = data.easing;
		if (easing) {
			easing.onEnd(e.data.originalEvent.timeStamp - data.time);
		} else {
			this.deleteData(data);
			const onEasingEnd = this._onEasingEnd;
			if (onEasingEnd) {
				onEasingEnd(data.target!);
			}
		}
	}

	protected onEasingMove(
		dx: number,
		dy: number,
		ds: number,
		time: number,
		data: UtilGestureData<TARGET>
	): void {
		const target = data.target;
		if (target == null) {
			return;
		}
		const onMove = this._onMove;
		if (onMove == null) {
			return;
		}
		if (dx === 0 && dy === 0 && ds === 1) {
			return;
		}
		const center = data.center;
		const x = center.x + dx;
		const y = center.y + dy;
		center.set(x, y);
		onMove(data.target!, dx, dy, x, y, ds);
	}

	protected onEasingEnd(data: UtilGestureData<TARGET>): void {
		this.deleteData(data);
		const onEasingEnd = this._onEasingEnd;
		if (onEasingEnd) {
			onEasingEnd(data.target!);
		}
	}

	stop(target: TARGET): void {
		const data = this._used.get(target);
		if (data == null) {
			return;
		}
		data.easing?.stop();
		this.deleteData(data);
		const onStop = this._onStop;
		if (onStop) {
			onStop(target);
		}
	}
}
