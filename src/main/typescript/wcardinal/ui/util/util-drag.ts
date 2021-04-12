/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DApplications } from "../d-applications";
import { DBase } from "../d-base";
import { DMouseModifier } from "../d-mouse-modifier";
import { DMouseModifiers } from "../d-mouse-modifiers";
import { UtilDragEasing, UtilDragEasingOptions } from "./util-drag-easing";
import { UtilPointerEvent } from "./util-pointer-event";
import InteractionEvent = interaction.InteractionEvent;
import InteractionManager = interaction.InteractionManager;

export type UtilDragOnMove = (dx: number, dy: number, x: number, y: number, ds: number) => void;
export type UtilDragOnStart = () => void;
export type UtilDragOnEnd = () => void;
export type UtilDragChecker = (
	e: InteractionEvent,
	modifier: DMouseModifier,
	target: DBase
) => boolean;

export interface UtilDragCheckerOptions {
	start?: UtilDragChecker;
	move?: UtilDragChecker;
}

export interface UtilDragOnOptions {
	start?: UtilDragOnStart;
	move?: UtilDragOnMove;
	end?: UtilDragOnEnd;
}

export interface UtilDragOptions {
	target: DBase;
	touch?: boolean;
	modifier?: DMouseModifier;
	checker?: UtilDragCheckerOptions;
	easing?: boolean | UtilDragEasingOptions;
	bind?: boolean;
	on?: UtilDragOnOptions;
}

const toEasingOptions = (
	options: true | UtilDragEasingOptions | undefined
): UtilDragEasingOptions | undefined => {
	return options == null || options === true ? undefined : options;
};

const toChecker = (options: UtilDragOptions): { start: UtilDragChecker; move: UtilDragChecker } => {
	const checker = options.checker;
	const defaultChecker = DMouseModifiers.match;
	return {
		start: checker?.start ?? defaultChecker,
		move: checker?.move ?? defaultChecker
	};
};

export class UtilDrag {
	protected static EPSILON = 0.00001;
	protected _target: DBase<any, any>;
	protected _onDownBound: (e: InteractionEvent) => void;
	protected _onMoveBound: (e: InteractionEvent) => void;
	protected _onEndBound: (e: InteractionEvent) => void;
	protected _onStart?: UtilDragOnStart;
	protected _onMove?: UtilDragOnMove;
	protected _onEnd?: UtilDragOnEnd;
	protected _down: string;
	protected _move: string;
	protected _up: string;
	protected _easing?: UtilDragEasing;
	protected _modifier: DMouseModifier;
	protected _checker: { start: UtilDragChecker; move: UtilDragChecker };
	protected _interactionManager: InteractionManager | null;
	protected _center: Point;
	protected _scale: number;
	protected _scalingCenter: Point;
	protected _time: number;

	constructor(options: UtilDragOptions) {
		const target = options.target;
		this._target = target;
		const on = options.on;
		if (on) {
			this._onStart = on.start;
			this._onMove = on.move;
			this._onEnd = on.end;
		}
		this._modifier = options?.modifier ?? DMouseModifier.NONE;
		this._checker = toChecker(options);
		this._interactionManager = null;
		this._center = new Point();
		this._scale = 1;
		this._scalingCenter = new Point();
		this._time = 0;

		const easing = options.easing;
		if (easing == null || easing !== false) {
			const onEasingMoveBound = (dx: number, dy: number, ds: number, time: number): void => {
				this.onEasingMove(dx, dy, ds, time);
			};
			this._easing = new UtilDragEasing(onEasingMoveBound, toEasingOptions(easing));
		}

		this._onDownBound = (e: InteractionEvent): void => {
			this.onDown(e);
		};

		this._onMoveBound = (e: InteractionEvent): void => {
			this.onMove(e);
		};

		this._onEndBound = (e: InteractionEvent): void => {
			this.onEnd(e);
		};

		if (options.touch) {
			this._down = "touchstart";
			this._move = "touchmove";
			this._up = "touchend";
		} else {
			this._down = UtilPointerEvent.down;
			this._move = UtilPointerEvent.move;
			this._up = UtilPointerEvent.up;
		}

		if (options.bind !== false) {
			target.on(this._down, this._onDownBound);
		}
	}

