/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent } from "pixi.js";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { DTableCategoryColumn } from "./d-table-category-column";
import { DBaseStateSet } from "./d-base-state-set";
import { DTableCellEdge } from "./d-table-cell-edge";

export interface DTableCategoryCellCategory {
	readonly children: DTableCategoryCell[];
	readonly state: DBaseStateSet;
}

export interface DTableCategoryCellOptions<
	THEME extends DThemeTableCategoryCell = DThemeTableCategoryCell
> extends DImageOptions<string | null, THEME> {}

export interface DThemeTableCategoryCell extends DThemeImage<string | null> {
	getEdgeWidth(): number;
}

export class DTableCategoryCell<
	THEME extends DThemeTableCategoryCell = DThemeTableCategoryCell,
	OPTIONS extends DTableCategoryCellOptions<THEME> = DTableCategoryCellOptions<THEME>
> extends DImage<string | null, THEME, OPTIONS> {
	protected _category: DTableCategoryCellCategory;
	protected _column: DTableCategoryColumn;
	protected _columnIndex: number;
	protected _edge: DTableCellEdge<DTableCategoryCell>;

	constructor(
		category: DTableCategoryCellCategory,
		columnIndex: number,
		column: DTableCategoryColumn,
		options?: OPTIONS
	) {
		super(options);

		this._category = category;
		this._columnIndex = columnIndex;
		this._column = column;
		this._edge = new DTableCellEdge<DTableCategoryCell>(
			this._category,
			this,
			columnIndex,
			this.theme.getEdgeWidth()
		);
	}

	get column(): DTableCategoryColumn {
		return this._column;
	}

	get columnIndex(): number {
		return this._columnIndex;
	}

	get category(): DTableCategoryCellCategory {
		return this._category;
	}

	protected override onDown(e: InteractionEvent): void {
		if (!this._edge.onDown(e)) {
			super.onDown(e);
		}
	}

	protected override onOver(e: InteractionEvent): void {
		super.onOver(e);
		this._edge.onOver(e);
	}

	protected override onOut(e: InteractionEvent): void {
		super.onOut(e);
		this._edge.onOut(e);
	}

	protected getType(): string {
		return "DTableCategoryCell";
	}
}
