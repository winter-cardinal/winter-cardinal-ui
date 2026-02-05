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
import { EShapePointsFormatter } from "../e-shape-points-formatter";
import {
	EShapePointsFormatted,
	EShapePointsFormattedWithBoundary,
	toPointsBoundary
} from "../e-shape-points-formatted";
import { EShapeLineBasePointsHitTester } from "./e-shape-line-base-points-hit-tester";
import { EShapeLineBasePointsHitTesterToRange } from "./e-shape-line-base-points-hit-tester-to-range";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapePointsMarkerContainer } from "../e-shape-points-marker-container";
import { EShapePointsMarkerContainerImpl } from "../e-shape-points-marker-container-impl";
import { EShapePointsFormatters } from "../e-shape-points-formatters";
import { EShapeBoundary } from "../e-shape-boundary";

export type EShapeLinePointsSerialized = [number[], number[], number, number?];

export class EShapeLinePoints implements EShapePoints {
	protected static WORK_RANGE: [number, number] = [0, 0];

	protected _parent: EShape;
	protected _valuesBase?: number[];
	protected _valuesBaseLength: number;
	protected _values: number[];
	protected _segments: number[];
	protected _length: number;
	protected _plength: number;
	protected _parentSizeBase: Point;
	protected _parentSizeFitted: Point;
	protected _id: number;
	protected _style: EShapePointsStyle;
	protected _formattedId: number;
	protected _formatter?: EShapePointsFormatter | null;
	protected _formatted?: EShapePointsFormattedWithBoundary;

	protected _marker?: EShapePointsMarkerContainer;

	constructor(parent: EShape) {
		this._parent = parent;
		this._valuesBaseLength = 0;
		this._values = [];
		this._segments = [];
		this._length = 0;
		this._plength = 0;
		const parentSize = parent.size;
		const parentSizeX = parentSize.x;
		const parentSizeY = parentSize.y;
		this._parentSizeBase = new Point(parentSizeX, parentSizeY);
		this._parentSizeFitted = new Point(parentSizeX, parentSizeY);
		this._id = 0;
		this._style = this.newStyle();
		this._formattedId = -1;
	}

	protected newStyle(): EShapePointsStyle {
		return EShapePointsStyle.NONE;
	}

	get length(): number {
		return this._length;
	}

	get plength(): number {
		return this._plength;
	}

	toFitted(x: number, y: number): void {
		this._valuesBase = undefined;
		this._parentSizeFitted.set(x, y);
		this._parentSizeBase.set(x, y);
	}

	onSizeChange(): void {
		this.fit();
	}

	protected fit(): void {
		const parent = this._parent;
		const psizef = this._parentSizeFitted;
		const psize = parent.size;
		const psizeX = psize.x;
		const psizeY = psize.y;
		const threshold = 0.00001;
		if (Math.abs(psizeX - psizef.x) <= threshold && Math.abs(psizeY - psizef.y) <= threshold) {
			return;
		}

		psizef.set(psizeX, psizeY);
		const psizeBase = this._parentSizeBase;
		const isValidX = threshold < Math.abs(psizeBase.x);
		const isValidY = threshold < Math.abs(psizeBase.y);
		if (!isValidX && !isValidY) {
			return;
		}

		const scaleX = isValidX ? psizeX / psizeBase.x : 1;
		const scaleY = isValidY ? psizeY / psizeBase.y : 1;

		// Values
		const values = this._values;
		let valuesBase = this._valuesBase;
		if (valuesBase == null) {
			valuesBase = [];
			this._valuesBase = valuesBase;

			for (let i = 0, imax = values.length; i < imax; i += 2) {
				const x = values[i];
				const y = values[i + 1];
				values[i] = x * scaleX;
				values[i + 1] = y * scaleY;
				valuesBase.push(x, y);
			}
		} else {
			for (let i = 0, imax = values.length; i < imax; i += 2) {
				values[i] = valuesBase[i] * scaleX;
				values[i + 1] = valuesBase[i + 1] * scaleY;
			}
		}

		// Invalidate
		this._id += 1;
		if (this._formatter || this._style & EShapePointsStyle.FORMATTER_MASK) {
			const uploaded = parent.uploaded;
			if (uploaded && !uploaded.isCompatible(parent)) {
				parent.toDirty();
			}
		}
	}

