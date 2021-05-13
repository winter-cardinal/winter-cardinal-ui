/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTreeNode } from "./d-tree-node";

export type DTreeNodeIteratee<NODE extends DTreeNode> = (
	node: NODE,
	index: number,
	nodes: NODE[],
	parent: NODE | null
) => boolean | void;
