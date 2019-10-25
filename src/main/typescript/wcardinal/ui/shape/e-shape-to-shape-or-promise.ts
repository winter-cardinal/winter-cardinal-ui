/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../d-diagram-serialized";
import { EShape } from "./e-shape";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";

export type EShapeDeserializer = (
	item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
) => Promise<EShape> | EShape | null;

export const EShapeDeserializers: { [ type: number ]: EShapeDeserializer | undefined } = {};

export const toShapeOrPromise = (
	item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
): Promise<EShape> | EShape | null => {
	const shapeDeserializer = EShapeDeserializers[ item[ 0 ] ];
	if( shapeDeserializer != null ) {
		return shapeDeserializer( item, manager );
	}
	return null;
};
