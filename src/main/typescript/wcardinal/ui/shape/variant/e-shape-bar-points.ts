/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapePoints } from "../e-shape-points";
import { EShapePointsFormatter } from "../e-shape-points-formatter";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeBarPosition } from "./e-shape-bar-position";
import { EShapeLineBasePoints } from "./e-shape-line-base-points";
import { EShapeLineBasePointsHitTester } from "./e-shape-line-base-points-hit-tester";
import { EShapeLineBasePointsHitTesterToRange } from "./e-shape-line-base-points-hit-tester-to-range";

export class EShapeBarPoints implements EShapeLineBasePoints {
	protected _parent: EShape;
	protected _id: number;
	protected _style: EShapePointsStyle;
	protected _values: [number, number, number, number];
	protected _segments: number[];
	protected _size: number;
	protected _position: EShapeBarPosition;

	protected _updatedSize: number;
	protected _updatedParentSizeX: number;
	protected _updatedParentSizeY: number;
	protected _updatedPosition: EShapeBarPosition;

	constructor(
		parent: EShape,
		position: EShapeBarPosition,
		size?: number,
		style?: EShapePointsStyle
	) {
		this._parent = parent;
		this._id = 0;
		this._values = [0, 0, 0, 0];
		this._segments = [];
		this._style = style != null ? style : EShapePointsStyle.NONE;
		this._size = size != null ? size : -1;
		this._position = position;

		this._updatedSize = NaN;
		this._updatedParentSizeX = NaN;
		this._updatedParentSizeY = NaN;
		this._updatedPosition = NaN;
	}

	protected getComputedSize(
		size: number,
		position: EShapeBarPosition,
		sizeX: number,
		sizeY: number
	): number {
		if (0 <= size) {
			return size;
		} else {
			switch (position) {
				case EShapeBarPosition.TOP:
				case EShapeBarPosition.BOTTOM:
					return Math.abs(sizeY);
				case EShapeBarPosition.RIGHT:
				case EShapeBarPosition.LEFT:
					return Math.abs(sizeX);
			}
			return 0;
		}
	}

	protected update(): void {
		const parentSize = this._parent.size;
		const parentSizeX = parentSize.x;
		const parentSizeY = parentSize.y;
		const position = this._position;
		const size = this._size;
		if (
			this._updatedSize !== size ||
			this._updatedParentSizeX !== parentSizeX ||
			this._updatedParentSizeY !== parentSizeY ||
			this._updatedPosition !== position
		) {
			this._id += 1;
			this._updatedSize = size;
			this._updatedParentSizeX = parentSizeX;
			this._updatedParentSizeY = parentSizeY;
			this._updatedPosition = position;
			const psxh = parentSizeX * 0.5;
			const psyh = parentSizeY * 0.5;
			const computedSize = this.getComputedSize(size, position, parentSizeX, parentSizeY);
			const values = this._values;
			switch (position) {
				case EShapeBarPosition.TOP:
					values[0] = 0;
					values[1] = -psyh;
					values[2] = 0;
					values[3] = -psyh + computedSize;
					break;
				case EShapeBarPosition.RIGHT:
					values[0] = psxh;
					values[1] = 0;
					values[2] = psxh - computedSize;
					values[3] = 0;
					break;
				case EShapeBarPosition.BOTTOM:
					values[0] = 0;
					values[1] = psyh;
					values[2] = 0;
					values[3] = psyh - computedSize;
					break;
				case EShapeBarPosition.LEFT:
					values[0] = -psxh;
					values[1] = 0;
					values[2] = -psxh + computedSize;
					values[3] = 0;
					break;
			}
		}
	}

	get length(): number {
		return 2;
	}

	get id(): number {
		this.update();
		return this._id;
	}

	get values(): number[] {
		this.update();
		return this._values;
	}

	set values(values: number[]) {
		// SUPPOSED NOT TO BE CALLED
	}

	get segments(): number[] {
		return this._segments;
	}

	set segments(segments: number[]) {
		// SUPPOSED NOT TO BE CALLED
	}

	get size(): number {
		return this._size;
	}

	set size(size: number) {
		this.moveTo(undefined, size, undefined);
	}

	get position(): EShapeBarPosition {
		return this._position;
	}

	set position(position: EShapeBarPosition) {
		this.moveTo(position, undefined, undefined);
	}

	get style(): EShapePointsStyle {
		return this._style;
	}

	set style(style: EShapePointsStyle) {
		this.moveTo(undefined, undefined, style);
	}

	get formatter(): EShapePointsFormatter | null {
		return null;
	}

	set formatter(formatter: EShapePointsFormatter | null) {
		// DO NOTHING
	}

	get formatted(): this {
		return this;
	}

	copy(source: EShapePoints): this {
		if (source instanceof EShapeBarPoints) {
			return this.moveTo(source.position, source.size, source.style);
		} else {
			return this.moveTo(undefined, undefined, source.style);
		}
	}

	set(newValues?: number[], newSegments?: number[], newStyle?: EShapePointsStyle): this {
		let newPosition: EShapeBarPosition | undefined;
		let newSize: number | undefined;
		if (newValues != null) {
			const x0 = newValues[0];
			if (x0 === 0) {
				const y0 = newValues[1];
				newPosition = y0 <= 0 ? EShapeBarPosition.TOP : EShapeBarPosition.BOTTOM;
				newSize = Math.abs(newValues[3] - y0);
			} else {
				newPosition = x0 <= 0 ? EShapeBarPosition.LEFT : EShapeBarPosition.RIGHT;
				newSize = Math.abs(newValues[2] - x0);
			}
		}
		return this.moveTo(newPosition, newSize, newStyle);
	}

	protected moveTo(position?: EShapeBarPosition, size?: number, style?: EShapePointsStyle): this {
		let isChanged = false;

		if (style != null && this._style !== style) {
			this._style = style;
			isChanged = true;
		}

		if (position != null && this._position !== position) {
			this._position = position;
			isChanged = true;
		}

		if (size != null && this._size !== size) {
			this._size = size;
			isChanged = true;
		}

		if (isChanged) {
			this._parent.updateUploaded();
		}

		return this;
	}

	clone(parent: EShape): EShapeBarPoints {
		return new EShapeBarPoints(parent, this._position, this._size, this._style);
	}

	toPoints(transform: Matrix): Point[] {
		const result: Point[] = [];
		const values = this.values;
		for (let i = 0, imax = values.length; i < imax; i += 2) {
			const point = new Point(values[i + 0], values[i + 1]);
			result.push(transform.apply(point, point));
		}
		return result;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		return manager.addResource(`[${this._position},${this._size},${this._style}]`);
	}

	deserialize(resourceId: number, manager: EShapeResourceManagerDeserialization): void {
		if (0 <= resourceId && resourceId < manager.resources.length) {
			const resource = manager.resources[resourceId];
			const parsed = JSON.parse(resource) as [number, number, number];
			this.moveTo(parsed[0], parsed[1], parsed[2]);
		}
	}

	calcHitPointAbs<RESULT>(
		x: number,
		y: number,
		ax: number,
		ay: number,
		threshold: number,
		toRange: EShapeLineBasePointsHitTesterToRange | null,
		tester: EShapeLineBasePointsHitTester<RESULT>,
		result: RESULT
	): boolean {
		const length = this.length;
		if (2 <= length) {
			const values = this._values;
			const v0x = values[0];
			const v0y = values[1];
			const v1x = values[2];
			const v1y = values[3];
			if (tester(x, y, v0x, v0y, v1x, v1y, 0, threshold, result)) {
				return true;
			}
		}
		return false;
	}
}
