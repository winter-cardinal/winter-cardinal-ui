/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../d-diagram-serialized";
import { EShape } from "./e-shape";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeUuidMapping } from "./e-shape-uuid-mapping";

/**
 * A shape deserializer
 */
type EShapeDeserializer = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization
) => Promise<EShape> | EShape | null;

/**
 * Mappings of shape types and deserializers.
 */
export const EShapeDeserializers: { [type: number]: EShapeDeserializer | undefined } = {};

/**
 * A handler which is called after the deserializations of all the shapes are completed.
 */
export type EShapeOnDeserialized = (
	item: DDiagramSerializedItem,
	shape: EShape,
	mapping: EShapeUuidMapping,
	manager: EShapeResourceManagerDeserialization
) => void;

/**
 * Mappings of shape types and `onDeserialized` handlers.
 */
export const EShapeOnDeserializeds: { [type: number]: EShapeOnDeserialized | undefined } = {};
