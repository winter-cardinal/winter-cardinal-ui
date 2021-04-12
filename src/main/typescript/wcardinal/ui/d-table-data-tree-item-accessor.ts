/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DTableDataTreeItemAccessorOptions<NODE> {
	toParent?: (node: NODE) => NODE | null | undefined;
	toChildren?: (node: NODE) => NODE[] | null | undefined;
}

const toParent = <NODE>(node: any): NODE | null | undefined => {
	return node.parent;
};

const toChildren = <NODE>(node: any): NODE | null | undefined => {
	return node.children;
};

export class DTableDataTreeItemAccessor<NODE> {
	toParent: (node: NODE) => NODE | null | undefined;
	toChildren: (node: NODE) => NODE[] | null | undefined;

	constructor(options?: DTableDataTreeItemAccessorOptions<NODE>) {
		this.toParent = options?.toParent ?? toParent;
		this.toChildren = options?.toChildren ?? toChildren;
	}
}
