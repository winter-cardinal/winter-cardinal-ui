/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionOpenOpener } from "./e-shape-action-open-opener";
import { EShapeActionValueOpenType } from "./e-shape-action-value-open-type";

export interface EShapeActionOpenExtension {
	/**
	 * An ID of the open extension action.
	 * This ID must be unique and greater than or equal to {@link EShapeActionValueOpenType.EXTENSION}.
	 **/
	type: EShapeActionValueOpenType;
	label: string;
	opener: EShapeActionOpenOpener;
}
