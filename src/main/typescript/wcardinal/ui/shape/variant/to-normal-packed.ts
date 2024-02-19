export const toNormalPacked = (n0: number[], n1: number[]): number => {
	const x = Math.round(63.5 * (1 + n0[0]));
	const y = Math.round(63.5 * (1 + n1[0]));
	const z = (0 <= n0[1] ? 1 : 0) + (0 <= n1[1] ? 2 : 0);
	return x + (y << 7) + (z << 14);
};
