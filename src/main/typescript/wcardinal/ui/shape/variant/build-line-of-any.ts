import { buildColor } from "./build-color";
import { EShapeLineOfAnyPointsFill } from "./e-shape-line-of-any-points-fill";
import { EShapeLineOfAnyPointsStroke } from "./e-shape-line-of-any-points-stroke";

export const toLineOfAnyPointCount = (pointCount: number): number => {
	return ((pointCount >> 4) + (0 < (pointCount & 0xf) ? 1 : 0)) << 4;
};

/**
 * Build a vertex buffer of colors.
 *
 * @param vo Vertex pffset
 * @param vcpp Vertex count per point
 * @param pf Point Fill
 * @param ps Point stroke
 * @param pc Point count
 * @param colors Vertex buffer of colors
 * @param ife True if fills are enabled
 * @param ise True if strokes are enabled
 * @param cfd Default fill color
 * @param afd Default fill alpha
 * @param csd Default stroke color
 * @param asd Default stroke alpha
 */
export const buildLineOfAnyColor = (
	vo: number,
	vcpp: number,
	pf: EShapeLineOfAnyPointsFill,
	ps: EShapeLineOfAnyPointsStroke,
	pc: number,
	colors: Float32Array,
	ife: boolean,
	ise: boolean,
	cfd: number,
	afd: number,
	csd: number,
	asd: number
): void => {
	if (ife) {
		if (pf.isStaticColor()) {
			const cf = pf.getColor(0, cfd);
			if (pf.isStaticAlpha()) {
				const af = pf.getAlpha(0, afd);
				buildLineOfAnyColor0(vo, vcpp, pf, ps, pc, colors, ise, csd, asd, cf, af);
			} else {
				buildLineOfAnyColor1(vo, vcpp, pf, ps, pc, colors, ise, csd, asd, cf, afd);
			}
		} else {
			if (pf.isStaticAlpha()) {
				const af = pf.getAlpha(0, afd);
				buildLineOfAnyColor2(vo, vcpp, pf, ps, pc, colors, ise, csd, asd, cfd, af);
			} else {
				buildLineOfAnyColor3(vo, vcpp, pf, ps, pc, colors, ise, csd, asd, cfd, afd);
			}
		}
	} else {
		if (pf.isStaticColor()) {
			const cf = pf.getColor(0, cfd);
			buildLineOfAnyColor0(vo, vcpp, pf, ps, pc, colors, ise, csd, asd, cf, 0);
		} else {
			buildLineOfAnyColor2(vo, vcpp, pf, ps, pc, colors, ise, csd, asd, cfd, 0);
		}
	}
};

const buildLineOfAnyColor0 = (
	vo: number,
	vcpp: number,
	pf: EShapeLineOfAnyPointsFill,
	ps: EShapeLineOfAnyPointsStroke,
	pc: number,
	colors: Float32Array,
	ise: boolean,
	csd: number,
	asd: number,
	cf: number,
	af: number
): void => {
	if (ise) {
		if (ps.isStaticColor()) {
			const cs = ps.getColor(0, csd);
			if (ps.isStaticAlpha()) {
				const as = ps.getAlpha(0, asd);
				buildColor(cf, af, cs, as, vo, vcpp * pc, colors);
			} else {
				for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
					const as = ps.getAlpha(i, asd);
					buildColor(cf, af, cs, as, iv, vcpp, colors);
				}
			}
		} else {
			if (ps.isStaticAlpha()) {
				const as = ps.getAlpha(0, asd);
				for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
					const cs = ps.getColor(i, csd);
					buildColor(cf, af, cs, as, iv, vcpp, colors);
				}
			} else {
				for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
					const cs = ps.getColor(i, csd);
					const as = ps.getAlpha(i, asd);
					buildColor(cf, af, cs, as, iv, vcpp, colors);
				}
			}
		}
	} else {
		if (ps.isStaticColor()) {
			const cs = ps.getColor(0, csd);
			buildColor(cf, af, cs, 0, vo, vcpp * pc, colors);
		} else {
			for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
				const cs = ps.getColor(i, csd);
				buildColor(cf, af, cs, 0, iv, vcpp, colors);
			}
		}
	}
};

