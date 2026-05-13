/*
 * Copyright (C) 2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EThemeShapeActionValueOpen } from "../../shape/action/e-shape-action-value-open";
import { UtilRgb } from "../../util/util-rgb";
import { newShapeDragImage } from "../common/new-shape-drag-image";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

export class EThemeWhiteShapeActionValueOpen implements EThemeShapeActionValueOpen {
	protected _isDraggable: boolean;
	protected _dragDataFormat: string;
	protected _dragEffectAllowed: DataTransfer["effectAllowed"];
	protected _dragImage?: HTMLImageElement | HTMLCanvasElement | null;
	protected _dragImageOffsetX: number;
	protected _dragImageOffsetY: number;

	constructor() {
		this._isDraggable = false;
		this._dragDataFormat = "application/x-shape-action-open";
		this._dragEffectAllowed = "link";
		this._dragImageOffsetX = 12;
		this._dragImageOffsetY = 12;
	}

	isDraggable(): boolean {
		return this._isDraggable;
	}

	setDraggable(isDraggable: boolean): this {
		this._isDraggable = isDraggable;
		return this;
	}

	getDragDataFormat(): string {
		return this._dragDataFormat;
	}

	setDragDataFormat(format: string): this {
		this._dragDataFormat = format;
		return this;
	}

	getDragEffectAllowed(): DataTransfer["effectAllowed"] {
		return this._dragEffectAllowed;
	}

	setDragEffectAllowed(dragEffectAllowed: DataTransfer["effectAllowed"]): this {
		this._dragEffectAllowed = dragEffectAllowed;
		return this;
	}

	getDragImage(): HTMLImageElement | HTMLCanvasElement | null {
		if (this._dragImage === undefined) {
			this._dragImage = newShapeDragImage("#" + UtilRgb.toCode(DThemeWhiteConstants.COLOR));
		}
		return this._dragImage;
	}

	setDragImage(dragImage: HTMLImageElement | HTMLCanvasElement | null): this {
		this._dragImage = dragImage;
		return this;
	}

	getDragImageOffsetX(): number {
		return this._dragImageOffsetX;
	}

	setDragImageOffsetX(x: number): this {
		this._dragImageOffsetX = x;
		return this;
	}

	getDragImageOffsetY(): number {
		return this._dragImageOffsetY;
	}

	setDragImageOffsetY(y: number): this {
		this._dragImageOffsetY = y;
		return this;
	}
}
