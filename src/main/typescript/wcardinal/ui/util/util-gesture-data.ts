/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent, InteractionManager, Point } from "pixi.js";
import { UtilGestureEasing } from "./util-gesture-easing";
import { UtilPointerEvent } from "./util-pointer-event";

export class UtilGestureData<TARGET> {
	target?: TARGET;
	pointers: Map<number, PointerEvent>;
	interactionManager?: InteractionManager;
	center: Point;
	scale: number;
	time: number;
	onMove?: (e: InteractionEvent) => void;
	onEnd?: (e: InteractionEvent) => void;
	easing?: UtilGestureEasing;

	constructor() {
		this.pointers = new Map<number, PointerEvent>();
		this.center = new Point();
		this.scale = 0;
		this.time = 0;
	}

	start(e: InteractionEvent): void {
		const oe = e.data.originalEvent;
		if ("pointerId" in oe) {
			this.pointers.set(oe.pointerId, oe);
		}
		this.doUpdate(e);
	}

	isUpdatable(e: InteractionEvent): boolean {
		const oe = e.data.originalEvent;
		if ("pointerId" in oe) {
			return this.pointers.has(oe.pointerId);
		}
		return true;
	}

	update(e: InteractionEvent): void {
		const oe = e.data.originalEvent;
		if ("pointerId" in oe) {
			this.pointers.set(oe.pointerId, oe);
		}
		this.doUpdate(e);
	}

	end(e: InteractionEvent): boolean {
		let result = true;
		const oe = e.data.originalEvent;
		if ("touches" in oe) {
			result = oe.touches.length <= 0;
		} else if ("pointerId" in oe) {
			const pointers = this.pointers;
			pointers.delete(oe.pointerId);
			result = pointers.size <= 0;
		}
		this.doUpdate(e);
		return result;
	}

	bind(e: InteractionEvent): void {
		const interactionManager = this.interactionManager;
		if (interactionManager) {
			const onMove = this.onMove;
			if (onMove) {
				interactionManager.on(UtilPointerEvent.move, onMove);
			}
			const onEnd = this.onEnd;
			if (onEnd) {
				interactionManager.on(UtilPointerEvent.up, onEnd);
				interactionManager.on(UtilPointerEvent.upoutside, onEnd);
				interactionManager.on(UtilPointerEvent.cancel, onEnd);
			}
		}
	}

	unbind(): void {
		const interactionManager = this.interactionManager;
		if (interactionManager) {
			const onMove = this.onMove;
			if (onMove) {
				interactionManager.off(UtilPointerEvent.move, onMove);
			}
			const onEnd = this.onEnd;
			if (onEnd) {
				interactionManager.off(UtilPointerEvent.up, onEnd);
				interactionManager.off(UtilPointerEvent.upoutside, onEnd);
				interactionManager.off(UtilPointerEvent.cancel, onEnd);
			}
		}
	}

	protected doUpdate(e: InteractionEvent): void {
		const interactionManager = this.interactionManager;
		const center = this.center;
		const oe = e.data.originalEvent;
		this.scale = 0;
		this.time = oe.timeStamp;
		if ("touches" in oe) {
			const touches = oe.touches;
			const touchesLength = touches.length;
			if (0 < touchesLength) {
				// Update the center
				let centerX = 0;
				let centerY = 0;
				for (let i = 0, imax = touches.length; i < imax; ++i) {
					const touch = touches[i];
					centerX += touch.clientX;
					centerY += touch.clientY;
				}
				centerX /= touchesLength;
				centerY /= touchesLength;
				if (interactionManager) {
					interactionManager.mapPositionToPoint(center, centerX, centerY);
				} else {
					center.set(centerX, centerY);
				}

				if (1 < touchesLength) {
					// Calculate the maximum distance from the center
					let squareDistance = 0;
					for (let i = 1, imax = touches.length; i < imax; ++i) {
						const touch = touches[i];
						const dx = touch.clientX - centerX;
						const dy = touch.clientY - centerY;
						squareDistance = Math.max(squareDistance, dx * dx + dy * dy);
					}
					this.scale = Math.sqrt(squareDistance);
				}
			}
		} else if ("pointerId" in oe) {
			const pointers = this.pointers;
			const pointersSize = pointers.size;
			if (0 < pointersSize) {
				// Update the center
				let centerX = 0;
				let centerY = 0;
				pointers.forEach((pointer): void => {
					centerX += pointer.clientX;
					centerY += pointer.clientY;
				});
				centerX /= pointersSize;
				centerY /= pointersSize;
				if (interactionManager) {
					interactionManager.mapPositionToPoint(center, centerX, centerY);
				} else {
					center.set(centerX, centerY);
				}

				if (1 < pointersSize) {
					// Calculate the maximum distance from the center
					let squareDistance = 0;
					pointers.forEach((pointer): void => {
						const dx = pointer.clientX - centerX;
						const dy = pointer.clientY - centerY;
						squareDistance = Math.max(squareDistance, dx * dx + dy * dy);
					});
					this.scale = Math.sqrt(squareDistance);
				}
			}
		} else {
			center.copyFrom(e.data.global);
		}
	}
}
