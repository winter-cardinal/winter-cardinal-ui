/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";

export interface EShapeActionRuntimeMiscInputData {
	show( shape: EShape, value: string, onChange: ( shape: EShape, value: string ) => void ): void;
	hide(): void;
	isShown( shape: EShape ): boolean;

	onInputChange(): void;
}
