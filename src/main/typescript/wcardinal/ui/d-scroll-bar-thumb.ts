/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { UtilDrag } from "./util/util-drag";

export interface DScrollBarThumbOptions extends DBaseOptions<DThemeScrollBarThumb> {

}

export interface DThemeScrollBarThumb extends DThemeBase {
	getMinimumSize(): number;
}

export abstract class DScrollBarThumb extends DBase<DThemeScrollBarThumb, DScrollBarThumbOptions> {
	protected _dragUtil!: UtilDrag;

	protected init( options?: DScrollBarThumbOptions ) {
		super.init( options );
		this.setState( DBaseState.UNFOCUSABLE, true );

		const position = new Point();
		this._dragUtil = new UtilDrag({
			target: this,
			easing: false,
			on: {
				start: (): void => {
					position.copyFrom( this.position );
				},
				move: ( dx: number, dy: number ): void => {
					position.set( position.x + dx, position.y + dy );
					this.onDragMove( position.x, position.y );
				}
			}
		});
	}

	getMinimumSize(): number {
		return this.theme.getMinimumSize();
	}

	protected getType(): string {
		return "DScrollBarThumb";
	}

	protected abstract onDragMove( dx: number, dy: number ): void;
}
