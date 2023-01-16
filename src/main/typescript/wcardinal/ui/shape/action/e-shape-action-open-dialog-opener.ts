/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";

export type EShapeActionOpenDialogOpener = (
	target: string,
	argument: unknown,
	shape: EShape
) => void;