	protected calcCenterAndScale(
		e: InteractionEvent,
		center: Point,
		interactionManager: InteractionManager
	): number {
		const oe = e.data.originalEvent;
		const global = e.data.global;
		if ("touches" in oe) {
			const touches = oe.touches;
			const touchesLength = touches.length;
			if (0 < touchesLength) {
				// Update the center
				const first = touches[0];
				let centerX = first.clientX;
				let centerY = first.clientY;
				for (let i = 1, imax = touches.length; i < imax; ++i) {
					const touch = touches[i];
					centerX += touch.clientX;
					centerY += touch.clientY;
				}
				centerX /= touchesLength;
				centerY /= touchesLength;
				interactionManager.mapPositionToPoint(center, centerX, centerY);

				if (1 < touchesLength) {
					// Calculate the maximum distance from the center
					let squareDistance = 0;
					for (let i = 1, imax = touches.length; i < imax; ++i) {
						const touch = touches[i];
						const dx = touch.clientX - centerX;
						const dy = touch.clientY - centerY;
						squareDistance = Math.max(squareDistance, dx * dx + dy * dy);
					}
					return Math.sqrt(squareDistance);
				} else {
					return 0;
				}
			}
		}
		center.copyFrom(global);
		return 0;
	}

	onDown(e: InteractionEvent): void {
		const target = this._target;
		if (this._checker.start(e, this._modifier, target)) {
			const layer = DApplications.getLayer(target);
			if (layer) {
				e.stopPropagation();

				if (target.state.isDragging) {
					const interactionManager = this._interactionManager;
					if (interactionManager) {
						const center = this._center;
						this._scale = this.calcCenterAndScale(e, center, interactionManager);
					}
				} else {
					target.state.isDragging = true;

					// Interaction manager
					const interactionManager = layer.renderer.plugins.interaction;
					this._interactionManager = interactionManager;

					// Update the center
					const center = this._center;
					this._scale = this.calcCenterAndScale(e, center, interactionManager);

					//
					this._time = e.data.originalEvent.timeStamp;

					// Easing util
					const easing = this._easing;
					if (easing) {
						easing.onStart();
					}

					// User-defined handler
					const onStart = this._onStart;
					if (onStart != null) {
						onStart();
					}

					// Event handler
					interactionManager.on(this._move, this._onMoveBound);
					interactionManager.on(this._up, this._onEndBound);
				}
			}
		}
	}

	protected onMove(e: InteractionEvent): void {
		const target = this._target;
		if (target.state.isDragging && this._checker.move(e, this._modifier, target)) {
			const interactionManager = this._interactionManager;
			if (interactionManager) {
				// Update the center
				const center = this._center;
				const centerX = center.x;
				const centerY = center.y;
				const newScale = this.calcCenterAndScale(e, center, interactionManager);
				const oldScale = this._scale;
				this._scale = newScale;
				const oldTime = this._time;
				const newTime = e.data.originalEvent.timeStamp;
				this._time = newTime;

				// Calculate the position
				const dx = center.x - centerX;
				const dy = center.y - centerY;
				const dt = newTime - oldTime;
				const ds = UtilDrag.EPSILON < oldScale ? newScale / oldScale : 1;

				// Easing util
				const easing = this._easing;
				if (easing) {
					easing.onMove(dx, dy, ds, dt);
				}

				// User-defined handler
				const onMove = this._onMove;
				if (onMove != null) {
					if (dx !== 0 || dy !== 0 || ds !== 1) {
						onMove(dx, dy, center.x, center.y, ds);
					}
				}
			}
		}
	}

	protected onEnd(e: InteractionEvent): void {
		const target = this._target;
		if (target.state.isDragging) {
			const interactionManager = this._interactionManager;
			if (interactionManager) {
				// Update the center
				const center = this._center;
				this._scalingCenter.copyFrom(center);
				this._scale = this.calcCenterAndScale(e, center, interactionManager);

				// Finalize
				const oe = e.data.originalEvent;
				if ("touches" in oe ? oe.touches.length <= 0 : true) {
					target.state.isDragging = false;

					// Event handler
					this._interactionManager = null;
					interactionManager.off(this._move, this._onMoveBound);
					interactionManager.off(this._up, this._onEndBound);

					// User-defined handler
					const onEnd = this._onEnd;
					if (onEnd != null) {
						onEnd();
					}

					// Easing util
					const easing = this._easing;
					if (easing) {
						easing.onEnd(e.data.originalEvent.timeStamp - this._time);
					}
				}
			}
		}
	}

	protected onEasingMove(dx: number, dy: number, ds: number, time: number): void {
		const onMove = this._onMove;
		if (onMove != null) {
			if (dx !== 0 || dy !== 0 || ds !== 1) {
				const scalingCenter = this._scalingCenter;
				scalingCenter.set(scalingCenter.x + dx, scalingCenter.y + dy);
				onMove(dx, dy, scalingCenter.x, scalingCenter.y, ds);
			}
		}
	}

	stop(): void {
		const easing = this._easing;
		if (easing) {
			easing.stop();
		}
	}
}
