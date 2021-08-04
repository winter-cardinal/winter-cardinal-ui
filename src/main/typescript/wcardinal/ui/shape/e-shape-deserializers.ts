/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../d-diagram-serialized";
import { EShape } from "./e-shape";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeUuidMapping } from "./e-shape-uuid-mapping";

type EShapeDeserializer = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization
) => Promise<EShape> | EShape | null;

export const EShapeDeserializers: { [type: number]: EShapeDeserializer | undefined } = {};

type EShapeOnDeserialized = (
	item: DDiagramSerializedItem,
	shape: EShape,
	mapping: EShapeUuidMapping,
	manager: EShapeResourceManagerDeserialization
) => void;

export const EShapeOnDeserialized: { [type: number]: EShapeOnDeserialized | undefined } = {};
