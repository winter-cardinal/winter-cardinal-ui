/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DAnimation, DAnimationOnEnd, DAnimationOnTime, DAnimationOptions } from "./d-animation";
import { DBase } from "./d-base";

export class DAnimationEmpty extends utils.EventEmitter implements DAnimation {
	protected _reverse: boolean;
	protected _onTime: DAnimationOnTime | undefined;
	protected _onStart: DAnimationOnEnd | undefined;
	protected _onEnd: DAnimationOnEnd | undefined;
	protected _target: DBase<any, any> | null;
	protected _isStarted: boolean;

	constructor( options?: DAnimationOptions ) {
		super();

		this._target = null;
		this._reverse = false;
		this._isStarted = false;
		this._onTime = ( options != null ? options.onTime : undefined );
		this._onStart = ( options != null ? options.onStart : undefined );
		this._onEnd = ( options != null ? options.onEnd : undefined );
	}

	get target(): DBase<any, any> | null {
		return this._target;
	}

	set target( target: DBase<any, any> | null ) {
		this._target = target;
	}

	get duration(): number {
		return 0;
	}

	set duration( duration: number ) {
		// DO NOTHING
	}

	start( reverse: boolean = false ): void {
		this.stop();
		this._isStarted = true;
		this._reverse = reverse;

		// onStart
		this.onStart( reverse );
		if( ! this._isStarted ) {
			return;
		}

		// onTime
		this.onTime( reverse ? 1 : 0, reverse, 0 );
		if( ! this._isStarted ) {
			return;
		}

		this.onTime( reverse ? 0 : 1, reverse, 0 );
		if( this._isStarted ) {
			return;
		}

		// OnEnd
		this.onEnd( reverse );
	}

	protected onStart( isReverse: boolean ): void {
		const onStart = this._onStart;
		if( onStart != null ) {
			onStart( isReverse, this );
		}
		this.emit( "start", isReverse, this );
	}

	protected onTime( time: number, isReverse: boolean, elapsedTime: number ): void {
		const onTime = this._onTime;
		if( onTime != null ) {
			onTime( time, isReverse, elapsedTime, this );
		}
		this.emit( "time", time, isReverse, elapsedTime, this );
	}

	protected onEnd( isReverse: boolean ): void {
		const onEnd = this._onEnd;
		if( onEnd != null ) {
			onEnd( isReverse, this );
		}
		this.emit( "end", isReverse, this );
	}

	isStarted(): boolean {
		return this._isStarted;
	}

	isReverse(): boolean {
		return this._reverse;
	}

	stop(): void {
		this._isStarted = false;
	}

	end(): void {
		const isStarted = this._isStarted;
		if( isStarted ) {
			this._isStarted = false;

			// OnTime
			const reverse = this._reverse;
			const time = ( reverse ? 0 : 1 );
			this.onTime( time, reverse, 0 );

			// OnEnd
			this.onEnd( reverse );
		}
	}
}
