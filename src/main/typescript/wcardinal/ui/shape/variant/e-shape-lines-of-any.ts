/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, utils } from "pixi.js";
import { utilIsFunction } from "../../util/util-is-function";
import { utilIsNumber } from "../../util/util-is-number";
import { EShapeStroke } from "../e-shape-stroke";
import { EShapeLineOfAnyPoints, EShapeLineOfAnyPointsToHitThreshold } from "./e-shape-line-of-any-points";
import { EShapeLineOfAnyPointsFill } from "./e-shape-line-of-any-points-fill";
import { EShapeLineOfAnyPointsStroke } from "./e-shape-line-of-any-points-stroke";

export type EShapeLineOfAnyValue = null | number | number[] | (( index: number ) => number);

export class EShapeLinesOfAny {
	static isStatic( value: EShapeLineOfAnyValue ): boolean {
		return utilIsNumber( value ) || value == null;
	}

	static toComputed( index: number, value: EShapeLineOfAnyValue, def: number ): number {
		if( utilIsNumber( value ) ) {
			return value;
		} else if( utilIsFunction( value ) ) {
			return value( index );
		} else if( value ) {
			return value[ index % value.length ];
		}
		return def;
	}

	static toHitThreshold(
		target: { stroke: EShapeStroke, points: EShapeLineOfAnyPoints; },
		toThreshold: EShapeLineOfAnyPointsToHitThreshold | null
	): number {
		const stroke = target.stroke;
		const size = target.points.size.getLimit() + ( stroke.enable ? stroke.width * stroke.align : 0 );
		return ( toThreshold ?
			toThreshold( size, 1 ) :
			size * 0.5
		);
	}

	static copyIndex(
		indices: Uint16Array | Uint32Array,
		vcountPerPoint: number,
		ioffset: number,
		icountPerPoint: number,
		pointCount: number
	): void {
		let idiv = vcountPerPoint;
		let ii = ioffset + icountPerPoint;
		for( let i = 1; i < pointCount; ++i ) {
			let iid = ii * 3;
			let iis = ioffset * 3;
			for( let j = 0; j < icountPerPoint; ++j ) {
				indices[ iid + 0 ] = indices[ iis + 0 ] + idiv;
				indices[ iid + 1 ] = indices[ iis + 1 ] + idiv;
				indices[ iid + 2 ] = indices[ iis + 2 ] + idiv;
				iid += 3;
				iis += 3;
			}
			idiv += vcountPerPoint;
			ii += icountPerPoint;
		}
	}

	static copyClipping(
		clippings: Float32Array,
		voffset: number,
		vcountPerPoint: number,
		pointCount: number
	): void {
		let iv = voffset + vcountPerPoint;
		for( let i = 1; i < pointCount; ++i ) {
			let icd = iv * 3;
			let ics = voffset * 3;
			for( let j = 0; j < vcountPerPoint; ++j ) {
				clippings[ icd + 0 ] = clippings[ ics + 0 ];
				clippings[ icd + 1 ] = clippings[ ics + 1 ];
				clippings[ icd + 2 ] = clippings[ ics + 2 ];
				icd += 3;
				ics += 3;
			}
			iv += vcountPerPoint;
		}
	}

	static copyVertex(
		vertices: Float32Array,
		internalTransform: Matrix,
		voffset: number,
		vcountPerPoint: number,
		pointCount: number,
		pointsValues: number[]
	): void {
		const a = internalTransform.a;
		const b = internalTransform.b;
		const c = internalTransform.c;
		const d = internalTransform.d;
		let i = pointCount - 1;
		let iv = voffset + i * vcountPerPoint;
		for( ; 0 <= i; --i ) {
			const ip = i << 1;
			const px = pointsValues[ ip     ];
			const py = pointsValues[ ip + 1 ];
			const dx = a * px + c * py;
			const dy = b * px + d * py;
			let ivd = iv << 1;
			let ivs = voffset << 1;
			for( let j = 0; j < vcountPerPoint; ++j ) {
				vertices[ ivd     ] = vertices[ ivs     ] + dx;
				vertices[ ivd + 1 ] = vertices[ ivs + 1 ] + dy;
				ivd += 2;
				ivs += 2;
			}
			iv -= vcountPerPoint;
		}
	}

