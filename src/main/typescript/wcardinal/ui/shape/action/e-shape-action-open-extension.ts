/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeActionOpenOpener } from "./e-shape-action-open-opener";

export interface EShapeActionOpenExtension {
	type: number;
	label: string;
	opener: EShapeActionOpenOpener;
}
