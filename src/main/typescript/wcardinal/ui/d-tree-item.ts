/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */
import { DisplayObject, Texture } from "pixi.js";
import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DTreeItemCheck } from "./d-tree-item-check";
import { DTreeItemState } from "./d-tree-item-state";
import { DTreeItemText } from "./d-Tree-item-text";
import { DTreeItemToggleIcon} from "./d-tree-item-toggle-icon";
import { UtilPointerEvent } from "./util";

export interface DTreeItemOptions <
	THEME extends DThemeTreeItem = DThemeTreeItem >
	extends DLayoutHorizontalOptions < THEME > {
		text: string;
		isParent: boolean;
		expanded: boolean;
		check: boolean | null;
		position: number[];
		y: number;
		showable?: boolean;
		image?: DisplayObject | Texture | null;
	}

export interface DThemeTreeItem extends DThemeLayoutHorizontal {
	getPaddingByLevel(level: number): number;
}

export class DTreeItem <
	THEME extends DThemeTreeItem = DThemeTreeItem,
	OPTIONS extends DTreeItemOptions < THEME > = DTreeItemOptions < THEME >
	>
	extends DLayoutHorizontal < THEME, OPTIONS > {
		protected _textValue!: string;
		protected _isParent!: boolean;
		protected _isExpanded!: boolean;
		protected _itemPosition!: number[] | null;
		protected _treeItemText!: DTreeItemText;
		protected _treeItemToggleIcon !: DTreeItemToggleIcon;
		protected _treeItemCheck!: DTreeItemCheck;

		protected init(options ?: OPTIONS) {
			super.init(options);
			// get text
			if (options && options.text) {
				this._textValue = options.text;
			}
			// get isParent option
			this._isParent = !! (options && options.isParent);
			// get isExpand option
			this._isExpanded = !! ( options && options.expanded );
			// get position of item
			if (options && options.position) {
				this._itemPosition = options.position;
			} else {
				this._itemPosition = null;
			}

			this._treeItemToggleIcon = new DTreeItemToggleIcon();
			this._treeItemToggleIcon.on(UtilPointerEvent.down, (): void => {
				this.onSelect();
			});
			this.updateStates(false);
			const imageSource = options && options.image ? options.image : null;
			this._treeItemText = new DTreeItemText({
				text: {
					value: this._textValue
				},
				image: {
					source: imageSource
				}
			});
			this._treeItemText.on(UtilPointerEvent.down, (): void => {
				this.onSelect();
			});

			this.addChild(this._treeItemToggleIcon);

			if (options && options.check != null) {
				this._treeItemCheck = new DTreeItemCheck();
				this._treeItemCheck.on(UtilPointerEvent.up, (): void => {
					this.emit("check", this._treeItemCheck.isActive());
				});
				this.addChild(this._treeItemCheck);
			}

			this.addChild(this._treeItemText);
		}

		protected onSelect(): void {
			this.emit("selected");
			if (this._isParent) {
				this.toggle();
			} else {
				this.parent.emit("select", this._itemPosition);
			}
		}

		public isExpanded(): boolean {
			return this._isExpanded;
		}

		public isParent(): boolean {
				return this._isParent;
		}

		public getPosition(): number[] | null {
			return this._itemPosition;
		}

		public toggle(): void {
			if (this._isParent && this._isExpanded != null) {
				this._isExpanded = !this._isExpanded;
				this.updateStates(false);
			}
		}

		public update(options: OPTIONS | null, selectedPosition: number[]) {
			if(options) {
				if(options.text) {
					this._treeItemText.text = options.text;
				}
				if(options.position) {
					this._itemPosition = options.position;
					const level = this._itemPosition.length;
					this._padding.set(this._padding.getTop(),
					this._padding.getRight(),
					this._padding.getBottom(),
					this.theme.getPaddingByLevel(level));
				}
				if(options.y != null) {
					this.position.y = options.y;
				}
				if(options.check != null) {
					this._treeItemCheck.setActive(options.check);
				}
				this._treeItemText.image = options.image;
				this._isParent = !! (options.isParent);
				this._isExpanded = !! (options.expanded);
				const isActive = JSON.stringify(this._itemPosition) === JSON.stringify(selectedPosition);
				this.updateStates(isActive);
			}
			return this;
		}

		public updateActiveState(selectedPosition: number[]) {
			const isActive = JSON.stringify(this._itemPosition) === JSON.stringify(selectedPosition);
			this.setActive(isActive);
		}

		protected updateStates(isActive: boolean): void {
			this.setActive(isActive);
			if (!this._isParent) {
				this._treeItemToggleIcon.setState(DTreeItemState.COLLAPSED, false);
				this._treeItemToggleIcon.setState(DTreeItemState.EXPANDED, false);
				return;
			}
			this._treeItemToggleIcon.setState(DTreeItemState.COLLAPSED, !this._isExpanded);
			this._treeItemToggleIcon.setState(DTreeItemState.EXPANDED, !!this._isExpanded);
		}

		protected getType(): string {
			return "DTreeItem";
		}
	}
