/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeActionValue } from "./e-shape-action-value";

export type EShapeActionValueDeserializer = (
	serialized: number[],
	manager: EShapeResourceManagerDeserialization
) => EShapeActionValue | null;

export const EShapeActionValueDeserializers: Record<
	number,
	EShapeActionValueDeserializer | undefined
> = {};
