/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DBasePaddingAdjustable } from "./d-base-padding-adjustable";
import { DLink, DThemeLink } from "./d-link";
import { DLinks } from "./d-links";
import {
	DTableBodyCellButton, DTableBodyCellButtonOptions, DThemeTableBodyCellButton
} from "./d-table-body-cell-button";
import { DTableBodyCellLinkLinkOptions, toLinkOptions } from "./d-table-body-cell-link";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableCellState } from "./d-table-cell-state";
import { DTableColumn } from "./d-table-column";
import { isNumber } from "./util/is-number";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DTableBodyCellTreeOptions<
	ROW,
	THEME extends DThemeTableBodyCellTree = DThemeTableBodyCellTree
> extends DTableBodyCellButtonOptions<ROW, THEME> {
	link?: DTableBodyCellLinkLinkOptions<ROW>;
}

export interface DThemeTableBodyCellTree extends DThemeTableBodyCellButton, DThemeLink {
	getLevelPadding( level: number ): number;
}

export class DTableBodyCellTree<
	ROW,
	THEME extends DThemeTableBodyCellTree = DThemeTableBodyCellTree,
	OPTIONS extends DTableBodyCellTreeOptions<ROW, THEME> = DTableBodyCellTreeOptions<ROW, THEME>
> extends DTableBodyCellButton<ROW, THEME, OPTIONS> {
	protected _padding!: DBasePaddingAdjustable;
	protected _link?: DLink | null;

	constructor( columnIndex: number, column: DTableColumn<ROW>, options?: OPTIONS ) {
		super( columnIndex, column, DLinks.toStateOptions( options?.link?.target, options ) );
		this._padding = new DBasePaddingAdjustable( this._padding );
	}

	protected initOnClick( options: OPTIONS ): void {
		const link = this.link;
		if( link ) {
			link.apply( this, ( e: interaction.InteractionEvent ): void => {
				this.onActivate( e );
			});
			UtilPointerEvent.onClick( this, ( e: interaction.InteractionEvent ): void => {
				if( ! link.enable ) {
					this.onClick( e );
				}
			});
		} else {
			super.initOnClick( options );
		}
	}

	get link(): DLink | null {
		let result = this._link;
		if( result === undefined ) {
			result = this.newLink();
			this._link = result;
		}
		return result;
	}

	protected newLink(): DLink | null {
		const options = this._options?.link;
		if( options ) {
			return new DLink( this.theme, toLinkOptions( this, options ) );
		}
		return null;
	}

	protected onActivate( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		this.emit( "active", this );
		const row = this._row;
		if( row !== undefined ) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			this.emit( "cellchange", null, null, row, rowIndex, columnIndex, this );

			const link = this.link;
			if( link?.enable ) {
				link.open( link.inNewWindow( e ) );
			} else {
				this.toggle( row );
			}
		}
	}

	protected toggle( row: ROW ): void {
		const parent = this.parent;
		if( parent ) {
			const body = parent.parent as any;
			if( body ) {
				const data = body.data;
				if( data && data.toggle ) {
					data.toggle( row );
				}
			}
		}
	}

	onRowSelect( e: interaction.InteractionEvent, local: Point ): boolean {
		if( local.x <= this.position.x + this.padding.getLeft() ) {
			const row = this._row;
			if( row !== undefined ) {
				this.toggle( row );
				return true;
			}
		}
		return false;
	}

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.text = value;

		const column = this._column;
		DTableBodyCells.setRenderable( this, row, columnIndex, column );

		const link = this.link;
		const adjuster = this._padding.adjuster;
		if( isNumber( supplimental ) ) {
			const isOpened = !! (supplimental & 0x1);
			const hasChildren = !! (supplimental & 0x2);
			const level = (supplimental >> 2);
			const state = this.state;
			state.lock();
			state.set( DTableCellState.HAS_CHILDREN, hasChildren );
			state.set( DTableCellState.OPENED, isOpened );
			state.unlock();
			if( link ) {
				link.enable = ! hasChildren;
			}
			adjuster.left = this.theme.getLevelPadding( level );
		} else {
			this.state.removeAll( DTableCellState.OPENED, DTableCellState.HAS_CHILDREN );
			adjuster.left = 0;
			if( link ) {
				link.enable = false;
			}
		}
	}

	protected getType(): string {
		return "DTableBodyCellTree";
	}
}
