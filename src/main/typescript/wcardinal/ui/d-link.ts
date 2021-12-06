/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, interaction, Texture } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { DBase } from "./d-base";
import { DLinkMenu } from "./d-link-menu";
import { DLinkMenuItemId } from "./d-link-menu-item-id";
import { DLinkTarget } from "./d-link-target";
import { DMenu, DMenuOptions } from "./d-menu";
import { isFunction } from "./util/is-function";
import { isString } from "./util/is-string";
import { toEnum } from "./util/to-enum";
import { UtilClipboard } from "./util/util-clipboard";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { DThemes } from "./theme/d-themes";
import { DBaseStateSet } from "./d-base-state-set";

export type DLinkUrlValue = string | null | undefined;

export type DLinkUrlMaker = () => DLinkUrlValue | Promise<DLinkUrlValue>;

export type DLinkTargetValue = DLinkTarget | null | undefined | keyof typeof DLinkTarget;

export type DLinkChecker = () => boolean | Promise<boolean>;

export interface DLinkOptions {
	url?: DLinkUrlValue | DLinkUrlMaker;
	target?: DLinkTargetValue;
	checker?: DLinkChecker;
	menu?: DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId>;
}

export interface DThemeLink {
	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null;
	getMenuOptions(): DMenuOptions<DLinkMenuItemId>;
}

export class DLink {
	protected static ANCHOR_ELEMENT?: HTMLAnchorElement;
	protected static MENU?: DLinkMenu;

	protected _options?: DLinkOptions;

	protected _url: DLinkUrlValue | DLinkUrlMaker;
	protected _target: DLinkTarget;
	protected _checker?: DLinkChecker;
	protected _menu?: DLinkMenu;
	protected _isEnabled: boolean;

	constructor(options?: DLinkOptions) {
		this._options = options;

		this._url = options?.url;
		this._target = this.toNormalizedTarget(options?.target);
		this._checker = options?.checker;
		this._isEnabled = true;
	}

	get enable(): boolean {
		return this._isEnabled;
	}

	set enable(enable: boolean) {
		this._isEnabled = enable;
	}

	get url(): DLinkUrlValue | DLinkUrlMaker {
		return this._url;
	}

	set url(url: DLinkUrlValue | DLinkUrlMaker) {
		this._url = url;
	}

	get target(): DLinkTarget {
		return this._target;
	}

	set target(target: DLinkTargetValue) {
		this._target = this.toNormalizedTarget(target);
	}

	get checker(): DLinkChecker | undefined {
		return this._checker;
	}

	set checker(checker: DLinkChecker | undefined) {
		this._checker = checker;
	}

	get menu(): DLinkMenu {
		let result = this._menu;
		if (result == null) {
			result = this.newMenu();
			this._menu = result;
		}
		return result;
	}

	protected newMenu(): DLinkMenu {
		const options = this._options;
		if (options) {
			const menu = options.menu;
			if (menu) {
				return new DLinkMenu(this, menu);
			}
		}
		let result = DLink.MENU;
		if (result == null) {
			result = new DLinkMenu(
				this,
				DThemes.getInstance().get<DThemeLink>("DLink").getMenuOptions()
			);
			DLink.MENU = result;
		}
		return result;
	}

	protected toStringifiedUrl(
		target: DLinkUrlValue | DLinkUrlMaker,
		onResolved: (url: string) => void
	): void {
		const url = isFunction(target) ? target() : target;
		if (url != null) {
			if (isString(url)) {
				onResolved(url);
			} else {
				url.then((resolved: DLinkUrlValue): void => {
					if (resolved != null) {
						onResolved(resolved);
					}
				});
			}
		}
	}

	protected toNormalizedUrl(url: string): string {
		const a = DLink.ANCHOR_ELEMENT || document.createElement("a");
		DLink.ANCHOR_ELEMENT = a;
		a.href = url;
		return a.href;
	}

	protected toNormalizedTarget(target: DLinkTargetValue): DLinkTarget {
		return toEnum(target ?? DLinkTarget.AUTO, DLinkTarget);
	}

	/**
	 * Copys the URL to the clipboard.
	 */
	copy(): void {
		this.toStringifiedUrl(this._url, (url: string): void => {
			UtilClipboard.copy(this.toNormalizedUrl(url));
		});
	}

	/**
	 * Checks and opens the URL.
	 *
	 * @param e An event object which triggered this method call.
	 */
	open(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void;

	/**
	 * Checks and opens the URL.
	 *
	 * @param inNewWindow True to open in a new window
	 */
	open(inNewWindow: boolean): void;
	open(
		x: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent | undefined | boolean
	): void {
		this.toStringifiedUrl(this._url, (url): void => {
			const inNewWindow = x === true || x === false ? x : this.inNewWindow(x);
			this.check(url, inNewWindow, (): void => {
				this.exec(url, inNewWindow);
			});
		});
	}

	check(url: string, inNewWindow: boolean, onResolved: () => void): void {
		const checker = this._checker;
		if (checker) {
			const checked = checker();
			if (checked === true) {
				onResolved();
			} else if (checked === false) {
				// DO NOTHING
			} else {
				checked.then((resolved: boolean): void => {
					if (resolved) {
						onResolved();
					}
				});
			}
		} else {
			onResolved();
		}
	}

	/**
	 * Opens the given URL.
	 *
	 * @param url An URL to be opened
	 * @param inNewWindow True to open in a new window.
	 */
	exec(url: string, inNewWindow: boolean): void {
		if (inNewWindow) {
			const a = document.createElement("a");
			a.href = url;
			a.target = "_blank";
			a.style.display = "none";
			a.rel = "noopener noreferrer";
			document.body.appendChild(a);
			a.click();
			setTimeout((): void => {
				document.body.removeChild(a);
			}, 100);
		} else {
			window.location.href = url;
		}
	}

	/**
	 * Returns true if the URL need to be opened in a new window.
	 *
	 * @param e An event object.
	 */
	inNewWindow(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): boolean {
		switch (this._target) {
			case DLinkTarget.NEW_WINDOW:
				return true;
			case DLinkTarget.THIS_WINDOW:
				return false;
			case DLinkTarget.AUTO:
				if (e != null) {
					const oe = e instanceof InteractionEvent ? e.data.originalEvent : e;
					return (
						oe.ctrlKey ||
						oe.shiftKey ||
						oe.altKey ||
						oe.metaKey ||
						("button" in oe && oe.button !== 0)
					);
				}
				return false;
		}
	}

	add(base: DBase, onSelect: (e: InteractionEvent) => void): void {
		UtilPointerEvent.onClick(base, (e: InteractionEvent, isSimulated: boolean): void => {
			if (!this.onClick(base, isSimulated)) {
				onSelect(e);
			}
		});
	}

	onClick(base: DBase, isSimulated: boolean): boolean {
		if (this._target === DLinkTarget.AUTO && isSimulated) {
			const menu = this.menu;
			if (menu.enable) {
				if (this._isEnabled && base.state.isActionable) {
					menu.open(base);
				}
				return true;
			}
		}
		if (this._isEnabled && base.state.isActionable) {
			return false;
		}
		return true;
	}
}
