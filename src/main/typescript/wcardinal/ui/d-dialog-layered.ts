/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DControllerFocus, DFocusable } from "./d-controller-focus";
import { DDialog, DDialogEvents, DDialogOptions, DThemeDialog } from "./d-dialog";
import { DDialogLayeredContent, DDialogLayeredContentOptions } from "./d-dialog-layered-content";
import { DDialogLayeredFooter, DDialogLayeredFooterOptions } from "./d-dialog-layered-footer";
import { DDialogLayeredHeader, DDialogLayeredHeaderOptions } from "./d-dialog-layered-header";
import { DLayoutVertical, DLayoutVerticalOptions } from "./d-layout-vertical";
import { DOnOptions } from "./d-on-options";

/**
 * {@link DDialogLayered} events.
 */
export interface DDialogLayeredEvents<VALUE, EMITTER> extends DDialogEvents<EMITTER> {
	/**
	 * Triggered when a dialog is successfully finished.
	 *
	 * @param value a value
	 * @param emitter an emitter
	 */
	ok(value: VALUE, emitter: EMITTER): void;

	/**
	 * Triggered when a dialog is canceled.
	 *
	 * @param reason a reason why canceled
	 * @param emitter an emitter
	 */
	cancel(reason: any, emitter: EMITTER): void;
}

/**
 * {@link DDialogLayered} "on" options.
 */
export interface DDialogLayeredOnOptions<VALUE, EMITTER>
	extends Partial<DDialogLayeredEvents<VALUE, EMITTER>>,
		DOnOptions {}

/**
 * {@link DDialogLayered} options.
 */
export interface DDialogLayeredOptions<
	VALUE = unknown,
	THEME extends DThemeDialogLayered = DThemeDialogLayered,
	EMITTER = any
> extends DDialogOptions<THEME> {
	/**
	 * A layout options.
	 */
	layout?: DLayoutVerticalOptions;

	/**
	 * A header options.
	 */
	header?: DDialogLayeredHeaderOptions | null;

	/**
	 * Content options.
	 */
	content?: DDialogLayeredContentOptions;

	/**
	 * A footer options.
	 */
	footer?: DDialogLayeredFooterOptions | null;

	/**
	 * Mappings of event names and handlers.
	 */
	on?: DDialogLayeredOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DDialogLayered} theme.
 */
export interface DThemeDialogLayered extends DThemeDialog {
	getLayout(): DLayoutVerticalOptions | undefined;
	getHeader(): DDialogLayeredHeaderOptions | undefined | null;
	getContent(): DDialogLayeredContentOptions | undefined;
	getFooter(): DDialogLayeredFooterOptions | undefined | null;
}

/**
 * A dialog with a header, a content and a footer.
 */
export abstract class DDialogLayered<
	VALUE = void,
	THEME extends DThemeDialogLayered = DThemeDialogLayered,
	OPTIONS extends DDialogLayeredOptions<VALUE, THEME> = DDialogLayeredOptions<VALUE, THEME>
> extends DDialog<VALUE, THEME, OPTIONS> {
	protected _layout?: DLayoutVertical;

	protected _header?: DDialogLayeredHeader | null;
	protected _content?: DDialogLayeredContent;
	protected _footer?: DDialogLayeredFooter | null;

	protected init(options?: OPTIONS): void {
		super.init(options);
		this.addChild(this.layout);
	}

	get layout(): DLayoutVertical {
		let result = this._layout;
		if (result == null) {
			result = this.newLayout();
			this._layout = result;
		}
		return result;
	}

	protected newLayout(): DLayoutVertical {
		return new DLayoutVertical(this.toLayoutOptions(this.theme, this._options));
	}

	protected toLayoutOptions(theme: THEME, options?: OPTIONS): DLayoutVerticalOptions {
		const result =
			options?.layout ?? theme.getLayout() ?? this.newLayoutOptions(theme, options);
		if (result.children === undefined) {
			result.children = this.newLayoutChildren(theme, options);
		}
		return result;
	}

	protected newLayoutOptions(theme: THEME, options?: OPTIONS): DLayoutVerticalOptions {
		return {
			width: "padding",
			height: "auto",
			margin: 0
		};
	}

	protected newLayoutChildren(theme: THEME, options?: OPTIONS): Array<DisplayObject | null> {
		return [this.header, this.content, this.footer];
	}

	get header(): DDialogLayeredHeader | null {
		let result = this._header;
		if (result === undefined) {
			result = this.newHeader();
			this._header = result;
		}
		return result;
	}

	protected newHeader(): DDialogLayeredHeader | null {
		const options = this.toHeaderOptions(this.theme, this._options);
		if (options !== null) {
			return new DDialogLayeredHeader(this, options);
		}
		return null;
	}

	protected toHeaderOptions(
		theme: THEME,
		options?: OPTIONS
	): DDialogLayeredHeaderOptions | undefined | null {
		if (options) {
			const result = options.header;
			if (result !== undefined) {
				return result;
			}
		}
		return theme.getHeader();
	}

	get content(): DDialogLayeredContent {
		let result = this._content;
		if (result == null) {
			result = this.newContent();
			this._content = result;
		}
		return result;
	}

	protected newContent(): DDialogLayeredContent {
		return new DDialogLayeredContent(this.toContentOptions(this.theme, this._options));
	}

	protected toContentOptions(theme: THEME, options?: OPTIONS): DDialogLayeredContentOptions {
		const result = options?.content ?? theme.getContent() ?? {};
		if (result.children === undefined) {
			result.children = this.newContentChildren(theme, options);
		}
		return result;
	}

	protected newContentChildren(theme: THEME, options?: OPTIONS): Array<DisplayObject | null> {
		return [];
	}

	get footer(): DDialogLayeredFooter | null {
		let result = this._footer;
		if (result === undefined) {
			result = this.newFooter();
			this._footer = result;
		}
		return result;
	}

	protected newFooter(): DDialogLayeredFooter | null {
		const options = this.toFooterOptions(this.theme, this._options);
		if (options !== null) {
			return new DDialogLayeredFooter(this, options);
		}
		return null;
	}

	protected toFooterOptions(
		theme: THEME,
		options?: OPTIONS
	): DDialogLayeredFooterOptions | undefined | null {
		if (options) {
			const result = options.footer;
			if (result !== undefined) {
				return result;
			}
		}
		return theme.getFooter();
	}

	protected findFirstFocusable(focusController: DControllerFocus): DFocusable | null {
		return focusController.find(this.content, false, true, true);
	}

	ok(): void {
		this.onOk(this.getResolvedValue());
	}

	protected onOk(value: VALUE | PromiseLike<VALUE>): void {
		this.doResolve(value);
		this.emit("ok", value, this);
	}

	cancel(): void {
		this.onCancel(this.getRejectReason());
	}

	protected onCancel(reason: any): void {
		this.doReject(reason);
		this.emit("cancel", reason, this);
	}

	protected abstract getResolvedValue(): VALUE | PromiseLike<VALUE>;

	protected getRejectReason(): any {
		return undefined;
	}

	protected getType(): string {
		return "DDialogLayered";
	}
}
