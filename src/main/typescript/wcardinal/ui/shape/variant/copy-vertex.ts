import { Matrix } from "pixi.js";

export const copyVertex = (
	vertices: Float32Array,
	internalTransform: Matrix,
	voffset: number,
	vcountPerPoint: number,
	pointCount: number,
	pointsValues: number[]
): void => {
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
};
