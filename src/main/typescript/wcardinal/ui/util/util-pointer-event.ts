/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, InteractionEvent, InteractionManager, Point } from "pixi.js";
import { DApplicationTarget } from "../d-application-like";

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

	static get upoutside(): string {
		return "pointerupoutside";
	}

	static get cancel(): string {
		return "pointercancel";
	}

	static get righttap(): string {
		return "rightclick";
	}

	static get rightdown(): string {
		return "rightdown";
	}

	static get rightup(): string {
		return "rightup";
	}

	static get rightupoutside(): string {
		return "rightupoutside";
	}

	static toGlobal(
		e: MouseEvent | TouchEvent,
		interactionManager: InteractionManager,
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
