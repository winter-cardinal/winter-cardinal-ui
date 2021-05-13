/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBasePaddingAdjustable } from "./d-base-padding-adjustable";
import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { DTreeData } from "./d-tree-data";
import { DTreeItem } from "./d-tree-item";
import { DTreeItemState } from "./d-tree-item-state";
import { DTreeNode } from "./d-tree-node";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";

export interface DTreeItemTextOptions<THEME extends DThemeTreeItemText = DThemeTreeItemText>
	extends DImageBaseOptions<string, THEME> {}

export interface DThemeTreeItemText extends DThemeImageBase<string> {
	getLevelPadding(level: number): number;
}

export class DTreeItemText<
		NODE extends DTreeNode = DTreeNode,
		THEME extends DThemeTreeItemText = DThemeTreeItemText,
		OPTIONS extends DTreeItemTextOptions<THEME> = DTreeItemTextOptions<THEME>
	>
	extends DImageBase<string, THEME, OPTIONS>
	implements DTreeItem<NODE> {
	protected _padding!: DBasePaddingAdjustable;
	protected _data: DTreeData<NODE>;
	protected _node?: NODE;

	constructor(data: DTreeData<NODE>, options?: OPTIONS) {
		super(options);
		this._padding = new DBasePaddingAdjustable(this._padding);
		this._data = data;
	}

	get node(): NODE | undefined {
		return this._node;
	}

	get data(): DTreeData<NODE> {
		return this._data;
	}

	toggle(): void {
		const node = this._node;
		if (node !== undefined) {
			this._data.toggle(node);
		}
	}

	set(
		node: NODE,
		level: number,
		isActive: boolean,
		isExpanded: boolean,
		forcibly?: boolean
	): void {
		this._node = node;

		const accessor = this._data.accessor;
		this.text = accessor.toLabel(node);
		this.title = accessor.toTitle(node) ?? "";
		this.image = accessor.toImage(node);

		this._padding.adjLeft(this.theme.getLevelPadding(level));

		this.state.isActive = isActive;

		const children = accessor.toChildren(node);
		const hasChildren = !!(children && 0 < children.length);
		const state = this.state;
		state.lock();
		state.set(DTreeItemState.HAS_CHILDREN, hasChildren);
		state.set(DTreeItemState.OPENED, isExpanded);
		state.unlock();

		this.show();
	}

	unset(): void {
		this._node = undefined;
		this.hide();
	}

	protected onSelect(
		e: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent | undefined,
		row: NODE
	): void {
		const selection = this._data.selection;
		const originalEvent = e && "data" in e ? e.data.originalEvent : e;
		if (originalEvent?.ctrlKey) {
			selection.toggle(row);
		} else if (originalEvent?.shiftKey) {
			const rows = this._data.rows;
			const index = rows.indexOf(row);
			if (0 <= index) {
				const last = selection.last;
				const lastIndex = last ? rows.indexOf(last) : 0;
				if (0 <= lastIndex) {
					const nodes: NODE[] = [];
					if (index <= lastIndex) {
						for (let i = index; i <= lastIndex; ++i) {
							nodes.push(rows[i]);
						}
					} else {
						for (let i = index; lastIndex <= i; --i) {
							nodes.push(rows[i]);
						}
					}
					selection.clearAndAddAll(nodes);
				}
			}
		} else {
			selection.clearAndAdd(row);
		}
	}

	onKeyDown(e: KeyboardEvent): boolean {
		const isArrowUpKey = UtilKeyboardEvent.isArrowUpKey(e);
		const isArrowDownKey = UtilKeyboardEvent.isArrowDownKey(e);
		if (isArrowUpKey || isArrowDownKey) {
			const layer = DApplications.getLayer(this);
			if (layer != null) {
				const focusController = layer.getFocusController();
				const next = focusController.find(this, false, false, isArrowDownKey, this.parent);
				if (next != null) {
					focusController.focus(next);
				}
			}
		}
		if (UtilKeyboardEvent.isArrowRightKey(e)) {
			const node = this._node;
			if (node !== undefined) {
				if (this.state.is(DTreeItemState.HAS_CHILDREN)) {
					this._data.expand(node);
				}
			}
		}
		if (UtilKeyboardEvent.isArrowLeftKey(e)) {
			const node = this._node;
			if (node !== undefined) {
				if (this.state.is(DTreeItemState.HAS_CHILDREN)) {
					this._data.collapse(node);
				}
			}
		}
		return super.onKeyDown(e);
	}

	protected getType(): string {
		return "DTreeItemText";
	}
}
