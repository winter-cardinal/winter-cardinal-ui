/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent } from "pixi.js";
import { DMenuItemText, DMenuItemTextOptions, DThemeMenuItemText } from "./d-menu-item-text";

export interface DMenuItemCheckOptions<
	VALUE = unknown,
	THEME extends DThemeMenuItemCheck = DThemeMenuItemCheck
> extends DMenuItemTextOptions<VALUE, THEME> {
	check: boolean;
}

export interface DThemeMenuItemCheck extends DThemeMenuItemText {}

export class DMenuItemCheck<
	VALUE = unknown,
	THEME extends DThemeMenuItemCheck = DThemeMenuItemCheck,
	OPTIONS extends DMenuItemCheckOptions<VALUE, THEME> = DMenuItemCheckOptions<VALUE, THEME>
> extends DMenuItemText<VALUE, THEME, OPTIONS> {
	protected init(options?: OPTIONS): void {
		super.init(options);
		if (options?.check) {
			this.state.isActive = true;
		}
	}

	protected getType(): string {
		return "DMenuItemCheck";
	}

	protected onSelect(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		this.state.isActive = !this.state.isActive;
		super.onSelect(e);
	}
}
