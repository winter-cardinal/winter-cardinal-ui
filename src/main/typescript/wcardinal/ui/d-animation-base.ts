/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DAnimation, DAnimationOnEnd, DAnimationOnTime, DAnimationOptions, DAnimationTiming } from "./d-animation";
import { DAnimationTimings } from "./d-animation-timings";
import { DBase } from "./d-base";

export class DAnimationBase extends utils.EventEmitter implements DAnimation {
	protected _id: number | null;
	protected _startTime: number;
	protected _duration: number;
	protected _durationInverse: number;
	protected _reverse: boolean;
	protected _onTime: DAnimationOnTime | undefined;
	protected _onTimeBaseBound: () => void;
	protected _onStart: DAnimationOnEnd | undefined;
	protected _onEnd: DAnimationOnEnd | undefined;
	protected _timing: DAnimationTiming;
	protected _target: DBase<any, any> | null;

	constructor( options?: DAnimationOptions ) {
		super();

		this._id = null;
		this._target = null;
		this._startTime = 0;
		this._duration = ( options != null && options.duration != null ? options.duration : 200 );
		this._durationInverse = 1 / Math.max( 1, this._duration );
		this._reverse = false;
		this._onTime = ( options != null ? options.onTime : undefined );
		this._onTimeBaseBound = () => {
			this.onTimeBase();
		};
		this._onStart = ( options != null ? options.onStart : undefined );
		this._onEnd = ( options != null ? options.onEnd : undefined );
		this._timing = ( options != null && options.timing != null ? options.timing : DAnimationTimings.ELASTIC );
	}

	get target(): DBase<any, any> | null {
		return this._target;
	}

	set target( target: DBase<any, any> | null ) {
		this._target = target;
	}

	get duration(): number {
		return this._duration;
	}

	set duration( duration: number ) {
		this._duration = duration;
		this._durationInverse = 1 / Math.max( 1, duration );
	}

	start( reverse: boolean = false ): void {
		this.stop();
		this._startTime = Date.now();
		this._reverse = reverse;
		this._id = window.setTimeout( this._onTimeBaseBound, 0 );

		// onStart
		this.onStart( reverse );

		// onTime
		const duration = this._duration;
		const time = this.toTime( reverse ? duration : 0 );
		this.onTime( time, reverse, 0 );
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
		return (this._id != null);
	}

	isReverse(): boolean {
		return this._reverse;
	}

	protected onTimeBase(): void {
		const id = this._id;
		if( id != null ) {
			this._id = null;
			const elapsedTime = Date.now() - this._startTime;
			const duration = this._duration;
			const reverse = this._reverse;
			if( elapsedTime < duration ) {
				this._id = window.setTimeout( this._onTimeBaseBound, 0 );

				// OnTime
				const time = this.toTime( reverse ? duration - elapsedTime : elapsedTime );
				this.onTime( time, reverse, elapsedTime );
			} else {
				// OnTime
				const time = this.toTime( reverse ? 0 : duration );
				this.onTime( time, reverse, elapsedTime );

				// OnEnd
				this.onEnd( reverse );
			}
		}
	}

	protected toTime( elapsedTime: number ): number {
		return this._timing( elapsedTime * this._durationInverse, this );
	}

	stop(): void {
		const id = this._id;
		if( id != null ) {
			this._id = null;
			window.clearTimeout( id );
		}
	}

	end(): void {
		const id = this._id;
		if( id != null ) {
			this._id = null;
			window.clearTimeout( id );

			// OnTime
			const reverse = this._reverse;
			const elapsedTime = Date.now() - this._startTime;
			const duration = this._duration;
			const time = this.toTime( reverse ? 0 : duration );
			this.onTime( time, reverse, elapsedTime );

			// OnEnd
			this.onEnd( reverse );
		}
	}
}
