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
import { isArray } from "./util";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
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
	protected _data: DATA;
	protected _updater: DListItemUpdater<VALUE>;

	constructor(options?: OPTIONS) {
		super(options);
		const data = this.toData(options);
		this._data = data;

		const content = this.content;
		content.on("move", (): void => {
			this.update();
		});
		content.on("resize", (): void => {
			this.update();
		});

		const updater = this.newUpdater(data, content, options);
		this._updater = updater;
		updater.update();
	}

	onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void {
		const updater = this._updater;
		if (updater) {
			updater.lock();
			super.onResize(newWidth, newHeight, oldWidth, oldHeight);
			updater.update();
			updater.unlock(true);
		} else {
			super.onResize(newWidth, newHeight, oldWidth, oldHeight);
		}
	}

	protected newUpdater(data: DATA, content: DBase, options?: OPTIONS): DListItemUpdater<VALUE> {
		return new DListItemUpdater<VALUE>(data, content, content, options?.updater);
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

	get selection(): DListDataSelection<VALUE> {
		return this._data.selection;
	}

	get data(): DListData<VALUE> {
		return this._data;
	}

	lock(): void {
		this._updater.lock();
	}

	unlock(callIfNeeded: boolean): void {
		this._updater.unlock(callIfNeeded);
	}

	/**
	 * Updates items. If the `forcibly` is true, some dirty checkings for
	 * avoiding unnecessary state changes are skipped.
	 *
	 * @param forcibly true to update forcibly
	 */
	update(forcibly?: boolean): void {
		this._updater.update(forcibly);
	}

	onKeyDown(e: KeyboardEvent): boolean {
		UtilKeyboardEvent.moveFocusVertically(e, this);
		return super.onKeyDown(e);
	}

	protected getType(): string {
		return "DList";
	}
}
