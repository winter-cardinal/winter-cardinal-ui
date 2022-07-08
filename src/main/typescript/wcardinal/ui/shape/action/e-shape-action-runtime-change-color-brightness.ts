/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilRgb } from "../../util/util-rgb";
import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionBases } from "./e-shape-action-bases";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeChangeColorBase } from "./e-shape-action-runtime-change-color-base";
import { EShapeActionValueChangeColorBrightness } from "./e-shape-action-value-change-color-brightness";

export class EShapeActionRuntimeChangeColorBrightness extends EShapeActionRuntimeChangeColorBase {
	protected readonly brightness: EShapeActionExpression<number | null>;

	constructor(value: EShapeActionValueChangeColorBrightness) {
		super(value);
		this.brightness = EShapeActionExpressions.ofNumberOrNull(value.brightness);
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			const brightness = this.brightness(shape, time, EShapeActionEnvironment);
			this.set(shape, runtime, time, brightness);
		}
	}

	protected set(
		shape: EShape,
		runtime: EShapeRuntime,
		time: number,
		brightness: number | null
	): void {
		const reset = this.reset;
		if (brightness != null) {
			const toAdjusted = this.toAdjusted;

			if (reset & EShapeRuntimeReset.COLOR_FILL) {
				const base = EShapeActionBases.toBaseFill(shape, runtime);
				shape.fill.set(undefined, toAdjusted(base.color, brightness), base.alpha);
			}
			if (reset & EShapeRuntimeReset.COLOR_STROKE) {
				const base = EShapeActionBases.toBaseStroke(shape, runtime);
				shape.stroke.set(undefined, toAdjusted(base.color, brightness), base.alpha);
			}
			if (reset & EShapeRuntimeReset.COLOR_TEXT) {
				const base = EShapeActionBases.toBaseText(shape, runtime);
				shape.text.set(undefined, toAdjusted(base.color, brightness), base.alpha);
			}
			if (reset & EShapeRuntimeReset.COLOR_TEXT_OUTLINE) {
				const base = EShapeActionBases.toBaseTextOutline(shape, runtime);
				shape.text.outline.set(undefined, toAdjusted(base.color, brightness), base.alpha);
			}
			runtime.written |= reset;
		}
	}

	protected toAdjusted(color: number, brightness: number): number {
		if (0 <= brightness) {
			return UtilRgb.brighten(color, +brightness);
		} else {
			return UtilRgb.darken(color, -brightness);
		}
	}
}
