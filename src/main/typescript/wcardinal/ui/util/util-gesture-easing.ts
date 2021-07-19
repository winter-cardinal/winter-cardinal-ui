/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAnimation } from "../d-animation";
import { DAnimationBase } from "../d-animation-base";
import { DAnimationTimings } from "../d-animation-timings";
import { UtilGestureEasingHistory } from "./util-gesture-easing-history";

export type UtilGestureEasingOnMove = (dx: number, dy: number, ds: number, time: number) => void;
export type UtilGestureEasingOnEnd = () => void;

export interface UtilGestureEasingOptions {
	duration?: number;
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
	protected _dt: number;
	protected _dtw: number;
	protected _t: number;
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
		this._dt = 0;
		this._dtw = 0;
		this._t = 0;
		this._animation = new DAnimationBase({
			onTime: (t: number): void => {
				this.onEase(t);
			},
			onEnd: (): void => {
				this.onEaseEnd();
			},
			timing: DAnimationTimings.LINEAR,
			duration: 333 * (options?.duration ?? 1)
		});
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
		if (sortedLength <= 0) {
			return this.onEaseEnd();
		}

		let dx = 0;
		let dy = 0;
		let ds = 0;
		let dt = 0;
		for (let i = 0; i < sortedLength; ++i) {
			const history = sorted[i];
			dx += history.dx;
			dy += history.dy;
			ds += history.ds;
			dt += history.dt;
		}
		if (dt <= 0) {
			return this.onEaseEnd();
		}

		const w = 1 / sortedLength;
		dx *= w;
		dy *= w;
		ds *= w;
		dt *= w;
		this._dx = dx;
		this._dy = dy;
		this._ds = ds;
		this._dt = dt;

		// Start animation
		const animation = this._animation;
		const d = animation.duration;
		this._t = -ldt / d;
		this._dtw = d / dt;
		animation.start();
	}

	protected onEase(t: number): void {
		const ot = this._t;
		this._t = t;
		// Note: Integral of (1-x) is x (1 - 0.5 x) + c.
		const w = (1 - 0.5 * (t + ot)) * (t - ot) * this._dtw;
		this._onMove(this._dx * w, this._dy * w, 1 + (this._ds - 1) * w, t);
	}

	protected onEaseEnd(): void {
		this._onEnd();
	}

	stop(): void {
		this._animation.stop();
	}
}
