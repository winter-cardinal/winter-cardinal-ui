/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeStroke } from "../e-shape-stroke";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { EShapeStrokeImpl } from "./e-shape-stroke-impl";
import { EShapeStrokeImplParent } from "./e-shape-stroke-impl-parent";

/**
 * Since EShapePolygon does not support the stroke alignment,
 * this class keeps the stroke alignment at zero.
 */
export class EShapePolygonStroke extends EShapeStrokeImpl {
	constructor(
		parent: EShapeStrokeImplParent,
		enable: boolean,
		color: number,
		alpha: number,
		width: number,
		align: number,
		side: EShapeStrokeSide,
		style: EShapeStrokeStyle
	) {
		super(parent, enable, color, alpha, width, 0, side, style);
	}

	get align(): number {
		return this._align;
	}

	set align(align: number) {
		// EShapePolygon doesn't support the stroke alignment
	}

	set(
		enable?: boolean,
		color?: number,
		alpha?: number,
		width?: number,
		align?: number,
		side?: EShapeStrokeSide,
		style?: EShapeStrokeStyle
	): void {
		super.set(enable, color, alpha, width, undefined, side, style);
	}

	clone(): EShapeStroke {
		return new EShapePolygonStroke(
			this._parent,
			this._enable,
			this._color,
			this._alpha,
			this._width,
			this._align,
			this._side,
			this._style
		);
	}
}
