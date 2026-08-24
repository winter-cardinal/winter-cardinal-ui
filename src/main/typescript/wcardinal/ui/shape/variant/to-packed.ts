export const toPackedI4x64 = (i0: number, i1: number, i2: number, i3: number): number => {
	return i0 + (i1 << 6) + (i2 << 12) + (i3 << 18);
};

export const toPackedAlphas = (a0: number, a1: number): number => {
	return Math.round(1023 * a0) + (Math.round(1023 * a1) << 10);
};

export const toPackedClippings = (x: number, y: number): number => {
	// Since 1023 / 1.1 = 930,
	// Math.round(1023 * (x / 1.1)) = Math.round(930 * x)
	return Math.round(930 * x) + (Math.round(930 * y) << 10);
};
