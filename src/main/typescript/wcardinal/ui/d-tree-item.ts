/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DTreeNode } from "./d-tree-node";

export interface DTreeItem<NODE extends DTreeNode = DTreeNode> extends DBase {
	readonly node: NODE | undefined;

	set(node: NODE, level: number, forcibly?: boolean): void;
	unset(): void;
}
