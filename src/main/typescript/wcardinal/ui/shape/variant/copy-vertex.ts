import { Matrix } from "pixi.js";
import { EShapeLineOfAnyPointsPoint } from "./e-shape-line-of-any-points-point";

export const copyVertex = (
	vertices: Float32Array,
	internalTransform: Matrix,
	voffset: number,
	vcountPerPoint: number,
	pointCount: number,
	pointsValues: number[],
	pointOffset: EShapeLineOfAnyPointsPoint
): void => {
	const a = internalTransform.a;
	const b = internalTransform.b;
	const c = internalTransform.c;
	const d = internalTransform.d;
	let i = pointCount - 1;
	let iv = voffset + i * vcountPerPoint;
	if( pointOffset.isStaticX() && pointOffset.isStaticY() ) {
		const ox = pointOffset.getX( 0 );
		const oy = pointOffset.getY( 0 );
		for( ; 0 <= i; --i ) {
			const ip = i << 1;
			const px = pointsValues[ ip     ] + ox;
			const py = pointsValues[ ip + 1 ] + oy;
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
	} else {
		for( ; 0 <= i; --i ) {
			const ip = i << 1;
			const px = pointsValues[ ip     ] + pointOffset.getX( i );
			const py = pointsValues[ ip + 1 ] + pointOffset.getY( i );
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
};
