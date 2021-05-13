/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DBase, DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import {
	DTableBodyCellInputTreeInput,
	DTableBodyCellInputTreeInputOptions
} from "./d-table-body-cell-input-tree-input";
import { DTableBodyCellInputTreeMarker } from "./d-table-body-cell-input-tree-marker";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableState } from "./d-table-state";
import { DTableColumn } from "./d-table-column";
import { isNumber } from "./util/is-number";
import { DTableBodyCell, DTableBodyCellOnChange } from "./d-table-body-cell";

export interface DThemeTableBodyCellInputTree extends DThemeBase {
	getLevelPadding(level: number): number;
}

const toBaseOptions = (options?: DTableBodyCellInputTreeInputOptions) => {
	if (options != null) {
		return {
			weight: options.weight,
			width: options.width
		};
	}
	return undefined;
};

export class DTableBodyCellInputTree<
		ROW = unknown,
		THEME extends DThemeTableBodyCellInputTree = DThemeTableBodyCellInputTree,
		OPTIONS extends DTableBodyCellInputTreeInputOptions = DTableBodyCellInputTreeInputOptions
	>
	extends DBase<THEME>
	implements DTableBodyCell<ROW, string> {
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW, string>;
	protected _onChange: DTableBodyCellOnChange<ROW, string>;

	protected _marker: DTableBodyCellInputTreeMarker;
	protected _input: DTableBodyCellInputTreeInput;

	constructor(
		columnIndex: number,
		column: DTableColumn<ROW, string>,
		onChange: DTableBodyCellOnChange<ROW, string>,
		options?: OPTIONS
	) {
		super(toBaseOptions(options));

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._column = column;
		this._onChange = onChange;

		// Input
		const input = this.newInput(options);
		this._input = input;
		this.addChild(input);

		// Marker
		const marker = this.newMarker(options);
		this._marker = marker;
		this.addChild(marker);

		this.state.isFocusable = false;
		this.state.isFocusReverse = true;
	}

	protected newInput(options?: OPTIONS): DTableBodyCellInputTreeInput {
		return new DTableBodyCellInputTreeInput(this.toInputOptions(options));
	}

	protected toInputOptions(options?: OPTIONS): DTableBodyCellInputTreeInputOptions {
		return {
			weight: 1,
			text: options?.text,
			editing: options?.editing,
			when: options?.when,
			cursor: options?.cursor,
			on: {
				change: (newValue: string, oldValue: string): void => {
					this.onInputChange(newValue, oldValue);
				}
			}
		};
	}

	protected onInputChange(newValue: string, oldValue: string): void {
		const row = this._row;
		if (row !== undefined) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			this._column.setter(row, columnIndex, newValue);
			this.emit("change", newValue, oldValue, this);
			this._onChange(newValue, oldValue, row, rowIndex, columnIndex, this);
		}
	}

	protected newMarker(options?: OPTIONS): DTableBodyCellInputTreeMarker {
		return new DTableBodyCellInputTreeMarker({
			visible: false,
			on: {
				active: (): void => {
					this.onMarkerActive();
				}
			}
		});
	}

	protected onMarkerActive(): void {
		if (this._marker.state.is(DTableState.HAS_CHILDREN)) {
			const row = this.parent;
			if (row) {
				const body = row.parent as any;
				if (body) {
					const data = body.data;
					if (data && data.toggle) {
						data.toggle(this._row);
						this.emit(
							"cellchange",
							null,
							null,
							this._row,
							this._rowIndex,
							this._columnIndex,
							this
						);
					}
				}
			}
		}
	}

	get row(): ROW | undefined {
		return this._row;
	}

	get rowIndex(): number {
		return this._rowIndex;
	}

	get columnIndex(): number {
		return this._columnIndex;
	}

	get column(): DTableColumn<ROW, string> {
		return this._column;
	}

	onRowSelect(e: interaction.InteractionEvent, local: Point): boolean {
		if (local.x <= this.position.x + this._input.padding.getLeft()) {
			return true;
		}
		return false;
	}

	set(
		value: unknown,
		row: ROW,
		supplimental: unknown,
		rowIndex: number,
		columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		const input = this._input;
		input.visible = true;
		input.text = String(value);

		const marker = this._marker;
		if (isNumber(supplimental)) {
			const isOpened = !!(supplimental & 0x1);
			const hasChildren = !!(supplimental & 0x2);
			const level = supplimental >> 2;
			const markerState = marker.state;
			markerState.lock();
			markerState.set(DTableState.HAS_CHILDREN, hasChildren);
			markerState.set(DBaseState.DISABLED, !hasChildren);
			markerState.set(DTableState.OPENED, isOpened);
			markerState.unlock();
			const padding = this.theme.getLevelPadding(level);
			marker.width = padding;
			if (hasChildren) {
				marker.show();
			} else {
				marker.hide();
			}
			input.padding.adjLeft(padding);
		} else {
			marker.state.removeAll(DTableState.OPENED, DTableState.HAS_CHILDREN);
			marker.hide();
			input.padding.adjLeft(0);
		}

		const column = this._column;
		DTableBodyCells.setReadOnly(this._input, row, columnIndex, column);
		DTableBodyCells.setRenderable(this, row, columnIndex, column);
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
		this._input.visible = false;
		this._marker.hide();
	}

	protected getType(): string {
		return "DTableBodyCellInputTree";
	}
}
