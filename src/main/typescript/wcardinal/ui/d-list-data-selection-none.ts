/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DListDataSelectionParent } from "./d-list-data-selection-parent";
import {
	DListDataSelection,
	DListDataSelectionType,
	DListDataSelectionOptions
} from "./d-list-data-selection";
import { DListItemAccessor } from "./d-list-item-accessor";

export class DListDataSelectionNone<ITEM>
	extends utils.EventEmitter
	implements DListDataSelection<ITEM> {
	protected _parent: DListDataSelectionParent<ITEM>;

	constructor(
		parent: DListDataSelectionParent<ITEM>,
		accessor: DListItemAccessor<ITEM>,
		options?: DListDataSelectionOptions<ITEM>
	) {
		super();

		this._parent = parent;

		// Events
		const on = options?.on;
		if (on) {
			for (const name in on) {
				const handler = on[name];
				if (handler) {
					this.on(name, handler);
				}
			}
		}
	}

	get type(): DListDataSelectionType {
		return DListDataSelectionType.NONE;
	}

	get first(): ITEM | null {
		return null;
	}

	get last(): ITEM | null {
		return null;
	}

	get(index: number): ITEM | null {
		return null;
	}

	add(target: ITEM): boolean {
		return false;
	}

	remove(target: ITEM): boolean {
		return false;
	}

	toggle(target: ITEM): boolean {
		return false;
	}

	clear(): void {
		// DO NOTHING
	}

	clearAndAdd(target: ITEM): boolean {
		return false;
	}

	clearAndAddAll(targets: ITEM[]): boolean {
		return false;
	}

	contains(target: ITEM): boolean {
		return false;
	}

	size(): number {
		return 0;
	}

	isEmpty(): boolean {
		return true;
	}

	each(iteratee: (item: ITEM) => boolean | void): void {
		// DO NOTHING
	}

	toArray(): ITEM[] {
		return [];
	}

	protected onChange(): void {
		this._parent.update();
		this.emit("change", this);
	}

	onItemChange(before: ITEM[], items: ITEM[], after: ITEM[]): void {
		// DO NOTHING
	}
}
