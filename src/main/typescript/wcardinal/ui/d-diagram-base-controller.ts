/**
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerialized, DDiagramSerializedSimple } from "./d-diagram-serialized";

/**
 * {@link DDiagram} piece controller.
 */
export interface DDiagramBasePieceController {
	getByName(name: string): Promise<DDiagramSerializedSimple | DDiagramSerialized>;
}

/**
 * {@link DDiagram} controller open type.
 */
export const DDiagramBaseControllerOpenType = {
	DIAGRAM: 0,
	PAGE: 1,
	EXTENSION: 1000
} as const;

/**
 * {@link DDiagram} controller open type.
 */
export type DDiagramBaseControllerOpenType = number;

/**
 * {@link DDiagram} controller.
 */
export interface DDiagramBaseController {
	piece: DDiagramBasePieceController;
	getByName(name: string): Promise<DDiagramSerializedSimple | DDiagramSerialized>;
}
