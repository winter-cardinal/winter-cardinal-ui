/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAnimation } from "../d-animation";
import { DAnimationBase } from "../d-animation-base";
import { DAnimationTimings } from "../d-animation-timings";
import { isNumber } from "./is-number";
import { UtilGestureEasingHistory } from "./util-gesture-easing-history";

export type UtilGestureEasingOnMove = (dx: number, dy: number, ds: number, time: number) => void;
export type UtilGestureEasingOnEnd = () => void;

export interface UtilGestureEasingDurationOptions {
	position?: number;
	scale?: number;
}

export interface UtilGestureEasingOptions {
	duration?: number | UtilGestureEasingDurationOptions;
}

export class UtilGestureEasing {
	protected static HISTORY_CAPACITY = 5;
	protected _histories: UtilGestureEasingHistory[];
	protected _historiesSorted: UtilGestureEasingHistory[];
	protected _historyBegin: number;
	protected _historyEnd: number;
	protected _animation: DAnimation;
	protected _dx: number;
	protected _dy: number;
	protected _ds: number;
	protected _durationPosition: number;
	protected _durationScale: number;
	protected _onMove: UtilGestureEasingOnMove;
	protected _onEnd: UtilGestureEasingOnEnd;

	constructor(
		onMove: UtilGestureEasingOnMove,
		onEnd: UtilGestureEasingOnEnd,
		options?: UtilGestureEasingOptions
	) {
		this._histories = [];
		this._historiesSorted = [];
		this._historyBegin = 0;
		this._historyEnd = -1;
		this._dx = 0;
		this._dy = 0;
		this._ds = 0;
		this._animation = new DAnimationBase({
			onTime: (t: number): void => {
				this.onEase(t);
			},
			onEnd: (): void => {
				this.onEaseEnd();
			},
			timing: DAnimationTimings.LINEAR,
			duration: 1000
		});
		const duration = options && options.duration;
		if (duration) {
			if (isNumber(duration)) {
				this._durationPosition = duration;
				this._durationScale = duration;
			} else {
				this._durationPosition = duration.position != null ? duration.position : 1;
				this._durationScale = duration.scale != null ? duration.scale : 1;
			}
		} else {
			this._durationPosition = 1;
			this._durationScale = 1;
		}
		this._onMove = onMove;
		this._onEnd = onEnd;
	}

	onStart(): void {
		// History
		const histories = this._histories;
		for (let i = histories.length, imax = UtilGestureEasing.HISTORY_CAPACITY; i < imax; ++i) {
			histories.push(new UtilGestureEasingHistory(0, 0, 1, 0));
		}
		this._historyBegin = 0;
		this._historyEnd = -1;

		// Stop animation
		this._animation.stop();
	}

	onMove(dx: number, dy: number, ds: number, dt: number): void {
		const capacity = UtilGestureEasing.HISTORY_CAPACITY;

		const oldHistoryEnd = this._historyEnd;
		const newHistoryEnd = (oldHistoryEnd + 1) % capacity;
		this._historyEnd = newHistoryEnd;

		const oldHistoryBegin = this._historyBegin;
		if (
			newHistoryEnd < oldHistoryEnd ||
			(0 <= oldHistoryEnd && oldHistoryEnd < oldHistoryBegin)
		) {
			this._historyBegin = (oldHistoryBegin + 1) % capacity;
		}

		this._histories[newHistoryEnd].set(dx, dy, ds, dt);
	}

	protected updateHistoriesSorted(dt: number): number {
		const unsorted = this._histories;
		const sorted = this._historiesSorted;
		const begin = this._historyBegin;
		const end = this._historyEnd;
		const length = unsorted.length;
		const threshold = 160;
		if (end < 0) {
			sorted.length = 0;
			return dt;
		} else if (end < begin) {
			let total = dt;
			sorted.length = 0;
			for (let i = end; 0 <= i; --i) {
				const history = unsorted[i];
				if (total + history.dt < threshold) {
					total += history.dt;
					sorted.push(history);
				} else {
					return total;
				}
			}

			for (let i = length - 1; begin <= i; --i) {
				const history = unsorted[i];
				if (total + history.dt < threshold) {
					total += history.dt;
					sorted.push(history);
				} else {
					return total;
				}
			}
			return total;
		} else {
			let total = dt;
			sorted.length = 0;
			for (let i = end; begin <= i; --i) {
				const history = unsorted[i];
				if (total + history.dt < threshold) {
					total += history.dt;
					sorted.push(history);
				} else {
					return total;
				}
			}
			return total;
		}
	}

	onEnd(ldt: number): void {
		this.updateHistoriesSorted(ldt);
		const sorted = this._historiesSorted;
		const sortedLength = sorted.length;
		if (0 < sortedLength) {
			let dx = 0;
			let dy = 0;
			let ds = 0;
			for (let i = 0; i < sortedLength; ++i) {
				const history = sorted[i];
				dx += history.dx;
				dy += history.dy;
				ds += history.ds;
			}
			const w = 1 / sortedLength;
			dx *= w;
			dy *= w;
			ds *= w;
			this._dx = dx;
			this._dy = dy;
			this._ds = ds;

			// Start animation
			const d0 = this._durationPosition * 40 * Math.sqrt(dx * dx + dy * dy);
			const d1 = this._durationScale * 10000 * Math.abs(ds - 1);
			const animation = this._animation;
			animation.duration = Math.max(d0, d1);
			animation.start();
		} else {
			this.onEaseEnd();
		}
	}

	protected onEase(time: number): void {
		const w = 1 - time;
		this._onMove(this._dx * w, this._dy * w, 1 + (this._ds - 1) * w, time);
	}

	protected onEaseEnd(): void {
		this._onEnd();
	}

	stop(): void {
		this._animation.stop();
	}
}
