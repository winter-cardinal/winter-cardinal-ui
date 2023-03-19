/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type DTableDataTreeItemAccessorToParent<NODE> = (node: NODE) => NODE | null | undefined;

export type DTableDataTreeItemAccessorToChildren<NODE> = (node: NODE) => NODE[] | null | undefined;

export type DTableDataTreeItemAccessorHasChildren<NODE> = (
	node: NODE,
	children?: NODE[] | null
) => children is NODE[];

export interface DTableDataTreeItemAccessorOptions<NODE> {
	toParent?: DTableDataTreeItemAccessorToParent<NODE>;
	toChildren?: DTableDataTreeItemAccessorToChildren<NODE>;
	hasChildren?: DTableDataTreeItemAccessorHasChildren<NODE>;
}

const toParent = <NODE>(node: any): NODE | null | undefined => {
	return node.parent;
};

const toChildren = <NODE>(node: any): NODE | null | undefined => {
	return node.children;
};

const hasChildren = <NODE>(node: any, children: NODE[] | null | undefined): children is NODE[] => {
	return children != null && 0 < children.length;
};

export class DTableDataTreeItemAccessor<NODE> {
	toParent: DTableDataTreeItemAccessorToParent<NODE>;
	toChildren: DTableDataTreeItemAccessorToChildren<NODE>;
	hasChildren: DTableDataTreeItemAccessorHasChildren<NODE>;

	constructor(options?: DTableDataTreeItemAccessorOptions<NODE>) {
		if (options != null) {
			this.toParent = options.toParent || toParent;
			this.toChildren = options.toChildren || toChildren;
			this.hasChildren = options.hasChildren || hasChildren;
		} else {
			this.toParent = toParent;
			this.toChildren = toChildren;
			this.hasChildren = hasChildren;
		}
	}
}
