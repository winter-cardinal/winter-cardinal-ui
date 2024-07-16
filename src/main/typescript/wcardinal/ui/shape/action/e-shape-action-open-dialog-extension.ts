/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionOpenDialogOpener } from "./e-shape-action-open-dialog-opener";
import { EShapeActionValueOpenDialogType } from "./e-shape-action-value-open-dialog-type";

export interface EShapeActionOpenDialogExtension {
	/**
	 * An ID of the open extension action.
	 * This ID must be unique and greater than or equal to {@link EShapeActionValueOpenDialogType.EXTENSION}.
	 **/
	type: EShapeActionValueOpenDialogType;
	label: string;
	opener: EShapeActionOpenDialogOpener;
}
