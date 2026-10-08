export const toPackedI4x64 = (i0: number, i1: number, i2: number, i3: number): number => {
	return i0 + (i1 << 6) + (i2 << 12) + (i3 << 18);
};

export const toPackedAlphas = (a0: number, a1: number): number => {
	return Math.round(1023 * a0) + (Math.round(1023 * a1) << 10);
};

export const toPackedClippings = (x: number, y: number): number => {
	// Encode the range [-0.1, 1.1] into the 10-bit range [0, 1023]
	// Since 1023 / 1.2 = 852.5,
	return Math.round(852.5 * (x + 0.1)) + (Math.round(852.5 * (y + 0.1)) << 10);
};
