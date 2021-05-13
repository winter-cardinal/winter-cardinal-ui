/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DTreeNode } from "./d-tree-node";
import {
	DThemeTreeItemButton,
	DTreeItemButton,
	DTreeItemButtonOptions
} from "./d-tree-item-button";
import { DTreeItemState } from "./d-tree-item-state";

export interface DTreeItemNonEditableOptions<
	THEME extends DThemeTreeItemNonEditable = DThemeTreeItemNonEditable
> extends DTreeItemButtonOptions<THEME> {}

export interface DThemeTreeItemNonEditable extends DThemeTreeItemButton {}

export class DTreeItemNonEditable<
	NODE extends DTreeNode = DTreeNode,
	THEME extends DThemeTreeItemNonEditable = DThemeTreeItemNonEditable,
	OPTIONS extends DTreeItemNonEditableOptions<THEME> = DTreeItemNonEditableOptions<THEME>
> extends DTreeItemButton<NODE, THEME, OPTIONS> {
	protected onActivate(
		e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): void {
		super.onActivate(e);

		const node = this._node;
		if (node !== undefined) {
			if (this.state.is(DTreeItemState.HAS_CHILDREN)) {
				if (e && "data" in e) {
					const local = this.toLocal(
						e.data.global,
						undefined,
						DTreeItemNonEditable.WORK_CONTAINS_POINT
					);
					if (local.x <= this.padding.getLeft()) {
						this.toggle();
					} else {
						this.onSelect(e, node);
					}
				}
			} else {
				this.onSelect(e, node);
			}
		}
	}

	protected getType(): string {
		return "DTreeItemNonEditable";
	}
}
