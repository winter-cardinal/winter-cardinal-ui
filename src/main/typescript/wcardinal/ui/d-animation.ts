/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DBase } from "./d-base";

export type DAnimationOnTime = ( time: number, isReverse: boolean, elapsedTime: number, animation: DAnimation ) => void;
export type DAnimationOnStart = ( isReverse: boolean, animation: DAnimation ) => void;
export type DAnimationOnEnd = ( isReverse: boolean, animation: DAnimation ) => void;
export type DAnimationTiming = ( time: number, animation: DAnimation ) => number;

export interface DAnimationOptions {
	onTime?: DAnimationOnTime;
	onStart?: DAnimationOnStart;
	onEnd?: DAnimationOnEnd;
	timing?: DAnimationTiming;
	duration?: number;
}

export interface DAnimation extends utils.EventEmitter {
	target: DBase<any, any> | null;
	duration: number;
	start( reverse?: boolean ): void;
	isStarted(): boolean;
	isReverse(): boolean;
	stop(): void;
	end(): void;
}
