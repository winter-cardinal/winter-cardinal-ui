/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBasePaddingAdjustable } from "./d-base-padding-adjustable";
import { DBaseState } from "./d-base-state";
import { DLink, DThemeLink } from "./d-link";
import { DLinkTarget } from "./d-link-target";
import {
	DTableBodyCellButton, DTableBodyCellButtonOptions, DThemeTableBodyCellButton
} from "./d-table-body-cell-button";
import { DTableBodyCellLinkLinkOptions, toLinkOptions } from "./d-table-body-cell-link";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableCellState } from "./d-table-cell-state";
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
	protected _link?: DLink;

	constructor( options: OPTIONS ) {
		super( options );
		this._padding = new DBasePaddingAdjustable( this._padding );
	}

	protected init( options: OPTIONS ): void {
		const link = options.link;
		if( link ) {
			if( link.target === DLinkTarget.NEW_WINDOW ) {
				options.state = ( options.state || DBaseState.NONE ) || DTableCellState.NEW_WINDOW;
			}
			this._link = new DLink( this.theme, toLinkOptions( this, options ) );
		}
		super.init( options );
	}

	protected initOnClick( options: OPTIONS ): void {
		const link = this._link;
		if( link ) {
			link.apply( this, ( e ): void => this.onActive( e ) );
			UtilPointerEvent.onClick( this, ( e: interaction.InteractionEvent ): void => {
				if( link.isDisabled() && this.state.isActionable ) {
					this.onActive( e );
				}
			});
		} else {
			super.initOnClick( options );
		}
	}

	get link(): DLink | null {
		return this._link || null;
	}

	protected onActive( e: KeyboardEvent | interaction.InteractionEvent ): void {
		this.emit( "active", this );
		const row = this._row;
		if( row !== undefined ) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			this.emit( "cellchange", null, null, row, rowIndex, columnIndex, this );

			const link = this._link;
			if( link && link.isEnabled() ) {
				link.open( link.inNewWindow( e ) );
			} else {
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
		}
	}

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.text = value;

		const columnData = this._columnData;
		DTableBodyCells.setRenderable( this, row, columnIndex, columnData );

		const link = this._link;
		const adjuster = this._padding.adjuster;
		if( isNumber( supplimental ) ) {
			const isOpened = !! (supplimental & 0x1);
			const hasChildren = !! (supplimental & 0x2);
			const level = (supplimental >> 2);
			if( hasChildren ) {
				if( isOpened ) {
					this.state.add( DTableCellState.HAS_CHILDREN | DTableCellState.OPENED );
				} else {
					this.state.set( DTableCellState.HAS_CHILDREN, DTableCellState.OPENED );
				}
				if( link ) {
					link.disable();
				}
			} else {
				if( isOpened ) {
					this.state.set( DTableCellState.OPENED, DTableCellState.HAS_CHILDREN );
				} else {
					this.state.remove( DTableCellState.HAS_CHILDREN | DTableCellState.OPENED );
				}
				if( link ) {
					link.enable();
				}
			}
			adjuster.left = this.theme.getLevelPadding( level );
		} else {
			this.state.remove( DTableCellState.OPENED | DTableCellState.HAS_CHILDREN );
			adjuster.left = 0;
			if( link ) {
				link.disable();
			}
		}
	}

	protected getType(): string {
		return "DTableBodyCellTree";
	}
}
