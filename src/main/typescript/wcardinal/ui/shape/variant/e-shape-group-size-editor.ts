/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Point, Rectangle } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeLayout } from "../e-shape-layout";
import { EShapeGroupSize } from "./e-shape-group-size";
import { EShapeGroupSizeLayout } from "./e-shape-group-size-layout";
import { EShapeGroupSizeParent } from "./e-shape-group-size-parent";
import { EShapeLockPart } from "./e-shape-lock-part";

export class EShapeGroupSizeEditor implements EShapeGroupSize {
	protected _parent: EShapeGroupSizeParent;
	protected _size: Point;
	protected _layouts: EShapeLayout[];
	protected _workRectForCalcRect: Rectangle = new Rectangle();
	protected _workRectForFit: Rectangle = new Rectangle();
	protected _isFittable: boolean;

	constructor(parent: EShapeGroupSizeParent, x: number, y: number, isFittable: boolean) {
		this._parent = parent;
		this._layouts = [];
		this._size = new Point(x, y);
		this._isFittable = isFittable;
	}

	init(): this {
		return this;
	}

	get x(): number {
		return this._size.x;
	}

	set x(x: number) {
		const size = this._size;
		if (size.x !== x) {
			const ox = size.x;
			size.x = x;
			this.onChange(ox, size.y);
		}
	}

	get y(): number {
		return this._size.y;
	}

	set y(y: number) {
		const size = this._size;
		if (size.y !== y) {
			const oy = size.y;
			size.y = y;
			this.onChange(size.x, oy);
		}
	}

	set(x?: number, y?: number): this {
		let isChanged = false;
		const size = this._size;
		const ox = size.x;
		const oy = size.y;
		if (x != null && ox !== x) {
			isChanged = true;
			size.x = x;
		}
		if (y != null && oy !== y) {
			isChanged = true;
			size.y = y;
		}
		if (isChanged) {
			this.onChange(ox, oy);
		}
		return this;
	}

	clone(): EShapeGroupSizeEditor {
		const size = this._size;
		return new EShapeGroupSizeEditor(this._parent, size.x, size.y, this._isFittable);
	}

	copy(): void {
		// DO NOTHING
	}

	copyFrom(point: IPoint): this {
		const x = point.x;
		const y = point.y;
		const size = this._size;
		const ox = size.x;
		const oy = size.y;
		if (ox !== x || oy !== y) {
			size.x = x;
			size.y = y;
			this.onChange(ox, oy);
		}
		return this;
	}

	copyTo(point: IPoint): IPoint {
		return this._size.copyTo(point);
	}

	equals(point: IPoint): boolean {
		return this._size.equals(point);
	}

	fit(): this {
		if (this._isFittable) {
			this.doFit();
		}
		return this;
	}

	protected doFit(): void {
		const parent = this._parent;
		parent.lock(EShapeLockPart.TRANSFORM | EShapeLockPart.TRANSFORM_PARENT);

		// Calculate the rect
		const rect = this.calcRect(this._workRectForFit);

		// Set size
		const size = this._size;
		size.set(rect.width, rect.height);

		// Calculating new position & pivot
		//
		// cx := rect.x + rect.width * 0.5
		// cy := rect.y + rect.height * 0.5
		//
		// Since the local transform need to be unchanged:
		//
		// | a c tx |   | a c px' - (a * pvx' + c * pvy') |
		// | b d ty | = | b d py' - (b * pvx' + d * pvy') |
		// | 0 0 1  |   | 0 0 1                           |
		//
		// Here, (px', py') and (pvx', pvy') are the new position
		// and the new pivot, respectively.
		//
		// Setting the new pivot (pvx', pvy') to (cx, cy) leads to
		//
		// | a c tx |   | a c px' - (a * cx + c * cy) |
		// | b d ty | = | b d py' - (b * cx + d * cy) |
		// | 0 0 1  |   | 0 0 1                       |
		//
		// tx = px - (a * pvx + c * pvy) = px' - (a * cx + c * cy)
		// ty = py - (b * pvx + d * pvy) = py' - (b * cx + d * cy)
		//
		// Thus, the new position (px', py') is
		//
		// px' = px + (a * (cx - pvx) + c * (cy - pvy))
		// py' = py + (b * (cy - pvx) + d * (cy - pvy))
		parent.updateTransform();
		const transform = parent.transform;
		const cx = rect.x + rect.width * 0.5;
		const cy = rect.y + rect.height * 0.5;
		const position = transform.position;
		const localTransform = transform.localTransform;
		const a = localTransform.a;
		const b = localTransform.b;
		const c = localTransform.c;
		const d = localTransform.d;
		const pivot = transform.pivot;
		const pvx = pivot.x;
		const pvy = pivot.y;
		const dpvx = cx - pvx;
		const dpvy = cy - pvy;
		position.set(position.x + (a * dpvx + c * dpvy), position.y + (b * dpvx + d * dpvy));
		pivot.set(cx, cy);

		// Reset the data
		this.reset(parent.children, this._layouts, size);

		//
		parent.unlock(EShapeLockPart.TRANSFORM | EShapeLockPart.TRANSFORM_PARENT, true);
	}

	protected reset(children: EShape[], layouts: EShapeLayout[], size: IPoint): void {
		for (let i = 0, imax = Math.min(layouts.length, children.length); i < imax; ++i) {
			const child = children[i];
			const layout = layouts[i];
			if (layout.isCompatible(child)) {
				layout.reset(child, size.x, size.y);
			} else {
				layouts.length = i;
				break;
			}
		}
		if (children.length < layouts.length) {
			layouts.length = children.length;
		}
	}

	calcRect(result: Rectangle): Rectangle {
		const parent = this._parent;
		const children = parent.children;
		if (children.length <= 0) {
			result.x = 0;
			result.y = 0;
			result.width = 0;
			result.height = 0;
		} else {
			const workRect = this._workRectForCalcRect;
			children[0].getBoundsLocal(false, result);
			for (let i = 1, imax = children.length; i < imax; ++i) {
				const child = children[i];
				child.getBoundsLocal(false, workRect);
				result.enlarge(workRect);
			}
		}
		return result;
	}

	protected onChange(ox: number, oy: number): void {
		const parent = this._parent;
		const size = this._size;
		const pivot = parent.transform.pivot;
		this.onChange_(parent.children, this._layouts, size.x, size.y, pivot.x, pivot.y, ox, oy);
		parent.onSizeChange();
	}

	protected onChange_(
		children: EShape[],
		layouts: EShapeLayout[],
		sx: number,
		sy: number,
		px: number,
		py: number,
		ox: number,
		oy: number
	): void {
		for (let i = 0, imax = Math.min(layouts.length, children.length); i < imax; ++i) {
			const child = children[i];
			const layout = layouts[i];
			if (layout.isCompatible(child)) {
				layout.update(child, sx, sy, px, py);
			} else {
				layouts.length = i;
				break;
			}
		}
		for (let i = layouts.length, imax = children.length; i < imax; ++i) {
			const child = children[i];
			const layout = this.newLayout(child, ox, oy);
			layout.update(child, sx, sy, px, py);
			layouts.push(layout);
		}
		if (layouts.length !== children.length) {
			layouts.length = children.length;
		}
	}

	protected newLayout(shape: EShape, ox: number, oy: number): EShapeLayout {
		return shape.layout || new EShapeGroupSizeLayout(shape, ox, oy);
	}
}
