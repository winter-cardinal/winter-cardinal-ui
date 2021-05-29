/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DItemUpdaterDataMapped } from "./d-item-updater";

export interface DTreeDataMapped<NODE> extends DItemUpdaterDataMapped<NODE> {
	readonly nodes: NODE[];
	readonly levels: number[];

	toDirty(): void;
	each(iteratee: (node: NODE, index: number) => void | boolean, from?: number, to?: number): void;
}
