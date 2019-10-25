/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAnimationBase } from "./d-animation-base";
import { DBase } from "./d-base";
import { DCanvas } from "./d-canvas";
import { DCanvasContainerViewParent } from "./d-canvas-container-view";
import { DCanvasContainerViewStopper } from "./d-canvas-container-view-stopper";

export class DCanvasContainerViewTransform<CANVAS extends DBase = DCanvas> {
	protected _parent: DCanvasContainerViewParent<CANVAS>;
	protected _newX: number;
	protected _newY: number;
	protected _newScale: number;
	protected _oldX: number;
	protected _oldY: number;
	protected _oldScale: number;
	protected _animation: DAnimationBase;
	protected _stopper: DCanvasContainerViewStopper;
	protected _duration: number;

	constructor( parent: DCanvasContainerViewParent<CANVAS>, stopper: DCanvasContainerViewStopper, duration: number ) {
		this._parent = parent;
		this._newScale = 1;
		this._newX =  0;
		this._newY = 0;
		this._oldScale = 1;
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

		const scale = this._oldScale * w0 + this._newScale * w1;
		const x = this._oldX * w0 + this._newX * w1;
		const y = this._oldY * w0 + this._newY * w1;

		const canvas = this._parent.canvas;
		if( canvas != null ) {
			canvas.scale.set( scale, scale );
			canvas.position.set( x, y );
		}
	}

	start( canvas: CANVAS, newX: number, newY: number, newScale: number, duration?: number, stop?: boolean ): void {
		if( stop !== false ) {
			this._stopper.stop();
		}
		if( duration == null ) {
			duration = this._duration;
		}
		if( duration <= 0 ) {
			canvas.scale.set( newScale, newScale );
			canvas.position.set( newX, newY );
		} else {
			const position = canvas.position;
			const scale = canvas.scale;
			this._oldX = position.x;
			this._oldY = position.y;
			this._oldScale = scale.y;

			this._newX = newX;
			this._newY = newY;
			this._newScale = newScale;

			this._animation.duration = duration;
			this._animation.start();
		}
	}

	stop(): void {
		this._animation.stop();
	}
}
