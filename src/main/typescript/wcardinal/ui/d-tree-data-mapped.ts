/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DListItemUpdaterBaseDataMapped } from "./d-list-item-updater-base";

export interface DTreeDataMapped<NODE> extends DListItemUpdaterBaseDataMapped<NODE> {
	readonly nodes: NODE[];
	readonly levels: number[];

	toDirty(): void;
	each(iteratee: (node: NODE, index: number) => void | boolean, from?: number, to?: number): void;
}
