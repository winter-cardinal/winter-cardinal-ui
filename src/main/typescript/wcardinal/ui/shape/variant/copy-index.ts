export const copyIndex = (
	indices: Uint16Array | Uint32Array,
	vcountPerPoint: number,
	ioffset: number,
	icountPerPoint: number,
	pointCount: number
): void => {
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
};
