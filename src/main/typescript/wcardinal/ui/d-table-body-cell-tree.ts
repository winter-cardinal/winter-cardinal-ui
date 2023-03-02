/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DBasePaddingAdjustable } from "./d-base-padding-adjustable";
import { DLink } from "./d-link";
import { DLinks } from "./d-links";
import {
	DTableBodyCellButton,
	DTableBodyCellButtonOptions,
	DThemeTableBodyCellButton
} from "./d-table-body-cell-button";
import { DTableBodyCellLinkLinkOptions, toLinkOptions } from "./d-table-body-cell-link";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableState } from "./d-table-state";
import { DTableColumn } from "./d-table-column";
import { isNumber } from "./util/is-number";
import { DTableBodyCellOnChange } from "./d-table-body-cell";

export interface DTableBodyCellTreeOptions<
	ROW,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellTree<VALUE> = DThemeTableBodyCellTree<VALUE>
> extends DTableBodyCellButtonOptions<ROW, VALUE, THEME> {
	link?: DTableBodyCellLinkLinkOptions<ROW, VALUE>;
}

export interface DThemeTableBodyCellTree<VALUE = unknown> extends DThemeTableBodyCellButton<VALUE> {
	getLevelPadding(level: number): number;
}

export class DTableBodyCellTree<
	ROW,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellTree<VALUE> = DThemeTableBodyCellTree<VALUE>,
	OPTIONS extends DTableBodyCellTreeOptions<ROW, VALUE, THEME> = DTableBodyCellTreeOptions<
		ROW,
		VALUE,
		THEME
	>
> extends DTableBodyCellButton<ROW, VALUE, THEME, OPTIONS> {
	protected _padding!: DBasePaddingAdjustable;
	protected _link?: DLink | null;

	constructor(
		columnIndex: number,
		column: DTableColumn<ROW, VALUE | null>,
		onChange: DTableBodyCellOnChange<ROW, VALUE | null>,
		options?: OPTIONS
	) {
		super(columnIndex, column, onChange, DLinks.toStateOptions(options?.link?.target, options));
		this._padding = new DBasePaddingAdjustable(this._padding);
	}

	protected onClick(e: interaction.InteractionEvent): void {
		if (this.link?.onClick(this, e) !== true) {
			super.onClick(e);
		}
	}

	get link(): DLink | null {
		let result = this._link;
		if (result === undefined) {
			result = this.newLink();
			this._link = result;
		}
		return result;
	}

	protected newLink(): DLink | null {
		const options = this._options?.link;
		if (options) {
			return new DLink(toLinkOptions(this, options));
		}
		return null;
	}

	protected onActivate(
		e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): void {
		super.onActivate(e);
		if (this.state.is(DTableState.HAS_CHILDREN)) {
			this.toggle();
		} else {
			this.link?.open(e);
		}
	}

	protected toggle(): void {
		const row = this._row;
		if (row === undefined) {
			return;
		}
		const parent = this.parent;
		if (parent == null) {
			return;
		}
		const body = parent.parent;
		if (body == null) {
			return;
		}
		const data = (body as any).data;
		if (data && data.toggle) {
			if (data.isExpanded(row)) {
				if (data.collapse(row)) {
					this.emit("collapse", this);
					data.emit("collapse", row, this);
				}
			} else {
				if (data.expand(row)) {
					this.emit("expand", this);
					data.emit("expand", row, this);
				}
			}
		}
	}

	onRowSelect(e: interaction.InteractionEvent, local: Point): boolean {
		if (local.x <= this.position.x + this.padding.getLeft()) {
			this.toggle();
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
		this.text = value as VALUE | null;

		DTableBodyCells.set(this, row, columnIndex, this._column, false);

		const link = this.link;
		const padding = this._padding;
		if (isNumber(supplimental)) {
			const isOpened = !!(supplimental & 0x1);
			const hasChildren = !!(supplimental & 0x2);
			const level = supplimental >> 2;
			const state = this.state;
			state.lock();
			state.set(DTableState.HAS_CHILDREN, hasChildren);
			state.set(DTableState.OPENED, isOpened);
			state.unlock();
			padding.adjLeft(this.theme.getLevelPadding(level));
			if (link) {
				link.menu.enable = !hasChildren;
			}
		} else {
			this.state.removeAll(DTableState.OPENED, DTableState.HAS_CHILDREN);
			padding.adjLeft(0);
			if (link) {
				link.menu.enable = false;
			}
		}
	}

	protected getType(): string {
		return "DTableBodyCellTree";
	}
}
