/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, interaction, Point } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DApplicationTarget } from "../d-application-like";
import { DApplications } from "../d-applications";

export type UtilPointerEventOnClick = (e: InteractionEvent, isSimulated: boolean) => void;

export type UtilPointerEventOnDblClick = (e: MouseEvent | TouchEvent, isSimulated: boolean) => void;

export interface UtilPointerEventClickTarget extends DApplicationTarget {
	on(name: string, handler: UtilPointerEventOnClick): void;
}

export class UtilPointerEvent {
	static CLICK_DISTANCE_THRESHOLD: number = 10;
	static DBLCLICK_INTERVAL_THRESHOLD: number = 333;
	static LONG_CLICK_THRESHOLD: number = 750;

	static get touchable(): boolean {
		return "ontouchstart" in document;
	}

	static get tap(): string {
		return "pointertap";
	}

	static get down(): string {
		return "pointerdown";
	}

	static get enter(): string {
		return "pointerenter";
	}

	static get leave(): string {
		return "pointerleave";
	}

	static get move(): string {
		return "pointermove";
	}

	static get out(): string {
		return "pointerout";
	}

	static get over(): string {
		return "pointerover";
	}

	static get up(): string {
		return "pointerup";
	}

	static get cancel(): string {
		return "pointercancel";
	}

	static toGlobal(
		e: MouseEvent | TouchEvent,
		interactionManager: interaction.InteractionManager,
		result: Point
	): Point {
		if ("touches" in e) {
			const touches = e.changedTouches;
			const touch = touches[touches.length - 1];
			if (touch != null) {
				interactionManager.mapPositionToPoint(result, touch.clientX, touch.clientY);
			} else {
				interactionManager.mapPositionToPoint(result, 0, 0);
			}
		} else {
			interactionManager.mapPositionToPoint(result, e.clientX, e.clientY);
		}
		return result;
	}

	protected static isValidDistance(e: InteractionEvent, x: number, y: number): boolean {
		const global = e.data.global;
		const dx = Math.abs(x - global.x);
		const dy = Math.abs(y - global.y);
		const threshold = this.CLICK_DISTANCE_THRESHOLD;
		return dx < threshold && dy < threshold;
	}

	static onClick(target: UtilPointerEventClickTarget, onClick: UtilPointerEventOnClick): void {
		let isDowned = false;
		let downX = 0;
		let downY = 0;
		let interactionManagerBound: interaction.InteractionManager | null = null;
		const up = this.up;
		const cancel = this.cancel;
		const cleanup = (): void => {
			isDowned = false;
			if (interactionManagerBound) {
				interactionManagerBound.off(up, onUp);
				interactionManagerBound.off(cancel, onCancel);
				interactionManagerBound = null;
			}
		};
		target.on("click", (e: InteractionEvent): void => {
			if (isDowned) {
				cleanup();
			}
			onClick(e, false);
		});
		const onUp = (e: InteractionEvent): void => {
			if (isDowned) {
				cleanup();
				if (this.contains(target, e.target)) {
					if (this.isValidDistance(e, downX, downY)) {
						onClick(e, true);
					}
				}
			}
		};
		const onCancel = (e: InteractionEvent): void => {
			if (isDowned) {
				cleanup();
			}
		};
		target.on(this.down, (e: InteractionEvent): void => {
			if (isDowned) {
				const global = e.data.global;
				downX = global.x;
				downY = global.y;
			} else {
				isDowned = true;
				const global = e.data.global;
				downX = global.x;
				downY = global.y;
				if (interactionManagerBound) {
					interactionManagerBound.off(up, onUp);
					interactionManagerBound.off(cancel, onCancel);
					interactionManagerBound = null;
				}
				const layer = DApplications.getLayer(target);
				if (layer) {
					interactionManagerBound = layer.renderer.plugins.interaction;
					interactionManagerBound.once(up, onUp);
					interactionManagerBound.once(cancel, onCancel);
				}
			}
		});
	}

	static onDblClick(target: HTMLElement, onDblClick: UtilPointerEventOnDblClick): void {
		target.addEventListener("dblclick", (e) => onDblClick(e, false));

		if (this.touchable) {
			let isDowned = 0;
			let downX = 0;
			let downY = 0;
			let clickTime = 0;

			target.addEventListener("touchstart", (e: TouchEvent): void => {
				if (isDowned !== 0 && isDowned !== 2) {
					isDowned = 0;
					return;
				}
				const touches = e.touches;
				const touchesLength = touches.length;
				if (touchesLength <= 0) {
					isDowned = 0;
					return;
				}
				const touch = touches.item(touchesLength - 1);
				if (touch == null) {
					isDowned = 0;
					return;
				}
				isDowned += 1;
				downX = touch.clientX;
				downY = touch.clientY;
			});

			target.addEventListener("touchend", (e: TouchEvent): void => {
				if (isDowned !== 1 && isDowned !== 3) {
					isDowned = 0;
					return;
				}
				const touches = e.changedTouches;
				const touchesLength = touches.length;
				if (touchesLength <= 0) {
					isDowned = 0;
					return;
				}
				const touch = touches[touchesLength - 1];
				if (touch == null) {
					isDowned = 0;
					return;
				}
				const dx = downX - touch.clientX;
				const dy = downY - touch.clientY;
				if (this.CLICK_DISTANCE_THRESHOLD <= Math.abs(dx) + Math.abs(dy)) {
					isDowned = 0;
					return;
				}
				if (isDowned === 1) {
					clickTime = e.timeStamp;
					isDowned = 2;
				} else {
					const elapsedTime = e.timeStamp - clickTime;
					if (elapsedTime < this.DBLCLICK_INTERVAL_THRESHOLD) {
						isDowned = 0;
						onDblClick(e, true);
					} else {
						clickTime = e.timeStamp;
						isDowned = 2;
					}
				}
			});

			target.addEventListener("touchcancel", (): void => {
				isDowned = 0;
			});
		}
	}

	static contains(target: unknown, targetOrChild: DisplayObject | null): boolean {
		let current = targetOrChild;
		while (current != null && current !== target) {
			current = current.parent;
		}
		return current === target;
	}
}
