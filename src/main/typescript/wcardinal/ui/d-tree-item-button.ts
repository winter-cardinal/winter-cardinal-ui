/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent, InteractionManager } from "pixi.js";
import { DButtonBaseWhen } from "./d-button-base-when";
import { DTreeData } from "./d-tree-data";
import { DThemeTreeItemText, DTreeItemText, DTreeItemTextOptions } from "./d-tree-item-text";
import { DTreeNode } from "./d-tree-node";
import { toEnum } from "./util/to-enum";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DTreeItemButtonOptions<
	NODE extends DTreeNode,
	THEME extends DThemeTreeItemButton = DThemeTreeItemButton,
	EMITTER = any
> extends DTreeItemTextOptions<NODE, THEME, EMITTER> {
	when?: DButtonBaseWhen | keyof typeof DButtonBaseWhen;
}

export interface DThemeTreeItemButton extends DThemeTreeItemText {}

export class DTreeItemButton<
	NODE extends DTreeNode = DTreeNode,
	THEME extends DThemeTreeItemButton = DThemeTreeItemButton,
	OPTIONS extends DTreeItemButtonOptions<NODE, THEME> = DTreeItemButtonOptions<NODE, THEME>
> extends DTreeItemText<NODE, THEME, OPTIONS> {
	protected _when: DButtonBaseWhen;

	constructor(data: DTreeData<NODE>, options?: OPTIONS) {
		super(data, options);

		this._when = toEnum(options?.when ?? DButtonBaseWhen.CLICKED, DButtonBaseWhen);
		this.on(UtilPointerEvent.tap, (e: InteractionEvent): void => {
			this.onClick(e);
		});
	}

	protected onClick(e: InteractionEvent): void {
		if (this._when === DButtonBaseWhen.CLICKED && this.state.isActionable) {
			this.activate(e);
		}
	}

	protected onDblClick(
		e: MouseEvent | TouchEvent,
		interactionManager: InteractionManager
	): boolean {
		if (this._when === DButtonBaseWhen.DOUBLE_CLICKED) {
			this.activate(e);
		}
		return super.onDblClick(e, interactionManager);
	}

	activate(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		this.onActivate(e);
	}

	protected onActivate(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		this.emit("active", this);
	}

	protected onActivateKeyDown(e: KeyboardEvent): void {
		if (this.state.isActionable) {
			this.state.isPressed = true;
		}
	}

	protected onActivateKeyUp(e: KeyboardEvent): void {
		if (this.state.isActionable) {
			if (this.state.isPressed) {
				this.activate(e);
			}
			this.state.isPressed = false;
		}
	}

	protected onKeyDown(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isActivateKey(e)) {
			this.onActivateKeyDown(e);
		}

		return super.onKeyDown(e);
	}

	protected onKeyUp(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isActivateKey(e)) {
			this.onActivateKeyUp(e);
		}

		return super.onKeyUp(e);
	}

	protected getType(): string {
		return "DTreeItemButton";
	}
}
