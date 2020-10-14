/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DLink, DLinkChecker, DLinkOptions, DLinkUrlMaker, DThemeLink } from "./d-link";
import { DLinkMenuItemId } from "./d-link-menu-item-id";
import { DLinkTarget } from "./d-link-target";
import { DMenu, DMenuOptions } from "./d-menu";
import { DTableBodyCell } from "./d-table-body-cell";
import {
	DTableBodyCellButton, DTableBodyCellButtonOptions, DThemeTableBodyCellButton
} from "./d-table-body-cell-button";
import { DTableCellState } from "./d-table-cell-state";
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

const toOptions = <
	ROW,
	THEME extends DThemeTableBodyCellLink = DThemeTableBodyCellLink,
	OPTIONS extends DTableBodyCellLinkOptions<ROW, THEME> = DTableBodyCellLinkOptions<ROW, THEME>
>( options: OPTIONS ): OPTIONS => {
	if( options?.link?.target === DLinkTarget.NEW_WINDOW ) {
		options.state = ( options.state || DBaseState.NONE ) || DTableCellState.NEW_WINDOW;
	}
	return options;
};

export class DTableBodyCellLink<
	ROW,
	THEME extends DThemeTableBodyCellLink = DThemeTableBodyCellLink,
	OPTIONS extends DTableBodyCellLinkOptions<ROW, THEME> = DTableBodyCellLinkOptions<ROW, THEME>
> extends DTableBodyCellButton<ROW, THEME, OPTIONS> {
	protected _link?: DLink;

	constructor( columnIndex: number, columnData: DTableColumn<ROW>, options: OPTIONS ) {
		super( columnIndex, columnData, toOptions<ROW, THEME, OPTIONS>( options ) );
	}

	protected initOnClick( options: OPTIONS ): void {
		this.link.apply( this, ( e ) => this.onActive( e ) );
	}

	get link(): DLink {
		let result = this._link;
		if( result == null ) {
			result = new DLink( this.theme, toLinkOptions( this, this._options?.link ) );
			this._link = result;
		}
		return result;
	}

	get url(): string | null | Promise<string | null> {
		return this.link.url;
	}

	get menu(): DMenu<DLinkMenuItemId> {
		return this.link.menu;
	}

	protected getType(): string {
		return "DTableBodyCellLink";
	}

	protected onActive( e: KeyboardEvent | interaction.InteractionEvent ): void {
		this.emit( "active", this );
		const row = this._row;
		if( row !== undefined ) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			this._columnData.setter( row, columnIndex, null );
			this.emit( "cellchange", null, null, row, rowIndex, columnIndex, this );
			this.open( this.link.inNewWindow( e ) );
		}
	}

	open( inNewWindow: boolean ): void {
		this.link.open( inNewWindow );
	}
}
