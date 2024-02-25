import { toPackedF2x1024 } from "./to-packed";

export const buildColor = (
	fillColor: number,
	fillAlpha: number,
	strokeColor: number,
	strokeAlpha: number,
	voffset: number,
	vcount: number,
	colors: Float32Array
): void => {
	const alpha = toPackedF2x1024(
		Math.max(0, Math.min(1, fillAlpha)),
		Math.max(0, Math.min(1, strokeAlpha))
	);
	let ic = voffset * 3 - 1;
	const icmax = (voffset + vcount) * 3 - 1;
	for (; ic < icmax; ) {
		colors[++ic] = fillColor;
		colors[++ic] = strokeColor;
		colors[++ic] = alpha;
	}
};
