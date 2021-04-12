export const buildStep = (
	steps: Float32Array,
	clippings: Float32Array,
	voffset: number,
	vcount: number,
	swx: number,
	swy: number,
	px0: number,
	py0: number,
	px1: number,
	py1: number
): void => {
	let ic = voffset * 3;
	let is = voffset * 6;
	for (let i = 0; i < vcount; ++i) {
		steps[is + 0] = swx * clippings[ic + 0];
		steps[is + 1] = swy * clippings[ic + 1];
		steps[is + 2] = px0;
		steps[is + 3] = py0;
		steps[is + 4] = px1;
		steps[is + 5] = py1;
		ic += 3;
		is += 6;
	}
};
