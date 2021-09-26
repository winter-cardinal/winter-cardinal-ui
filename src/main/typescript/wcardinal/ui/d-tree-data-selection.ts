/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DOnOptions } from "./d-on-options";
import { DTreeNode } from "./d-tree-node";

export const DTreeDataSelectionType = {
	NONE: 0,
	SINGLE: 1,
	MULTIPLE: 2
} as const;

export type DTreeDataSelectionType = typeof DTreeDataSelectionType[keyof typeof DTreeDataSelectionType];

/**
 * {@link DListSelection} events.
 */
export interface DTreeDataSelectionEvents<EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param emitter an emitter
	 */
	change(emitter: EMITTER): void;
}

/**
 * {@link DListSelection} "on" options.
 */
export interface DTreeDataSelectionOnOptions<EMITTER>
	extends Partial<DTreeDataSelectionEvents<EMITTER>>,
		DOnOptions {}

/**
 * {@link DListSelection} options.
 */
export interface DTreeDataSelectionOptions<ITEM, EMITTER = any> {
	/**
	 * A type.
	 */
	type?: DTreeDataSelectionType | keyof typeof DTreeDataSelectionType;

	/**
	 * Mappings of event names and handlers.
	 */
	on?: DTreeDataSelectionOnOptions<EMITTER>;
}

export interface DTreeDataSelection<NODE extends DTreeNode> extends utils.EventEmitter {
	/**
	 * A type.
	 */
	readonly type: DTreeDataSelectionType;

	/**
	 * A first selected node or null.
	 */
	readonly first: NODE | null;

	/**
	 * A last selected node or null.
	 */
	readonly last: NODE | null;

	/**
	 * Returns a node at the given index or null.
	 *
	 * @param index an index
	 * @returns a node at the given index or null
	 */
	get(index: number): NODE | null;

	/**
	 * Adds the given node
	 *
	 * @param target a node
	 * @return true if succeeded.
	 */
	add(target: NODE): boolean;

	/**
	 * Removes the given node.
	 *
	 * @param target a node
	 * @return true if succeeded
	 */
	remove(target: NODE): boolean;

	/**
	 * Toggles the given node.
	 *
	 * @param target a node
	 * @return true if succeeded.
	 */
	toggle(target: NODE): boolean;

	/**
	 * Clears all the nodes.
	 */
	clear(): boolean;

	/**
	 * Clears all the exisint nodes and adds the given node.
	 *
	 * @param target a node to be added
	 * @returns true if the selection is changed
	 */
	clearAndAdd(target: NODE): boolean;

	/**
	 * Clears the exising nodes and add all the given nodes.
	 *
	 * @param targets nodes to be added
	 * @returns true if the selection is changed
	 */
	clearAndAddAll(targets: NODE[]): boolean;

	/**
	 * Returns true if the given node is selected.
	 *
	 * @param target a node to be checked
	 * @returns true if the given node is selected
	 */
	contains(target: NODE): boolean;

	/**
	 * Returns the number of selected nodes.
	 *
	 * @returns the number of selected nodes
	 */
	size(): number;

	/**
	 * Returns true if the selection is empty.
	 *
	 * @returns true if the selection is empty
	 */
	isEmpty(): boolean;

	/**
	 * Iterates over selected nodes.
	 *
	 * @param iteratee an iteratee
	 */
	each(iteratee: (node: NODE) => boolean | void): void;

	/**
	 * Returns an array of selected nodes.
	 *
	 * @return an array of selected nodes.
	 */
	toArray(): NODE[];
}
