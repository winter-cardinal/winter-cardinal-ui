export const buildNullIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number,
	icount: number
): void => {
	for (let ii = ioffset * 3, iimax = (ioffset + icount) * 3; ii < iimax; ii += 3) {
		indices[ii + 0] = voffset;
		indices[ii + 1] = voffset;
		indices[ii + 2] = voffset;
	}
};

export const buildNullVertex = (vertices: Float32Array, voffset: number, vcount: number): void => {
	for (let i = voffset * 2, imax = (voffset + vcount) * 2; i < imax; i += 2) {
		vertices[i + 0] = 0;
		vertices[i + 1] = 0;
	}
};

export const buildNullStep = (steps: Float32Array, voffset: number, vcount: number): void => {
	for (let i = voffset * 6, imax = (voffset + vcount) * 6; i < imax; i += 6) {
		steps[i + 0] = 0;
		steps[i + 1] = 0;
		steps[i + 2] = 0;
		steps[i + 3] = 0;
		steps[i + 4] = 0;
		steps[i + 5] = 0;
	}
};

export const buildNullUv = (uvs: Float32Array, voffset: number, vcount: number): void => {
	for (let i = voffset * 2, imax = (voffset + vcount) * 2; i < imax; i += 2) {
		uvs[i + 0] = 0;
		uvs[i + 1] = 0;
	}
};
