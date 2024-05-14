/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent } from "pixi.js";
import { DApplications } from "../d-applications";
import { UtilGestureData } from "./util-gesture-data";
import { UtilPointerEvent } from "./util-pointer-event";
import { UtilGestureTarget } from "./util-gesture-target";

export type UtilGestureOnTap<TARGET> = (target: TARGET, e: InteractionEvent) => void;

export interface UtilGestureTapOnOptions<TARGET> {
	tap?: UtilGestureOnTap<TARGET>;
}

export interface UtilGestureTapOptions<TARGET> {
	threshold?: number;
}

export class UtilGestureTap<TARGET extends UtilGestureTarget> {
	protected _onTap?: UtilGestureOnTap<TARGET>;
	protected _threshold: number;
	protected _unused: Array<UtilGestureData<TARGET>>;
	protected _used: Map<TARGET, UtilGestureData<TARGET>>;

	constructor(on?: UtilGestureTapOnOptions<TARGET>, options?: UtilGestureTapOptions<TARGET>) {
		this._onTap = on?.tap;
		this._threshold = options?.threshold ?? 10;
		this._unused = [];
		this._used = new Map<TARGET, UtilGestureData<TARGET>>();
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
		created.easing = undefined;
		created.onMove = this.newOnMove(created);
		created.onEnd = this.newOnEnd(created);
		used.set(target, created);
		return created;
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

	onDown(target: TARGET, e: InteractionEvent): void {
		if (this._onTap == null) {
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
			const data = this.newData(target);
			data.target = target;
			data.distance = 0;
			target.state.isGesturing = true;

			// Interaction manager
			const interactionManager = layer.renderer.plugins.interaction;
			data.interactionManager = interactionManager;

			// Update the center
			data.start(e);

			// Event handler
			data.bind(e);
		}
	}

	protected onMove(e: InteractionEvent, data: UtilGestureData<TARGET>): void {
		const target = data.target;
		if (target == null || !target.state.isGesturing) {
			return;
		}
		if (!data.isUpdatable(e)) {
			return;
		}

		// Update the center
		const center = data.center;
		const oldCenterX = center.x;
		const oldCenterY = center.y;
		data.update(e);
		const newCenterX = center.x;
		const newCenterY = center.y;

		// Calculate the position
		const dx = newCenterX - oldCenterX;
		const dy = newCenterY - oldCenterY;

		// Distance
		data.distance += Math.abs(dx) + Math.abs(dy);
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

		// Tap
		this.end(target, data, e);

		// Delete this data
		this.deleteData(data);
	}

	end(target: TARGET, data: UtilGestureData<TARGET>, e: InteractionEvent): void {
		const onTap = this._onTap;
		if (onTap && data.distance < this._threshold) {
			onTap(target, e);
		}
	}

	stop(target: TARGET): void {
		const data = this._used.get(target);
		if (data != null) {
			this.deleteData(data);
		}
	}
}
