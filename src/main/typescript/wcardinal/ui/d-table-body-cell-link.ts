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
import { DTableBodyCell } from "./d-table-body-cell";
import {
	DTableBodyCellButton, DTableBodyCellButtonOptions, DThemeTableBodyCellButton
} from "./d-table-body-cell-button";
import { DTableColumn } from "./d-table-column";
import { isString } from "./util/is-string";

export type DTableBodyCellLinkUrlMaker<ROW> = (
	row: ROW, rowIndex: number, columnIndex: number, link: DTableBodyCell<ROW>
) => string | null | Promise<string | null>;
export type DTableBodyCellLinkChecker<ROW> = (
	row: ROW, rowIndex: number, columnIndex: number, link: DTableBodyCell<ROW>
) => boolean | Promise<boolean>;

export interface DTableBodyCellLinkLinkOptions<ROW> {
	url?: string | DTableBodyCellLinkUrlMaker<ROW>;
	target?: DLinkTarget;
	checker?: DTableBodyCellLinkChecker<ROW>;
	menu?: DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId>;
}

export interface DTableBodyCellLinkOptions<
	ROW,
	THEME extends DThemeTableBodyCellLink = DThemeTableBodyCellLink
> extends DTableBodyCellButtonOptions<ROW, THEME> {
	link?: DTableBodyCellLinkLinkOptions<ROW>;
}

export interface DThemeTableBodyCellLink extends DThemeTableBodyCellButton, DThemeLink {

}

export const toLinkOptions = <ROW>(
	cell: DTableBodyCell<ROW>,
	options?: DTableBodyCellLinkLinkOptions<ROW>
): DLinkOptions | undefined => {
	if( options ) {
		return {
			url: toUrl( cell, options.url ),
			target: options.target,
			checker: toChecker( cell, options.checker ),
			menu: options.menu
		};
	}
	return undefined;
};

export const toUrl = <ROW>(
	cell: DTableBodyCell<ROW>,
	url?: string | DTableBodyCellLinkUrlMaker<ROW>
): string | DLinkUrlMaker | undefined => {
	if( isString( url ) || url == null ) {
		return url;
	} else {
		return () => {
			const row = cell.row;
			if( row !== undefined ) {
				return url( row, cell.rowIndex, cell.columnIndex, cell );
			}
			return null;
		};
	}
};

export const toChecker = <ROW>(
	cell: DTableBodyCell<ROW>,
	checker?: DTableBodyCellLinkChecker<ROW>
): DLinkChecker | undefined => {
	if( checker != null ) {
		return (): boolean | Promise<boolean> => {
			const row = cell.row;
			if( row !== undefined ) {
				return checker( row, cell.rowIndex, cell.columnIndex, cell );
			}
			return false;
		};
	}
	return undefined;
};

export class DTableBodyCellLink<
	ROW,
	THEME extends DThemeTableBodyCellLink = DThemeTableBodyCellLink,
	OPTIONS extends DTableBodyCellLinkOptions<ROW, THEME> = DTableBodyCellLinkOptions<ROW, THEME>
> extends DTableBodyCellButton<ROW, THEME, OPTIONS> {
	protected _link?: DLink;

	constructor( columnIndex: number, column: DTableColumn<ROW>, options: OPTIONS ) {
		super( columnIndex, column, DLinks.toStateOptions( options?.link?.target, options ) );
	}

	protected initOnClick( when: DButtonBaseWhen, theme: THEME, options?: OPTIONS ): void {
		this.link.apply( this, ( e: interaction.InteractionEvent ): void => {
			if( when === DButtonBaseWhen.CLICKED ) {
				this.onClick( e );
			}
		});
	}

	get link(): DLink {
		let result = this._link;
		if( result == null ) {
			result = new DLink( this.theme, toLinkOptions( this, this._options?.link ) );
			this._link = result;
		}
		return result;
	}

	protected getType(): string {
		return "DTableBodyCellLink";
	}

	protected onActivate( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		this.emit( "active", this );
		const row = this._row;
		if( row !== undefined ) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			this._column.setter( row, columnIndex, null );
			this.emit( "cellchange", null, null, row, rowIndex, columnIndex, this );
			this.link.open( e );
		}
	}

	open( inNewWindow: boolean ): void {
		this.link.open( inNewWindow );
	}
}
