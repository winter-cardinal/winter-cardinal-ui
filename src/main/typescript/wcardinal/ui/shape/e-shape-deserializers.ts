/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../d-diagram-serialized";
import { EShape } from "./e-shape";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";

type Deserializer = (
	item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
) => Promise<EShape> | EShape | null;

export const EShapeDeserializers: { [ type: number ]: Deserializer | undefined } = {};
