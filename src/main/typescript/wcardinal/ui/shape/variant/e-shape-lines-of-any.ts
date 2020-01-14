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

	static copyClippingAndIndex(
		clippings: Float32Array,
		indices: Uint16Array | Uint32Array,
		voffset: number,
		vcountPerPoint: number,
		ioffset: number,
		icountPerPoint: number,
		pointCount: number
	): void {
		for( let i = 1, iv = voffset + i * vcountPerPoint, idiv = i * vcountPerPoint, ii = ioffset + i * icountPerPoint;
			i < pointCount; i += 1, iv += vcountPerPoint, idiv += vcountPerPoint, ii += icountPerPoint ) {
			for( let j = 0, icd = iv * 3, ics = voffset * 3; j < vcountPerPoint; j += 1, icd += 3, ics += 3 ) {
				clippings[ icd + 0 ] = clippings[ ics + 0 ];
				clippings[ icd + 1 ] = clippings[ ics + 1 ];
				clippings[ icd + 2 ] = clippings[ ics + 2 ];
			}

			for( let j = 0, iid = ii * 3, iis = ioffset * 3; j < icountPerPoint; j += 1, iid += 3, iis += 3 ) {
				indices[ iid + 0 ] = indices[ iis + 0 ] + idiv;
				indices[ iid + 1 ] = indices[ iis + 1 ] + idiv;
				indices[ iid + 2 ] = indices[ iis + 2 ] + idiv;
			}
		}
	}

	static copyVertexAndStep(
		vertices: Float32Array,
		steps: Float32Array,
		antialiases: Float32Array,
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
		for( let i = pointCount - 1, iv = voffset + i * vcountPerPoint; 0 <= i; i -= 1, iv -= vcountPerPoint ) {
			const ip = i << 1;
			const px = pointsValues[ ip     ];
			const py = pointsValues[ ip + 1 ];
			const dx = a * px + c * py;
			const dy = b * px + d * py;
			for( let j = 0; j < vcountPerPoint; ++j ) {
				const ivd = ( iv + j ) << 1;
				const ivs = ( voffset + j ) << 1;
				const iad = ( iv + j ) << 2;
				const ias = ( voffset + j ) << 2;
				vertices[ ivd     ] = vertices[ ivs     ] + dx;
				vertices[ ivd + 1 ] = vertices[ ivs + 1 ] + dy;
				steps[ ivd     ] = steps[ ivs     ];
				steps[ ivd + 1 ] = steps[ ivs + 1 ];
				antialiases[ iad     ] = antialiases[ ias     ];
				antialiases[ iad + 1 ] = antialiases[ ias + 1 ];
				antialiases[ iad + 2 ] = antialiases[ ias + 2 ];
				antialiases[ iad + 3 ] = antialiases[ ias + 3 ];
			}
		}
	}

	static copyUvs( voffset: number, vcountPerPoint: number, pointCount: number, uvs: Float32Array ): void {
		for( let i = 1, iv = voffset + vcountPerPoint; i < pointCount; i += 1, iv += vcountPerPoint ) {
			for( let j = 0, iuvd = iv * 2, iuvs = voffset * 2; j < vcountPerPoint; j += 1, iuvd += 2, iuvs += 2 ) {
				uvs[ iuvd + 0 ] = uvs[ iuvs + 0 ];
				uvs[ iuvd + 1 ] = uvs[ iuvs + 1 ];
			}
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

		for( let i = voffset * 4, imax = i + count * 4; i < imax; i += 4 ) {
			colors[ i + 0 ] = r;
			colors[ i + 1 ] = g;
			colors[ i + 2 ] = b;
			colors[ i + 3 ] = a;
		}
	}
}
