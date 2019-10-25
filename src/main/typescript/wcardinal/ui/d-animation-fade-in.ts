/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAnimationOptions } from "./d-animation";
import { DAnimationBase } from "./d-animation-base";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";

export interface DAnimationFadeInOptions extends DAnimationOptions {
	shift?: {
		x?: number | null,
		y?: number | null
	};
}

export class DAnimationFadeIn extends DAnimationBase {
	protected _shiftX: number;
	protected _shiftY: number;

	protected _storedX: number = 0;
	protected _storedY: number = 0;
	protected _storedAlpha: number = 0;
	protected _storedTime: number = 0;
	protected _storedTarget: DBase<any, any> | null = null;

	protected _onPrerenderBound: () => void;
	protected _onPostrenderBound: () => void;

	constructor( options?: DAnimationFadeInOptions ) {
		super( options );

		// Shifts
		if( options != null && options.shift != null ) {
			const shift = options.shift;
			this._shiftX = (shift.x != null ? shift.x : 0);
			this._shiftY = (shift.y != null ? shift.y : 15);
		} else {
			this._shiftX = 0;
			this._shiftY = 15;
		}

		this._onPrerenderBound = () => {
			this.onPrerender();
		};

		this._onPostrenderBound = () => {
			this.onPostrender();
		};
	}

	stop(): void {
		this._storedTime = 0;
		DApplications.getInstance().renderer
		.off( "prerender", this._onPrerenderBound )
		.off( "postrender", this._onPostrenderBound );

		super.stop();
	}

	protected onStart( isReverse: boolean ): void {
		const target = this._storedTarget = this._target;
		if( target != null ) {
			this._storedTime = 0;

			DApplications.getInstance().renderer
			.on( "prerender", this._onPrerenderBound )
			.on( "postrender", this._onPostrenderBound );

			if( ! isReverse ) {
				target.visible = true;
			}

			super.onStart( isReverse );
		}
	}

	protected onTime( time: number, isReverse: boolean, elapsedTime: number ): void {
		const target = this._storedTarget;
		if( target != null ) {
			const application = DApplications.getInstance();
			application.disallowUpdate();
			this._storedTime = time;
			super.onTime( time, isReverse, elapsedTime );
			application.allowUpdate();
			application.render();
		}
	}

	protected onEnd( isReverse: boolean ): void {
		const target = this._storedTarget;
		if( target != null ) {
			DApplications.getInstance().renderer
			.off( "prerender", this._onPrerenderBound )
			.off( "postrender", this._onPostrenderBound );

			if( isReverse ) {
				target.visible = false;
			}

			super.onEnd( isReverse );
		}
	}

	protected onPrerender(): void {
		const target = this._storedTarget;
		if( target != null ) {
			const storedTime = this._storedTime;

			// Position
			const position = target.unsafe.position;
			this._storedX = position.x;
			this._storedY = position.y;
			position.set(
				position.x - this._shiftX * ( 1 - storedTime ),
				position.y - this._shiftY * ( 1 - storedTime )
			);

			// Alpha
			this._storedAlpha = target.alpha;
			target.alpha = storedTime;
		}
	}

	protected onPostrender(): void {
		const target = this._storedTarget;
		if( target != null ) {
			// Position
			const position = target.unsafe.position;
			position.set(
				this._storedX,
				this._storedY
			);

			// Alpha
			target.alpha = this._storedAlpha;
		}
	}
}
