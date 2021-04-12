/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point } from "pixi.js";
import { toIndexOf } from "../../util/to-index-of";
import { EShape } from "../e-shape";
import { EShapePoints } from "../e-shape-points";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import {
	EShapeLineBasePointsHitTester,
	EShapeLineBasePointsTestRange
} from "./e-shape-line-base-points";

export class EShapeLinePoints implements EShapePoints {
	protected static WORK_RANGE: [number, number] = [0, 0];

	protected _parent: EShape;
	protected _valuesBase?: number[];
	protected _valuesBaseLength: number;
	protected _values: number[];
	protected _segments: number[];
	readonly position: Point;
	protected _sizeBase: Point;
	readonly size: Point;
	protected _id: number;
	protected _style: EShapePointsStyle;

	constructor(parent: EShape, points: number[], segments: number[], style: EShapePointsStyle) {
		// Calculate the center
		const values: number[] = [];
		let minX = 0;
		let maxX = 0;
		let minY = 0;
		let maxY = 0;
		const pointsLength = points.length;
		if (2 <= pointsLength) {
			minX = maxX = points[0];
			minY = maxY = points[1];
			for (let i = 2; i < pointsLength; i += 2) {
				const x = points[i];
				const y = points[i + 1];
				minX = Math.min(minX, x);
				maxX = Math.max(maxX, x);
				minY = Math.min(minY, y);
				maxY = Math.max(maxY, y);
			}
		}
		const cx = (maxX + minX) * 0.5;
		const cy = (maxY + minY) * 0.5;
		for (let i = 0; i < pointsLength; i += 2) {
			const x = points[i + 0] - cx;
			const y = points[i + 1] - cy;
			values.push(x, y);
		}
		const sx = maxX - minX;
		const sy = maxY - minY;

		//
		this._parent = parent;
		this._valuesBase = undefined;
		this._valuesBaseLength = values.length;
		this._values = values;
		this._segments = segments.slice(0);
		this._sizeBase = new Point(sx, sy);
		this.size = new Point(sx, sy);
		this.position = new Point(cx, cy);
		this._id = 0;
		this._style = style;
	}

	get length(): number {
		return this._values.length >> 1;
	}

	private fitToParentSize() {
		const size = this.size;
		const parentSize = this._parent.size;
		const ssx = parentSize.x;
		const ssy = parentSize.y;
		const threshold = 0.00001;
		if (threshold < Math.abs(ssx - size.x) || threshold < Math.abs(ssy - size.y)) {
			size.set(ssx, ssy);

			const sizeBase = this._sizeBase;
			const hasSizeBaseX = threshold < Math.abs(sizeBase.x);
			const hasSizeBaseY = threshold < Math.abs(sizeBase.y);
			if (hasSizeBaseX || hasSizeBaseY) {
				const scaleX = hasSizeBaseX ? ssx / sizeBase.x : 1;
				const scaleY = hasSizeBaseY ? ssy / sizeBase.y : 1;

				const values = this._values;
				let valuesBase = this._valuesBase;
				if (valuesBase == null) {
					valuesBase = [];
					this._valuesBase = valuesBase;

					for (let i = 0, imax = this.length << 1; i < imax; i += 2) {
						const x = values[i];
						const y = values[i + 1];
						values[i] = x * scaleX;
						values[i + 1] = y * scaleY;
						valuesBase.push(x, y);
					}
				} else {
					for (let i = 0, imax = this.length << 1; i < imax; i += 2) {
						values[i] = valuesBase[i] * scaleX;
						values[i + 1] = valuesBase[i + 1] * scaleY;
					}
				}
				this._id += 1;
			}
		}
	}

	get id(): number {
		this.fitToParentSize();
		return this._id;
	}

	get values(): number[] {
		this.fitToParentSize();
		return this._values;
	}

	set values(values: number[]) {
		this.set(values, undefined, undefined);
	}

	get segments(): number[] {
		return this._segments;
	}

	/**
	 * Must be sorted in ascending order.
	 */
	set segments(segments: number[]) {
		this.set(undefined, segments, undefined);
	}

	get style(): EShapePointsStyle {
		return this._style;
	}

	set style(style: EShapePointsStyle) {
		this.set(undefined, undefined, style);
	}

	copy(source: EShapePoints): this {
		return this.set(source.values, source.segments, source.style);
	}

