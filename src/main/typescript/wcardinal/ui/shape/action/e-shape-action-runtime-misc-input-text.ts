/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeInputText } from "../../d-input-text";
import { DThemes } from "../../theme/d-themes";
import { UtilInputText } from "../../util/util-input-text";
import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeActionRuntimeMiscInput } from "./e-shape-action-runtime-misc-input";

export class EShapeActionRuntimeMiscInputText extends EShapeActionRuntimeMiscInput<string, UtilInputText> {
	protected newUtil( shape: EShape, runtime: EShapeRuntime ): UtilInputText {
		return new UtilInputText(
			shape, this.newOperation( shape, runtime ),
			DThemes.getInstance().get<DThemeInputText>( "DInputText" )
		);
	}
}
