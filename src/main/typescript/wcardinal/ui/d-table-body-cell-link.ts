/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DButtonBaseWhen } from "./d-button-base-when";
import { DLink, DLinkChecker, DLinkOptions, DLinkUrlMaker, DThemeLink } from "./d-link";
import { DLinkMenuItemId } from "./d-link-menu-item-id";
import { DLinkTarget } from "./d-link-target";
import { DLinks } from "./d-links";
import { DMenu, DMenuOptions } from "./d-menu";
import { DTableBodyCell, DTableBodyCellOnChange } from "./d-table-body-cell";
import {
	DTableBodyCellButton,
	DTableBodyCellButtonOptions,
	DThemeTableBodyCellButton
} from "./d-table-body-cell-button";
import { DTableColumn } from "./d-table-column";
import { isString } from "./util/is-string";

export type DTableBodyCellLinkUrlMaker<ROW, VALUE> = (
	row: ROW,
	rowIndex: number,
	columnIndex: number,
	link: DTableBodyCell<ROW, VALUE | null>
) => string | null | Promise<string | null>;

export type DTableBodyCellLinkChecker<ROW, VALUE> = (
	row: ROW,
	rowIndex: number,
	columnIndex: number,
	link: DTableBodyCell<ROW, VALUE | null>
) => boolean | Promise<boolean>;

export interface DTableBodyCellLinkLinkOptions<ROW, VALUE> {
	url?: string | DTableBodyCellLinkUrlMaker<ROW, VALUE>;
	target?: DLinkTarget | keyof typeof DLinkTarget;
	checker?: DTableBodyCellLinkChecker<ROW, VALUE>;
	menu?: DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId>;
}

export interface DTableBodyCellLinkOptions<
	ROW,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellLink<VALUE> = DThemeTableBodyCellLink<VALUE>
> extends DTableBodyCellButtonOptions<ROW, VALUE, THEME> {
	link?: DTableBodyCellLinkLinkOptions<ROW, VALUE>;
}

export interface DThemeTableBodyCellLink<VALUE = unknown>
	extends DThemeTableBodyCellButton<VALUE>,
		DThemeLink {}

export const toLinkOptions = <ROW, VALUE>(
	cell: DTableBodyCell<ROW, VALUE | null>,
	options?: DTableBodyCellLinkLinkOptions<ROW, VALUE>
): DLinkOptions | undefined => {
	if (options) {
		return {
			url: toUrl(cell, options.url),
			target: options.target,
			checker: toChecker(cell, options.checker),
			menu: options.menu
		};
	}
	return undefined;
};

export const toUrl = <ROW, VALUE>(
	cell: DTableBodyCell<ROW, VALUE | null>,
	url?: string | DTableBodyCellLinkUrlMaker<ROW, VALUE>
): string | DLinkUrlMaker | undefined => {
	if (isString(url) || url == null) {
		return url;
	} else {
		return () => {
			const row = cell.row;
			if (row !== undefined) {
				return url(row, cell.rowIndex, cell.columnIndex, cell);
			}
			return null;
		};
	}
};

export const toChecker = <ROW, VALUE>(
	cell: DTableBodyCell<ROW, VALUE | null>,
	checker?: DTableBodyCellLinkChecker<ROW, VALUE>
): DLinkChecker | undefined => {
	if (checker != null) {
		return (): boolean | Promise<boolean> => {
			const row = cell.row;
			if (row !== undefined) {
				return checker(row, cell.rowIndex, cell.columnIndex, cell);
			}
			return false;
		};
	}
	return undefined;
};

export class DTableBodyCellLink<
	ROW,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellLink<VALUE> = DThemeTableBodyCellLink<VALUE>,
	OPTIONS extends DTableBodyCellLinkOptions<ROW, VALUE, THEME> = DTableBodyCellLinkOptions<
		ROW,
		VALUE,
		THEME
	>
> extends DTableBodyCellButton<ROW, VALUE, THEME, OPTIONS> {
	protected _link?: DLink;

	constructor(
		columnIndex: number,
		column: DTableColumn<ROW, VALUE | null>,
		onChange: DTableBodyCellOnChange<ROW, VALUE | null>,
		options: OPTIONS
	) {
		super(columnIndex, column, onChange, DLinks.toStateOptions(options?.link?.target, options));
	}

	protected initOnClick(when: DButtonBaseWhen, theme: THEME, options?: OPTIONS): void {
		this.link.add(this, (e: interaction.InteractionEvent): void => {
			if (when === DButtonBaseWhen.CLICKED) {
				this.onClick(e);
			}
		});
	}

	get link(): DLink {
		let result = this._link;
		if (result == null) {
			result = new DLink(this.theme, toLinkOptions(this, this._options?.link));
			this._link = result;
		}
		return result;
	}

	protected getType(): string {
		return "DTableBodyCellLink";
	}

	protected onActivate(
		e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): void {
		super.onActivate(e);
		this.link.open(e);
	}

	open(inNewWindow: boolean): void {
		this.link.open(inNewWindow);
	}
}
