export const toNormalPacked = (n0: number[], n1: number[]): number => {
	const r = 128;
	const f = (r - 1) * 0.5;
	const x = Math.round(f * (1 + n0[0]));
	const y = Math.round(f * (1 + n1[0]));
	const z = (0 <= n0[1] ? 1 : 0) + (0 <= n1[1] ? 2 : 0);
	return x + y * r + z * r * r;
};
