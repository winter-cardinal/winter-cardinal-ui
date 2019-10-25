/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graphics } from "pixi.js";
import { DBase, Reflowable } from "./d-base";

export class DScrollBarThumbReflowableVertical extends Graphics implements Reflowable {
	constructor( base: DBase ) {
		super();
		base.appendRenderable( this, true );
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
			this.drawRect( width * 0.5 - size, 0, size * 2, height );
			this.endFill();
			this.visible = true;
		} else {
			this.visible = false;
		}
	}
}
