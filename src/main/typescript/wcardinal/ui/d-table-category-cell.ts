/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent, InteractionManager, Point } from "pixi.js";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { DTableCategoryColumn } from "./d-table-category-column";
import { DTableState } from "./d-table-state";
import { DApplications } from "./d-applications";
import { DBaseStateSet } from "./d-base-state-set";
import { UtilPointerEvent } from "./util/util-pointer-event";

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

export const DTableCategoryCellEdge = {
	NONE: 0,
	LEFT: 1,
	RIGHT: 2,
	BOTH: 3
} as const;

export type DTableCategoryCellEdge =
	(typeof DTableCategoryCellEdge)[keyof typeof DTableCategoryCellEdge];

export class DTableCategoryCell<
	THEME extends DThemeTableCategoryCell = DThemeTableCategoryCell,
	OPTIONS extends DTableCategoryCellOptions<THEME> = DTableCategoryCellOptions<THEME>
> extends DImage<string | null, THEME, OPTIONS> {
	protected _category: DTableCategoryCellCategory;
	protected _column: DTableCategoryColumn;
	protected _columnIndex: number;

	protected _checkWork?: Point;
	protected _onHoveredBound?: (e: InteractionEvent) => void;
	protected _resizableEdges?: DTableCategoryCellEdge;
	protected _edgeSize: number;
	protected _wasResizing: boolean;

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
		this._edgeSize = this.theme.getEdgeWidth();
		this._wasResizing = false;
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
		const edges = this.state.valueOf(DTableState.HOVERED_ON_EDGE);
		if (edges != null) {
			this._wasResizing = true;
			const layer = DApplications.getLayer(this);
			if (layer != null) {
				const interactionManager = layer.renderer.plugins.interaction;
				const columnIndex = this._columnIndex;
				if (edges === DTableCategoryCellEdge.LEFT) {
					this.onDownEdge(e.data.global.x, columnIndex - 1, interactionManager);
				} else {
					this.onDownEdge(e.data.global.x, columnIndex, interactionManager);
				}
			}
		} else {
			this._wasResizing = false;
			super.onDown(e);
		}
	}

	protected findLeftResizableCell(columnIndex: number): DTableCategoryCell | null {
		const children = this._category.children;
		const childrenLength = children.length;
		for (let i = columnIndex; 0 <= i; --i) {
			const child = children[childrenLength - i - 1];
			if (child.column.resizable) {
				return child;
			}
		}
		return null;
	}

	protected findRightResizableCellOfWeight(columnIndex: number): DTableCategoryCell | null {
		const children = this._category.children;
		const childrenLength = children.length;
		for (let i = columnIndex + 1; i < childrenLength; ++i) {
			const child = children[childrenLength - i - 1];
			const childColumn = child.column;
			if (childColumn.resizable) {
				const childColumnWeight = childColumn.weight;
				if (childColumnWeight != null) {
					return child;
				}
			}
		}
		return null;
	}

	protected checkIfEdgeResizable(columnIndex: number): boolean {
		const target = this.findLeftResizableCell(columnIndex);
		if (target != null) {
			if (target.column.weight != null) {
				return this.findRightResizableCellOfWeight(target.columnIndex) != null;
			} else {
				return true;
			}
		}
		return false;
	}

	protected getResizableEdges(): DTableCategoryCellEdge {
		let result = this._resizableEdges;
		if (result == null) {
			const columnIndex = this._columnIndex;
			if (this.checkIfEdgeResizable(columnIndex - 1)) {
				if (this.checkIfEdgeResizable(columnIndex)) {
					result = DTableCategoryCellEdge.BOTH;
				} else {
					result = DTableCategoryCellEdge.LEFT;
				}
			} else {
				if (this.checkIfEdgeResizable(columnIndex)) {
					result = DTableCategoryCellEdge.RIGHT;
				} else {
					result = DTableCategoryCellEdge.NONE;
				}
			}
			this._resizableEdges = result;
		}
		return result;
	}

	protected override onOver(e: InteractionEvent): void {
		super.onOver(e);

		if (this.getResizableEdges() !== DTableCategoryCellEdge.NONE) {
			const onHoveredBound = (this._onHoveredBound ??= (event: InteractionEvent): void => {
				this.onHovered(event);
			});
			this.on(UtilPointerEvent.move, onHoveredBound);

			// Since the cursor is set by InteractionManager before this method is called,
			// the cursor need to be overriden.
			this.onHovered(e);
			const layer = DApplications.getLayer(this);
			if (layer != null) {
				layer.renderer.plugins.interaction.cursor = this.cursor;
			}
		}
	}

	protected override onOut(e: InteractionEvent): void {
		super.onOut(e);

		const onHoveredBound = this._onHoveredBound;
		if (onHoveredBound != null) {
			this.state.remove(DTableState.HOVERED_ON_EDGE);
			this.off(UtilPointerEvent.move, onHoveredBound);
		}
	}

	protected onHovered(e: InteractionEvent): void {
		const width = this.width;
		const x = this.toClickPosition(e);
		const edgeSize = this._edgeSize;
		if (0 <= x && x <= edgeSize) {
			if (this.getResizableEdges() & DTableCategoryCellEdge.LEFT) {
				this.state.add(DTableState.HOVERED_ON_EDGE, DTableCategoryCellEdge.LEFT);
			} else {
				this.state.remove(DTableState.HOVERED_ON_EDGE);
			}
		} else if (width - edgeSize <= x && x <= width) {
			if (this.getResizableEdges() & DTableCategoryCellEdge.RIGHT) {
				this.state.add(DTableState.HOVERED_ON_EDGE, DTableCategoryCellEdge.RIGHT);
			} else {
				this.state.remove(DTableState.HOVERED_ON_EDGE);
			}
		} else {
			this.state.remove(DTableState.HOVERED_ON_EDGE);
		}
	}

	protected toClickPosition(e: InteractionEvent): number {
		const checkWork = (this._checkWork ??= new Point());
		return e.data.getLocalPosition(this, checkWork).x;
	}

	protected onDownEdge(
		onDownPoint: number,
		columnIndex: number,
		interactionManager: InteractionManager
	): void {
		// Find the resizable cell
		const left = this.findLeftResizableCell(columnIndex);
		if (left == null) {
			// No resizable cell
			return;
		}

		const category = this._category;
		const leftColumn = left.column;
		const leftOldWidth = left.width;
		const leftOldWeight = left.weight;
		if (leftColumn.weight == null) {
			category.state.add(DTableState.RESIZING);
			const leftMinWidth = leftColumn.minWidth;
			const onMove = (e: InteractionEvent): void => {
				leftColumn.width = Math.max(
					leftMinWidth,
					leftOldWidth + e.data.global.x - onDownPoint
				);
			};
			const onUp = (e: InteractionEvent) => {
				category.state.remove(DTableState.RESIZING);
				interactionManager.off(UtilPointerEvent.move, onMove);
				interactionManager.off(UtilPointerEvent.up, onUp);
				interactionManager.off(UtilPointerEvent.upoutside, onUp);
				interactionManager.off(UtilPointerEvent.cancel, onUp);
			};
			interactionManager.on(UtilPointerEvent.move, onMove);
			interactionManager.on(UtilPointerEvent.up, onUp);
			interactionManager.on(UtilPointerEvent.upoutside, onUp);
			interactionManager.on(UtilPointerEvent.cancel, onUp);
		} else {
			const right = this.findRightResizableCellOfWeight(left.columnIndex);
			if (right == null) {
				// No right resizable cell found
				return;
			}
			const rightColumn = right.column;
			const rightOldWeight = right.weight;
			const rightOldWidth = right.width;
			const totalWidth = leftOldWidth + rightOldWidth;
			const totalWeight = leftOldWeight + rightOldWeight;
			const leftMinWeight = leftColumn.minWeight;
			const rightMinWeight = rightColumn.minWeight;
			const leftMaxWeight = totalWeight - rightMinWeight;
			if (totalWidth <= 0 || leftMaxWeight <= leftMinWeight) {
				// The left and right resizable cells doesn't non-zero width
				return;
			}
			category.state.add(DTableState.RESIZING);
			const onMove = (e: InteractionEvent): void => {
				const leftNewWidth = Math.max(
					0,
					Math.min(totalWidth, leftOldWidth + e.data.global.x - onDownPoint)
				);
				const leftNewWeight = Math.max(
					leftMinWeight,
					Math.min(leftMaxWeight, totalWeight * (leftNewWidth / totalWidth))
				);
				leftColumn.weight = leftNewWeight;
				rightColumn.weight = totalWeight - leftNewWeight;
			};
			const onUp = (e: InteractionEvent) => {
				category.state.remove(DTableState.RESIZING);
				interactionManager.off(UtilPointerEvent.move, onMove);
				interactionManager.off(UtilPointerEvent.up, onUp);
				interactionManager.off(UtilPointerEvent.upoutside, onUp);
				interactionManager.off(UtilPointerEvent.cancel, onUp);
			};
			interactionManager.on(UtilPointerEvent.move, onMove);
			interactionManager.on(UtilPointerEvent.up, onUp);
			interactionManager.on(UtilPointerEvent.upoutside, onUp);
			interactionManager.on(UtilPointerEvent.cancel, onUp);
		}
	}

	protected getType(): string {
		return "DTableCategoryCell";
	}
}
