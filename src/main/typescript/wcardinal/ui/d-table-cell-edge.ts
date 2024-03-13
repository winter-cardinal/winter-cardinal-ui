/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DisplayObject,
	IPointData,
	InteractionEvent,
	InteractionManager,
	Point,
	utils
} from "pixi.js";
import { DTableState } from "./d-table-state";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { DApplications } from "./d-applications";
import { DBaseStateSet } from "./d-base-state-set";
import { DApplicationTarget } from "./d-application-like";

export const DTableCellEdgeHovered = {
	NONE: 0,
	LEFT: 1,
	RIGHT: 2,
	BOTH: 3
} as const;

export type DTableCellEdgeHovered =
	(typeof DTableCellEdgeHovered)[keyof typeof DTableCellEdgeHovered];

export type DTableCellEdgeData0<CELL> = [0, CELL];
export type DTableCellEdgeData1<CELL> = [1, CELL, CELL];
export type DTableCellEdgeData2<CELL> = [2, CELL, CELL, CELL[]];
export type DTableCellEdgeData3<CELL> = [3, CELL, CELL, CELL[]];

export type DTableCellEdgeData<CELL> =
	| DTableCellEdgeData0<CELL>
	| DTableCellEdgeData1<CELL>
	| DTableCellEdgeData2<CELL>
	| DTableCellEdgeData3<CELL>;

export interface DTableCellEdgeRow<CELL> {
	readonly state: DBaseStateSet;
	readonly children: CELL[];
}

export interface DTableCellEdgeColumn {
	weight?: number;
	readonly minWeight: number;
	width?: number;
	readonly minWidth: number;
	readonly resizable: boolean;
}

export interface DTableCellEdgeCell extends DApplicationTarget, utils.EventEmitter {
	readonly state: DBaseStateSet;
	readonly column: DTableCellEdgeColumn;
	readonly columnIndex: number;
	readonly cursor: string;
	readonly width: number;
	readonly weight: number;

	toLocal(position: IPointData, from?: DisplayObject, point?: Point, skipUpdate?: boolean): Point;
}

export class DTableCellEdge<CELL extends DTableCellEdgeCell> {
	protected _row: DTableCellEdgeRow<CELL>;
	protected _cell: CELL;
	protected _columnIndex: number;
	protected _checkWork?: Point;
	protected _onHoveredBound?: (e: InteractionEvent) => void;
	protected _left?: DTableCellEdgeData<CELL> | null;
	protected _right?: DTableCellEdgeData<CELL> | null;
	protected _size: number;
	protected _dragged: boolean;
	protected _minWidth: number;

	constructor(row: DTableCellEdgeRow<CELL>, cell: CELL, columnIndex: number, size: number) {
		this._row = row;
		this._cell = cell;
		this._columnIndex = columnIndex;
		this._size = size;
		this._dragged = false;
		this._minWidth = 8;
	}

	protected findResizableCell(
		columnIndex: number,
		direction: boolean,
		weight: boolean | null
	): CELL | null {
		const children = this._row.children;
		const childrenLength = children.length;
		if (direction) {
			for (let i = columnIndex; i < childrenLength; ++i) {
				const child = children[childrenLength - i - 1];
				const childColumn = child.column;
				if (childColumn.resizable) {
					if (weight == null) {
						return child;
					} else if (weight === true) {
						if (childColumn.weight != null) {
							return child;
						}
					} else {
						if (childColumn.weight == null) {
							return child;
						}
					}
				}
			}
		} else {
			for (let i = columnIndex; 0 <= i; --i) {
				const child = children[childrenLength - i - 1];
				const childColumn = child.column;
				if (childColumn.resizable) {
					if (weight == null) {
						return child;
					} else if (weight === true) {
						if (childColumn.weight != null) {
							return child;
						}
					} else {
						if (childColumn.weight == null) {
							return child;
						}
					}
				}
			}
		}
		return null;
	}

	protected findCells(columnIndex: number, direction: boolean, weight: boolean): CELL[] {
		const result = [];
		const children = this._row.children;
		const childrenLength = children.length;
		if (direction) {
			for (let i = columnIndex; i < childrenLength; ++i) {
				const child = children[childrenLength - i - 1];
				if (weight) {
					if (child.column.weight != null) {
						result.push(child);
					}
				} else {
					if (child.column.weight == null) {
						result.push(child);
					}
				}
			}
		} else {
			for (let i = columnIndex; 0 <= i; --i) {
				const child = children[childrenLength - i - 1];
				if (weight) {
					if (child.column.weight != null) {
						result.push(child);
					}
				} else {
					if (child.column.weight == null) {
						result.push(child);
					}
				}
			}
		}
		return result;
	}

