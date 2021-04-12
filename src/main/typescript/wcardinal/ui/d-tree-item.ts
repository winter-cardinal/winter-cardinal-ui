/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, interaction, Texture } from "pixi.js";
import {
	DLayoutHorizontal,
	DLayoutHorizontalOptions,
	DThemeLayoutHorizontal
} from "./d-layout-horizontal";
import { DTreeItemRawData } from "./d-tree";
import { DTreeItemState } from "./d-tree-item-state";
import { DTreeItemTextAndImage } from "./d-tree-item-text-and-image";
import { DTreeItemToggleIcon } from "./d-tree-item-toggle-icon";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DTreeItemOptions<THEME extends DThemeTreeItem = DThemeTreeItem>
	extends DLayoutHorizontalOptions<THEME> {
	text: string;
	isParent: boolean;
	expanded: boolean;
	rawData: DTreeItemRawData;
	y: number;
	level: number;
	showable?: boolean;
	image?: DisplayObject | Texture | null;
}

export interface DThemeTreeItem extends DThemeLayoutHorizontal {
	getPaddingByLevel(level: number): number;
}

const toText = (options?: DTreeItemOptions): string => {
	return options?.text ?? "";
};

const toImage = (options?: DTreeItemOptions): DisplayObject | Texture | null => {
	return options?.image ?? null;
};

const toYCoordinate = (options?: DTreeItemOptions): number => {
	return options?.y ?? 0;
};

const toRawData = (options?: DTreeItemOptions): DTreeItemRawData => {
	const result = options?.rawData;
	if (result != null) {
		return result;
	}
	return {
		text: "",
		children: []
	};
};

const toPaddingLeft = <THEME extends DThemeTreeItem>(
	theme: DThemeTreeItem,
	options?: DTreeItemOptions<THEME>
): number => {
	return theme.getPaddingByLevel(options?.level ?? 0);
};

const toTreeItemTextAndImage = (options?: DTreeItemOptions): DTreeItemTextAndImage => {
	return new DTreeItemTextAndImage({
		text: {
			value: toText(options)
		},
		image: {
			source: toImage(options)
		}
	});
};

export class DTreeItem<
	THEME extends DThemeTreeItem = DThemeTreeItem,
	OPTIONS extends DTreeItemOptions<THEME> = DTreeItemOptions<THEME>
> extends DLayoutHorizontal<THEME, OPTIONS> {
	protected _isParent!: boolean;
	protected _isExpanded!: boolean;
	protected _rawData!: DTreeItemRawData;
	protected _textAndImage!: DTreeItemTextAndImage;
	protected _icon!: DTreeItemToggleIcon;

	protected init(options?: OPTIONS): void {
		super.init(options);
		this._isParent = !!options?.isParent;
		this._isExpanded = !!options?.expanded;
		this._rawData = toRawData(options);

		this._icon = new DTreeItemToggleIcon();
		this._textAndImage = toTreeItemTextAndImage(options);

		this.addChild(this._icon);
		this.addChild(this._textAndImage);

		this._icon.on(UtilPointerEvent.down, (): void => {
			this.onToggle();
		});
		this._textAndImage.on(UtilPointerEvent.down, (e: interaction.InteractionEvent): void => {
			this.onSelect(e);
		});

		// update states
		this.updateStates(false);
	}

	protected onSelect(e: interaction.InteractionEvent): void {
		this.emit("select", e);
	}

	public onToggle(): void {
		this.emit("toggle");
	}

	public isExpanded(): boolean {
		return this._isExpanded;
	}

	public isParent(): boolean {
		return this._isParent;
	}

	public getRawData(): DTreeItemRawData {
		return this._rawData;
	}

	public update(options: OPTIONS, isActive: boolean): this {
		this._textAndImage.text = toText(options);
		this._textAndImage.image = toImage(options);
		this._rawData = toRawData(options);
		this._padding.left = toPaddingLeft(this.theme, options);
		this.position.y = toYCoordinate(options);
		this._isParent = !!options.isParent;
		this._isExpanded = !!options.expanded;
		this.updateStates(isActive);
		return this;
	}

	protected updateStates(isActive: boolean): void {
		this.state.isActive = isActive;

		const iconState = this._icon.state;
		const isParent = this._isParent;
		const isExpanded = this._isExpanded;
		iconState.lock();
		iconState.set(DTreeItemState.EXPANDED, isParent && isExpanded);
		iconState.set(DTreeItemState.COLLAPSED, isParent && !isExpanded);
		iconState.unlock();
	}

	protected getType(): string {
		return "DTreeItem";
	}
}
