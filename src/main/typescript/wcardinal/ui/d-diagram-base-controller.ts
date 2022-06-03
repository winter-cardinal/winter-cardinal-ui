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
	PAGE: 1
} as const;

/**
 * {@link DDiagram} controller open type.
 */
export type DDiagramBaseControllerOpenType =
	typeof DDiagramBaseControllerOpenType[keyof typeof DDiagramBaseControllerOpenType];

/**
 * {@link DDiagram} controller.
 */
export interface DDiagramBaseController {
	piece: DDiagramBasePieceController;
	getByName(name: string): Promise<DDiagramSerializedSimple | DDiagramSerialized>;

	/**
	 * Opens a diagram or a page.
	 *
	 * @param type a diagram or a page
	 * @param id an id to identify a diagram or a page
	 * @param inNewWindow true to open in a new window
	 */
	open?(type: DDiagramBaseControllerOpenType, id: string, inNewWindow: boolean): void;
}
