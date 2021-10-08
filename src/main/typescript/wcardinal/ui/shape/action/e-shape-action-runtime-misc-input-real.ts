/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeInputReal } from "../../d-input-real";
import { DThemes } from "../../theme/d-themes";
import { UtilInputNumber } from "../../util/util-input-number";
import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntimeMiscInputNumber } from "./e-shape-action-runtime-misc-input-number";

export class EShapeActionRuntimeMiscInputReal extends EShapeActionRuntimeMiscInputNumber {
	protected newUtil(shape: EShape, runtime: EShapeRuntime): UtilInputNumber {
		return new UtilInputNumber(
			shape,
			this.newOperation(shape, runtime),
			DThemes.getInstance().get<DThemeInputReal>("DInputReal"),
			this.newUtilOptions(shape, runtime)
		);
	}
}
