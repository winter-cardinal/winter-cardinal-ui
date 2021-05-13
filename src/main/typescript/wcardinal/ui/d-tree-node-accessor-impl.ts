/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DTreeNode } from "./d-tree-node";
import { DTreeNodeAccessor, DTreeNodeAccessorOptions } from "./d-tree-node-accessor";
import { isString } from "./util/is-string";

const toLabel = (item: any): string | undefined => {
	const text = item.text;
	if (isString(text)) {
		return text;
	}
	const label = item.label;
	if (isString(label)) {
		return label;
	}
	const name = item.name;
	if (isString(name)) {
		return name;
	}
	return undefined;
};

const toTitle = (item: any): string | undefined => {
	const title = item.title;
	if (isString(title)) {
		return title;
	}
	return undefined;
};

const toImage = (item: any): DisplayObject | Texture | null | undefined => {
	return item.image;
};

const toChildren = <NODE extends DTreeNode>(item: any): NODE[] | null | undefined => {
	return item.children;
};

const newChildren = <NODE extends DTreeNode>(item: any): NODE[] | null | undefined => {
	return (item.children = []);
};

export class DTreeNodeAccessorImpl<NODE extends DTreeNode> implements DTreeNodeAccessor<NODE> {
	toLabel: (item: NODE) => string | undefined;
	toTitle: (item: NODE) => string | undefined;
	toImage: (item: NODE) => DisplayObject | Texture | null | undefined;
	toChildren: (item: NODE) => NODE[] | null | undefined;
	newChildren: (item: NODE) => NODE[] | null | undefined;

	constructor(options?: DTreeNodeAccessorOptions<NODE>) {
		this.toLabel = options?.toLabel ?? toLabel;
		this.toTitle = options?.toTitle ?? toTitle;
		this.toImage = options?.toImage ?? toImage;
		this.toChildren = options?.toChildren ?? toChildren;
		this.newChildren = options?.newChildren ?? newChildren;
	}
}
