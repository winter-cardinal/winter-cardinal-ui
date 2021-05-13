/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DTreeNode } from "./d-tree-node";

export interface DTreeNodeAccessorOptions<NODE extends DTreeNode> {
	toLabel?: (item: NODE) => string | undefined;
	toTitle?: (item: NODE) => string | undefined;
	toImage?: (item: NODE) => DisplayObject | Texture | null | undefined;
	toChildren?: (item: NODE) => NODE[] | null | undefined;
	newChildren?: (item: NODE) => NODE[] | null | undefined;
}

export interface DTreeNodeAccessor<NODE extends DTreeNode> {
	toLabel: (item: NODE) => string | undefined;
	toTitle: (item: NODE) => string | undefined;
	toImage: (item: NODE) => DisplayObject | Texture | null | undefined;
	toChildren: (item: NODE) => NODE[] | null | undefined;
	newChildren: (item: NODE) => NODE[] | null | undefined;
}
