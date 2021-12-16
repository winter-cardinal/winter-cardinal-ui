/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBase } from "./d-base";
import { UtilGestureMode } from "./util/util-gesture-mode";
import { UtilGestureModifier } from "./util/util-gesture-modifier";
import { DThemeViewGesture, DViewGesture, DViewGestureOptions } from "./d-view-gesture";
import { DViewStopper } from "./d-view-stopper";
import { DViewTarget, DViewToTarget } from "./d-view-to-target";
import { toEnum } from "./util/to-enum";
import { UtilGesture } from "./util/util-gesture";

export class DViewGestureImpl implements DViewGesture {
	protected _parent: DBase;
	protected _stopper: DViewStopper;
	protected _gestureUtil?: UtilGesture<DBase>;

	constructor(
		parent: DBase,
		toTarget: DViewToTarget,
		stopper: DViewStopper,
		theme: DThemeViewGesture,
		options: DViewGestureOptions | undefined
	) {
		this._parent = parent;
		this._stopper = stopper;

		const mode = toEnum(options?.mode ?? theme.getGestureMode(), UtilGestureMode);
		const modifier = toEnum(
			options?.modifier ?? theme.getGestureModifier(),
			UtilGestureModifier
		);
		if (mode === UtilGestureMode.ON || mode === UtilGestureMode.TOUCH) {
			this._gestureUtil = new UtilGesture<DBase>({
				touch: mode === UtilGestureMode.TOUCH,
				modifier,
				checker: options && options.checker,
				easing: {
					duration: options?.duration
				},
				on: {
					start: (): void => {
						this._stopper.stop();
					},
					move: (
						target: DBase,
						dx: number,
						dy: number,
						x: number,
						y: number,
						ds: number
					): void => {
						this.onGestureMove(toTarget(parent), dx, dy, x, y, ds);
					}
				}
			});
		}
	}

	protected onGestureMove(
		target: DViewTarget | null,
		dx: number,
		dy: number,
		x: number,
		y: number,
		ds: number
	): void {
		if (target) {
			// Scale
			const stopper = this._stopper;
			const oldScale = target.scale;
			const oldScaleX = oldScale.x;
			const oldScaleY = oldScale.y;
			let newScaleX = stopper.toNormalizedScale(oldScaleX * ds);
			let newScaleY = stopper.toNormalizedScale(oldScaleY * ds);

			const scaleRatioX = newScaleX / oldScaleX;
			const scaleRatioY = newScaleY / oldScaleY;
			const scaleRatio =
				ds < 1 ? Math.max(scaleRatioX, scaleRatioY) : Math.min(scaleRatioX, scaleRatioY);
			newScaleX = scaleRatio * oldScaleX;
			newScaleY = scaleRatio * oldScaleY;

			// Position
			const cx = x - dx;
			const cy = y - dy;
			const position = target.position;
			const newX = (position.x - cx) * scaleRatio + x;
			const newY = (position.y - cy) * scaleRatio + y;

			// Update
			target.scale.set(newScaleX, newScaleY);
			target.position.set(newX, newY);
		}
	}

	stop(): void {
		this._gestureUtil?.stop(this._parent);
	}

	onDown(e: interaction.InteractionEvent): void {
		this._gestureUtil?.onDown(this._parent, e);
	}
}
