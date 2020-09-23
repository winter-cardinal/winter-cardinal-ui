/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilAlpha } from "../../util/util-alpha";
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
import { EShapeActionValueChangeColorCode } from "./e-shape-action-value-change-color-code";

export class EShapeActionRuntimeChangeColorCode extends EShapeActionRuntimeConditional {
	protected readonly color: EShapeActionExpression<number | null>;
	protected readonly alpha: EShapeActionExpression<number | null>;
	protected readonly blend: EShapeActionExpression<number | null>;

	constructor( value: EShapeActionValueChangeColorCode, reset: EShapeRuntimeReset ) {
		super( value, reset );
		this.color = EShapeActionExpressions.ofNumberOrNull( value.color );
		this.alpha = EShapeActionExpressions.ofNumberOrNull( value.alpha );
		this.blend = EShapeActionExpressions.ofNumberOrNull( value.blend );
	}

	protected set(
		shape: EShape, runtime: EShapeRuntime, time: number,
		target: EShapeStroke | EShapeFill | EShapeText | EShapeTextOutline,
		base: EShapeStrokeLike | EShapeFillLike | EShapeTextLike | EShapeTextOutlineLike
	): void {
		const color = this.color( shape, time );
		const alpha = this.alpha( shape, time );
		if( color != null ) {
			if( alpha != null ) {
				const blend = this.blend( shape, time );
				if( blend != null ) {
					target.set(
						undefined,
						UtilRgb.blend( base.color, color, blend ),
						UtilAlpha.blend( base.alpha, alpha, blend )
					);
				} else {
					target.set( undefined, color, alpha );
				}
			} else {
				const blend = this.blend( shape, time );
				if( blend != null ) {
					target.set(
						undefined,
						UtilRgb.blend( base.color, color, blend ),
						base.alpha
					);
				} else {
					target.set( undefined, color, base.alpha );
				}
			}
			runtime.written |= this.reset;
		} else if( alpha != null ) {
			const blend = this.blend( shape, time );
			if( blend != null ) {
				target.set(
					undefined,
					base.color,
					UtilAlpha.blend( base.alpha, alpha, blend )
				);
			} else {
				target.set( undefined, base.color, alpha );
			}
			runtime.written |= this.reset;
		}
	}

	protected sets(
		shape: EShape, runtime: EShapeRuntime, time: number,
		fill: EShapeFill, stroke: EShapeStroke,
		baseFill: EShapeFillLike, baseStroke: EShapeStrokeLike
	): void {
		const color = this.color( shape, time );
		const alpha = this.alpha( shape, time );
		if( color != null ) {
			if( alpha != null ) {
				const blend = this.blend( shape, time );
				if( blend != null ) {
					fill.set(
						undefined,
						UtilRgb.blend( baseFill.color, color, blend ),
						UtilAlpha.blend( baseFill.alpha, alpha, blend )
					);
					stroke.set(
						undefined,
						UtilRgb.blend( baseStroke.color, color, blend ),
						UtilAlpha.blend( baseStroke.alpha, alpha, blend )
					);
				} else {
					fill.set( undefined, color, alpha );
					stroke.set( undefined, color, alpha );
				}
			} else {
				const blend = this.blend( shape, time );
				if( blend != null ) {
					fill.set(
						undefined,
						UtilRgb.blend( baseFill.color, color, blend ),
						baseFill.alpha
					);
					stroke.set(
						undefined,
						UtilRgb.blend( baseStroke.color, color, blend ),
						baseStroke.alpha
					);
				} else {
					fill.set( undefined, color, baseFill.alpha );
					stroke.set( undefined, color, baseStroke.alpha );
				}
			}
			runtime.written |= this.reset;
		} else if( alpha != null ) {
			const blend = this.blend( shape, time );
			if( blend != null ) {
				fill.set(
					undefined,
					baseFill.color,
					UtilAlpha.blend( baseFill.alpha, alpha, blend )
				);
				stroke.set(
					undefined,
					baseStroke.color,
					UtilAlpha.blend( baseStroke.alpha, alpha, blend )
				);
			} else {
				fill.set( undefined, baseFill.color, alpha );
				stroke.set( undefined, baseStroke.color, alpha );
			}
			runtime.written |= this.reset;
		}
	}

	protected setAll(
		shape: EShape, runtime: EShapeRuntime, time: number,
		fill: EShapeFill, stroke: EShapeStroke, text: EShapeText, outline: EShapeTextOutline,
		baseFill: EShapeFillLike, baseStroke: EShapeStrokeLike, baseText: EShapeTextLike, baseOutline: EShapeTextOutlineLike
	): void {
		const color = this.color( shape, time );
		const alpha = this.alpha( shape, time );
		if( color != null ) {
			if( alpha != null ) {
				const blend = this.blend( shape, time );
				if( blend != null ) {
					fill.set(
						undefined,
						UtilRgb.blend( baseFill.color, color, blend ),
						UtilAlpha.blend( baseFill.alpha, alpha, blend )
					);
					stroke.set(
						undefined,
						UtilRgb.blend( baseStroke.color, color, blend ),
						UtilAlpha.blend( baseStroke.alpha, alpha, blend )
					);
					text.set(
						undefined,
						UtilRgb.blend( baseText.color, color, blend ),
						UtilAlpha.blend( baseText.alpha, alpha, blend )
					);
					outline.set(
						undefined,
						UtilRgb.blend( baseOutline.color, color, blend ),
						UtilAlpha.blend( baseOutline.alpha, alpha, blend )
					);
				} else {
					fill.set( undefined, color, alpha );
					stroke.set( undefined, color, alpha );
					text.set( undefined, color, alpha );
					outline.set( undefined, color, alpha );
				}
			} else {
				const blend = this.blend( shape, time );
				if( blend != null ) {
					fill.set(
						undefined,
						UtilRgb.blend( baseFill.color, color, blend ),
						baseFill.alpha
					);
					stroke.set(
						undefined,
						UtilRgb.blend( baseStroke.color, color, blend ),
						baseStroke.alpha
					);
					text.set(
						undefined,
						UtilRgb.blend( baseText.color, color, blend ),
						baseText.alpha
					);
					outline.set(
						undefined,
						UtilRgb.blend( baseOutline.color, color, blend ),
						baseOutline.alpha
					);
				} else {
					fill.set( undefined, color, baseFill.alpha );
					stroke.set( undefined, color, baseStroke.alpha );
					text.set( undefined, color, baseText.alpha );
					outline.set( undefined, color, baseOutline.alpha );
				}
			}
			runtime.written |= this.reset;
		} else if( alpha != null ) {
			const blend = this.blend( shape, time );
			if( blend != null ) {
				fill.set(
					undefined,
					baseFill.color,
					UtilAlpha.blend( baseFill.alpha, alpha, blend )
				);
				stroke.set(
					undefined,
					baseStroke.color,
					UtilAlpha.blend( baseStroke.alpha, alpha, blend )
				);
				text.set(
					undefined,
					baseFill.color,
					UtilAlpha.blend( baseText.alpha, alpha, blend )
				);
				outline.set(
					undefined,
					baseStroke.color,
					UtilAlpha.blend( baseOutline.alpha, alpha, blend )
				);
			} else {
				fill.set( undefined, baseFill.color, alpha );
				stroke.set( undefined, baseStroke.color, alpha );
				text.set( undefined, baseText.color, alpha );
				outline.set( undefined, baseOutline.color, alpha );
			}
			runtime.written |= this.reset;
		}
	}
}
