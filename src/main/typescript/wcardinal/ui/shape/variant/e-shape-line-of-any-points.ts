/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point } from "pixi.js";
import { EShapePoints, EShapePointsStyle } from "../e-shape-points";
import { EShapePointsParent } from "../e-shape-points-parent";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeLineOfAnyPointsFill } from "./e-shape-line-of-any-points-fill";
import { EShapeLineOfAnyPointsFillImpl } from "./e-shape-line-of-any-points-fill-impl";
import { EShapeLineOfAnyPointsSize } from "./e-shape-line-of-any-points-size";
import { EShapeLineOfAnyPointsSizeImpl } from "./e-shape-line-of-any-points-size-impl";
import { EShapeLineOfAnyPointsStroke } from "./e-shape-line-of-any-points-stroke";
import { EShapeLineOfAnyPointsStrokeImpl } from "./e-shape-line-of-any-points-stroke-impl";

export type EShapeLineOfAnyPointsToHitThreshold = (
	size: number,
	scale: number
) => number;

export type EShapeLineOfAnyPointsTestRange = (
	x: number, y: number,
	ax: number, ay: number,
	threshold: number,
	values: number[],
	result: [ number, number ]
) => [ number, number ];

export type EShapeLineOfAnyPointsHitTester<RESULT> = (
	x: number, y: number,
	ax: number, ay: number,
	px: number, py: number,
	index: number,
	threshold: number,
	result: RESULT
) => boolean;

export class EShapeLineOfAnyPoints implements EShapePoints {
	protected static WORK_RANGE: [ number, number ] = [ 0, 0 ];

	protected _parent: EShapePointsParent;
	protected _values: number[];
	protected _valuesLength: number;
	protected _segments: number[];
	protected _size: EShapeLineOfAnyPointsSize;
	protected _fill: EShapeLineOfAnyPointsFill;
	protected _stroke: EShapeLineOfAnyPointsStroke;
	protected _id: number;

	constructor( parent: EShapePointsParent ) {
		this._parent = parent;
		this._values = [];
		this._valuesLength = 0;
		this._segments = [];
		this._size = new EShapeLineOfAnyPointsSizeImpl( this );
		this._fill = new EShapeLineOfAnyPointsFillImpl( parent );
		this._stroke = new EShapeLineOfAnyPointsStrokeImpl( parent );
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

	set values( values: number[] ) {
		this.set( values, undefined, undefined );
	}

	get segments(): number[] {
		return this._segments;
	}

	set segments( segments: number[] ) {
		// DO NOTHING
	}

	get style(): EShapePointsStyle {
		return EShapePointsStyle.NONE;
	}

	set style( style: EShapePointsStyle ) {
		this.set( undefined, undefined, style );
	}

	get size(): EShapeLineOfAnyPointsSize {
		return this._size;
	}

	get fill(): EShapeLineOfAnyPointsFill {
		return this._fill;
	}

	get stroke(): EShapeLineOfAnyPointsStroke {
		return this._stroke;
	}

	copy( source: EShapePoints ): this {
		return this.set( source.values, source.segments, source.style );
	}

	set( newValues?: number[], newSegments?: number[], newStyle?: EShapePointsStyle ): this {
		let isDirty = false;
		let isUpdated = false;

		// Values
		if( newValues != null ) {
			const values = this._values;
			const valuesLength = this._valuesLength;
			const newValuesLength = newValues.length;
			if( values !== newValues ) {
				const iupdate = Math.min( valuesLength, newValuesLength );

				for( let i = 0; i < iupdate; ++i ) {
					values[ i ] = newValues[ i ];
				}

				for( let i = iupdate; i < newValuesLength; ++i ) {
					values.push( newValues[ i ] );
				}

				if( valuesLength !== newValuesLength ) {
					values.length = newValuesLength;
					this._valuesLength = newValuesLength;
					isDirty = true;
				} else {
					isUpdated = true;
				}
			} else {
				if( valuesLength !== newValuesLength ) {
					this._valuesLength = newValuesLength;
					isDirty = true;
				} else {
					isUpdated = true;
				}
			}
		}

		//
		if( isDirty ) {
			this._id += 1;
			const parent = this._parent;
			parent.uploaded = undefined;
			parent.toDirty();
		} else if( isUpdated ) {
			this._id += 1;
			this._parent.updateUploaded();
		}

		return this;
	}

	updateUploaded(): void {
		this._parent.updateUploaded();
	}

	clone( parent: EShapePointsParent ): EShapeLineOfAnyPoints {
		return new EShapeLineOfAnyPoints( parent );
	}

	toPoints( transform: Matrix ): Point[] {
		const result: Point[] = [];
		const values = this.values;
		for( let i = 0, imax = values.length; i < imax; i += 2 ) {
			const point = new Point( values[ i + 0 ], values[ i + 1 ] );
			result.push( transform.apply( point, point ) );
		}
		return result;
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		return manager.add( `[]` );
	}

	calcHitPointAbs<RESULT>(
		x: number, y: number,
		threshold: number,
		range: EShapeLineOfAnyPointsTestRange | null,
		tester: EShapeLineOfAnyPointsHitTester<RESULT>,
		result: RESULT
	): boolean {
		const pointCount = this.length;
		const pointValues = this._values;
		const size = this._size;
		let istart = 0;
		let iend = pointCount;
		if( range ) {
			const s = size.getLimit() * 0.5;
			const rangeResult = range( x, y, s, s, threshold, pointValues, EShapeLineOfAnyPoints.WORK_RANGE );
			istart = rangeResult[ 0 ];
			iend = rangeResult[ 1 ];
		}
		tester = tester;
		for( let i = istart, imax = Math.min( iend, pointCount ), iv = istart << 1; i < imax; i += 1, iv += 2 ) {
			const px = pointValues[ iv     ];
			const py = pointValues[ iv + 1 ];
			const sx = size.getX( i ) * 0.5;
			const sy = size.getY( i ) * 0.5;
			if( tester( x, y, sx, sy, px, py, i, threshold, result ) ) {
				return true;
			}
		}
		return false;
	}
}
