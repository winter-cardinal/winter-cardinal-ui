/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DLink, DLinkChecker, DLinkOptions, DLinkUrlMaker } from "./d-link";
import { DLinkMenuItemId } from "./d-link-menu-item-id";
import { DLinkTarget } from "./d-link-target";
import { DMenu, DMenuOptions } from "./d-menu";
import {
	DTableBodyCellButton, DTableBodyCellButtonOptions, DThemeTableBodyCellButton
} from "./d-table-body-cell-button";
import { DTableCellState } from "./d-table-cell-state";
import { isString } from "./util/is-string";

export type DTableBodyCellLinkUrlMaker<ROW> = (
	row: ROW, rowIndex: number, columnIndex: number, link: DTableBodyCellLink<ROW>
) => string | null | Promise<string | null>;
export type DTableBodyCellLinkChecker<ROW> = (
	row: ROW, rowIndex: number, columnIndex: number, link: DTableBodyCellLink<ROW>
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

export interface DThemeTableBodyCellLink extends DThemeTableBodyCellButton {
	getMenuOptions(): DMenuOptions<DLinkMenuItemId>;
}

export class DTableBodyCellLink<
	ROW,
	THEME extends DThemeTableBodyCellLink = DThemeTableBodyCellLink,
	OPTIONS extends DTableBodyCellLinkOptions<ROW, THEME> = DTableBodyCellLinkOptions<ROW, THEME>
> extends DTableBodyCellButton<ROW, THEME, OPTIONS> {
	protected _link!: DLink;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected toLinkOptions( options: OPTIONS ): DLinkOptions | undefined {
		const link = options.link;
		if( link ) {
			return {
				url: this.toUrl( link.url ),
				target: link.target,
				checker: this.toChecker( link.checker ),
				menu: link.menu
			};
		}
		return undefined;
	}

	protected toUrl( url?: string | DTableBodyCellLinkUrlMaker<ROW> ): string | DLinkUrlMaker | undefined {
		if( isString( url ) || url == null ) {
			return url;
		} else {
			return () => {
				const row = this._row;
				if( row !== undefined ) {
					return url( row, this._rowIndex, this._columnIndex, this );
				}
				return null;
			};
		}
	}

	protected toChecker( checker?: DTableBodyCellLinkChecker<ROW> ): DLinkChecker | undefined {
		if( checker != null ) {
			return () => {
				const row = this._row;
				if( row !== undefined ) {
					return checker( row, this._rowIndex, this._columnIndex, this );
				}
				return false;
			};
		}
		return undefined;
	}

	protected init( options: OPTIONS ): void {
		if( options.link && options.link.target === DLinkTarget.NEW_WINDOW ) {
			options.state = ( options.state || DBaseState.NONE ) || DTableCellState.NEW_WINDOW;
		}
		this._link = new DLink( this.theme, this.toLinkOptions( options ) );
		super.init( options );
	}

	protected initOnClick( options: OPTIONS ): void {
		this._link.apply( this, ( e ) => this.onActive( e ) );
	}

	get url(): string | null | Promise<string | null> {
		return this._link.url;
	}

	get menu(): DMenu<DLinkMenuItemId> {
		return this._link.menu;
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
			this._columnData.setter( row, rowIndex, null );
			this.emit( "cellchange", null, null, row, rowIndex, columnIndex, this );
			this.open( this._link.inNewWindow( e ) );
		}
	}

	open( inNewWindow: boolean ): void {
		this._link.open( inNewWindow );
	}
}
