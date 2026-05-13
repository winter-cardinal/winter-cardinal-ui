/*
 * Copyright (C) 2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EThemeShapeActionValueOpen } from "../../shape/action/e-shape-action-value-open";
import { UtilRgb } from "../../util/util-rgb";
import { newShapeDragImage } from "../common/new-shape-drag-image";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

export class EThemeWhiteShapeActionValueOpen implements EThemeShapeActionValueOpen {
	protected _dragImage?: HTMLImageElement | HTMLCanvasElement | null;

	getDragDataFormat(): string {
		return "application/x-shape-action-open";
	}

	getDragEffectAllowed(): DataTransfer["effectAllowed"] {
		return "link";
	}

	getDragImage(): HTMLImageElement | HTMLCanvasElement | null {
		if (this._dragImage === undefined) {
			this._dragImage = newShapeDragImage("#" + UtilRgb.toCode(DThemeWhiteConstants.COLOR));
		}
		return this._dragImage;
	}

	getDragImageOffsetX(): number {
		return 12;
	}

	getDragImageOffsetY(): number {
		return 12;
	}
}
