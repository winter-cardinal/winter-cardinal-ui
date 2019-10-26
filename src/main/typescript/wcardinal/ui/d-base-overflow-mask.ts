/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graphics, Renderer } from "pixi.js";
import { DBase, DReflowable } from "./d-base";
import { DCornerMask } from "./d-corner";

export class DBaseOverflowMask extends Graphics implements DReflowable {
	constructor( parent: DBase ) {
		super();
		(this as any).parent = parent;
	}

	render( renderer: Renderer ): void {
		this.updateTransform();
		super.render( renderer );
	}

	onReflow( base: DBase, width: number, height: number): void {
		const x = 0;
		const y = 0;
		const corner = base.corner;
		const cornerRadius = Math.max( 0, corner.getRadius() - 0.5 );
		const cornerMask = corner.getMask();
		const tl = ( cornerMask & DCornerMask.TOP_LEFT ? 0 : cornerRadius );
		const tr = ( cornerMask & DCornerMask.TOP_RIGHT ? 0 : cornerRadius );
		const bl = ( cornerMask & DCornerMask.BOTTOM_LEFT ? 0 : cornerRadius );
		const br = ( cornerMask & DCornerMask.BOTTOM_RIGHT ? 0 : cornerRadius );
		this.clear();
		this.beginFill( 0xFFFFFF, 1 );
		this.lineStyle( 0, 0, 0, 0, false );
		if( tl <= 0 && tr <= 0 && bl <= 0 && br <= 0 ) {
			this.moveTo( x, y );
			this.lineTo( x + width, y );
			this.lineTo( x + width, y + height );
			this.lineTo( x, y + height );
			this.lineTo( x, y );
		} else {
			this.moveTo( x + tl, y );
			if( 0 < tr ) {
				this.arcTo( x + width, y, x + width, y + height, tr );
			} else {
				this.lineTo( x + width, y );
			}
			if( 0 < br ) {
				this.arcTo( x + width, y + height, x, y + height, br );
			} else {
				this.lineTo( x + width, y + height );
			}
			if( 0 < bl ) {
				this.arcTo( x, y + height, x, y, bl );
			} else {
				this.lineTo( x, y + height );
			}
			if( 0 < tl ) {
				this.arcTo( x, y, x + width, y, tl );
			} else {
				this.lineTo( x, y );
			}
		}
		this.endFill();
	}
}
