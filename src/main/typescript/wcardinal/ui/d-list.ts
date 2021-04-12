/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DListSelection, DListSelectionOptions } from "./d-list-selection";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";

export interface DListOptions<
	VALUE = unknown,
	THEME extends DThemeList = DThemeList,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions
> extends DPaneOptions<THEME, CONTENT_OPTIONS> {
	selection?: DListSelectionOptions<VALUE> | DListSelection<VALUE>;
}

export interface DThemeList extends DThemePane {}

export class DList<
	VALUE = unknown,
	THEME extends DThemeList = DThemeList,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DListOptions<VALUE, THEME, CONTENT_OPTIONS> = DListOptions<
		VALUE,
		THEME,
		CONTENT_OPTIONS
	>
> extends DPane<THEME, CONTENT_OPTIONS, OPTIONS> {
	protected _selection?: DListSelection<VALUE>;

	protected onChildrenDirty(): void {
		const selection = this._selection;
		if (selection != null) {
			selection.toDirty();
		}
		super.onChildrenDirty();
	}

	get selection(): DListSelection<VALUE> {
		let result = this._selection;
		if (result == null) {
			const options = this._options?.selection;
			result = options instanceof DListSelection ? options : this.newSelection(options);
			this._selection = result;
		}
		return result;
	}

	protected newSelection(options?: DListSelectionOptions<VALUE>): DListSelection<VALUE> {
		return new DListSelection<VALUE>(this._content, options);
	}

	protected onRefit(): void {
		super.onRefit();
		this.updateChildPosition();
		this.updateChildVisibility();
	}

	protected updateChildPosition(): void {
		const content = this._content;
		const items = content.children;
		let y = 0;
		for (let i = 0, imax = items.length; i < imax; ++i) {
			const item = items[i];
			if (item instanceof DBase) {
				item.y = y;
				y += item.height;
			}
		}
		const scrollLimit = Math.min(0, -y + this.height);
		if (content.y < scrollLimit) {
			content.y = scrollLimit;
		}
		content.height = y;
	}

	protected updateChildVisibility(): void {
		const content = this._content;
		const items = content.children;
		const from = -content.y;
		const to = from + this.height;
		for (let i = 0, imax = items.length; i < imax; ++i) {
			const item = items[i];
			if (item instanceof DBase) {
				const itemY = item.y;
				item.visible = from <= itemY + item.height && itemY <= to;
			}
		}
	}

	protected onContentChange(): void {
		super.onContentChange();
		this.updateChildVisibility();
	}

	onKeyDown(e: KeyboardEvent): boolean {
		UtilKeyboardEvent.moveFocusVertically(e, this);
		return super.onKeyDown(e);
	}

	protected getType(): string {
		return "DList";
	}
}
