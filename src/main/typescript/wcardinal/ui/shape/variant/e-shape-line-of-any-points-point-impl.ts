/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { isFunction } from "../../util/is-function";
import { isNumber } from "../../util/is-number";
import { EShapeLineOfAnyPointsPoint } from "./e-shape-line-of-any-points-point";
import { EShapeLineOfAnyValue } from "./e-shape-line-of-any-value";
import { isStatic } from "./is-static";
import { toComputed } from "./to-computed";

export interface EShapeLineOfAnyPointsPointImplParent {
	readonly length: number;
	updateUploaded(): void;
}

export class EShapeLineOfAnyPointsPointImpl implements EShapeLineOfAnyPointsPoint {
	protected _parent: EShapeLineOfAnyPointsPointImplParent;
	protected _id: number;
	protected _x: EShapeLineOfAnyValue;
	protected _y: EShapeLineOfAnyValue;
	protected _defX: number;
	protected _defY: number;
	protected _limit: number | null;
	protected _limitComputed: number;
	protected _limitId: number;
	protected _limitParentLength: number;

	constructor(parent: EShapeLineOfAnyPointsPointImplParent, defX: number, defY: number) {
		this._parent = parent;
		this._id = 0;
		this._x = null;
		this._y = null;
		this._defX = defX;
		this._defY = defY;
		this._limit = null;
		this._limitComputed = 0;
		this._limitId = -1;
		this._limitParentLength = 0;
	}

	get id(): number {
		return this._id;
	}

	get x(): EShapeLineOfAnyValue {
		return this._x;
	}

	set x(x: EShapeLineOfAnyValue) {
		this.set(x, undefined);
	}

	get y(): EShapeLineOfAnyValue {
		return this._y;
	}

	set y(y: EShapeLineOfAnyValue) {
		this.set(undefined, y);
	}

	get limit(): number | null {
		return this._limit;
	}

	set limit(limit: number | null) {
		this._limit = limit;
	}

	set(x?: EShapeLineOfAnyValue, y?: EShapeLineOfAnyValue): void {
		let isChanged = false;

		if (x !== undefined && this._x !== x) {
			isChanged = true;
			this._x = x;
		}

		if (y !== undefined && this._y !== y) {
			isChanged = true;
			this._y = y;
		}

		if (isChanged) {
			this._id += 1;
			this._parent.updateUploaded();
		}
	}

	getX(index: number): number {
		return toComputed(index, this._x, this._defX);
	}

	getY(index: number): number {
		return toComputed(index, this._y, this._defY);
	}

	getLimit(): number {
		const limit = this._limit;
		if (limit != null) {
			return limit;
		}
		this.updateLimitComputed();
		return this._limitComputed;
	}

	protected updateLimitComputed(): void {
		const limitId = this._id;
		const parent = this._parent;
		const limitParentLength = parent.length;
		if (this._limitId !== limitId || this._limitParentLength !== limitParentLength) {
			this._limitId = limitId;
			this._limitParentLength = limitParentLength;
			this._limitComputed = Math.max(
				this.calcLimit(this._x, limitParentLength, this._defX),
				this.calcLimit(this._y, limitParentLength, this._defY)
			);
		}
	}

	protected calcLimit(value: EShapeLineOfAnyValue, parentLenght: number, def: number): number {
		if (isNumber(value)) {
			return Math.abs(value);
		} else if (isFunction(value)) {
			if (0 < parentLenght) {
				let result = Math.abs(value(0));
				for (let i = 1; i < parentLenght; ++i) {
					result = Math.max(result, Math.abs(value(i)));
				}
				return result;
			}
			return 0;
		} else if (value != null) {
			const l = value.length;
			if (0 < l) {
				let result = value[0];
				for (let i = 1; i < l; ++i) {
					result = Math.max(result, Math.abs(value[i]));
				}
				return result;
			}
			return 0;
		} else {
			return Math.abs(def);
		}
	}

	isStaticX(): boolean {
		return isStatic(this._x);
	}

	isStaticY(): boolean {
		return isStatic(this._y);
	}

	toDirty(): void {
		this._id += 1;
	}
}
