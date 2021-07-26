/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DListData, DListDataOptions } from "./d-list-data";
import { DListDataImpl } from "./d-list-data-impl";
import { DListDataSelection, DListDataSelectionOptions } from "./d-list-data-selection";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
import { isArray } from "./util/is-array";
import { DListItemUpdater, DListItemUpdaterOptions } from "./d-list-item-updater";

export interface DListOptions<
	VALUE = unknown,
	DATA extends DListData<VALUE> = DListData<VALUE>,
	THEME extends DThemeList = DThemeList,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions
> extends DPaneOptions<THEME, CONTENT_OPTIONS> {
	items?: VALUE[];
	data?: VALUE[] | DListDataOptions<VALUE> | DATA;
	selection?: DListDataSelectionOptions<VALUE>;
	updater?: DListItemUpdaterOptions<VALUE>;
}

export interface DThemeList extends DThemePane {}

export class DList<
	VALUE = unknown,
	DATA extends DListData<VALUE> = DListData<VALUE>,
	THEME extends DThemeList = DThemeList,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DListOptions<VALUE, DATA, THEME, CONTENT_OPTIONS> = DListOptions<
		VALUE,
		DATA,
		THEME,
		CONTENT_OPTIONS
	>
> extends DPane<THEME, CONTENT_OPTIONS, OPTIONS> {
	protected _data?: DATA;
	protected _updater?: DListItemUpdater<VALUE>;

	constructor(options?: OPTIONS) {
		super(options);
		this.update();
	}

	protected get updater(): DListItemUpdater<VALUE> {
		let result = this._updater;
		if (result == null) {
			result = this.newUpdater(this.data, this.content, this._options);
			this._updater = result;
		}
		return result;
	}

	protected newUpdater(data: DATA, content: DBase, options?: OPTIONS): DListItemUpdater<VALUE> {
		return new DListItemUpdater<VALUE>(data, content, content, options?.updater);
	}

	get data(): DATA {
		let result = this._data;
		if (result == null) {
			result = this.toData(this._options);
			this._data = result;
		}
		return result;
	}

	protected toData(options?: OPTIONS): DATA {
		const data = options && (options.data || options.items);
		const selection = options?.selection;
		if (data == null) {
			if (selection) {
				return new DListDataImpl<VALUE>(this, {
					selection
				}) as any;
			} else {
				return new DListDataImpl<VALUE>(this) as any;
			}
		} else if (isArray(data)) {
			if (selection) {
				return new DListDataImpl<VALUE>(this, {
					items: data,
					selection
				}) as any;
			} else {
				return new DListDataImpl<VALUE>(this, {
					items: data
				}) as any;
			}
		} else if ("each" in data) {
			return data;
		} else {
			if (selection) {
				if (data.selection === undefined) {
					data.selection = selection;
				}
				return new DListDataImpl<VALUE>(this, data) as any;
			} else {
				return new DListDataImpl<VALUE>(this, data) as any;
			}
		}
	}

	protected onContentChange(): void {
		super.onContentChange();
		this.update();
	}

	onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void {
		const updater = this.updater;
		updater.lock();
		super.onResize(newWidth, newHeight, oldWidth, oldHeight);
		updater.update();
		updater.unlock(true);
	}

	get selection(): DListDataSelection<VALUE> {
		return this.data.selection;
	}

	lock(): void {
		this.updater.lock();
	}

	unlock(callIfNeeded: boolean): void {
		this.updater.unlock(callIfNeeded);
	}

	/**
	 * Updates items. If the `forcibly` is true, some dirty checkings for
	 * avoiding unnecessary state changes are skipped.
	 *
	 * @param forcibly true to update forcibly
	 */
	update(forcibly?: boolean): void {
		this.updater.update(forcibly);
	}

	onKeyDown(e: KeyboardEvent): boolean {
		this.updater.moveFocus(e, this, true, true);
		return super.onKeyDown(e);
	}

	protected getType(): string {
		return "DList";
	}
}
