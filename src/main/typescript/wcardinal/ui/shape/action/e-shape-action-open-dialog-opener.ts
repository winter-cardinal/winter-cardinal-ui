/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagram } from "../../d-diagram";
import { EShape } from "../e-shape";

export type EShapeActionOpenDialogOpener = (
	target: string,
	argument: unknown,
	shape: EShape,
	diagram: DDiagram
) => void;
