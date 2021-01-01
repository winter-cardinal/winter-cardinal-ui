/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DReflowable } from "./d-base";
import { DBaseBackgroundRenderable } from "./d-base-background-renderable";
import { DBaseBorderRenderable } from "./d-base-border-renderable";
import { DBaseOutlineRenderable } from "./d-base-outline-renderable";

export class DBaseReflowable implements DReflowable {
	protected _background: DBaseBackgroundRenderable;
	protected _border: DBaseBorderRenderable;
	protected _outline: DBaseOutlineRenderable;

	constructor( base: DBase ) {
		const background = new DBaseBackgroundRenderable();
		this._background = background;
		base.addRenderable( background, true );

		const border = new DBaseBorderRenderable();
		this._border = border;
		base.addRenderable( border, false );

		const outline = new DBaseOutlineRenderable();
		this._outline = outline;
		base.addRenderable( outline, false );

		base.addReflowable( this );
	}

	onReflow( base: DBase, width: number, height: number ): void {
		const theme = base.theme;
		const state = base.state;
		const corner = base.corner;
		const cornerRadius = corner.getRadius();
		const cornerHeight = cornerRadius + 1;
		const cornerMask = corner.getMask();
		this._background.onReflow(
			base, width, height, theme, state,
			cornerRadius, cornerHeight, cornerMask
		);
		this._border.onReflow(
			base, width, height, theme, state,
			cornerRadius, cornerHeight, cornerMask
		);
		this._outline.onReflow(
			base, width, height, theme, state,
			cornerRadius, cornerHeight, cornerMask
		);
	}
}