	static copyStep(
		steps: Float32Array,
		antialiases: Float32Array,
		voffset: number,
		vcountPerPoint: number,
		pointCount: number
	): void {
		let iv = voffset + vcountPerPoint;
		for( let i = 1; i < pointCount; ++i ) {
			let ivd = iv << 1;
			let ivs = voffset << 1;
			let iad = iv << 2;
			let ias = voffset << 2;
			for( let j = 0; j < vcountPerPoint; ++j ) {
				steps[ ivd     ] = steps[ ivs     ];
				steps[ ivd + 1 ] = steps[ ivs + 1 ];
				antialiases[ iad     ] = antialiases[ ias     ];
				antialiases[ iad + 1 ] = antialiases[ ias + 1 ];
				antialiases[ iad + 2 ] = antialiases[ ias + 2 ];
				antialiases[ iad + 3 ] = antialiases[ ias + 3 ];
				ivd += 2;
				ivs += 2;
				iad += 4;
				ias += 4;
			}
			iv += vcountPerPoint;
		}
	}

	static copyUvs( uvs: Float32Array, voffset: number, vcountPerPoint: number, pointCount: number ): void {
		let iv = voffset + vcountPerPoint;
		for( let i = 1; i < pointCount; ++i ) {
			let iuvd = iv << 1;
			let iuvs = voffset << 1;
			for( let j = 0; j < vcountPerPoint; ++j ) {
				uvs[ iuvd     ] = uvs[ iuvs     ];
				uvs[ iuvd + 1 ] = uvs[ iuvs + 1 ];
				iuvd += 2;
				iuvs += 2;
			}
			iv += vcountPerPoint;
		}
	}

	static updateColor(
		voffset: number,
		vcountPerPoint: number,
		point: EShapeLineOfAnyPointsStroke | EShapeLineOfAnyPointsFill,
		pointCount: number,
		colors: Float32Array,
		isEnabled: boolean,
		colorDef: number,
		alphaDef: number,
		workColor: Float32Array
	): void {
		if( isEnabled ) {
			if( point.isStaticColor() ) {
				const color = point.getColor( 0, colorDef );
				if( point.isStaticAlpha() ) {
					const alpha = point.getAlpha( 0, alphaDef );
					this.doUpdateColor( color, alpha, voffset, vcountPerPoint * pointCount, colors, workColor );
				} else {
					for( let i = 0, iv = voffset; i < pointCount; i += 1, iv += vcountPerPoint ) {
						const alpha = point.getAlpha( i, alphaDef );
						this.doUpdateColor( color, alpha, iv, vcountPerPoint, colors, workColor );
					}
				}
			} else {
				if( point.isStaticAlpha() ) {
					const alpha = point.getAlpha( 0, alphaDef );
					for( let i = 0, iv = voffset; i < pointCount; i += 1, iv += vcountPerPoint ) {
						const color = point.getColor( i, colorDef );
						this.doUpdateColor( color, alpha, iv, vcountPerPoint, colors, workColor );
					}
				} else {
					for( let i = 0, iv = voffset; i < pointCount; i += 1, iv += vcountPerPoint ) {
						const color = point.getColor( i, colorDef );
						const alpha = point.getAlpha( i, alphaDef );
						this.doUpdateColor( color, alpha, iv, vcountPerPoint, colors, workColor );
					}
				}
			}
		} else {
			if( point.isStaticColor() ) {
				const color = point.getColor( 0, colorDef );
				this.doUpdateColor( color, 0, voffset, vcountPerPoint * pointCount, colors, workColor );
			} else {
				for( let i = 0, iv = voffset; i < pointCount; i += 1, iv += vcountPerPoint ) {
					const color = point.getColor( i, colorDef );
					this.doUpdateColor( color, 0, iv, vcountPerPoint, colors, workColor );
				}
			}
		}
	}

	static doUpdateColor(
		color: number, alpha: number,
		voffset: number, count: number,
		colors: Float32Array,
		workColor: Float32Array
	) {
		const rgba = utils.premultiplyTintToRgba( color, alpha, workColor );
		const r = rgba[ 0 ];
		const g = rgba[ 1 ];
		const b = rgba[ 2 ];
		const a = rgba[ 3 ];

		for( let i = voffset << 2, imax = i + count << 2; i < imax; i += 4 ) {
			colors[ i + 0 ] = r;
			colors[ i + 1 ] = g;
			colors[ i + 2 ] = b;
			colors[ i + 3 ] = a;
		}
	}
}
