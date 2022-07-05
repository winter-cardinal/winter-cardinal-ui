/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionOpenDialogOpener } from "./e-shape-action-open-dialog-opener";

export interface EShapeActionOpenDialogExtension {
	type: number;
	label: string;
	opener: EShapeActionOpenDialogOpener;
}
