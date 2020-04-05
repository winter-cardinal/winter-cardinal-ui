/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";

/**
 * A function called when an animation starts.
 *
 * @param isReverse true if an animation is playing in reverse
 * @param animation an instance
 */
export type DAnimationOnStart<TARGET> = ( isReverse: boolean, animation: DAnimation<TARGET> ) => void;

/**
 * A function called constantly when an animation is on a run.
 *
 * @param time a timing value in a range [0, 1]
 * @param isReverse true if an animation is playing in reverse
 * @param elapsedTime an elapsed time since an animation has started
 * @param animation an instance
 */
export type DAnimationOnTime<TARGET> = (
	time: number, isReverse: boolean, elapsedTime: number, animation: DAnimation<TARGET>
) => void;

/**
 * Triggered when an animation stops.
 *
 * @param isReverse true if an animation is playing in reverse
 * @param animation an instance
 */
export type DAnimationOnEnd<TARGET> = ( isReverse: boolean, animation: DAnimation<TARGET> ) => void;

/**
 * An easing function.
 *
 * @param time a normalized elapsed time
 * @param animation an instance
 */
export type DAnimationTiming<TARGET> = ( time: number, animation: DAnimation<TARGET> ) => number;

/**
 * {@link DAnimation} events.
 */
export interface DAnimationEvents<EMITTER> {
	/**
	 * Triggered when an animation starts.
	 *
	 * @param isReverse true if an animation is playing in reverse
	 * @param emitter an emitter
	 */
	start( isReverse: boolean, emitter: EMITTER ): void;

	/**
	 * Triggered constantly when an animation is on a run.
	 *
	 * @param time a timing value in a range [0, 1]
	 * @param isReverse true if an animation is playing in reverse
	 * @param elapsedTime an elapsed time since an animation has started
	 * @param emitter an emitter
	 */
	time( time: number, isReverse: boolean, elapsedTime: number, emitter: EMITTER ): void;

	/**
	 * Triggered when an animation stops.
	 *
	 * @param isReverse true if an animation is playing in reverse
	 * @param emitter an emitter
	 */
	end( isReverse: boolean, emitter: EMITTER ): void;
}

/**
 * {@link DAnimation} "on" options.
 */
export interface DAnimationOnOptions<EMITTER> extends Partial<DAnimationEvents<EMITTER> & Record<string, Function>> {

}

/**
 * {@link DAnimation} options.
 */
export interface DAnimationOptions<TARGET, EMITTER = DAnimation<TARGET>> {
	/**
	 * An animation target.
	 */
	target?: TARGET | null;

	/**
	 * A function called when an animation starts.
	 */
	onStart?: DAnimationOnStart<TARGET>;

	/**
	 * A function called constantly when an animation is on a run.
	 */
	onTime?: DAnimationOnTime<TARGET>;

	/**
	 * Triggered when an animation stops.
	 */
	onEnd?: DAnimationOnEnd<TARGET>;

	timing?: DAnimationTiming<TARGET>;

	/**
	 * An animation duration.
	 */
	duration?: number;

	/**
	 * Event handlers.
	 */
	on?: DAnimationOnOptions<EMITTER>;
}

export interface DAnimation<TARGET = unknown> extends utils.EventEmitter {
	/**
	 * An animation target.
	 */
	target: TARGET | null;

	/**
	 * An animation duration.
	 */
	duration: number;

	/**
	 * Starts an animation.
	 *
	 * @param reverse true to play in reverse.
	 */
	start( reverse?: boolean ): void;

	/**
	 * Returns true if an animation is playing.
	 */
	isStarted(): boolean;

	/**
	 * Returns true if an animation is in a reverse mode.
	 */
	isReverse(): boolean;

	/**
	 * Stops an animation as is.
	 */
	stop(): void;

	/**
	 * Moves an animation frame to the end.
	 */
	end(): void;

	on<E extends keyof DAnimationEvents<this>>(
		event: E, handler: DAnimationEvents<this>[ E ], context?: any
	): this;
	on( event: string, handler: Function, context?: any ): this;

	once<E extends keyof DAnimationEvents<this>>(
		event: E, handler: DAnimationEvents<this>[ E ], context?: any
	): this;
	once( event: string, handler: Function, context?: any ): this;

	emit<E extends keyof DAnimationEvents<this>>(
		event: E, ...args: Parameters<DAnimationEvents<this>[ E ]>
	): boolean;
	emit( event: string, ...args: any ): boolean;
}
