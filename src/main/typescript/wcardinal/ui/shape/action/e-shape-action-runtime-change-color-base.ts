/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilAlpha } from "../../util/util-alpha";
import { UtilRgb } from "../../util/util-rgb";
import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActionValue } from "./e-shape-action-value";
import { EShapeActionValueChangeColorType } from "./e-shape-action-value-change-color-type";

const toReset = (type: EShapeActionValueChangeColorType): EShapeRuntimeReset => {
	return type << 3;
};

export interface EShapeActionRuntimeChangeColorBaseValue extends EShapeActionValue {
	subtype: EShapeActionValueChangeColorType;
}

export class EShapeActionRuntimeChangeColorBase extends EShapeActionRuntimeConditional {
	constructor(value: EShapeActionRuntimeChangeColorBaseValue) {
		super(value, toReset(value.subtype));
	}

	protected set(
		shape: EShape,
		runtime: EShapeRuntime,
		time: number,
		color: number | null,
		alpha: number | null,
		blend: number | null
	): void {
		const reset = this.reset;
		if (color != null) {
			if (alpha != null) {
				if (blend != null) {
					if (reset & EShapeRuntimeReset.COLOR_FILL) {
						const base = EShapeActionBases.toBaseFill(shape, runtime);
						shape.fill.set(
							undefined,
							UtilRgb.blend(base.color, color, blend),
							UtilAlpha.blend(base.alpha, alpha, blend)
						);
					}
					if (reset & EShapeRuntimeReset.COLOR_STROKE) {
						const base = EShapeActionBases.toBaseStroke(shape, runtime);
						shape.stroke.set(
							undefined,
							UtilRgb.blend(base.color, color, blend),
							UtilAlpha.blend(base.alpha, alpha, blend)
						);
					}
					if (reset & EShapeRuntimeReset.COLOR_TEXT) {
						const base = EShapeActionBases.toBaseText(shape, runtime);
						shape.text.set(
							undefined,
							UtilRgb.blend(base.color, color, blend),
							UtilAlpha.blend(base.alpha, alpha, blend)
						);
					}
					if (reset & EShapeRuntimeReset.COLOR_TEXT_OUTLINE) {
						const base = EShapeActionBases.toBaseTextOutline(shape, runtime);
						shape.text.outline.set(
							undefined,
							UtilRgb.blend(base.color, color, blend),
							UtilAlpha.blend(base.alpha, alpha, blend)
						);
					}
				} else {
					if (reset & EShapeRuntimeReset.COLOR_FILL) {
						shape.fill.set(undefined, color, alpha);
					}
					if (reset & EShapeRuntimeReset.COLOR_STROKE) {
						shape.stroke.set(undefined, color, alpha);
					}
					if (reset & EShapeRuntimeReset.COLOR_TEXT) {
						shape.text.set(undefined, color, alpha);
					}
					if (reset & EShapeRuntimeReset.COLOR_TEXT_OUTLINE) {
						shape.text.outline.set(undefined, color, alpha);
					}
				}
			} else {
				if (blend != null) {
					if (reset & EShapeRuntimeReset.COLOR_FILL) {
						const base = EShapeActionBases.toBaseFill(shape, runtime);
						shape.fill.set(
							undefined,
							UtilRgb.blend(base.color, color, blend),
							base.alpha
						);
					}
					if (reset & EShapeRuntimeReset.COLOR_STROKE) {
						const base = EShapeActionBases.toBaseStroke(shape, runtime);
						shape.stroke.set(
							undefined,
							UtilRgb.blend(base.color, color, blend),
							base.alpha
						);
					}
					if (reset & EShapeRuntimeReset.COLOR_TEXT) {
						const base = EShapeActionBases.toBaseText(shape, runtime);
						shape.text.set(
							undefined,
							UtilRgb.blend(base.color, color, blend),
							base.alpha
						);
					}
					if (reset & EShapeRuntimeReset.COLOR_TEXT_OUTLINE) {
						const base = EShapeActionBases.toBaseTextOutline(shape, runtime);
						shape.text.outline.set(
							undefined,
							UtilRgb.blend(base.color, color, blend),
							base.alpha
						);
					}
				} else {
					if (reset & EShapeRuntimeReset.COLOR_FILL) {
						const base = EShapeActionBases.toBaseFill(shape, runtime);
						shape.fill.set(undefined, color, base.alpha);
					}
					if (reset & EShapeRuntimeReset.COLOR_STROKE) {
						const base = EShapeActionBases.toBaseStroke(shape, runtime);
						shape.stroke.set(undefined, color, base.alpha);
					}
					if (reset & EShapeRuntimeReset.COLOR_TEXT) {
						const base = EShapeActionBases.toBaseText(shape, runtime);
						shape.text.set(undefined, color, base.alpha);
					}
					if (reset & EShapeRuntimeReset.COLOR_TEXT_OUTLINE) {
						const base = EShapeActionBases.toBaseTextOutline(shape, runtime);
						shape.text.outline.set(undefined, color, base.alpha);
					}
				}
			}
			runtime.written |= reset;
		} else if (alpha != null) {
			if (blend != null) {
				if (reset & EShapeRuntimeReset.COLOR_FILL) {
					const base = EShapeActionBases.toBaseFill(shape, runtime);
					shape.fill.set(
						undefined,
						base.color,
						UtilAlpha.blend(base.alpha, alpha, blend)
					);
				}
				if (reset & EShapeRuntimeReset.COLOR_STROKE) {
					const base = EShapeActionBases.toBaseStroke(shape, runtime);
					shape.stroke.set(
						undefined,
						base.color,
						UtilAlpha.blend(base.alpha, alpha, blend)
					);
				}
				if (reset & EShapeRuntimeReset.COLOR_TEXT) {
					const base = EShapeActionBases.toBaseText(shape, runtime);
					shape.text.set(
						undefined,
						base.color,
						UtilAlpha.blend(base.alpha, alpha, blend)
					);
				}
				if (reset & EShapeRuntimeReset.COLOR_TEXT_OUTLINE) {
					const base = EShapeActionBases.toBaseTextOutline(shape, runtime);
					shape.text.outline.set(
						undefined,
						base.color,
						UtilAlpha.blend(base.alpha, alpha, blend)
					);
				}
			} else {
				if (reset & EShapeRuntimeReset.COLOR_FILL) {
					const base = EShapeActionBases.toBaseFill(shape, runtime);
					shape.fill.set(undefined, base.color, alpha);
				}
				if (reset & EShapeRuntimeReset.COLOR_STROKE) {
					const base = EShapeActionBases.toBaseStroke(shape, runtime);
					shape.stroke.set(undefined, base.color, alpha);
				}
				if (reset & EShapeRuntimeReset.COLOR_TEXT) {
					const base = EShapeActionBases.toBaseText(shape, runtime);
					shape.text.set(undefined, base.color, alpha);
				}
				if (reset & EShapeRuntimeReset.COLOR_TEXT_OUTLINE) {
					const base = EShapeActionBases.toBaseTextOutline(shape, runtime);
					shape.text.outline.set(undefined, base.color, alpha);
				}
			}
			runtime.written |= reset;
		}
	}
}