	protected calcData(columnIndex: number): DTableCellEdgeData<CELL> | null {
		const left = this.findResizableCell(columnIndex, false, null);
		if (left != null) {
			const leftColumn = left.column;
			const right = this.findResizableCell(columnIndex + 1, true, null);
			if (right != null) {
				const rightColumn = right.column;
				if (leftColumn.weight == null) {
					if (rightColumn.weight == null) {
						// Width - Width
						return [1, left, right];
					} else {
						// Width - Weight
						const others = this.findCells(0, true, true);
						return [2, left, right, others];
					}
				} else {
					if (rightColumn.weight == null) {
						// Weight - Width
						const others = this.findCells(0, true, true);
						return [3, left, right, others];
					} else {
						// Weight - Weight
						return [1, left, right];
					}
				}
			} else {
				if (leftColumn.weight == null) {
					// Width
					const ls = this.findCells(left.columnIndex - 1, false, true);
					if (ls.length <= 0) {
						return [0, left];
					}

					// Not resizable
					return null;
				} else {
					// Not resizable
					return null;
				}
			}
		}
		// Not resizable
		return null;
	}

	get left(): DTableCellEdgeData<CELL> | null {
		let result = this._left;
		if (result === undefined) {
			result = this.calcData(this._columnIndex - 1);
			console.log("left", this._columnIndex, result);
			this._left = result;
		}
		return result;
	}

	get right(): DTableCellEdgeData<CELL> | null {
		let result = this._right;
		if (result === undefined) {
			result = this.calcData(this._columnIndex);
			console.log("right", this._columnIndex, result);
			this._right = result;
		}
		return result;
	}

	onDown(e: InteractionEvent): boolean {
		const cell = this._cell;
		const hoveredOnEdge = cell.state.valueOf(DTableState.HOVERED_ON_EDGE);
		if (hoveredOnEdge != null) {
			this._dragged = true;
			const layer = DApplications.getLayer(cell);
			if (layer != null) {
				const interactionManager = layer.renderer.plugins.interaction;
				if (hoveredOnEdge === DTableCellEdgeHovered.LEFT) {
					const left = this.left;
					if (left != null) {
						this.onDown_(e.data.global.x, left, interactionManager);
					}
				} else {
					const right = this.right;
					if (right != null) {
						this.onDown_(e.data.global.x, right, interactionManager);
					}
				}
			}
			return true;
		} else {
			this._dragged = false;
			return false;
		}
	}

	protected onDown_(
		onDownPoint: number,
		data: DTableCellEdgeData<CELL>,
		interactionManager: InteractionManager
	): void {
		switch (data[0]) {
			case 0:
				this.onDown0(onDownPoint, data, interactionManager);
				break;
			case 1:
				this.onDown1(onDownPoint, data, interactionManager);
				break;
			case 2:
				this.onDown2(onDownPoint, data, interactionManager);
				break;
			case 3:
				this.onDown3(onDownPoint, data, interactionManager);
				break;
		}
	}

	onOver(e: InteractionEvent): void {
		if (this.left != null || this.right != null) {
			const onHoveredBound = (this._onHoveredBound ??= (event: InteractionEvent): void => {
				this.onHovered(event);
			});
			const cell = this._cell;
			cell.off(UtilPointerEvent.move, onHoveredBound);
			cell.on(UtilPointerEvent.move, onHoveredBound);

			// Since the cursor is set by InteractionManager before this method is called,
			// the cursor need to be overriden.
			this.onHovered(e);
			const layer = DApplications.getLayer(cell);
			if (layer != null) {
				layer.renderer.plugins.interaction.cursor = cell.cursor;
			}
		}
	}

	onOut(e: InteractionEvent): void {
		const onHoveredBound = this._onHoveredBound;
		if (onHoveredBound != null) {
			const cell = this._cell;
			cell.state.remove(DTableState.HOVERED_ON_EDGE);
			cell.off(UtilPointerEvent.move, onHoveredBound);
		}
	}

