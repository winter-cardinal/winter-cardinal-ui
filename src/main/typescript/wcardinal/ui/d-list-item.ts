/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBase } from "./d-base";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DListItemOptions<VALUE = unknown, THEME extends DThemeListItem = DThemeListItem>
	extends DImageOptions<string, THEME> {
	value?: VALUE;
}

export interface DThemeListItem extends DThemeImage<string> {}

export interface DListItemSelection {
	add(item: DBase): void;
}

export class DListItem<
	VALUE = unknown,
	THEME extends DThemeListItem = DThemeListItem,
	OPTIONS extends DListItemOptions<VALUE, THEME> = DListItemOptions<VALUE, THEME>
> extends DImage<string, THEME, OPTIONS> {
	protected _value: VALUE | null;

	constructor(options?: OPTIONS) {
		super(options);
		this._value = options?.value ?? null;
	}

	protected init(options?: OPTIONS): void {
		super.init(options);
		this.initOnClick(options);
	}

	protected initOnClick(options?: OPTIONS): void {
		UtilPointerEvent.onClick(this, (e: interaction.InteractionEvent): void => {
			if (this.state.isActionable) {
				this.onSelect(e);
			}
		});
	}

	get value(): VALUE | null {
		return this._value;
	}

	set value(value: VALUE | null) {
		this._value = value;
	}

	protected hasSelection(target: any): target is { selection: DListItemSelection } {
		return target && target.selection && target.selection.add;
	}

	protected getSelection(): DListItemSelection | null {
		let parent = this.parent as any;
		while (parent) {
			if (this.hasSelection(parent)) {
				return parent.selection;
			}
			parent = parent.parent;
		}
		return null;
	}

	protected onSelect(e: KeyboardEvent | interaction.InteractionEvent): void {
		this.emit("select", this);
		const selection = this.getSelection();
		if (selection) {
			selection.add(this);
		}
	}

	onKeyDown(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isActivateKey(e)) {
			this.onKeyDownActivate(e);
		}
		return super.onKeyDown(e);
	}

	protected onKeyDownActivate(e: KeyboardEvent): boolean {
		if (this.state.isActionable && this.state.isFocused) {
			this.onSelect(e);
			return true;
		}
		return false;
	}

	protected getType(): string {
		return "DListItem";
	}
}
