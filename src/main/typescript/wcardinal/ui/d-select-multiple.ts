/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DDropdownBase,
	DDropdownBaseEvents,
	DDropdownBaseOptions,
	DThemeDropdownBase
} from "./d-dropdown-base";
import { DMenu } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
import { DMenuItemCheck } from "./d-menu-item-check";
import { DMenuItemMenu } from "./d-menu-item-menu";
import { DOnOptions } from "./d-on-options";

/**
 * {@link DSelectMultiple} events.
 */
export interface DSelectMultipleEvents<VALUE, EMITTER>
	extends DDropdownBaseEvents<VALUE, Array<DMenuItem<VALUE>>, EMITTER> {
	/**
	 * Triggered when the selection is changed.
	 *
	 * @param newValues new selected values
	 * @param oldValues old selected values
	 * @param items selected items
	 * @param emitter an emitter
	 */
	change(
		newValues: VALUE[],
		oldValues: VALUE[],
		items: Array<DMenuItem<VALUE>>,
		emitter: EMITTER
	): void;
}

/**
 * {@link DSelectMultiple} "on" options.
 */
export interface DSelectMultipleOnOptions<VALUE, EMITTER>
	extends Partial<DSelectMultipleEvents<VALUE, EMITTER>>,
		DOnOptions {}

/**
 * {@link DSelectMultiple} options.
 */
export interface DSelectMultipleOptions<
	VALUE = unknown,
	THEME extends DThemeSelectMultiple<VALUE> = DThemeSelectMultiple<VALUE>,
	EMITTER = any
> extends DDropdownBaseOptions<VALUE, Array<DMenuItem<VALUE>>, THEME, EMITTER> {
	/**
	 * A default values.
	 */
	values?: VALUE[];

	on?: DSelectMultipleOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DSelectMultiple} theme.
 */
export interface DThemeSelectMultiple<VALUE = unknown>
	extends DThemeDropdownBase<Array<DMenuItem<VALUE>>> {}

/**
 * A multi-value selector class.
 */
export class DSelectMultiple<
	VALUE = unknown,
	THEME extends DThemeSelectMultiple<VALUE> = DThemeSelectMultiple<VALUE>,
	OPTIONS extends DSelectMultipleOptions<VALUE, THEME> = DSelectMultipleOptions<VALUE, THEME>
> extends DDropdownBase<VALUE, Array<DMenuItem<VALUE>>, THEME, OPTIONS> {
	protected _values: VALUE[];

	constructor(options?: OPTIONS) {
		super(options);

		// Default values
		this._values = [];
		const values = options?.values;
		if (values) {
			this.values = values;
		}
	}

	protected onMenuSelect(value: VALUE, item: DMenuItem<VALUE>, menu: DMenu<VALUE>): void {
		super.onMenuSelect(value, item, menu);
		if (item instanceof DMenuItemCheck) {
			const oldValues = this._values;
			const newValues: VALUE[] = [];
			const newItems: Array<DMenuItem<VALUE>> = [];
			if (item.state.isActive) {
				this.updateMenuItems(menu, oldValues, value, undefined, newValues, newItems);
			} else {
				this.updateMenuItems(menu, oldValues, undefined, value, newValues, newItems);
			}
			this._values = newValues;
			this.text = newItems;
			this.onValueChange(newValues, oldValues, newItems);
		}
	}

	protected onMenuReplaced(newMenu: DMenu<VALUE>, oldMenu?: DMenu<VALUE>): void {
		super.onMenuReplaced(newMenu, oldMenu);

		// Update the values
		const values = this._values;
		const newValues: VALUE[] = [];
		const newItems: Array<DMenuItem<VALUE>> = [];
		this.updateMenuItems(newMenu, values, undefined, undefined, newValues, newItems);
		this._values = newValues;
		this.text = newItems;
	}

	protected onValueChange(
		newValues: VALUE[],
		oldValues: VALUE[],
		items: Array<DMenuItem<VALUE>>
	): void {
		this.emit("change", newValues, oldValues, items, this);
	}

	protected override onMenuOpening(menu: DMenu<VALUE>): void {
		super.onMenuOpening(menu);
		this.updateMenuItems(this.menu, this._values);
	}

	/**
	 * Returns selected values.
	 */
	get values(): VALUE[] {
		return this.getValues();
	}

	/**
	 * Sets to the specified values.
	 */
	set values(values: VALUE[]) {
		this.setValues(values);
	}

	getValues(): VALUE[] {
		return this._values;
	}

	setValues(values: VALUE[], forcibly?: boolean): void {
		const oldValues = this._values;
		if (forcibly || !this.isSameValues(values, oldValues)) {
			const newValues: VALUE[] = [];
			const newItems: Array<DMenuItem<VALUE>> = [];
			this.updateMenuItems(this.menu, values, undefined, undefined, newValues, newItems);
			this._values = newValues;
			this.text.setValue(newItems, forcibly);
		}
	}

	protected isSameValues(a: VALUE[], b: VALUE[]): boolean {
		if (a.length === b.length) {
			for (let i = 0, imax = a.length; i < imax; ++i) {
				if (b.indexOf(a[i]) < 0) {
					return false;
				}
			}
		}
		return false;
	}

	protected updateMenuItems(
		menu: DMenu<VALUE>,
		oldValues: VALUE[],
		addedValue?: VALUE,
		removedValue?: VALUE,
		newValues?: VALUE[],
		newItems?: Array<DMenuItem<VALUE>>
	): void {
		const children = menu.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			const child = children[i];
			if (child instanceof DMenuItemMenu) {
				this.updateMenuItems(
					child.menu,
					oldValues,
					addedValue,
					removedValue,
					newValues,
					newItems
				);
			} else if (child instanceof DMenuItemCheck) {
				const childValue = child.value;
				if (removedValue !== undefined && removedValue === childValue) {
					child.state.isActive = false;
				} else if (
					(addedValue !== undefined && child.value === addedValue) ||
					0 <= oldValues.indexOf(child.value)
				) {
					if (newValues) {
						newValues.push(child.value);
					}
					if (newItems) {
						newItems.push(child);
					}
					child.state.isActive = true;
				} else {
					child.state.isActive = false;
				}
			}
		}
	}

	protected getType(): string {
		return "DSelectMultiple";
	}
}
