/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeActionRuntime } from "./e-shape-action-runtime";
import { EShapeActionValueType } from "./e-shape-action-value-type";

export interface EShapeActionValue {
	readonly type: EShapeActionValueType;
	readonly condition: string;

	isEquals( value: EShapeActionValue ): boolean;
	toRuntime( shape: EShape ): EShapeActionRuntime;
	toLabel(): string;
	serialize( manager: EShapeResourceManagerSerialization ): number;
}