	set(newValues?: number[], newSegments?: number[], newStyle?: EShapePointsStyle): this {
		let isDirty = false;
		let isUpdated = false;

		// Values
		if (newValues != null) {
			const values = this._values;
			const valuesBaseLength = this._valuesBaseLength;
			const newValuesLength = newValues.length;
			const iupdate = Math.min(newValuesLength, valuesBaseLength);
			this._valuesBase = undefined;
			if (values !== newValues) {
				for (let i = 0; i < iupdate; ++i) {
					values[i] = newValues[i];
				}

				for (let i = iupdate; i < newValuesLength; ++i) {
					values.push(newValues[i]);
				}

				if (valuesBaseLength !== newValuesLength) {
					values.length = newValuesLength;
					this._valuesBaseLength = newValuesLength;
					isDirty = true;
				} else {
					isUpdated = true;
				}
			} else {
				if (valuesBaseLength !== newValuesLength) {
					this._valuesBaseLength = newValuesLength;
					isDirty = true;
				} else {
					isUpdated = true;
				}
			}
		}

		// Segments
		if (newSegments != null) {
			const segments = this._segments;
			if (segments !== newSegments) {
				const newSegmentsLength = newSegments.length;
				const iupdate = Math.min(segments.length, newSegmentsLength);
				for (let i = 0; i < iupdate; ++i) {
					segments[i] = newSegments[i];
				}

				for (let i = iupdate; i < newSegmentsLength; ++i) {
					segments.push(newSegments[i]);
				}

				if (segments.length !== newSegmentsLength) {
					segments.length = newSegmentsLength;
				}
			}
			isUpdated = true;
		}

		// Style
		if (newStyle != null) {
			const oldStyle = this._style;
			if (oldStyle !== newStyle) {
				this._style = newStyle;
				isUpdated = true;
			}
		}

		//
		if (isDirty) {
			this._id += 1;
			const parent = this._parent;
			const uploaded = parent.uploaded;
			if (uploaded) {
				if (uploaded.isCompatible(parent)) {
					parent.updateUploaded();
				} else {
					parent.uploaded = undefined;
					parent.toDirty();
				}
			} else {
				parent.updateUploaded();
			}
		} else if (isUpdated) {
			this._id += 1;
			this._parent.updateUploaded();
		}

		return this;
	}

	clone(parent: EShape): EShapeLinePoints {
		return new EShapeLinePoints(parent, this._values, this._segments, this._style);
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
		return manager.addResource(
			`[${JSON.stringify(this._values)},${JSON.stringify(this._segments)},${this._style}]`
		);
	}

	calcHitPointAbs<RESULT>(
		x: number,
		y: number,
		ax: number,
		ay: number,
		threshold: number,
		range: EShapeLineBasePointsTestRange | null,
		tester: EShapeLineBasePointsHitTester<RESULT>,
		result: RESULT
	): boolean {
		const pointCount = this.length;
		if (2 <= pointCount) {
			const pointValues = this._values;
			const pointSegments = this._segments;
			let istart = 0;
			let iend = pointCount;
			if (range) {
				const work = EShapeLinePoints.WORK_RANGE;
				range(x, y, threshold, pointValues, work);
				istart = work[0];
				iend = work[1];
			}
			for (let i = istart, imax = Math.min(iend, pointCount - 1); i < imax; ++i) {
				if (toIndexOf(pointSegments, i + 1) < 0) {
					const iv = i << 1;
					const p0x = pointValues[iv + 0];
					const p0y = pointValues[iv + 1];
					const p1x = pointValues[iv + 2];
					const p1y = pointValues[iv + 3];
					if (tester(x, y, p0x, p0y, p1x, p1y, i, threshold, result)) {
						return true;
					}
				}
			}
			if (2 < pointCount && pointCount <= iend && this.style & EShapePointsStyle.CLOSED) {
				if (toIndexOf(pointSegments, 0) < 0) {
					const i = pointCount - 1;
					const iv = i << 1;
					const p0x = pointValues[iv + 0];
					const p0y = pointValues[iv + 1];
					const p1x = pointValues[0];
					const p1y = pointValues[1];
					if (tester(x, y, p0x, p0y, p1x, p1y, i, threshold, result)) {
						return true;
					}
				}
			}
		}
		return false;
	}
}
