/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAnimation } from "./d-animation";
import { DAnimationBase } from "./d-animation-base";
import { DBase } from "./d-base";
import { DViewConstraint } from "./d-view-constraint";
import { DViewParent } from "./d-view-parent";
import { DViewTarget, DViewToTarget } from "./d-view-to-target";
import { DViewTransform } from "./d-view-transform";

export class DViewTransformImpl implements DViewTransform {
	protected _owner: DBase;
	protected _toTarget: DViewToTarget;
	protected _constraint: DViewConstraint;
	protected _newX: number;
	protected _newY: number;
	protected _newScaleX: number;
	protected _newScaleY: number;
	protected _oldX: number;
	protected _oldY: number;
	protected _oldScaleX: number;
	protected _oldScaleY: number;
	protected _animation: DAnimation;
	protected _parent: DViewParent;
	protected _duration: number;
	protected _isStarted: boolean;

	constructor(
		owner: DBase,
		toTarget: DViewToTarget,
		parent: DViewParent,
		constraint: DViewConstraint,
		duration: number
	) {
		this._owner = owner;
		this._toTarget = toTarget;
		this._constraint = constraint;
		this._newScaleX = 1;
		this._newScaleY = 1;
		this._newX = 0;
		this._newY = 0;
		this._oldScaleX = 1;
		this._oldScaleY = 1;
		this._oldX = 0;
		this._oldY = 0;
		this._isStarted = false;
		this._animation = new DAnimationBase({
			onStart: () => {
				this.onStart();
			},
			onTime: (time: number): void => {
				this.onTime(time);
			},
			onEnd: () => {
				this.onEnd();
			},
			onStop: () => {
				this.onStop();
			},
			duration
		});
		this._parent = parent;
		this._duration = duration;
	}

	protected onStart(): void {
		const parent = this._parent;
		parent.emit("start", this._owner, parent);
	}

	protected onTime(time: number): void {
		const w0 = 1 - time;
		const w1 = time;

		const scaleX = this._oldScaleX * w0 + this._newScaleX * w1;
		const scaleY = this._oldScaleY * w0 + this._newScaleY * w1;
		const x = this._oldX * w0 + this._newX * w1;
		const y = this._oldY * w0 + this._newY * w1;

		const target = this._toTarget(this._owner);
		if (target != null) {
			this._constraint(target, x, y, scaleX, scaleY);
		}
	}

	protected onEnd(): void {
		const parent = this._parent;
		parent.emit("end", this._owner, parent);
	}

	protected onStop(): void {
		const parent = this._parent;
		parent.emit("stop", this._owner, parent);
	}

	start(
		target: DViewTarget,
		x: number,
		y: number,
		scaleX: number,
		scaleY: number,
		duration?: number,
		stop?: boolean
	): void {
		const parent = this._parent;
		if (stop !== false) {
			parent.stop();
		}
		if (duration == null) {
			duration = this._duration;
		}
		if (duration <= 0) {
			this.onStart();
			this._constraint(target, x, y, scaleX, scaleY);
			this.onEnd();
		} else {
			const position = target.position;
			const scale = target.scale;
			this._oldX = position.x;
			this._oldY = position.y;
			this._oldScaleX = scale.x;
			this._oldScaleY = scale.y;

			this._newX = x;
			this._newY = y;
			this._newScaleX = scaleX;
			this._newScaleY = scaleY;

			this._animation.duration = duration;
			this._animation.start();
		}
	}

	stop(): void {
		this._animation.stop();
	}
}
