/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagram } from "../../d-diagram";
import { EShape } from "../e-shape";
import { EShapeActionEnvironment } from "./e-shape-action-environment";

export type EShapeActionOpenDialogOpener = (
	target: string,
	argument: unknown,
	shape: EShape,
	diagram: DDiagram,
	environment: EShapeActionEnvironment
) => void;
