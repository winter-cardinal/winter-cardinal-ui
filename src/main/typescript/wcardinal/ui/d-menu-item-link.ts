/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DLink, DLinkChecker, DLinkOptions, DLinkUrlMaker } from "./d-link";
import { DLinkMenuItemId } from "./d-link-menu-item-id";
import { DLinkTarget } from "./d-link-target";
import { DLinks } from "./d-links";
import { DMenu, DMenuOptions } from "./d-menu";
import { DMenuItemText, DMenuItemTextOptions, DThemeMenuItemText } from "./d-menu-item-text";
import { isString } from "./util/is-string";

export type DMenuItemLinkUrlMaker = (item: DMenuItemLink) => string | null | Promise<string | null>;
export type DMenuItemLinkChecker = (item: DMenuItemLink) => boolean | Promise<boolean>;

export interface DMenuItemLinkOptions<
	VALUE = unknown,
	THEME extends DThemeMenuItemLink = DThemeMenuItemLink
> extends DMenuItemTextOptions<VALUE, THEME> {
	url?: string | DMenuItemLinkUrlMaker;
	target?: DLinkTarget | keyof typeof DLinkTarget;
	checker?: DMenuItemLinkChecker;
	menu?: DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId>;
}

export interface DThemeMenuItemLink extends DThemeMenuItemText {}

export class DMenuItemLink<
	VALUE = unknown,
	THEME extends DThemeMenuItemLink = DThemeMenuItemLink,
	OPTIONS extends DMenuItemLinkOptions<VALUE, THEME> = DMenuItemLinkOptions<VALUE, THEME>
> extends DMenuItemText<VALUE, THEME, OPTIONS> {
	protected _link?: DLink;

	protected toLinkOptions(options?: OPTIONS): DLinkOptions | undefined {
		if (options) {
			return {
				url: this.toUrl(options.url),
				target: options.target,
				checker: this.toChecker(options.checker),
				menu: options.menu
			};
		}
		return undefined;
	}

	protected toUrl(url?: string | DMenuItemLinkUrlMaker): string | DLinkUrlMaker | undefined {
		if (isString(url) || url == null) {
			return url;
		} else {
			return () => {
				return url(this);
			};
		}
	}

	protected toChecker(checker?: DMenuItemLinkChecker): DLinkChecker | undefined {
		if (checker != null) {
			return () => {
				return checker(this);
			};
		}
		return undefined;
	}

	protected init(options?: OPTIONS): void {
		super.init(DLinks.toStateOptions(options?.target, options));
	}

	get link(): DLink {
		let result = this._link;
		if (result == null) {
			result = new DLink(this.toLinkOptions(this._options));
			this._link = result;
		}
		return result;
	}

	protected onClick(e: interaction.InteractionEvent): void {
		if (!this.link.onClick(this, e)) {
			super.onClick(e);
		}
	}

	protected getType(): string {
		return "DMenuItemLink";
	}

	protected onSelect(
		e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): void {
		super.onSelect(e);
		this.link.open(e);
	}

	open(inNewWindow: boolean): void {
		this.link.open(inNewWindow);
	}

	protected onShortcut(e: KeyboardEvent): void {
		super.onShortcut(e);
		this.activate(e);
	}
}
