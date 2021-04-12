export const buildColor = (
	color: number,
	alpha: number,
	voffset: number,
	vcount: number,
	colors: Float32Array
): void => {
	const r = (((color >> 16) & 0xff) / 255.0) * alpha;
	const g = (((color >> 8) & 0xff) / 255.0) * alpha;
	const b = (((color >> 0) & 0xff) / 255.0) * alpha;
	const a = alpha;

	let ic = voffset << 2;
	for (let i = 0; i < vcount; ++i) {
		colors[ic + 0] = r;
		colors[ic + 1] = g;
		colors[ic + 2] = b;
		colors[ic + 3] = a;
		ic += 4;
	}
};
