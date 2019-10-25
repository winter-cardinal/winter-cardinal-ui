/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graphics } from "pixi.js";
import { DBase, Reflowable } from "./d-base";

export class DListItemSeparatorReflowable extends Graphics implements Reflowable {
	constructor( base: DBase ) {
		super();
		base.appendRenderable( this, true );
		base.addReflowable( this );
	}

	onReflow( base: DBase, width: number, height: number ): void {
		const state = base.state;
		const border = base.border;
		const borderWidth = border.getWidth( state );
		const borderColor = border.getColor( state );
		if( borderColor != null ) {
			const borderAlpha = border.getAlpha( state );
			const borderAlign = border.getAlign( state );
			const padding = base.padding;
			const middle = height * 0.5;
			this.clear();
			this.lineStyle( borderWidth, borderColor, borderAlpha, borderAlign );
			this.moveTo( padding.getLeft(), middle );
			this.lineTo( width - padding.getRight(), middle );
			this.visible = true;
		} else {
			this.clear();
			this.visible = false;
		}
	}
}
