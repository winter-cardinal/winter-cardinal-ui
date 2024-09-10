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
import { DMenuItems } from "./d-menu-items";
import { DOnOptions } from "./d-on-options";

/**
 * {@link DSelect} events.
 */
export interface DSelectEvents<VALUE, EMITTER>
	extends DDropdownBaseEvents<VALUE, DMenuItem<VALUE> | null, EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param newValue a newly-selected value
	 * @param oldValue a previously-selected value
	 * @param item a newly-selected item
	 * @param emitter an emitter
	 */
	change(
		newValue: VALUE | null,
		oldValue: VALUE | null,
		item: DMenuItem<VALUE> | null,
		emitter: EMITTER
	): void;
}

/**
 * {@link DSelect} "on" options.
 */
export interface DSelectOnOptions<VALUE, EMITTER>
	extends Partial<DSelectEvents<VALUE, EMITTER>>,
		DOnOptions {}

/**
 * {@link DSelect} options.
 */
export interface DSelectOptions<
	VALUE = unknown,
	THEME extends DThemeSelect<VALUE> = DThemeSelect<VALUE>,
	EMITTER = any
> extends DDropdownBaseOptions<VALUE, DMenuItem<VALUE> | null, THEME, EMITTER> {
	/**
	 * A default value.
	 */
	value?: VALUE | null;

	on?: DSelectOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DSelect} theme.
 */
export interface DThemeSelect<VALUE = unknown>
	extends DThemeDropdownBase<DMenuItem<VALUE> | null> {}

/**
 * A selector class.
 */
export class DSelect<
	VALUE = unknown,
	THEME extends DThemeSelect<VALUE> = DThemeSelect<VALUE>,
	OPTIONS extends DSelectOptions<VALUE, THEME> = DSelectOptions<VALUE, THEME>
> extends DDropdownBase<VALUE, DMenuItem<VALUE> | null, THEME, OPTIONS> {
	protected _value: VALUE | null;

	constructor(options?: OPTIONS) {
		super(options);

		// Default value
		this._value = null;
		const value = options?.value;
		if (value != null) {
			this.value = value;
		}
	}

	protected onMenuSelect(newValue: VALUE, item: DMenuItem<VALUE>, menu: DMenu<VALUE>): void {
		super.onMenuSelect(newValue, item, menu);
		const oldValue = this._value;
		if (oldValue !== newValue) {
			this._value = newValue;
			this.text = item;
			this.onValueChange(newValue, oldValue, item);
		}
	}

	protected onMenuReplaced(newMenu: DMenu<VALUE>, oldMenu?: DMenu<VALUE>): void {
		super.onMenuReplaced(newMenu, oldMenu);

		// Update the value
		const value = this._value;
		const item = DMenuItems.find(newMenu, value);
		if (item != null) {
			this._value = value;
			this.text = item;
		} else {
			this._value = null;
			this.text = null;
		}
	}

	protected onValueChange(
		newValue: VALUE | null,
		oldValue: VALUE | null,
		item: DMenuItem<VALUE> | null
	): void {
		this.emit("change", newValue, oldValue, item, this);
	}

	protected override onMenuOpening(menu: DMenu<VALUE>): void {
		super.onMenuOpening(menu);

		const value = this._value;
		DMenuItems.each(menu, (item) => {
			item.state.isActive = item.value === value;
		});
	}

	/**
	 * Returns a selected value or null.
	 */
	get value(): VALUE | null {
		return this._value;
	}

	/**
	 * Sets to the specified value.
	 */
	set value(value: VALUE | null) {
		if (this._value !== value) {
			const item = DMenuItems.find(this.menu, value);
			if (item != null) {
				this._value = value;
				this.text = item;
			} else {
				this._value = null;
				this.text = null;
			}
		}
	}

	protected getType(): string {
		return "DSelect";
	}
}