	get id(): number {
		this.fit();
		return this._id;
	}

	get values(): number[] {
		this.fit();
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

	get marker(): EShapePointsMarkerContainer {
		return (this._marker ??= this.newMarker());
	}

	getMarker(): EShapePointsMarkerContainer | undefined {
		return this._marker;
	}

	protected newMarker(): EShapePointsMarkerContainer {
		return new EShapePointsMarkerContainerImpl(this);
	}

	onMarkerTypeChange(): void {
		const parent = this._parent;
		parent.uploaded = undefined;
		parent.toDirty();
	}

	onMarkerSizeChange(): void {
		this._parent.updateUploaded();
	}

	onMarkerFillChange(): void {
		this._parent.updateUploaded();
	}

	get formatter(): EShapePointsFormatter | null {
		return this._formatter || null;
	}

	set formatter(formatter: EShapePointsFormatter | null) {
		if (this._formatter !== formatter) {
			this._formattedId = -1;
			this._formatter = formatter;
			this.toDirty(true);
		}
	}

	get formatted(): EShapePointsFormatted {
		this.fit();
		const id = this._id;
		let result = this._formatted;
		if (this._formattedId !== id) {
			this._formattedId = id;

			const style = this._style;
			const formatter = this._formatter ?? EShapePointsFormatters.find(style)?.formatter;
			if (formatter != null) {
				if (result == null) {
					result = {
						length: 0,
						plength: 0,
						values: [],
						segments: [],
						boundary: [0, 0, 0, 0],
						style: EShapePointsStyle.NONE
					};
				}
				const values = this._values;
				const segments = this._segments;
				const length = values.length >> 1;
				formatter(length, values, segments, style, result);
				if (result.plength < result.length) {
					result.plength = result.length;
				}
				toPointsBoundary(result.values, result.boundary);
			} else {
				result = undefined;
			}
			this._formatted = result;
		}
		return result || this;
	}

	protected toScaled(
		values: number[],
		valuesBase: number[],
		boundary: EShapeBoundary,
		boundaryBase: EShapeBoundary
	): void {
		const size = this._parentSizeFitted;
		const sizeBase = this._parentSizeBase;
		const threshold = 0.00001;
		const hasSizeBaseX = threshold < Math.abs(sizeBase.x);
		const hasSizeBaseY = threshold < Math.abs(sizeBase.y);
		if (hasSizeBaseX || hasSizeBaseY) {
			const scaleX = hasSizeBaseX ? size.x / sizeBase.x : 1;
			const scaleY = hasSizeBaseY ? size.y / sizeBase.y : 1;

			for (let i = 0, imax = valuesBase.length; i < imax; i += 2) {
				values[i] = valuesBase[i] * scaleX;
				values[i + 1] = valuesBase[i + 1] * scaleY;
			}

			for (let i = 0, imax = boundaryBase.length; i < imax; i += 2) {
				boundary[i] = boundaryBase[i] * scaleX;
				boundary[i + 1] = boundaryBase[i + 1] * scaleY;
			}
		}
	}

	copy(source: EShapePoints): this {
		this.set(source.values, source.segments, source.style);
		const marker = source.getMarker();
		if (marker) {
			this.marker.copy(marker);
		}
		return this;
	}

	set(newValues?: number[], newSegments?: number[], newStyle?: EShapePointsStyle): this {
		let isDirty = false;
		let isUpdated = false;

		// Formatter
		const style = this._style;
		const styleFormatter = style & EShapePointsStyle.FORMATTER_MASK;
		const formatter = this._formatter;

		// Values
		if (newValues != null) {
			const values = this._values;
			const valuesBaseLength = this._valuesBaseLength;
			const newValuesLength = newValues.length;
			const iupdate = Math.min(newValuesLength, valuesBaseLength);
			const parentSize = this._parent.size;
			this.toFitted(parentSize.x, parentSize.y);
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
					if (formatter != null || styleFormatter) {
						isDirty = true;
					} else {
						isUpdated = true;
					}
				}
			} else {
				if (valuesBaseLength !== newValuesLength) {
					this._valuesBaseLength = newValuesLength;
					isDirty = true;
				} else {
					if (formatter != null || styleFormatter) {
						isDirty = true;
					} else {
						isUpdated = true;
					}
				}
			}
			const newLength = newValuesLength >> 1;
			this._length = newLength;
			if (this._plength < newLength) {
				this._plength = newLength;
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
			if (formatter != null || styleFormatter) {
				isDirty = true;
			} else {
				isUpdated = true;
			}
		}

		// Style
		if (newStyle != null) {
			if (style !== newStyle) {
				const newStyleFormatter = newStyle & EShapePointsStyle.FORMATTER_MASK;
				if (styleFormatter !== newStyleFormatter) {
					isDirty = true;
				} else {
					if (formatter != null || styleFormatter) {
						const styleClosed = style & EShapePointsStyle.CLOSED;
						const newStyleClosed = newStyle & EShapePointsStyle.CLOSED;
						if (styleClosed !== newStyleClosed) {
							isDirty = true;
						} else {
							isUpdated = true;
						}
					} else {
						isUpdated = true;
					}
				}
				this._style = newStyle;
			}
		}

		//
		if (isUpdated || isDirty) {
			this.toDirty(isDirty);
		}
		return this;
	}

