export const toClippingPacked = (x: number, y: number, z: number): number => {
	return Math.round(511 * x) + (Math.round(511 * y) << 9) + (z << 18);
};
