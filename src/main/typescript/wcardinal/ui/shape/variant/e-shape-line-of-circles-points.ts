/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, Point } from "pixi.js";
import { EShapePoints, EShapePointsHitTester, EShapePointsStyle, EShapePointsTestRange } from "../e-shape-points";
import { EShapePointsParent } from "../e-shape-points-parent";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";

export class EShapeLineOfCirclesPoints implements EShapePoints {
	protected static WORK_RANGE: [ number, number ] = [ 0, 0 ];

	protected _parent: EShapePointsParent;
	protected _values: number[];
	protected _valuesLength: number;
	protected _segments: number[];
	readonly position: Point;
	protected _id: number;

	constructor(
		parent: EShapePointsParent,
		points: number[]
	) {
		const values: number[] = [];
		let cx = 0;
		let cy = 0;
		const pointsLength = points.length;
		if( 2 <= pointsLength ) {
			cx = points[ 0 ];
			cy = points[ 1 ];
			for( let i = 2; i < pointsLength; i += 2 ) {
				const x = points[ i ];
				const y = points[ i + 1 ];
				values.push( x, y );
			}
		}
		this._parent = parent;
		this._values = values;
		this._valuesLength = values.length;
		this._segments = [];
		this.position = new Point( cx, cy );
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
			this._id += 1;
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
			const parent = this._parent;
			parent.uploaded = undefined;
			parent.toDirty();
		} else if( isUpdated ) {
			this._parent.updateUploaded();
		}

		return this;
	}

	clone( parent: EShapePointsParent ): EShapeLineOfCirclesPoints {
		return new EShapeLineOfCirclesPoints( parent, this._values );
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
		return manager.add( `[${JSON.stringify(this._values)}]` );
	}

	calcHitPointAbs<RESULT>(
		x: number, y: number,
		ax: number, ay: number,
		threshold: number,
		range: EShapePointsTestRange | null,
		tester: EShapePointsHitTester<RESULT>,
		result: RESULT
	): boolean {
		const pointCount = this.length;
		const pointValues = this._values;
		let istart = 0;
		let iend = pointCount;
		if( range ) {
			const rangeResult = range( x, y, ax, ay, threshold, pointValues, EShapeLineOfCirclesPoints.WORK_RANGE );
			istart = rangeResult[ 0 ];
			iend = rangeResult[ 1 ];
		}
		tester = tester;
		for( let i = istart, imax = Math.min( iend, pointCount ), iv = 2 * istart; i < imax; i += 1, iv += 2 ) {
			const px = pointValues[ iv + 0 ];
			const py = pointValues[ iv + 1 ];
			if( tester( x, y, ax, ay, px, py, 0, 0, i, threshold, result ) ) {
				return true;
			}
		}
		return false;
	}
}
