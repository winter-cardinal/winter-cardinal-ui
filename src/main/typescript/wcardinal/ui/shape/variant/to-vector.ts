export const toVector = (
	x0: number,
	y0: number,
	x1: number,
	y1: number,
	result: number[]
): number[] => {
	result[0] = x1 - x0;
	result[1] = y1 - y0;
	return result;
};
