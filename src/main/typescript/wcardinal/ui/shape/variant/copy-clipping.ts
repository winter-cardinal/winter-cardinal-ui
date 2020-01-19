
export const copyClipping = (
	clippings: Float32Array,
	voffset: number,
	vcountPerPoint: number,
	pointCount: number
): void => {
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
};
