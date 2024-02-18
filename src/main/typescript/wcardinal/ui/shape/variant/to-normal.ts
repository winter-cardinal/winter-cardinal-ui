export const toNormal = (v: number[], l: number): number[] => {
	if (0.00001 < l) {
		const f = 1 / l;
		const v0 = v[0] * f;
		const v1 = v[1] * f;
		v[0] = -v1;
		v[1] = +v0;
	} else {
		v[0] = 0;
		v[1] = 1;
	}
	return v;
};
