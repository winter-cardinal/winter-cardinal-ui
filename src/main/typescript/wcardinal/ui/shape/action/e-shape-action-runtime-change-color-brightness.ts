/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilRgb } from "../../util/util-rgb";
import { EShape } from "../e-shape";
import { EShapeFill, EShapeFillLike } from "../e-shape-fill";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeStroke, EShapeStrokeLike } from "../e-shape-stroke";
import { EShapeText, EShapeTextLike } from "../e-shape-text";
import { EShapeTextOutline, EShapeTextOutlineLike } from "../e-shape-text-outline";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValueChangeColorBrightness } from "./e-shape-action-value-change-color-brightness";

const brightnessDefault = (): number | null => null;

export class EShapeActionRuntimeChangeColorBrightness extends EShapeActionRuntimeConditional {
	protected readonly brightness: EShapeActionExpression<number | null>;

	constructor( value: EShapeActionValueChangeColorBrightness, reset: EShapeRuntimeReset ) {
		super( value, reset );
		this.brightness = EShapeActionExpressions.from( value.brightness, brightnessDefault, "null" );
	}

	protected set(
		shape: EShape, runtime: EShapeRuntime, time: number,
		target: EShapeStroke | EShapeFill | EShapeText | EShapeTextOutline,
		base: EShapeStrokeLike | EShapeFillLike | EShapeTextLike | EShapeTextOutlineLike
	): void {
		const brightness = this.brightness( shape, time );
		if( brightness != null ) {
			target.set(
				undefined,
				this.toColorAdjusted( base.color, brightness ),
				base.alpha
			);
			runtime.written |= this.reset;
		}
	}

	protected sets(
		shape: EShape, runtime: EShapeRuntime, time: number,
		fill: EShapeFill, stroke: EShapeStroke,
		baseFill: EShapeFillLike, baseStroke: EShapeStrokeLike
	): void {
		const brightness = this.brightness( shape, time );
		if( brightness != null ) {
			fill.set(
				undefined,
				this.toColorAdjusted( baseFill.color, brightness ),
				baseFill.alpha
			);

			stroke.set(
				undefined,
				this.toColorAdjusted( baseStroke.color, brightness ),
				baseStroke.alpha
			);

			runtime.written |= this.reset;
		}
	}

	protected setAll(
		shape: EShape, runtime: EShapeRuntime, time: number,
		fill: EShapeFill, stroke: EShapeStroke, text: EShapeText, outline: EShapeTextOutline,
		baseFill: EShapeFillLike, baseStroke: EShapeStrokeLike, baseText: EShapeTextLike, baseOutline: EShapeTextOutlineLike
	): void {
		const brightness = this.brightness( shape, time );
		if( brightness != null ) {
			fill.set(
				undefined,
				this.toColorAdjusted( baseFill.color, brightness ),
				baseFill.alpha
			);

			stroke.set(
				undefined,
				this.toColorAdjusted( baseStroke.color, brightness ),
				baseStroke.alpha
			);

			text.set(
				undefined,
				this.toColorAdjusted( baseText.color, brightness ),
				baseText.alpha
			);

			outline.set(
				undefined,
				this.toColorAdjusted( baseOutline.color, brightness ),
				baseOutline.alpha
			);

			runtime.written |= this.reset;
		}
	}

	protected toColorAdjusted( color: number, brightness: number ): number {
		if( 0 <= brightness ) {
			return UtilRgb.brighten( color, +brightness );
		} else {
			return UtilRgb.darken( color, -brightness );
		}
	}
}
