/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import {
	DButtonBase,
	DButtonBaseEvents,
	DButtonBaseOptions,
	DThemeButtonBase
} from "./d-button-base";
import { DMenu, DMenuOptions, DThemeMenu } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
import { DOnOptions } from "./d-on-options";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";

/**
 * {@link DDropdownBase} events.
 */
export interface DDropdownBaseEvents<VALUE, TEXT_VALUE, EMITTER>
	extends DButtonBaseEvents<VALUE, EMITTER> {
	/**
	 * Triggered when a menu item is selected.
	 *
	 * @param value a value of a selected menu item
	 * @param item a selected menu item
	 * @param emitter an emitter
	 */
	select(value: VALUE, item: DMenuItem<VALUE>, emitter: EMITTER): void;

	/**
	 * Triggered when a menu is opened.
	 */
	open(menu: DMenu<VALUE>, emitter: EMITTER): void;
}

/**
 * {@link DDropdownBase} "on" options.
 */
export interface DDropdownBaseOnOptions<VALUE, TEXT_VALUE, EMITTER>
	extends Partial<DDropdownBaseEvents<VALUE, TEXT_VALUE, EMITTER>>,
		DOnOptions {}

/**
 * {@link DDropdownBase} options.
 */
export interface DDropdownBaseOptions<
	VALUE = unknown,
	TEXT_VALUE = string,
	THEME extends DThemeDropdownBase<TEXT_VALUE> = DThemeDropdownBase<TEXT_VALUE>,
	EMITTER = any
> extends DButtonBaseOptions<TEXT_VALUE, THEME, EMITTER> {
	/**
	 * Menu options.
	 */
	menu?: DMenuOptions<VALUE> | DMenu<VALUE>;

	on?: DDropdownBaseOnOptions<VALUE, TEXT_VALUE, EMITTER>;
}

/**
 * {@link DDropdownBase} theme.
 */
export interface DThemeDropdownBase<TEXT_VALUE = unknown> extends DThemeButtonBase<TEXT_VALUE> {}

/**
 * A dropdown base class.
 */
export class DDropdownBase<
	VALUE = unknown,
	TEXT_VALUE = string,
	THEME extends DThemeDropdownBase<TEXT_VALUE> = DThemeDropdownBase<TEXT_VALUE>,
	OPTIONS extends DDropdownBaseOptions<VALUE, TEXT_VALUE, THEME> = DDropdownBaseOptions<
		VALUE,
		TEXT_VALUE,
		THEME
	>
> extends DButtonBase<TEXT_VALUE, THEME, OPTIONS> {
	protected _menu?: DMenu<VALUE>;
	protected _onMenuSelectBound?: (
		selected: VALUE,
		item: DMenuItem<VALUE>,
		menu: DMenu<VALUE>
	) => void;
	protected _onMenuCloseBound?: () => void;

	protected onMenuSelect(value: VALUE, item: DMenuItem<VALUE>, menu: DMenu<VALUE>): void {
		this.emit("select", value, item, this);
	}

	protected onMenuClose(menu?: DMenu<VALUE>): void {
		if (menu) {
			const onMenuSelectBound = this._onMenuSelectBound;
			if (onMenuSelectBound) {
				menu.off("select", onMenuSelectBound);
			}
			const onMenuCloseBound = this._onMenuCloseBound;
			if (onMenuCloseBound) {
				menu.off("close", onMenuCloseBound);
			}
		}
	}

	protected toMenu(theme: THEME, options?: OPTIONS): DMenu<VALUE> {
		const menu = options?.menu;
		if (menu instanceof DMenu) {
			return menu;
		}
		return new DMenu<VALUE>(this.toMenuOptions(theme, menu));
	}

	protected toMenuOptions(
		theme: THEME,
		options?: DMenuOptions<VALUE>
	): DMenuOptions<VALUE, DThemeMenu> {
		if (options) {
			if (options.fit == null) {
				options.fit = true;
			}
			return options;
		}
		return {
			fit: true
		};
	}

	get menu(): DMenu<VALUE> {
		let result = this._menu;
		if (result == null) {
			result = this.toMenu(this.theme, this._options);
			this._menu = result;
		}
		return result;
	}

	set menu(newMenu: DMenu<VALUE>) {
		const oldMenu = this._menu;
		if (oldMenu != newMenu) {
			this._menu = newMenu;
			this.onMenuReplaced(newMenu, oldMenu);
		}
	}

	protected onMenuReplaced(newMenu: DMenu<VALUE>, oldMenu?: DMenu<VALUE>): void {
		if (oldMenu != null) {
			this.onMenuClose(oldMenu);
		}
	}

	protected getType(): string {
		return "DDropdownBase";
	}

	protected onKeyDown(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isArrowDownKey(e)) {
			this.onKeyDownArrowDown(e);
		}
		return super.onKeyDown(e);
	}

	protected onKeyDownArrowDown(e: KeyboardEvent): boolean {
		if (this.state.isActionable && this.state.isFocused) {
			this.activate(e);
			return true;
		}
		return false;
	}

	protected onActivate(
		e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): void {
		super.onActivate(e);
		this.open();
	}

	open(): void {
		const menu = this.menu;
		if (menu.isHidden()) {
			// In the case that the menu is created elsewhere,
			// the menu might be opened by other UI elements
			// and the `select` event might be triggered. In
			// that case, we are not supposed to catct that
			// `select` event. This is why the `select` event
			// handler is registered here. Instead of the
			// initialization time.
			let onMenuSelectBound = this._onMenuSelectBound;
			if (onMenuSelectBound == null) {
				onMenuSelectBound = (
					value: VALUE,
					item: DMenuItem<VALUE>,
					m: DMenu<VALUE>
				): void => {
					this.onMenuSelect(value, item, m);
				};
				this._onMenuSelectBound = onMenuSelectBound;
			}
			let onMenuCloseBound = this._onMenuCloseBound;
			if (onMenuCloseBound == null) {
				onMenuCloseBound = (): void => {
					this.onMenuClose(this._menu);
				};
			}
			menu.on("select", onMenuSelectBound);
			menu.on("close", onMenuCloseBound);
			menu.open(this);
			this.emit("open", menu, this);
		}
	}

	close(): void {
		this.menu.close();
	}
}
