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
import { eShapePointsFormatterCurve } from "../e-shape-points-formatter-curve";
import { EShapePointsFormatter } from "../e-shape-points-formatter";
import {
	EShapePointsFormatted,
	EShapePointsFormattedBoundary,
	EShapePointsFormattedWithBoundary
} from "../e-shape-points-formatted";
import { EShapeLineBasePointsHitTester } from "./e-shape-line-base-points-hit-tester";
import { EShapeLineBasePointsHitTesterToRange } from "./e-shape-line-base-points-hit-tester-to-range";

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
	protected _formattedId: number;
	protected _formatter?: EShapePointsFormatter | null;
	protected _formatted?: EShapePointsFormattedWithBoundary;
	protected _formattedValuesBase?: number[];
	protected _formattedBoundaryBase?: EShapePointsFormattedBoundary;

	constructor(parent: EShape, points: number[], segments: number[], style: EShapePointsStyle) {
		// Calculate the boundary
		const boundary = this.toBoundary(points, [0, 0, 0, 0]);
		const cx = (boundary[2] + boundary[0]) * 0.5;
		const cy = (boundary[3] + boundary[1]) * 0.5;
		const sx = boundary[2] - boundary[0];
		const sy = boundary[3] - boundary[1];

		// Calculate values
		const values: number[] = [];
		for (let i = 0, imax = points.length; i < imax; i += 2) {
			values.push(points[i] - cx, points[i + 1] - cy);
		}

		this._parent = parent;
		this._valuesBaseLength = values.length;
		this._values = values;
		this._segments = segments.slice(0);
		this._sizeBase = new Point(sx, sy);
		this.size = new Point(sx, sy);
		this.position = new Point(cx, cy);
		this._id = 0;
		this._style = style;
		this._formattedId = -1;
	}

	get length(): number {
		return this._values.length >> 1;
	}

	protected fit(): void {
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

				// Formatted ID, values and boundary
				if (this._id === this._formattedId) {
					const formatted = this._formatted;
					if (formatted != null) {
						// Formatted values
						const formattedValues = formatted.values;
						let formattedValuesBase = this._formattedValuesBase;
						if (formattedValuesBase == null) {
							formattedValuesBase = [];
							this._formattedValuesBase = formattedValuesBase;

							for (let i = 0, imax = formattedValues.length; i < imax; i += 2) {
								const x = formattedValues[i];
								const y = formattedValues[i + 1];
								formattedValues[i] = x * scaleX;
								formattedValues[i + 1] = y * scaleY;
								formattedValuesBase.push(x, y);
							}
						} else {
							for (let i = 0, imax = formattedValues.length; i < imax; i += 2) {
								formattedValues[i] = formattedValuesBase[i] * scaleX;
								formattedValues[i + 1] = formattedValuesBase[i + 1] * scaleY;
							}
						}

						// Formatted boundary
						const formattedBoundary = formatted.boundary;
						let formattedBoundaryBase = this._formattedBoundaryBase;
						if (formattedBoundaryBase == null) {
							formattedBoundaryBase = [0, 0, 0, 0];
							this._formattedBoundaryBase = formattedBoundaryBase;

							for (let i = 0, imax = formattedBoundary.length; i < imax; i += 2) {
								const x = formattedBoundary[i];
								const y = formattedBoundary[i + 1];
								formattedBoundary[i] = x * scaleX;
								formattedBoundary[i + 1] = y * scaleY;
								formattedBoundaryBase.push(x, y);
							}
						} else {
							for (let i = 0, imax = formattedBoundary.length; i < imax; i += 2) {
								formattedBoundary[i] = formattedBoundaryBase[i] * scaleX;
								formattedBoundary[i + 1] = formattedBoundaryBase[i + 1] * scaleY;
							}
						}

						// Formatted ID
						this._formattedId += 1;
					}
				}

				this._id += 1;
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
			let formatter = this._formatter;
			if (formatter == null) {
				if (style & EShapePointsStyle.CURVE) {
					formatter = eShapePointsFormatterCurve;
				}
			}

			if (formatter != null) {
				if (result == null) {
					result = {
						length: 0,
						values: [],
						segments: [],
						boundary: [0, 0, 0, 0],
						style: EShapePointsStyle.NONE
					};
				}
				const valuesBase = this._valuesBase;
				const segments = this._segments;
				if (valuesBase != null) {
					const length = valuesBase.length >> 1;
					formatter(length, valuesBase, segments, style, result);
					this.toBoundary(result.values, result.boundary);

					const formattedValues = result.values;
					const formattedValuesBase = formattedValues.splice(0);
					this._formattedValuesBase = formattedValuesBase;

					const formattedBoundary = result.boundary;
					const formattedBoundaryBase: EShapePointsFormattedBoundary = [
						formattedBoundary[0],
						formattedBoundary[1],
						formattedBoundary[2],
						formattedBoundary[3]
					];
					this._formattedBoundaryBase = formattedBoundaryBase;

					this.toScaled(
						formattedValues,
						formattedValuesBase,
						formattedBoundary,
						formattedBoundaryBase
					);
				} else {
					const values = this._values;
					const length = values.length >> 1;
					formatter(length, values, segments, style, result);
					this.toBoundary(result.values, result.boundary);
					this._formattedValuesBase = undefined;
					this._formattedBoundaryBase = undefined;
				}
			} else {
				result = undefined;
				this._formattedValuesBase = undefined;
				this._formattedBoundaryBase = undefined;
			}
			this._formatted = result;
		}
		return result || this;
	}

	protected toScaled(
		values: number[],
		valuesBase: number[],
		boundary: EShapePointsFormattedBoundary,
		boundaryBase: EShapePointsFormattedBoundary
	): void {
		const size = this.size;
		const sizeBase = this._sizeBase;
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

	protected toBoundary(
		values: number[],
		result: EShapePointsFormattedBoundary
	): EShapePointsFormattedBoundary {
		const valuesLength = values.length;
		if (2 <= valuesLength) {
			let xmin = values[0];
			let ymin = values[1];
			let xmax = xmin;
			let ymax = ymin;
			for (let i = 2, imax = values.length; i < imax; i += 2) {
				const x = values[i];
				const y = values[i + 1];
				xmin = Math.min(xmin, x);
				ymin = Math.min(ymin, y);
				xmax = Math.max(xmax, x);
				ymax = Math.max(ymax, y);
			}
			result[0] = xmin;
			result[1] = ymin;
			result[2] = xmax;
			result[3] = ymax;
		} else {
			result[0] = 0;
			result[1] = 0;
			result[2] = 0;
			result[3] = 0;
		}
		return result;
	}

	copy(source: EShapePoints): this {
		return this.set(source.values, source.segments, source.style);
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
					parent.uploaded = undefined;
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
