/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagram } from "../../d-diagram";
import { EShape } from "../e-shape";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionValueMiscType } from "./e-shape-action-value-misc-type";

export type EShapeActionMiscExtensionExecutor = (
	argument: unknown,
	shape: EShape,
	diagram: DDiagram,
	environment: EShapeActionEnvironment
) => void;

export interface EShapeActionMiscExtension {
	/**
	 * An ID of the misc. extension action.
	 * This ID must be unique and greater than or equal to {@link EShapeActionValueMiscType.EXTENSION}.
	 **/
	type: EShapeActionValueMiscType;
	label: string;
	executor: EShapeActionMiscExtensionExecutor;
}
