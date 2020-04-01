/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graphics } from "pixi.js";
import { DBase, DReflowable } from "./d-base";
import { DScrollBarThumb } from "./d-scroll-bar-thumb";

export class DScrollBarThumbReflowableHorizontal extends Graphics implements DReflowable {
	constructor( base: DScrollBarThumb ) {
		super();
		base.addRenderable( this, true );
		base.addReflowable( this );
	}

	onReflow( base: DBase, width: number, height: number ): void {
		const state = base.state;

		this.clear();

		const background = base.background;
		const backgroundColor = background.getColor( state );
		const backgroundAlpha = background.getAlpha( state );
		if( backgroundColor != null ) {
			const size = 1;
			this.beginFill( backgroundColor, backgroundAlpha );
			this.lineStyle( 0, 0, 0, 0 );
			this.drawRect( 0, height * 0.5 - size, width, size * 2 );
			this.endFill();
			this.visible = true;
		} else {
			this.visible = false;
		}
	}
}
