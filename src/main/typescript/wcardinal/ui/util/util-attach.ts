/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Rectangle } from "pixi.js";

export interface UtilAttachTarget {
	readonly width: number;
	readonly height: number;
	readonly position: IPoint;
}

export enum UtilAttachAlign {
	TOP,
	LEFT,
	RIGHT,
	BOTTOM
}

export class UtilAttach {
	static attach(
		target: UtilAttachTarget,
		bounds: Rectangle,
		offsetX: number, offsetY: number,
		clippingWidth: number, clippingHeight: number,
		align: UtilAttachAlign
	): void {
		const width = target.width;
		const height = target.height;
		let x = 0;
		let y = 0;
		switch( align ) {
		case UtilAttachAlign.LEFT:
			x = bounds.left - width - offsetX;
			if( x < 0 ) {
				x = bounds.right + offsetX;
				if( clippingWidth < x + width ) {
					x = 0;
				}
			}
			y = this.adjust( bounds.top, bounds.bottom, height, clippingHeight );
			break;
		case UtilAttachAlign.TOP:
			x = this.adjust( bounds.left, bounds.right, width, clippingWidth );
			y = bounds.top - height - offsetY;
			if( y < 0 ) {
				y = bounds.bottom + offsetY;
				if( clippingHeight < y + height ) {
					y = 0;
				}
			}
			break;
		case UtilAttachAlign.RIGHT:
			x = bounds.right + offsetX;
			if( clippingWidth < x + width ) {
				x = bounds.left - width - offsetX;
				if( x < 0 ) {
					x = clippingWidth - width;
				}
			}
			y = this.adjust( bounds.top, bounds.bottom, height, clippingHeight );
			break;
		case UtilAttachAlign.BOTTOM:
			x = this.adjust( bounds.left, bounds.right, width, clippingWidth );
			y = bounds.bottom + offsetY;
			if( clippingHeight < y + height ) {
				y = bounds.top - height - offsetY;
				if( y < 0 ) {
					y = clippingHeight - height;
				}
			}
			break;
		}
		target.position.set( x, y );
	}

	static adjust( positionFirst: number, positionSecond: number, size: number, clippingSize: number ): number {
		if( positionFirst < 0 ) {
			if( clippingSize < positionFirst + size ) {
				return (clippingSize - size) * 0.5;
			} else {
				return 0;
			}
		} else if( clippingSize < positionFirst + size ) {
			if( clippingSize < size ) {
				return (clippingSize - size) * 0.5;
			} else {
				return Math.min( clippingSize, positionSecond ) - size;
			}
		}
		return positionFirst;
	}
}
