/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DButtonBaseWhen } from "./d-button-base-when";
import { DTableBodyCellOnChange } from "./d-table-body-cell";
import {
	DTableBodyCellText,
	DTableBodyCellTextOptions,
	DThemeTableBodyCellText
} from "./d-table-body-cell-text";
import { DTableColumn } from "./d-table-column";
import { toEnum } from "./util/to-enum";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DTableBodyCellButtonOptions<
	ROW,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellButton<VALUE> = DThemeTableBodyCellButton<VALUE>
> extends DTableBodyCellTextOptions<ROW, VALUE | null, THEME> {
	when?: DButtonBaseWhen | keyof typeof DButtonBaseWhen;
}

export interface DThemeTableBodyCellButton<VALUE = unknown>
	extends DThemeTableBodyCellText<VALUE | null> {}

export class DTableBodyCellButton<
	ROW,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellButton<VALUE> = DThemeTableBodyCellButton<VALUE>,
	OPTIONS extends DTableBodyCellButtonOptions<ROW, VALUE, THEME> = DTableBodyCellButtonOptions<
		ROW,
		VALUE,
		THEME
	>
> extends DTableBodyCellText<ROW, VALUE | null, THEME, OPTIONS> {
	protected _when: DButtonBaseWhen;

	constructor(
		columnIndex: number,
		column: DTableColumn<ROW, VALUE | null>,
		onChange: DTableBodyCellOnChange<ROW, VALUE | null>,
		options?: OPTIONS
	) {
		super(columnIndex, column, onChange, options);

		this._when = toEnum(options?.when ?? DButtonBaseWhen.CLICKED, DButtonBaseWhen);
		this.on(UtilPointerEvent.tap, (e: interaction.InteractionEvent): void => {
			this.onClick(e);
		});
	}

	protected onClick(e: interaction.InteractionEvent): void {
		if (this._when === DButtonBaseWhen.CLICKED && this.state.isActionable) {
			this.activate(e);
		}
	}

	onDblClick(
		e: MouseEvent | TouchEvent,
		interactionManager: interaction.InteractionManager
	): boolean {
		if (this._when === DButtonBaseWhen.DOUBLE_CLICKED && this.state.isActionable) {
			this.activate(e);
		}
		return super.onDblClick(e, interactionManager);
	}

	activate(e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		this.onActivate(e);
	}

	protected onActivate(
		e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): void {
		this.emit("active", this);
		const row = this._row;
		if (row !== undefined) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			const column = this._column;
			this.emit("change", null, null, this);
			this._onChange(null, null, row, rowIndex, columnIndex, column, this);
		}
	}

	protected onActivateKeyDown(e: KeyboardEvent): void {
		if (this.state.isActionable) {
			this.state.isPressed = true;
		}
	}

	protected onActivateKeyUp(e: KeyboardEvent): void {
		if (this.state.isActionable) {
			if (this.state.isPressed) {
				this.onActivate(e);
			}
			this.state.isPressed = false;
		}
	}

	protected onKeyDown(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isActivateKey(e)) {
			this.onActivateKeyDown(e);
		}

		return super.onKeyDown(e);
	}

	protected onKeyUp(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isActivateKey(e)) {
			this.onActivateKeyUp(e);
		}

		return super.onKeyUp(e);
	}

	protected getType(): string {
		return "DTableBodyCellButton";
	}
}
