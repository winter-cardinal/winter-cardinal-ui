/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";
import { EShapeActionValueAlignmentType } from "./e-shape-action-value-alignment-type";

export type EShapeActionOpenOpener = (
	target: unknown,
	alignment: EShapeActionValueAlignmentType,
	inNewWindow: boolean,
	shape: EShape
) => void;
