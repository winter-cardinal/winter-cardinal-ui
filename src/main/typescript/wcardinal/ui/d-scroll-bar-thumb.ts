/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { UtilGesture } from "./util/util-gesture";

export interface DScrollBarThumbOptions extends DBaseOptions<DThemeScrollBarThumb> {}

export interface DThemeScrollBarThumb extends DThemeBase {
	getThumbMinimumLength(): number;
}

export abstract class DScrollBarThumb extends DBase<DThemeScrollBarThumb, DScrollBarThumbOptions> {
	protected _gestureUtil!: UtilGesture<DScrollBarThumb>;

	protected init(options?: DScrollBarThumbOptions): void {
		super.init(options);
		this.state.isFocusable = false;

		const position = new Point();
		this._gestureUtil = new UtilGesture<DScrollBarThumb>({
			bind: this,
			easing: true,
			on: {
				start: (): void => {
					position.copyFrom(this.position);
				},
				move: (target: DScrollBarThumb, dx: number, dy: number): void => {
					position.set(position.x + dx, position.y + dy);
					this.onGestureMove(position.x, position.y);
				}
			}
		});
	}

	getMinimumLength(): number {
		return this.theme.getThumbMinimumLength();
	}

	protected getType(): string {
		return "DScrollBarThumb";
	}

	protected abstract onGestureMove(dx: number, dy: number): void;
}
