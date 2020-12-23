/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DReflowable } from "./d-base";
import { DBaseReflowablePlaneBackground } from "./d-base-reflowable-plane-background";
import { DBaseReflowablePlaneBorder } from "./d-base-reflowable-plane-border";
import { DBaseReflowablePlaneOutline } from "./d-base-reflowable-plane-outline";

export class DBaseReflowable implements DReflowable {
	protected _background: DBaseReflowablePlaneBackground;
	protected _border: DBaseReflowablePlaneBorder;
	protected _outline: DBaseReflowablePlaneOutline;

	constructor( base: DBase ) {
		const background = new DBaseReflowablePlaneBackground();
		this._background = background;
		base.addRenderable( background, true );

		const border = new DBaseReflowablePlaneBorder();
		this._border = border;
		base.addRenderable( border, false );

		const outline = new DBaseReflowablePlaneOutline();
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
