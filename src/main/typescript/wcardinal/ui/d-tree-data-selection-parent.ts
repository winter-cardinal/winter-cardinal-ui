/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTreeNode } from "./d-tree-node";
import { DTreeNodeAccessor } from "./d-tree-node-accessor";

export interface DTreeDataSelectionParent<NODE extends DTreeNode> {
	readonly accessor: DTreeNodeAccessor<NODE>;
	update(): void;
}