	protected onHovered(e: InteractionEvent): void {
		const cell = this._cell;
		const width = cell.width;
		const x = this.toX(e);
		const size = this._size;
		let onLeft = 0 <= x && x <= size;
		let onRight = width - size <= x && x <= width;
		if (onLeft && onRight) {
			if (x <= width - x) {
				onRight = false;
			} else {
				onLeft = false;
			}
		}
		if (onLeft) {
			if (this.left != null) {
				cell.state.add(DTableState.HOVERED_ON_EDGE, DTableCellEdgeHovered.LEFT);
			} else {
				cell.state.remove(DTableState.HOVERED_ON_EDGE);
			}
		} else if (onRight) {
			if (this.right != null) {
				cell.state.add(DTableState.HOVERED_ON_EDGE, DTableCellEdgeHovered.RIGHT);
			} else {
				cell.state.remove(DTableState.HOVERED_ON_EDGE);
			}
		} else {
			cell.state.remove(DTableState.HOVERED_ON_EDGE);
		}
	}

	protected toX(e: InteractionEvent): number {
		const checkWork = (this._checkWork ??= new Point());
		return this._cell.toLocal(e.data.global, undefined, checkWork, true).x;
	}

	protected onDown0(
		onDownPoint: number,
		data: DTableCellEdgeData0<CELL>,
		interactionManager: InteractionManager
	): void {
		const left = data[1];
		const leftColumn = left.column;
		const leftOldWidth = left.width;
		const leftMinWidth = Math.max(this._minWidth, leftColumn.minWidth);
		const onMove = (e: InteractionEvent): void => {
			leftColumn.width = Math.max(leftMinWidth, leftOldWidth + e.data.global.x - onDownPoint);
		};
		this.newOnUp(onMove, interactionManager);
	}

	protected onDown1(
		onDownPoint: number,
		data: DTableCellEdgeData1<CELL>,
		interactionManager: InteractionManager
	): void {
		const minWidth = this._minWidth;

		const left = data[1];
		const leftColumn = left.column;
		const leftOldWidth = left.width;

		const right = data[2];
		const rightColumn = right.column;
		const rightOldWidth = right.width;

		const totalWidth = leftOldWidth + rightOldWidth;
		if (leftColumn.weight == null) {
			const leftMinWidth = Math.max(minWidth, leftColumn.minWidth);
			const rightMinWidth = Math.max(minWidth, rightColumn.minWidth);
			const leftMaxWidth = totalWidth - rightMinWidth;
			if (totalWidth <= 0 || leftMaxWidth <= leftMinWidth) {
				// The left and right resizable cells doesn't have enough width
				return;
			}
			const onMove = (e: InteractionEvent): void => {
				const leftNewWidth = Math.max(
					leftMinWidth,
					Math.min(leftMaxWidth, leftOldWidth + e.data.global.x - onDownPoint)
				);
				leftColumn.width = leftNewWidth;
				rightColumn.width = totalWidth - leftNewWidth;
			};
			this.newOnUp(onMove, interactionManager);
		} else {
			const leftOldWeight = left.weight;
			const rightOldWeight = right.weight;
			const totalWeight = leftOldWeight + rightOldWeight;
			const leftMinWeight = leftColumn.minWeight;
			const rightMinWeight = rightColumn.minWeight;
			const leftMaxWeight = totalWeight - rightMinWeight;
			const leftMinWidth = minWidth;
			const rightMinWidth = minWidth;
			const leftMaxWidth = totalWidth - rightMinWidth;
			if (totalWidth <= 0 || leftMaxWidth <= leftMinWidth || leftMaxWeight <= leftMinWeight) {
				// The left and right resizable cells doesn't have enough width
				return;
			}
			const onMove = (e: InteractionEvent): void => {
				const leftNewWidth = Math.max(
					leftMinWidth,
					Math.min(leftMaxWidth, leftOldWidth + e.data.global.x - onDownPoint)
				);
				const leftNewWeight = Math.max(
					leftMinWeight,
					Math.min(leftMaxWeight, totalWeight * (leftNewWidth / totalWidth))
				);
				leftColumn.weight = leftNewWeight;
				rightColumn.weight = totalWeight - leftNewWeight;
			};
			this.newOnUp(onMove, interactionManager);
		}
	}

	protected onDown2(
		onDownPoint: number,
		data: DTableCellEdgeData2<CELL>,
		interactionManager: InteractionManager
	): void {
		if (data[3].length <= 1) {
			this.onDown2a(onDownPoint, data, interactionManager);
		} else {
			this.onDown2b(onDownPoint, data, interactionManager);
		}
	}

