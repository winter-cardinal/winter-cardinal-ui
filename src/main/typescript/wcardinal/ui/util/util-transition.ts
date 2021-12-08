/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "../d-base";

export interface UtilTransitionOptions {
	duration?: number;
}

export class UtilTransition {
	protected _duration: number;
	protected _current: DBase | null | undefined;
	protected _lastUpdate: number;
	protected _updateId: number | null;

	constructor(options?: UtilTransitionOptions) {
		this._duration = options?.duration ?? 300;
		this._current = null;
		this._lastUpdate = 0;
		this._updateId = null;
	}

	show(next: DBase | null | undefined, forcibly?: boolean): void {
		const updateId = this._updateId;
		if (updateId != null) {
			clearTimeout(updateId);
		}

		const current = this._current;
		if (next !== current) {
			const duration = this._duration;
			const lastUpdate = this._lastUpdate;
			const now = Date.now();
			const remaining = lastUpdate + duration - now;
			if (forcibly === true || remaining <= 0) {
				this.update(now, next);
			} else {
				this._updateId = window.setTimeout(() => {
					this.update(Date.now(), next);
				}, remaining);
			}
		}
	}

	protected update(now: number, next: DBase | null | undefined): void {
		const current = this._current;
		if (current !== next) {
			this._lastUpdate = now;

			if (current != null) {
				current.hide();
			}

			this._current = next;
			if (next != null) {
				next.show();
			}
		}
	}

	hide(): void {
		this.show(null);
	}
}
