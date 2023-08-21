/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramBaseController, DDiagramBasePieceController } from "./d-diagram-base-controller";
import { DDiagramSerialized, DDiagramSerializedSimple } from "./d-diagram-serialized";

/**
 * {@link DDiagramEditor} piece controller.
 */
export interface DDiagramEditorPieceController extends DDiagramBasePieceController {}

/**
 * {@link DDiagramEditor} controller.
 */
export interface DDiagramEditorController extends DDiagramBaseController {
	get(id: number): Promise<DDiagramSerializedSimple | DDiagramSerialized>;
	save(simple: DDiagramSerializedSimple): Promise<number>;
	secretSave(simple: DDiagramSerializedSimple): Promise<number>;
	delete(id: number): Promise<void>;
}
