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
	TOP_LEFT,
	TOP_CENTER,
	TOP_RIGHT,

	LEFT,
	LEFT_TOP,
	LEFT_MIDDLE,
	LEFT_BOTTOM,

	RIGHT,
	RIGHT_TOP,
	RIGHT_MIDDLE,
	RIGHT_BOTTOM,

	BOTTOM,
	BOTTOM_LEFT,
	BOTTOM_CENTER,
	BOTTOM_RIGHT,

	OVER
}

export class UtilAttach {
	static attach(
		target: UtilAttachTarget,
		bounds: Rectangle,
		offsetX: number,
		offsetY: number,
		clippingWidth: number,
		clippingHeight: number,
		align: UtilAttachAlign
	): void {
		const width = target.width;
		const height = target.height;

		let x = 0;
		switch (align) {
			case UtilAttachAlign.LEFT:
			case UtilAttachAlign.LEFT_TOP:
			case UtilAttachAlign.LEFT_MIDDLE:
			case UtilAttachAlign.LEFT_BOTTOM:
				x = bounds.left - width - offsetX;
				if (x < offsetX) {
					x = bounds.right + offsetX;
					if (clippingWidth - offsetX < x + width) {
						x = offsetX;
					}
				}
				break;
			case UtilAttachAlign.RIGHT:
			case UtilAttachAlign.RIGHT_TOP:
			case UtilAttachAlign.RIGHT_MIDDLE:
			case UtilAttachAlign.RIGHT_BOTTOM:
				x = bounds.right + offsetX;
				if (clippingWidth - offsetX < x + width) {
					x = bounds.left - width - offsetX;
					if (x < offsetX) {
						x = clippingWidth - width - offsetX;
					}
				}
				break;
			case UtilAttachAlign.TOP:
			case UtilAttachAlign.TOP_LEFT:
			case UtilAttachAlign.BOTTOM:
			case UtilAttachAlign.BOTTOM_LEFT:
				x = this.adjust(bounds.left, width, offsetX, clippingWidth);
				break;
			case UtilAttachAlign.TOP_RIGHT:
			case UtilAttachAlign.BOTTOM_RIGHT:
				x = this.adjust(bounds.right - width, width, offsetX, clippingWidth);
				break;
			case UtilAttachAlign.TOP_CENTER:
			case UtilAttachAlign.BOTTOM_CENTER:
			case UtilAttachAlign.OVER:
				x = this.adjust(
					(bounds.left + bounds.right - width) * 0.5,
					width,
					offsetX,
					clippingWidth
				);
				break;
		}

		let y = 0;
		switch (align) {
			case UtilAttachAlign.LEFT:
			case UtilAttachAlign.LEFT_TOP:
			case UtilAttachAlign.RIGHT:
			case UtilAttachAlign.RIGHT_TOP:
				y = this.adjust(bounds.top, height, offsetY, clippingHeight);
				break;
			case UtilAttachAlign.LEFT_MIDDLE:
			case UtilAttachAlign.RIGHT_MIDDLE:
			case UtilAttachAlign.OVER:
				y = this.adjust(
					(bounds.top + bounds.bottom - height) * 0.5,
					height,
					offsetY,
					clippingHeight
				);
				break;
			case UtilAttachAlign.LEFT_BOTTOM:
			case UtilAttachAlign.RIGHT_BOTTOM:
				y = this.adjust(bounds.bottom, height, offsetY, clippingHeight);
				break;
			case UtilAttachAlign.TOP:
			case UtilAttachAlign.TOP_LEFT:
			case UtilAttachAlign.TOP_RIGHT:
			case UtilAttachAlign.TOP_CENTER:
				y = bounds.top - height - offsetY;
				if (y < offsetY) {
					y = bounds.bottom + offsetY;
					if (clippingHeight < y + height) {
						y = offsetY;
					}
				}
				break;
			case UtilAttachAlign.BOTTOM:
			case UtilAttachAlign.BOTTOM_LEFT:
			case UtilAttachAlign.BOTTOM_RIGHT:
			case UtilAttachAlign.BOTTOM_CENTER:
				y = bounds.bottom + offsetY;
				if (clippingHeight - offsetY < y + height) {
					y = bounds.top - height - offsetY;
					if (y < offsetY) {
						y = clippingHeight - height - offsetY;
					}
				}
				break;
		}

		target.position.set(x, y);
	}

	static adjust(position: number, size: number, offset: number, clippingSize: number): number {
		if (position < offset) {
			if (clippingSize - offset < position + size) {
				return (clippingSize - size) * 0.5;
			} else {
				return offset;
			}
		} else if (clippingSize - offset < position + size) {
			if (clippingSize < size) {
				return (clippingSize - size) * 0.5;
			} else {
				return clippingSize - size - offset;
			}
		}
		return position;
	}
}
