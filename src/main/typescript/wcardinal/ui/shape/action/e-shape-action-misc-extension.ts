/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagram } from "../../d-diagram";
import { EShape } from "../e-shape";

export type EShapeActionMiscExtensionExecutor = (
	parameter: unknown,
	shape: EShape,
	diagram: DDiagram
) => void;

export interface EShapeActionMiscExtension {
	type: number;
	label: string;
	executor: EShapeActionMiscExtensionExecutor;
}
