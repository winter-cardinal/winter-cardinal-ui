/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBasePaddingAdjustable } from "./d-base-padding-adjustable";
import { DBaseState } from "./d-base-state";
import { DImageBase, DImageBaseEvents, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { DOnOptions } from "./d-on-options";
import { DTreeData } from "./d-tree-data";
import { DTreeDataSelectionType } from "./d-tree-data-selection";
import { DTreeItem } from "./d-tree-item";
import { DTreeItemState } from "./d-tree-item-state";
import { DTreeNode } from "./d-tree-node";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";

/**
 * {@link DTreeItemText} events.
 */
export interface DTreeItemTextEvents<NODE, EMITTER> extends DImageBaseEvents<NODE, EMITTER> {
	/**
	 * Triggered when a node is set.
	 *
	 *     on( "set", ( node, index, emitter ) => {} )
	 *
	 * @param emitter an emitter
	 */
	set(node: NODE, index: number, emitter: EMITTER): void;

	/**
	 * Triggered when set to undefined.
	 *
	 *     on( "unset", ( emitter ) => {} )
	 *
	 * @param emitter an emitter
	 */
	unset(emitter: EMITTER): void;
}

/**
 * {@link DTreeItemText} "on" options.
 */
export interface DTreeItemTextOnOptions<NODE, EMITTER>
	extends Partial<DTreeItemTextEvents<NODE, EMITTER>>,
		DOnOptions {}

/**
 * {@link DTreeItemText} options.
 */
export interface DTreeItemTextOptions<
	NODE extends DTreeNode = DTreeNode,
	THEME extends DThemeTreeItemText = DThemeTreeItemText,
	EMITTER = any
> extends DImageBaseOptions<string, THEME> {
	on?: DTreeItemTextOnOptions<NODE, EMITTER>;
}

export interface DThemeTreeItemText extends DThemeImageBase<string> {
	getLevelPadding(level: number): number;
}

export class DTreeItemText<
		NODE extends DTreeNode = DTreeNode,
		THEME extends DThemeTreeItemText = DThemeTreeItemText,
		OPTIONS extends DTreeItemTextOptions<NODE, THEME> = DTreeItemTextOptions<NODE, THEME>
	>
	extends DImageBase<string, THEME, OPTIONS>
	implements DTreeItem<NODE>
{
	protected _padding!: DBasePaddingAdjustable;
	protected _data: DTreeData<NODE>;
	protected _node?: NODE;
	protected _index?: number;

	constructor(data: DTreeData<NODE>, options?: OPTIONS) {
		super(options);
		this._padding = new DBasePaddingAdjustable(this._padding);
		this._data = data;
	}

	get node(): NODE | undefined {
		return this._node;
	}

	get value(): NODE | undefined {
		return this._node;
	}

	get index(): number | undefined {
		return this._index;
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

	set(node: NODE, index: number, forcibly?: boolean): void {
		const data = this._data;
		const isNodeChanged = forcibly || this._node !== node;
		if (isNodeChanged) {
			this._node = node;
			this._index = index;

			const accessor = data.accessor;
			this.text = accessor.toLabel(node);
			this.title = accessor.toTitle(node) ?? "";
			this.image = accessor.toImage(node);
		}

		const level = data.mapped.levels[index];
		this._padding.adjLeft(this.theme.getLevelPadding(level));

		const children = data.accessor.toChildren(node);
		const hasChildren = !!(children && 0 < children.length);
		const state = this.state;
		state.lock();
		state.set(DBaseState.ACTIVE, data.selection.contains(node));
		state.remove(DBaseState.DISABLED);
		state.set(DTreeItemState.HAS_CHILDREN, hasChildren);
		state.set(DTreeItemState.OPENED, data.isExpanded(node));
		state.unlock();

		if (isNodeChanged) {
			this.emit("set", node, index, this);
		}
	}

	unset(): void {
		if (this._node !== undefined) {
			this._node = undefined;
			this._index = undefined;

			this.text = undefined;
			this.title = "";
			this.image = undefined;

			const state = this.state;
			state.lock();
			state.add(DBaseState.DISABLED);
			state.remove(DBaseState.ACTIVE);
			state.unlock();

			this.emit("unset", this);
		}
	}

	protected onSelect(
		e: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent | undefined,
		value: NODE
	): void {
		const data = this._data;
		const selection = data.selection;
		if (selection.type !== DTreeDataSelectionType.MULTIPLE) {
			selection.clearAndAdd(value);
		} else {
			const originalEvent = e && "data" in e ? e.data.originalEvent : e;
			if (originalEvent?.ctrlKey) {
				selection.toggle(value);
			} else if (originalEvent?.shiftKey) {
				const mapped = data.mapped;
				const last = selection.last;
				if (value === last) {
					selection.clearAndAdd(value);
				} else {
					let isFound = false;
					let isReverse = false;
					const newSelection: NODE[] = [];
					mapped.each((node): boolean | void => {
						if (isFound) {
							if (isReverse) {
								newSelection.unshift(node);
								if (node === value) {
									return false;
								}
							} else {
								newSelection.push(node);
								if (node === last) {
									return false;
								}
							}
						} else {
							if (node === value) {
								isFound = true;
								isReverse = false;
								newSelection.push(node);
							} else if (node === last) {
								isFound = true;
								isReverse = true;
								newSelection.push(node);
							}
						}
					});
					selection.clearAndAddAll(newSelection);
				}
			} else {
				selection.clearAndAdd(value);
			}
		}
	}

	onKeyDown(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isActivateKey(e)) {
			this.onKeyDownActivate(e);
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

	protected onKeyDownActivate(e: KeyboardEvent): boolean {
		if (this.state.isActionable && this.state.isFocused) {
			const node = this._node;
			if (node !== undefined) {
				this.onSelect(e, node);
			}
			return true;
		}
		return false;
	}

	protected getType(): string {
		return "DTreeItemText";
	}
}
