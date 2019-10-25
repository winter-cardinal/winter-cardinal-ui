/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../d-diagram-serialized";
import { EShape } from "./e-shape";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export const ESHAPE_SERIALIZATION_VERSION = 1;

export const serializeShapes = (
	shapes: EShape[], manager: EShapeResourceManagerSerialization
): DDiagramSerializedItem[] => {
	if( 0 < shapes.length ) {
		const result: DDiagramSerializedItem[] = [];
		for( let i = 0, imax = shapes.length; i < imax; ++i ) {
			const shape = shapes[ i ];
			result.push( shape.serialize( manager ) );
		}
		return result;
	}
	return [];
};
