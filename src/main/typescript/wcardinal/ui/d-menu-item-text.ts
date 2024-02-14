/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseStateSet } from "./d-base-state-set";
import { DDynamicText } from "./d-dynamic-text";
import { DMenuItem, DMenuItemOptions, DThemeMenuItem } from "./d-menu-item";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { DDynamicTextStyle } from "./d-dynamic-text-style";

export interface DMenuItemTextOptions<
	VALUE = unknown,
	THEME extends DThemeMenuItemText = DThemeMenuItemText
> extends DMenuItemOptions<VALUE, THEME> {}

export interface DThemeMenuItemText extends DThemeMenuItem {
	getShortcutTextMargin(): number;
	getShortcutColor(state: DBaseStateSet): number;
	getShortcutAlpha(state: DBaseStateSet): number;
}

export class DMenuItemText<
	VALUE = unknown,
	THEME extends DThemeMenuItemText = DThemeMenuItemText,
	OPTIONS extends DMenuItemTextOptions<VALUE, THEME> = DMenuItemTextOptions<VALUE, THEME>
> extends DMenuItem<VALUE, THEME, OPTIONS> {
	protected _shortcutText?: DDynamicText | null;
	protected _shortcutMargin?: number;

	protected init(options?: OPTIONS): void {
		super.init(options);
		this.initOnOver(options);
		this.initShortcuts(options);
	}

	protected initOnOver(options?: OPTIONS): void {
		this.on(UtilPointerEvent.over, (): void => {
			const context = this.getContext();
			if (context != null) {
				const parent = this.parent;
				if (parent instanceof DBase) {
					context.trim(this.getCloseable());
				}
			}
		});
	}

	protected initShortcuts(options?: OPTIONS): void {
		const shortcuts = this._shortcuts;
		if (shortcuts != null && 0 < shortcuts.length) {
			const shortcut = shortcuts[0];
			const shortcutText = this.newShortcutText();
			this._shortcutText = shortcutText;
			this.snippet.add(shortcutText, true);
			shortcutText.text = UtilKeyboardEvent.toString(shortcut);
		} else {
			this._shortcutText = null;
		}

		this._shortcutMargin = this.theme.getShortcutTextMargin();
	}

	protected newShortcutText(): DDynamicText {
		return new DDynamicText(
			new DDynamicTextStyle(this, this.theme, this._options?.text?.style)
		);
	}

	protected updateShortcutText(): void {
		const text = this._shortcutText;
		const margin = this._shortcutMargin;
		if (text != null && margin != null) {
			const auto = this._auto;

			let textX = 0;
			if (auto.width.isOn) {
				textX = margin;
			} else {
				textX = this.width - text.width - margin;
			}

			let textY = 0;
			const padding = this._padding;
			const ptop = padding.getTop();
			if (auto.height.isOn) {
				textY = ptop;
			} else {
				textY = ptop + (this.height - ptop - padding.getBottom() - text.height) * 0.5;
			}

			text.position.set(textX, textY);
		}
	}

	protected updateShortcutColor(): void {
		const shortcutText = this._shortcutText;
		if (shortcutText != null) {
			const theme = this.theme;
			const state = this.state;
			shortcutText.style.fill = theme.getShortcutColor(state);
			shortcutText.alpha = theme.getShortcutAlpha(state);
		}
	}

	protected override onReflow(): void {
		super.onReflow();
		this.updateShortcutColor();
		this.updateShortcutText();
	}

	protected getType(): string {
		return "DMenuItemText";
	}

	protected onSelect(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		super.onSelect(e);
		const closeable = this.getCloseable();
		if (closeable != null) {
			closeable.emit("select", this.value, this, closeable);
		}
	}

	protected onShortcut(e: KeyboardEvent): void {
		super.onShortcut(e);
		this.activate(e);
	}
}