	protected onDown2a(
		onDownPoint: number,
		data: DTableCellEdgeData2<CELL>,
		interactionManager: InteractionManager
	): void {
		const minWidth = this._minWidth;

		const left = data[1];
		const leftColumn = left.column;
		const leftOldWidth = left.width;
		const leftMinWidth = Math.max(minWidth, leftColumn.minWidth);

		const right = data[2];
		const rightOldWidth = right.width;
		const rightMinWidth = minWidth;

		const totalWidth = leftOldWidth + rightOldWidth;
		const leftMaxWidth = totalWidth - rightMinWidth;
		if (totalWidth <= 0 || leftMaxWidth <= leftMinWidth) {
			// The left and right resizable cells doesn't have enough width
			return;
		}
		const onMove = (e: InteractionEvent): void => {
			leftColumn.width = Math.max(
				leftMinWidth,
				Math.min(leftMaxWidth, leftOldWidth + e.data.global.x - onDownPoint)
			);
		};
		this.newOnUp(onMove, interactionManager);
	}

	protected onDown2b(
		onDownPoint: number,
		data: DTableCellEdgeData2<CELL>,
		interactionManager: InteractionManager
	): void {
		const minWidth = this._minWidth;

		const left = data[1];
		const leftColumn = left.column;
		const leftOldWidth = left.width;
		const leftMinWidth = Math.max(minWidth, leftColumn.minWidth);

		const right = data[2];
		const rightColumn = right.column;
		const rightOldWidth = right.width;
		const rightMinWeight = rightColumn.minWeight;

		const totalWidth = leftOldWidth + rightOldWidth;

		const others = data[3];
		let totalWeight = 0;
		let totalSpace = 0;
		for (let i = 0, imax = others.length; i < imax; ++i) {
			const other = others[i];
			totalWeight += other.weight;
			totalSpace += other.width;
		}
		if (totalWeight <= 0 || totalSpace <= 0) {
			const rightMinWidth = minWidth;
			const leftMaxWidth = totalWidth - rightMinWidth;
			if (totalWidth <= 0 || leftMaxWidth <= leftMinWidth) {
				// The left and right resizable cells doesn't have enough width
				return;
			}
			if (totalWeight <= 0) {
				totalWeight = 0;
				for (let i = 0, imax = others.length; i < imax; ++i) {
					const other = others[i];
					const otherColumn = other.column;
					if (other !== right) {
						const otherNewWeight = otherColumn.minWeight;
						otherColumn.weight = otherNewWeight;
						totalWeight += otherNewWeight;
					} else {
						const rightNewWeight = Math.max(1, rightMinWeight);
						otherColumn.weight = rightNewWeight;
						totalWeight += rightNewWeight;
					}
				}
			}
			const onMove = (e: InteractionEvent): void => {
				leftColumn.width = Math.max(
					leftMinWidth,
					Math.min(leftMaxWidth, leftOldWidth + e.data.global.x - onDownPoint)
				);
			};
			this.newOnUp(onMove, interactionManager);
		} else {
			const rightMinWidth = Math.max(minWidth, totalSpace * (rightMinWeight / totalWeight));
			const leftMaxWidth = totalWidth - rightMinWidth;
			if (totalWidth <= 0 || leftMaxWidth <= leftMinWidth) {
				// The left and right resizable cells doesn't have enough width
				return;
			}
			const onMove = (e: InteractionEvent): void => {
				const leftNewWidth = Math.max(
					leftMinWidth,
					Math.min(leftMaxWidth, leftOldWidth + e.data.global.x - onDownPoint)
				);
				const rightNewWidth = totalWidth - leftNewWidth;
				const rightNewWeight = Math.max(
					rightMinWeight,
					totalWeight * (rightNewWidth / totalSpace)
				);
				leftColumn.width = leftNewWidth;
				rightColumn.weight = rightNewWeight;
			};
			this.newOnUp(onMove, interactionManager);
		}
	}

	protected onDown3(
		onDownPoint: number,
		data: DTableCellEdgeData3<CELL>,
		interactionManager: InteractionManager
	): void {
		if (data[3].length <= 1) {
			this.onDown3a(onDownPoint, data, interactionManager);
		} else {
			this.onDown3b(onDownPoint, data, interactionManager);
		}
	}

