/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeFillLike } from "../e-shape-fill";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";
import { EShapeStrokeLike } from "../e-shape-stroke";
import { EShapeTextLike } from "../e-shape-text";
import { EShapeTextOutlineLike } from "../e-shape-text-outline";

export class EShapeActionBases {
	static toBaseFill(shape: EShape, runtime: EShapeRuntime): EShapeFillLike {
		return (runtime.written & EShapeRuntimeReset.COLOR_FILL ? shape : runtime).fill;
	}

	static toBaseStroke(shape: EShape, runtime: EShapeRuntime): EShapeStrokeLike {
		return (runtime.written & EShapeRuntimeReset.COLOR_STROKE ? shape : runtime).stroke;
	}

	static toBaseText(shape: EShape, runtime: EShapeRuntime): EShapeTextLike {
		return (runtime.written & EShapeRuntimeReset.COLOR_TEXT ? shape : runtime).text;
	}

	static toBaseTextOutline(shape: EShape, runtime: EShapeRuntime): EShapeTextOutlineLike {
		return (runtime.written & EShapeRuntimeReset.COLOR_TEXT_OUTLINE ? shape : runtime).text
			.outline;
	}
}