const buildLineOfAnyColor1 = (
	vo: number,
	vcpp: number,
	pf: EShapeLineOfAnyPointsFill,
	ps: EShapeLineOfAnyPointsStroke,
	pc: number,
	colors: Float32Array,
	ise: boolean,
	csd: number,
	asd: number,
	cf: number,
	afd: number
): void => {
	if (ise) {
		if (ps.isStaticColor()) {
			const cs = ps.getColor(0, csd);
			if (ps.isStaticAlpha()) {
				const as = ps.getAlpha(0, asd);
				for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
					const af = pf.getAlpha(i, afd);
					buildColor(cf, af, cs, as, iv, vcpp, colors);
				}
			} else {
				for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
					const af = pf.getAlpha(i, afd);
					const as = ps.getAlpha(i, asd);
					buildColor(cf, af, cs, as, iv, vcpp, colors);
				}
			}
		} else {
			if (ps.isStaticAlpha()) {
				const as = ps.getAlpha(0, asd);
				for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
					const af = pf.getAlpha(i, afd);
					const cs = ps.getColor(i, csd);
					buildColor(cf, af, cs, as, iv, vcpp, colors);
				}
			} else {
				for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
					const af = pf.getAlpha(i, afd);
					const cs = ps.getColor(i, csd);
					const as = ps.getAlpha(i, asd);
					buildColor(cf, af, cs, as, iv, vcpp, colors);
				}
			}
		}
	} else {
		if (ps.isStaticColor()) {
			const cs = ps.getColor(0, csd);
			for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
				const af = pf.getAlpha(i, afd);
				buildColor(cf, af, cs, 0, iv, vcpp, colors);
			}
		} else {
			for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
				const af = pf.getAlpha(i, afd);
				const cs = ps.getColor(i, csd);
				buildColor(cf, af, cs, 0, iv, vcpp, colors);
			}
		}
	}
};

const buildLineOfAnyColor2 = (
	vo: number,
	vcpp: number,
	pf: EShapeLineOfAnyPointsFill,
	ps: EShapeLineOfAnyPointsStroke,
	pc: number,
	colors: Float32Array,
	ise: boolean,
	csd: number,
	asd: number,
	cfd: number,
	af: number
): void => {
	if (ise) {
		if (ps.isStaticColor()) {
			const cs = ps.getColor(0, csd);
			if (ps.isStaticAlpha()) {
				const as = ps.getAlpha(0, asd);
				for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
					const cf = pf.getColor(i, cfd);
					buildColor(cf, af, cs, as, iv, vcpp, colors);
				}
			} else {
				for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
					const cf = pf.getColor(i, cfd);
					const as = ps.getAlpha(i, asd);
					buildColor(cf, af, cs, as, iv, vcpp, colors);
				}
			}
		} else {
			if (ps.isStaticAlpha()) {
				const as = ps.getAlpha(0, asd);
				for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
					const cf = pf.getColor(i, cfd);
					const cs = ps.getColor(i, csd);
					buildColor(cf, af, cs, as, iv, vcpp, colors);
				}
			} else {
				for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
					const cf = pf.getColor(i, cfd);
					const cs = ps.getColor(i, csd);
					const as = ps.getAlpha(i, asd);
					buildColor(cf, af, cs, as, iv, vcpp, colors);
				}
			}
		}
	} else {
		if (ps.isStaticColor()) {
			const cs = ps.getColor(0, csd);
			for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
				const cf = pf.getColor(i, cfd);
				buildColor(cf, af, cs, 0, iv, vcpp, colors);
			}
		} else {
			for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
				const cf = pf.getColor(i, cfd);
				const cs = ps.getColor(i, csd);
				buildColor(cf, af, cs, 0, iv, vcpp, colors);
			}
		}
	}
};

const buildLineOfAnyColor3 = (
	vo: number,
	vcpp: number,
	pf: EShapeLineOfAnyPointsFill,
	ps: EShapeLineOfAnyPointsStroke,
	pc: number,
	colors: Float32Array,
	ise: boolean,
	csd: number,
	asd: number,
	cfd: number,
	afd: number
): void => {
	if (ise) {
		if (ps.isStaticColor()) {
			const cs = ps.getColor(0, csd);
			if (ps.isStaticAlpha()) {
				const as = ps.getAlpha(0, asd);
				for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
					const cf = pf.getColor(i, cfd);
					const af = pf.getAlpha(i, afd);
					buildColor(cf, af, cs, as, iv, vcpp, colors);
				}
			} else {
				for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
					const cf = pf.getColor(i, cfd);
					const af = pf.getAlpha(i, afd);
					const as = ps.getAlpha(i, asd);
					buildColor(cf, af, cs, as, iv, vcpp, colors);
				}
			}
		} else {
			if (ps.isStaticAlpha()) {
				const as = ps.getAlpha(0, asd);
				for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
					const cf = pf.getColor(i, cfd);
					const af = pf.getAlpha(i, afd);
					const cs = ps.getColor(i, csd);
					buildColor(cf, af, cs, as, iv, vcpp, colors);
				}
			} else {
				for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
					const cf = pf.getColor(i, cfd);
					const af = pf.getAlpha(i, afd);
					const cs = ps.getColor(i, csd);
					const as = ps.getAlpha(i, asd);
					buildColor(cf, af, cs, as, iv, vcpp, colors);
				}
			}
		}
	} else {
		if (ps.isStaticColor()) {
			const cs = ps.getColor(0, csd);
			for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
				const cf = pf.getColor(i, cfd);
				const af = pf.getAlpha(i, afd);
				buildColor(cf, af, cs, 0, iv, vcpp, colors);
			}
		} else {
			for (let i = 0, iv = vo; i < pc; i += 1, iv += vcpp) {
				const cf = pf.getColor(i, cfd);
				const af = pf.getAlpha(i, afd);
				const cs = ps.getColor(i, csd);
				buildColor(cf, af, cs, 0, iv, vcpp, colors);
			}
		}
	}
};