	protected onDown3a(
		onDownPoint: number,
		data: DTableCellEdgeData3<CELL>,
		interactionManager: InteractionManager
	): void {
		const minWidth = this._minWidth;

		const left = data[1];
		const leftOldWidth = left.width;
		const leftMinWidth = minWidth;

		const right = data[2];
		const rightColumn = right.column;
		const rightOldWidth = right.width;
		const rightMinWidth = Math.max(minWidth, rightColumn.minWidth);

		const totalWidth = leftOldWidth + rightOldWidth;
		const rightMaxWidth = totalWidth - leftMinWidth;
		if (totalWidth <= 0 || rightMaxWidth <= rightMinWidth) {
			// The left and right resizable cells doesn't have enough width
			return;
		}
		const onMove = (e: InteractionEvent): void => {
			rightColumn.width = Math.max(
				rightMinWidth,
				Math.min(rightMaxWidth, rightOldWidth + onDownPoint - e.data.global.x)
			);
		};
		this.newOnUp(onMove, interactionManager);
	}

	protected onDown3b(
		onDownPoint: number,
		data: DTableCellEdgeData3<CELL>,
		interactionManager: InteractionManager
	): void {
		const minWidth = this._minWidth;

		const left = data[1];
		const leftColumn = left.column;
		const leftOldWidth = left.width;
		const leftMinWeight = leftColumn.minWeight;

		const right = data[2];
		const rightColumn = right.column;
		const rightOldWidth = right.width;
		const rightMinWidth = Math.max(minWidth, rightColumn.minWidth);

		const totalWidth = leftOldWidth + rightOldWidth;

		const others = data[3];
		let totalWeight = 0;
		let totalSpace = 0;
		for (let i = 0, imax = others.length; i < imax; ++i) {
			const other = others[i];
			totalWeight += other.weight;
			totalSpace += other.width;
		}
		if (totalWeight <= 0 || totalSpace <= 0) {
			const leftMinWidth = minWidth;
			const rightMaxWidth = totalWidth - leftMinWidth;
			if (totalWidth <= 0 || rightMaxWidth <= rightMinWidth) {
				// The left and right resizable cells doesn't have enough width
				return;
			}
			if (totalWeight <= 0) {
				totalWeight = 0;
				for (let i = 0, imax = others.length; i < imax; ++i) {
					const other = others[i];
					const otherColumn = other.column;
					if (other !== left) {
						const otherNewWeight = otherColumn.minWeight;
						otherColumn.weight = otherNewWeight;
						totalWeight += otherNewWeight;
					} else {
						const leftNewWeight = Math.max(1, leftMinWeight);
						otherColumn.weight = leftNewWeight;
						totalWeight += leftNewWeight;
					}
				}
			}
			const onMove = (e: InteractionEvent): void => {
				rightColumn.width = Math.max(
					rightMinWidth,
					Math.min(rightMaxWidth, rightOldWidth + onDownPoint - e.data.global.x)
				);
			};
			this.newOnUp(onMove, interactionManager);
		} else {
			const leftMinWidth = Math.max(minWidth, totalSpace * (leftMinWeight / totalWeight));
			const rightMaxWidth = totalWidth - leftMinWidth;
			if (totalWidth <= 0 || rightMaxWidth <= rightMinWidth) {
				// The left and right resizable cells doesn't have enough width
				return;
			}
			const onMove = (e: InteractionEvent): void => {
				const rightNewWidth = Math.max(
					rightMinWidth,
					Math.min(rightMaxWidth, rightOldWidth + onDownPoint - e.data.global.x)
				);
				const leftNewWidth = totalWidth - rightNewWidth;
				const leftNewWeight = Math.max(
					leftMinWeight,
					totalWeight * (leftNewWidth / totalSpace)
				);
				rightColumn.width = rightNewWidth;
				leftColumn.weight = leftNewWeight;
			};
			this.newOnUp(onMove, interactionManager);
		}
	}

	protected newOnUp(
		onMove: (e: InteractionEvent) => void,
		interactionManager: InteractionManager
	): () => void {
		const row = this._row;
		row.state.add(DTableState.RESIZING);
		const onUp = () => {
			row.state.remove(DTableState.RESIZING);
			interactionManager.off(UtilPointerEvent.move, onMove);
			interactionManager.off(UtilPointerEvent.up, onUp);
			interactionManager.off(UtilPointerEvent.upoutside, onUp);
			interactionManager.off(UtilPointerEvent.cancel, onUp);
		};
		interactionManager.on(UtilPointerEvent.move, onMove);
		interactionManager.on(UtilPointerEvent.up, onUp);
		interactionManager.on(UtilPointerEvent.upoutside, onUp);
		interactionManager.on(UtilPointerEvent.cancel, onUp);
		return onUp;
	}

	isClicked(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): boolean {
		return (
			e instanceof InteractionEvent &&
			(this._cell.state.is(DTableState.HOVERED_ON_EDGE) || this._dragged)
		);
	}
}
