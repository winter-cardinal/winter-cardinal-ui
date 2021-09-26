/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DOnOptions } from "./d-on-options";

export const DListDataSelectionType = {
	NONE: 0,
	SINGLE: 1,
	MULTIPLE: 2
} as const;

export type DListDataSelectionType = typeof DListDataSelectionType[keyof typeof DListDataSelectionType];

/**
 * {@link DListSelection} events.
 */
export interface DListDataSelectionEvents<EMITTER> {
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
export interface DListDataSelectionOnOptions<EMITTER>
	extends Partial<DListDataSelectionEvents<EMITTER>>,
		DOnOptions {}

/**
 * {@link DListSelection} options.
 */
export interface DListDataSelectionOptions<ITEM, EMITTER = any> {
	/**
	 * @deprecated in favor of {@link type}
	 */
	mode?: DListDataSelectionType | keyof typeof DListDataSelectionType;

	/**
	 * A type.
	 */
	type?: DListDataSelectionType | keyof typeof DListDataSelectionType;

	/**
	 * Mappings of event names and handlers.
	 */
	on?: DListDataSelectionOnOptions<EMITTER>;
}

export interface DListDataSelection<ITEM> extends utils.EventEmitter {
	readonly type: DListDataSelectionType;
	readonly first: ITEM | null;
	readonly last: ITEM | null;

	/**
	 * Returns an item at the given index or null.
	 *
	 * @param index an index
	 * @returns an item at the given index or null
	 */
	get(index: number): ITEM | null;

	/**
	 * Adds the given item
	 *
	 * @param target an item
	 * @return true if succeeded.
	 */
	add(target: ITEM): boolean;

	/**
	 * Removes the given item.
	 *
	 * @param target an item
	 * @return true if succeeded
	 */
	remove(target: ITEM): boolean;

	/**
	 * Toggles the given item.
	 *
	 * @param target an item
	 * @return true if succeeded.
	 */
	toggle(target: ITEM): boolean;

	/**
	 * Clears all the items.
	 */
	clear(): void;

	/**
	 * Clears all the exisint items and adds the given item.
	 *
	 * @param target an item to be added
	 * @returns true if the selection is changed
	 */
	clearAndAdd(target: ITEM): boolean;

	/**
	 * Clears the exising items and add all the given items.
	 *
	 * @param targets items to be added
	 * @returns true if the selection is changed
	 */
	clearAndAddAll(targets: ITEM[]): boolean;

	/**
	 * Returns true if the given item is selected.
	 *
	 * @param target an item to be checked
	 * @returns true if the given item is selected
	 */
	contains(target: ITEM): boolean;

	/**
	 * Returns the number of selected items.
	 *
	 * @returns the number of selected items
	 */
	size(): number;

	/**
	 * Returns true if the selection is empty.
	 *
	 * @returns true if the selection is empty
	 */
	isEmpty(): boolean;

	/**
	 * Iterates over selected items.
	 *
	 * @param iteratee an iteratee
	 */
	each(iteratee: (item: ITEM) => boolean | void): void;

	/**
	 * Returns an array of selected items.
	 */
	toArray(): ITEM[];
}
