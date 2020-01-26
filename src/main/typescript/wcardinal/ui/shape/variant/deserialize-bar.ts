/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeDeserializer } from "../e-shape-deserializer";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeBar } from "./e-shape-bar";
import { EShapeBarPosition } from "./e-shape-bar-position";

export const deserializeBar = (
	item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
): Promise<EShapeBar> | EShapeBar => {
	const shape = new EShapeBar( EShapeBarPosition.RIGHT, 10, 3, EShapePointsStyle.NONE );
	const result = EShapeDeserializer.deserialize( item, manager, shape );
	shape.points.deserialize( item[ 15 ], manager );
	return result;
};
