/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAnimationBase } from "./d-animation-base";
import { DBase } from "./d-base";
import { DViewStopper } from "./d-view-stopper";
import { DViewTarget, DViewToTarget } from "./d-view-to-target";
import { DViewTransform } from "./d-view-transform";

export class DViewTransformImpl implements DViewTransform {
	protected _parent: DBase;
	protected _toTarget: DViewToTarget;
	protected _newX: number;
	protected _newY: number;
	protected _newScaleX: number;
	protected _newScaleY: number;
	protected _oldX: number;
	protected _oldY: number;
	protected _oldScaleX: number;
	protected _oldScaleY: number;
	protected _animation: DAnimationBase;
	protected _stopper: DViewStopper;
	protected _duration: number;

	constructor( parent: DBase, toTarget: DViewToTarget, stopper: DViewStopper, duration: number ) {
		this._parent = parent;
		this._toTarget = toTarget;
		this._newScaleX = 1;
		this._newScaleY = 1;
		this._newX =  0;
		this._newY = 0;
		this._oldScaleX = 1;
		this._oldScaleY = 1;
		this._oldX = 0;
		this._oldY = 0;
		this._animation = new DAnimationBase({
			onTime: ( time: number ): void => {
				this.onTime( time );
			},
			duration
		});
		this._stopper = stopper;
		this._duration = duration;
	}

	protected onTime( time: number ): void {
		const w0 = 1 - time;
		const w1 = time;

		const scaleX = this._oldScaleX * w0 + this._newScaleX * w1;
		const scaleY = this._oldScaleY * w0 + this._newScaleY * w1;
		const x = this._oldX * w0 + this._newX * w1;
		const y = this._oldY * w0 + this._newY * w1;

		const target = this._toTarget( this._parent );
		if( target != null ) {
			target.scale.set( scaleX, scaleY );
			target.position.set( x, y );
		}
	}

	start(
		target: DViewTarget,
		x: number, Y: number,
		scaleX: number, scaleY: number,
		duration?: number, stop?: boolean
	): void {
		if( stop !== false ) {
			this._stopper.stop();
		}
		if( duration == null ) {
			duration = this._duration;
		}
		if( duration <= 0 ) {
			target.scale.set( scaleX, scaleY );
			target.position.set( x, Y );
		} else {
			const position = target.position;
			const scale = target.scale;
			this._oldX = position.x;
			this._oldY = position.y;
			this._oldScaleX = scale.x;
			this._oldScaleY = scale.y;

			this._newX = x;
			this._newY = Y;
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
