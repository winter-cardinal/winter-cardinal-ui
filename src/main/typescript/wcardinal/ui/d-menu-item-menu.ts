/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, InteractionEvent } from "pixi.js";
import { DMenu, DMenuOptions } from "./d-menu";
import { DMenuItem, DMenuItemOptions, DThemeMenuItem } from "./d-menu-item";
import { DMenus } from "./d-menus";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DMenuItemMenuOptions<
	VALUE = unknown,
	THEME extends DThemeMenuItemMenu = DThemeMenuItemMenu
> extends DMenuItemOptions<VALUE, THEME> {
	menu: DMenuOptions<VALUE> | DMenu<VALUE>;
}

export interface DThemeMenuItemMenu extends DThemeMenuItem {}

export class DMenuItemMenu<
	VALUE = unknown,
	THEME extends DThemeMenuItemMenu = DThemeMenuItemMenu,
	OPTIONS extends DMenuItemMenuOptions<VALUE, THEME> = DMenuItemMenuOptions<VALUE, THEME>
> extends DMenuItem<VALUE, THEME, OPTIONS> {
	protected _menu?: DMenu<VALUE>;

	protected init(options: OPTIONS): void {
		super.init(options);
		this.initHover(options);
	}

	protected initHover(options: OPTIONS): void {
		this.on(UtilPointerEvent.over, (): void => {
			if (this.state.isActionable) {
				this.open();
			}
		});
	}

	protected toMenu(options?: OPTIONS): DMenu<VALUE> {
		const menu = options?.menu;
		if (menu instanceof DisplayObject) {
			return menu;
		}
		return this.newMenu(menu);
	}

	protected newMenu(options?: DMenuOptions<VALUE>): DMenu<VALUE> {
		return DMenus.newMenu(options);
	}

	get menu(): DMenu<VALUE> {
		let result = this._menu;
		if (result == null) {
			result = this.toMenu(this._options);
			result.on(
				"select",
				(value: VALUE, item: DMenuItem<VALUE>, menu: DMenu<VALUE>): void => {
					this.onMenuSelect(value, item, menu);
				}
			);
			this._menu = result;
		}
		return result;
	}

	protected getType(): string {
		return "DMenuItemMenu";
	}

	open(): void {
		const menu = this.menu;
		if (menu.isHidden()) {
			this.onOpen(menu);
		}
	}

	protected onOpen(menu: DMenu<VALUE>): void {
		const context = this.getContext();
		if (context != null) {
			menu.open(this, this.getCloseable(), context);
		}
	}

	close(): void {
		this.menu.close();
	}

	toggle(): void {
		const menu = this.menu;
		if (menu.isHidden()) {
			this.onOpen(menu);
		} else {
			menu.close();
		}
	}

	protected onSelect(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		this.open();
		super.onSelect(e);
	}

	protected onMenuSelect(value: VALUE, item: DMenuItem<VALUE>, menu: DMenu<VALUE>): void {
		const closeable = this.getCloseable();
		if (closeable != null) {
			closeable.emit("select", value, item, closeable);
		}
	}

	protected onKeyDown(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isArrowRightKey(e)) {
			this.onKeyDownArrowRight(e);
		}
		return super.onKeyDown(e);
	}

	protected onKeyDownArrowRight(e: KeyboardEvent): boolean {
		if (this.state.isActionable && this.state.isFocused) {
			this.onSelect(e);
			return true;
		}
		return false;
	}
}
