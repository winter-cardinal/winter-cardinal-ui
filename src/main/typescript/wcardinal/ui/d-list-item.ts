/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DImageBase, DImageBaseEvents, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { DListData } from "./d-list-data";
import { DListDataSelectionType } from "./d-list-data-selection";
import { DOnOptions } from "./d-on-options";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

/**
 * {@link DListItem} events.
 */
export interface DListItemEvents<VALUE, EMITTER> extends DImageBaseEvents<VALUE, EMITTER> {
	/**
	 * Triggered when a value is set.
	 *
	 *     on( "set", ( node, index, emitter ) => {} )
	 *
	 * @param emitter an emitter
	 */
	set(node: VALUE, index: number, emitter: EMITTER): void;

	/**
	 * Triggered when set to undefined.
	 *
	 *     on( "unset", ( emitter ) => {} )
	 *
	 * @param emitter an emitter
	 */
	unset(emitter: EMITTER): void;
}

/**
 * {@link DListItem} "on" options.
 */
export interface DListItemOnOptions<NODE, EMITTER>
	extends Partial<DListItemEvents<NODE, EMITTER>>,
		DOnOptions {}

/**
 * {@link DListItem} options.
 */
export interface DListItemOptions<
	VALUE = unknown,
	THEME extends DThemeListItem = DThemeListItem,
	EMITTER = any
> extends DImageBaseOptions<string, THEME> {
	on?: DListItemOnOptions<VALUE, EMITTER>;
}

export interface DThemeListItem extends DThemeImageBase<string> {}

export class DListItem<
	VALUE = unknown,
	THEME extends DThemeListItem = DThemeListItem,
	OPTIONS extends DListItemOptions<VALUE, THEME> = DListItemOptions<VALUE, THEME>
> extends DImageBase<string, THEME, OPTIONS> {
	protected _data: DListData<VALUE>;
	protected _value?: VALUE;
	protected _index?: number;

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

	get index(): number | undefined {
		return this._index;
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
		const data = this._data;
		const isValueChanged = forcibly || this._value !== value;
		if (isValueChanged) {
			this._value = value;
			this._index = index;

			const accessor = data.accessor;
			this.text = accessor.toLabel(value);
			this.title = accessor.toTitle(value) || "";
			this.image = accessor.toImage(value);
		}

		const state = this.state;
		state.lock();
		state.set(DBaseState.ACTIVE, data.selection.contains(value));
		state.remove(DBaseState.DISABLED);
		state.unlock();

		if (isValueChanged) {
			this.emit("set", value, index, this);
		}
	}

	unset(): void {
		if (this._value !== undefined) {
			this._value = undefined;
			this._index = undefined;

			this.text = undefined;
			this.title = "";
			this.image = undefined;

			const state = this.state;
			state.lock();
			state.add(DBaseState.DISABLED);
			state.remove(DBaseState.ACTIVE);
			state.unlock();

			this.emit("unset", this);
		}
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
