/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DTableColumn } from "./d-table-column";

export class DTableBodyCells {
	static setReadOnly<ROW>( target: DBase, row: ROW, columnIndex: number, column: DTableColumn<ROW> ): void {
		target.state.isReadOnly = this.toReadOnly( row, columnIndex, column );
	}

	static setRenderable<ROW>( target: DBase, row: ROW, columnIndex: number, column: DTableColumn<ROW> ): void {
		const renderable = this.toRenderable( row, columnIndex, column );
		target.renderable = renderable;
		target.state.isDisabled = ! renderable;
	}

	static toReadOnly<ROW>( row: ROW, columnIndex: number, column: DTableColumn<ROW> ): boolean {
		const enable = column.editing.enable;
		if( enable === true ) {
			return false;
		} else if( enable === false ) {
			return true;
		} else {
			return ! enable( row, columnIndex );
		}
	}
	static toRenderable<ROW>( row: ROW, columnIndex: number, column: DTableColumn<ROW> ): boolean {
		const renderable = column.renderable;
		if( renderable === true ) {
			return true;
		} else if( renderable === false ) {
			return false;
		} else {
			return renderable( row, columnIndex );
		}
	}
}
