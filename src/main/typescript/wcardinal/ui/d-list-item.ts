/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { DListData } from "./d-list-data";
import { DListDataSelectionType } from "./d-list-data-selection";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DListItemOptions<VALUE = unknown, THEME extends DThemeListItem = DThemeListItem>
	extends DImageOptions<string, THEME> {}

export interface DThemeListItem extends DThemeImage<string> {}

export class DListItem<
	VALUE = unknown,
	THEME extends DThemeListItem = DThemeListItem,
	OPTIONS extends DListItemOptions<VALUE, THEME> = DListItemOptions<VALUE, THEME>
> extends DImage<string, THEME, OPTIONS> {
	protected _data: DListData<VALUE>;
	protected _value?: VALUE;

	constructor(data: DListData<VALUE>, options?: OPTIONS) {
		super(options);
		this._data = data;
	}

	protected init(options?: OPTIONS): void {
		super.init(options);
		this.initOnClick(options);
	}

	protected initOnClick(options?: OPTIONS): void {
		UtilPointerEvent.onClick(this, (e: interaction.InteractionEvent): void => {
			if (this.state.isActionable) {
				const value = this._value;
				if (value !== undefined) {
					this.onSelect(e, value);
				}
			}
		});
	}

	get value(): VALUE | undefined {
		return this._value;
	}

	set value(value: VALUE | undefined) {
		this._value = value;
	}

	protected onSelect(
		e: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent | undefined,
		value: VALUE
	): void {
		const data = this._data;
		const selection = data.selection;
		if (selection.type !== DListDataSelectionType.MULTIPLE) {
			selection.clearAndAdd(value);
		} else {
			const originalEvent = e && "data" in e ? e.data.originalEvent : e;
			if (originalEvent?.ctrlKey) {
				selection.toggle(value);
			} else if (originalEvent?.shiftKey) {
				const mapped = data.mapped;
				const last = selection.last;
				if (value === last) {
					selection.clearAndAdd(value);
				} else {
					let isFound = false;
					let isReverse = false;
					const newSelection: VALUE[] = [];
					mapped.each((item): boolean | void => {
						if (isFound) {
							if (isReverse) {
								newSelection.unshift(item);
								if (item === value) {
									return false;
								}
							} else {
								newSelection.push(item);
								if (item === last) {
									return false;
								}
							}
						} else {
							if (item === value) {
								isFound = true;
								isReverse = false;
								newSelection.push(item);
							} else if (item === last) {
								isFound = true;
								isReverse = true;
								newSelection.push(item);
							}
						}
					});
					selection.clearAndAddAll(newSelection);
				}
			} else {
				selection.clearAndAdd(value);
			}
		}
	}

	set(value: VALUE, index: number, forcibly?: boolean): void {
		const accessor = this._data.accessor;
		this.text = accessor.toLabel(value);
		this.title = accessor.toTitle(value) || "";
		this.image = accessor.toImage(value);
		this._value = value;
	}

	unset(): void {
		this.text = undefined;
		this.title = "";
		this.image = undefined;
		this._value = undefined;
	}

	onKeyDown(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isActivateKey(e)) {
			this.onKeyDownActivate(e);
		}
		return super.onKeyDown(e);
	}

	protected onKeyDownActivate(e: KeyboardEvent): boolean {
		if (this.state.isActionable && this.state.isFocused) {
			const value = this._value;
			if (value !== undefined) {
				this.onSelect(e, value);
			}
			return true;
		}
		return false;
	}

	protected getType(): string {
		return "DListItem";
	}
}