	protected toDirty(revalidate: boolean): void {
		if (revalidate) {
			this._id += 1;
			const parent = this._parent;
			const uploaded = parent.uploaded;
			if (uploaded) {
				if (uploaded.isCompatible(parent)) {
					parent.updateUploaded();
				} else {
					parent.toDirty();
				}
			} else {
				parent.updateUploaded();
			}
		} else {
			this._id += 1;
			this._parent.updateUploaded();
		}
	}

	clone(parent: EShape): EShapeLinePoints {
		return new EShapeLinePoints(parent).copy(this);
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
		const values = JSON.stringify(this._values);
		const segments = JSON.stringify(this._segments);
		const style = this._style;
		let markerId = -1;
		const marker = this._marker;
		if (marker) {
			markerId = marker.serialize(manager);
		}
		return manager.addResource(`[${values},${segments},${style},${markerId}]`);
	}

	deserialize(resourceId: number, manager: EShapeResourceManagerDeserialization): void {
		const resources = manager.resources;
		if (0 <= resourceId && resourceId < resources.length) {
			let parsed = manager.getExtension<EShapeLinePointsSerialized>(resourceId);
			if (parsed == null) {
				parsed = JSON.parse(resources[resourceId]) as EShapeLinePointsSerialized;
				manager.setExtension(resourceId, parsed);
			}
			this.set(parsed[0], parsed[1], parsed[2]);
			const markerId = parsed[3];
			if (markerId != null && 0 <= markerId) {
				this.marker.deserialize(markerId, manager);
			}
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
		const formatted = this.formatted;
		const length = formatted.length;
		if (2 <= length) {
			const values = formatted.values;
			const segments = formatted.segments;
			const style = formatted.style;
			let istart = 0;
			let iend = length;
			if (toRange) {
				const work = EShapeLinePoints.WORK_RANGE;
				toRange(x, y, threshold, values, work);
				istart = work[0];
				iend = work[1];
			}
			for (let i = istart, imax = Math.min(iend, length - 1); i < imax; ++i) {
				if (toIndexOf(segments, i + 1) < 0) {
					const iv = i << 1;
					const p0x = values[iv + 0];
					const p0y = values[iv + 1];
					const p1x = values[iv + 2];
					const p1y = values[iv + 3];
					if (tester(x, y, p0x, p0y, p1x, p1y, i, threshold, result)) {
						return true;
					}
				}
			}
			if (2 < length && length <= iend && style & EShapePointsStyle.CLOSED) {
				if (toIndexOf(segments, 0) < 0) {
					const i = length - 1;
					const iv = i << 1;
					const p0x = values[iv + 0];
					const p0y = values[iv + 1];
					const p1x = values[0];
					const p1y = values[1];
					if (tester(x, y, p0x, p0y, p1x, p1y, i, threshold, result)) {
						return true;
					}
				}
			}
		}
		return false;
	}
}
