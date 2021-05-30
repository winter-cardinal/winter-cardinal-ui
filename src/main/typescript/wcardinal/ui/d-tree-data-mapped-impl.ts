/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTreeDataMapped } from "./d-tree-data-mapped";
import { DTreeNodeAccessor } from "./d-tree-node-accessor";

export interface DTreeDataMppedImplParent<NODE> {
	readonly nodes: NODE[];
	readonly accessor: DTreeNodeAccessor<NODE>;
	isExpanded(node: NODE): boolean;
}

export class DTreeDataMappedImpl<NODE> implements DTreeDataMapped<NODE> {
	protected readonly _parent: DTreeDataMppedImplParent<NODE>;
	protected readonly _nodes: NODE[];
	protected readonly _levels: number[];
	protected _isDirty: boolean;

	constructor(parent: DTreeDataMppedImplParent<NODE>) {
		this._parent = parent;
		this._nodes = [];
		this._levels = [];
		this._isDirty = false;
	}

	get nodes(): NODE[] {
		this.update();
		return this._nodes;
	}

	get levels(): number[] {
		this.update();
		return this._levels;
	}

	toDirty(): void {
		this._isDirty = true;
	}

	size(): number {
		this.update();
		return this._nodes.length;
	}

	each(
		iteratee: (value: NODE, index: number) => boolean | void,
		from?: number,
		to?: number
	): void {
		this.update();
		const nodes = this._nodes;
		const ifrom = from != null ? Math.max(0, from) : 0;
		const ito = to != null ? Math.min(nodes.length, to) : nodes.length;
		for (let i = ifrom; i < ito; ++i) {
			if (iteratee(nodes[i], i) === false) {
				break;
			}
		}
	}

	protected update(): void {
		if (this._isDirty) {
			this._isDirty = false;

			const parent = this._parent;
			const parentNodes = parent.nodes;
			const toChildren = parent.accessor.toChildren;
			const nodes = this._nodes;
			const levels = this._levels;
			const size = this.newNodes(parent, parentNodes, 0, 0, nodes, levels, toChildren);
			if (nodes.length !== size) {
				nodes.length = size;
				levels.length = size;
			}
		}
	}

	protected newNodes(
		parent: DTreeDataMppedImplParent<NODE>,
		parentNodes: NODE[],
		index: number,
		level: number,
		nodes: NODE[],
		levels: number[],
		toChildren: (node: NODE) => NODE[] | null | undefined
	): number {
		for (let i = 0, imax = parentNodes.length; i < imax; ++i) {
			const parentNode = parentNodes[i];
			if (index < nodes.length) {
				nodes[index] = parentNode;
				levels[index] = level;
			} else {
				nodes.push(parentNode);
				levels.push(level);
			}
			index += 1;
			const children = toChildren(parentNode);
			if (children && parent.isExpanded(parentNode)) {
				index = this.newNodes(
					parent,
					children,
					index,
					level + 1,
					nodes,
					levels,
					toChildren
				);
			}
		}
		return index;
	}
}
