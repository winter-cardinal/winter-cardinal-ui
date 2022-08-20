/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DImageBase, DImageBaseEvents, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { DLink, DLinkChecker, DLinkOptions, DLinkUrlMaker, DLinkUrlValue } from "./d-link";
import { DListData } from "./d-list-data";
import { DListDataSelectionType } from "./d-list-data-selection";
import {
	DListItemAccessorLink,
	DListItemLinkChecker,
	DListItemToLinkUrl
} from "./d-list-item-accessor";
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
	protected _link?: DLink | null;

	constructor(data: DListData<VALUE>, options?: OPTIONS) {
		super(options);
		this._data = data;
		this.on(UtilPointerEvent.tap, (e: interaction.InteractionEvent): void => {
			this.onClick(e);
		});
	}

	protected get link(): DLink | null {
		let result = this._link;
		if (result === undefined) {
			result = this.newLink();
			this._link = result;
		}
		return result;
	}

	protected newLink(): DLink | null {
		const link = this._data.accessor.link;
		if (link) {
			return new DLink(this.toLinkOptions(link));
		}
		return null;
	}

	protected onClick(e: interaction.InteractionEvent): void {
		if (this.link?.onClick(this, e) !== true) {
			if (this.state.isActionable) {
				this.activate(e);
			}
		}
	}

	activate(e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		const value = this._value;
		if (value !== undefined) {
			this.onSelect(e, value);
		}
	}

	protected toLinkOptions(accessor: DListItemAccessorLink<VALUE>): DLinkOptions {
		return {
			url: this.toLinkUrl(accessor.toUrl),
			target: accessor.target,
			checker: this.toLinkChecker(accessor.checker)
		};
	}

	protected toLinkUrl(toUrl: DListItemToLinkUrl<VALUE>): DLinkUrlMaker {
		return (): DLinkUrlValue | Promise<DLinkUrlValue> => {
			const value = this._value;
			if (value !== undefined) {
				return toUrl(value);
			}
		};
	}

	protected toLinkChecker(checker?: DListItemLinkChecker<VALUE>): DLinkChecker | undefined {
		if (checker) {
			return (): boolean | Promise<boolean> => {
				const value = this._value;
				if (value != null) {
					return checker(value);
				}
				return false;
			};
		}
		return undefined;
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

		this._link?.open(e);
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

	protected onKeyDown(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isActivateKey(e)) {
			this.onKeyDownActivate(e);
		}
		return super.onKeyDown(e);
	}

	protected onKeyDownActivate(e: KeyboardEvent): boolean {
		if (this.state.isActionable && this.state.isFocused) {
			this.activate(e);
			return true;
		}
		return false;
	}

	protected getType(): string {
		return "DListItem";
	}
}
