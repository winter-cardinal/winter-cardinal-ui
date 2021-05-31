/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTreeDataMapped } from "./d-tree-data-mapped";
import { DTreeDataSelection, DTreeDataSelectionOptions } from "./d-tree-data-selection";
import { DTreeNode } from "./d-tree-node";
import { DTreeNodeAccessor, DTreeNodeAccessorOptions } from "./d-tree-node-accessor";
import { DTreeNodeIteratee } from "./d-tree-node-iteratee";

export interface DTreeDataOptions<NODE extends DTreeNode> extends DTreeNodeAccessorOptions<NODE> {
	nodes: NODE[];
	selection?: DTreeDataSelectionOptions<NODE>;
}

export interface DTreeDataLike<NODE extends DTreeNode> {
	/**
	 * A selection.
	 *
	 * @returns a selection
	 */
	readonly selection: DTreeDataSelection<NODE>;

	update(): void;

	/**
	 * Toggles the given node,
	 *
	 * @param target a node
	 * @retrn true if succeeded
	 */
	toggle(target: NODE): boolean;

	/**
	 * Expands the given node.
	 *
	 * @param target a node to be expanded
	 * @return true if succeeded
	 */
	expand(target: NODE): boolean;

	/**
	 * Collapses the given node.
	 *
	 * @param target a node to be collapsed
	 * @return true if succeeded
	 */
	collapse(target: NODE): boolean;

	/**
	 * Expands all the nodes.
	 *
	 * @return true if the data is changed
	 */
	expandAll(): boolean;

	/**
	 * Collapses all the nodes.
	 *
	 * @return true if the data is changed
	 */
	collapseAll(): boolean;

	/**
	 * Returns true if the given node is collapsed.
	 *
	 * @param target a node to be checked.
	 * @returns true if the given node is collapsed
	 */
	isCollapsed(target: NODE): boolean;

	/**
	 * Returns true if the given item is expanded.
	 *
	 * @param target an item to be checked
	 * @returns true if the given item is expanded
	 */
	isExpanded(target: NODE): boolean;

	/**
	 * Clears all the nodes.
	 *
	 * @return true if the data is changed
	 */
	clear(): boolean;

	/**
	 * Removes the given node.
	 *
	 * @param item a node to be removed
	 * @return true if succeeded
	 */
	remove(target: NODE): boolean;

	/**
	 * Inserts a node.
	 *
	 * @param target a new node
	 * @param parent a parent node
	 * @return true if the data is changed
	 */
	add(target: NODE, parent?: NODE): boolean;

	/**
	 * Inserts the given node before the given sibling.
	 *
	 * @param target a new node
	 * @param sibling a sibling node
	 * @return true if the data is changed
	 */
	addBefore(target: NODE, sibling: NODE): boolean;

	/**
	 * Inserts the given node after the given sibling.
	 *
	 * @param target a new node
	 * @param sibling a sibling node
	 * @return true if the data is changed
	 */
	addAfter(target: NODE, sibling: NODE): boolean;

	/**
	 * Iterates over all the nodes.
	 * If the iteratee explicitly returns false, stops an iteration.
	 *
	 * @param iteratee an iteratee
	 */
	each(iteratee: DTreeNodeIteratee<NODE>): void;
}

export interface DTreeData<NODE extends DTreeNode> extends DTreeDataLike<NODE> {
	nodes: NODE[];
	mapped: DTreeDataMapped<NODE>;
	readonly accessor: DTreeNodeAccessor<NODE>;
}
