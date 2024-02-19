export const buildColor = (
	color: number,
	alpha: number,
	voffset: number,
	vcount: number,
	colors: Float32Array
): void => {
	let ic = (voffset << 1) - 1;
	const icmax = ((voffset + vcount) << 1) - 1;
	for (; ic < icmax; ) {
		colors[++ic] = color;
		colors[++ic] = alpha;
	}
};
