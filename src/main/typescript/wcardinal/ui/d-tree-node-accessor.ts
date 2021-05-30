/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DTreeNode } from "./d-tree-node";

export interface DTreeNodeAccessorOptions<NODE extends DTreeNode> {
	toLabel?: (node: NODE) => string | undefined;
	toTitle?: (node: NODE) => string | undefined;
	toImage?: (node: NODE) => DisplayObject | Texture | null | undefined;
	toChildren?: (node: NODE) => NODE[] | null | undefined;
	newChildren?: (node: NODE) => NODE[] | null | undefined;
}

export interface DTreeNodeAccessor<NODE extends DTreeNode> {
	toLabel: (node: NODE) => string | undefined;
	toTitle: (node: NODE) => string | undefined;
	toImage: (node: NODE) => DisplayObject | Texture | null | undefined;
	toChildren: (node: NODE) => NODE[] | null | undefined;
	newChildren: (node: NODE) => NODE[] | null | undefined;
}
