/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapePoints, EShapePointsFormatter } from "../e-shape-points";
import { EShapePointsStyle } from "../e-shape-points-style";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import {
	EShapeLineOfAnyPoints,
	EShapeLineOfAnyPointsHitTester,
	EShapeLineOfAnyPointsTestRange
} from "./e-shape-line-of-any-points";
import { EShapeLineOfAnyPointsFill } from "./e-shape-line-of-any-points-fill";
import { EShapeLineOfAnyPointsFillImpl } from "./e-shape-line-of-any-points-fill-impl";
import { EShapeLineOfAnyPointsPoint } from "./e-shape-line-of-any-points-point";
import { EShapeLineOfAnyPointsPointImpl } from "./e-shape-line-of-any-points-point-impl";
import { EShapeLineOfAnyPointsStroke } from "./e-shape-line-of-any-points-stroke";
import { EShapeLineOfAnyPointsStrokeImpl } from "./e-shape-line-of-any-points-stroke-impl";

export class EShapeLineOfAnyPointsImpl implements EShapeLineOfAnyPoints {
	protected static WORK_RANGE: [number, number] = [0, 0];

	protected _parent: EShape;
	protected _values: number[];
	protected _valuesLength: number;
	protected _segments: number[];
	protected _size: EShapeLineOfAnyPointsPoint;
	protected _offset: EShapeLineOfAnyPointsPoint;
	protected _fill: EShapeLineOfAnyPointsFill;
	protected _stroke: EShapeLineOfAnyPointsStroke;
	protected _id: number;

	constructor(parent: EShape) {
		this._parent = parent;
		this._values = [];
		this._valuesLength = 0;
		this._segments = [];
		this._size = new EShapeLineOfAnyPointsPointImpl(
			this,
			EShapeDefaults.SIZE_X,
			EShapeDefaults.SIZE_Y
		);
		this._offset = new EShapeLineOfAnyPointsPointImpl(this, 0, 0);
		this._fill = new EShapeLineOfAnyPointsFillImpl(parent);
		this._stroke = new EShapeLineOfAnyPointsStrokeImpl(parent);
		this._id = 0;
	}

	get length(): number {
		return this._values.length >> 1;
	}

	get id(): number {
		return this._id;
	}

	get values(): number[] {
		return this._values;
	}

	set values(values: number[]) {
		this.set(values, undefined, undefined);
	}

	get segments(): number[] {
		return this._segments;
	}

	set segments(segments: number[]) {
		// DO NOTHING
	}

	get style(): EShapePointsStyle {
		return EShapePointsStyle.NONE;
	}

	set style(style: EShapePointsStyle) {
		this.set(undefined, undefined, style);
	}

	get size(): EShapeLineOfAnyPointsPoint {
		return this._size;
	}

	get offset(): EShapeLineOfAnyPointsPoint {
		return this._offset;
	}

	get fill(): EShapeLineOfAnyPointsFill {
		return this._fill;
	}

	get stroke(): EShapeLineOfAnyPointsStroke {
		return this._stroke;
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
		return this.set(source.values, source.segments, source.style);
	}

	set(newValues?: number[], newSegments?: number[], newStyle?: EShapePointsStyle): this {
		let isDirty = false;
		let isUpdated = false;

		// Values
		if (newValues != null) {
			const values = this._values;
			const valuesLength = this._valuesLength;
			const newValuesLength = newValues.length;
			if (values !== newValues) {
				const iupdate = Math.min(valuesLength, newValuesLength);

				for (let i = 0; i < iupdate; ++i) {
					values[i] = newValues[i];
				}

				for (let i = iupdate; i < newValuesLength; ++i) {
					values.push(newValues[i]);
				}

				if (valuesLength !== newValuesLength) {
					values.length = newValuesLength;
					this._valuesLength = newValuesLength;
					isDirty = true;
				} else {
					isUpdated = true;
				}
			} else {
				if (valuesLength !== newValuesLength) {
					this._valuesLength = newValuesLength;
					isDirty = true;
				} else {
					isUpdated = true;
				}
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

	updateUploaded(): void {
		this._parent.updateUploaded();
	}

	clone(parent: EShape): EShapeLineOfAnyPointsImpl {
		return new EShapeLineOfAnyPointsImpl(parent).copy(this);
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
		return manager.addResource(`[]`);
	}

	calcHitPointAbs<RESULT>(
		x: number,
		y: number,
		threshold: number,
		range: EShapeLineOfAnyPointsTestRange | null,
		tester: EShapeLineOfAnyPointsHitTester<RESULT>,
		result: RESULT
	): boolean {
		const formatted = this.formatted;
		const pointCount = formatted.length;
		const pointValues = formatted.values;
		const size = this._size;
		const offset = this._offset;
		let istart = 0;
		let iend = pointCount;
		if (range) {
			const s = size.getLimit() * 0.5;
			const o = offset.getLimit();
			const work = EShapeLineOfAnyPointsImpl.WORK_RANGE;
			range(x, y, s, s, o, o, threshold, pointValues, work);
			istart = work[0];
			iend = work[1];
		}
		for (let i = istart, imax = Math.min(iend, pointCount); i < imax; ++i) {
			const iv = i << 1;
			const px = pointValues[iv];
			const py = pointValues[iv + 1];
			const sx = size.getX(i) * 0.5;
			const sy = size.getY(i) * 0.5;
			const ox = offset.getX(i);
			const oy = offset.getY(i);
			if (tester(x, y, sx, sy, ox, oy, px, py, i, threshold, result)) {
				return true;
			}
		}
		return false;
	}
}
