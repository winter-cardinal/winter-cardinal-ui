export const toPackedI4x64 = (i0: number, i1: number, i2: number, i3: number): number => {
	return i0 + (i1 << 6) + (i2 << 12) + (i3 << 18);
};

export const toPackedF2x1024 = (f0: number, f1: number): number => {
	return Math.round(1023 * f0) + (Math.round(1023 * f1) << 10);
};
