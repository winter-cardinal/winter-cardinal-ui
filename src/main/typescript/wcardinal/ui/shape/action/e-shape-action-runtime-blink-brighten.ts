/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilRgb } from "../../util/util-rgb";
import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { toBaseFill, toBaseStroke, toBaseText, toBaseTextOutline } from "./e-shape-action-color";
import { EShapeActionRuntimeBlink } from "./e-shape-action-runtime-blink";
import { EShapeActionValueBlink } from "./e-shape-action-value-blink";

export class EShapeActionRuntimeBlinkBrighten extends EShapeActionRuntimeBlink {
	constructor( value: EShapeActionValueBlink ) {
		super( value, EShapeRuntimeReset.COLOR );
	}

	protected toOn( shape: EShape, runtime: EShapeRuntime ): void {
		const fill = toBaseFill( shape, runtime );
		shape.fill.set(
			undefined,
			UtilRgb.brighten( fill.color, 0.5 ),
			fill.alpha
		);

		const stroke = toBaseStroke( shape, runtime );
		shape.stroke.set(
			undefined,
			UtilRgb.brighten( stroke.color, 0.5 ),
			stroke.alpha
		);

		const text = toBaseText( shape, runtime );
		shape.text.set(
			undefined,
			UtilRgb.brighten( text.color, 0.5 ),
			text.alpha
		);

		const outline = toBaseTextOutline( shape, runtime );
		shape.text.outline.set(
			undefined,
			UtilRgb.brighten( outline.color, 0.5 ),
			outline.alpha
		);

		runtime.written |= this.reset;
	}
}
