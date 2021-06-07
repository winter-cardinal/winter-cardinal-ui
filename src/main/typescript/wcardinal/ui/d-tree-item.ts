/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DTreeNode } from "./d-tree-node";

export interface DTreeItem<NODE extends DTreeNode = DTreeNode> extends DBase {
	readonly node?: NODE;
	readonly value?: NODE;
	readonly index?: number;

	set(node: NODE, index: number, forcibly?: boolean): void;
	unset(): void;
}
