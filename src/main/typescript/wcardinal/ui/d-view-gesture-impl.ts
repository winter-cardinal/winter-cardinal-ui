/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBase } from "./d-base";
import { UtilGestureMode } from "./util/util-gesture-mode";
import { UtilGestureModifier } from "./util/util-gesture-modifier";
import { DThemeViewGesture, DViewGesture, DViewGestureOptions } from "./d-view-gesture";
import { DViewParent } from "./d-view-parent";
import { DViewTarget, DViewToTarget } from "./d-view-to-target";
import { toEnum } from "./util/to-enum";
import { UtilGesture } from "./util/util-gesture";
import { DViewConstraint } from "./d-view-constraint";

export class DViewGestureImpl implements DViewGesture {
	protected _owner: DBase;
	protected _parent: DViewParent;
	protected _constraint: DViewConstraint;
	protected _gestureUtil?: UtilGesture<DBase>;

	constructor(
		owner: DBase,
		toTarget: DViewToTarget,
		parent: DViewParent,
		constraint: DViewConstraint,
		theme: DThemeViewGesture,
		options?: DViewGestureOptions
	) {
		this._owner = owner;
		this._parent = parent;
		this._constraint = constraint;

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
						this.onStart();
					},
					move: (
						target: DBase,
						dx: number,
						dy: number,
						x: number,
						y: number,
						ds: number
					): void => {
						this.onGestureMove(toTarget(owner), dx, dy, x, y, ds);
					},
					easing: {
						end: (): void => {
							this.onEnd();
						}
					},
					stop: (): void => {
						this.onStop();
					}
				}
			});
		}
	}

	protected onStart(): void {
		const parent = this._parent;
		parent.stop();
		parent.emit("start", this, parent);
	}

	protected onEnd(): void {
		const parent = this._parent;
		parent.emit("end", this, parent);
	}

	protected onStop(): void {
		const parent = this._parent;
		parent.emit("stop", this, parent);
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
			const parent = this._parent;
			const oldScale = target.scale;
			const oldScaleX = oldScale.x;
			const oldScaleY = oldScale.y;
			let newScaleX = parent.toNormalizedScale(oldScaleX * ds);
			let newScaleY = parent.toNormalizedScale(oldScaleY * ds);

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
			this._constraint(target, newX, newY, newScaleX, newScaleY);
		}
	}

	stop(): void {
		this._gestureUtil?.stop(this._owner);
	}

	onDown(e: interaction.InteractionEvent): void {
		this._gestureUtil?.onDown(this._owner, e);
	}
}
