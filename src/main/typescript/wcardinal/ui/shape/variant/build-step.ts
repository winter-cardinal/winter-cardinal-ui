
export const buildStep = (
	steps: Float32Array,
	antialiases: Float32Array,
	clippings: Float32Array,
	voffset: number, vcount: number,
	swx: number, swy: number, px0: number, py0: number, px1: number, py1: number
): void => {
	const istart = voffset * 2;
	const imax = istart + vcount * 2;
	const jstart = voffset * 3;
	const kstart = voffset * 4;
	for( let i = istart, j = jstart, k = kstart; i < imax; i += 2, j += 3, k += 4 ) {
		const cx = clippings[ j + 0 ];
		const cy = clippings[ j + 1 ];
		steps[ i + 0 ] = swx * cx;
		steps[ i + 1 ] = swy * cy;
		antialiases[ k + 0 ] = px0;
		antialiases[ k + 1 ] = py0;
		antialiases[ k + 2 ] = px1;
		antialiases[ k + 3 ] = py1;
	}
};
