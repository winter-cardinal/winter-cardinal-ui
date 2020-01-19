import { utils } from "pixi.js";

const WORK_COLOR = new Float32Array( 4 );

export const buildColor = (
	color: number,
	alpha: number,
	voffset: number,
	vcount: number,
	colors: Float32Array
): void => {
	const rgba = utils.premultiplyTintToRgba( color, alpha, WORK_COLOR );
	const r = rgba[ 0 ];
	const g = rgba[ 1 ];
	const b = rgba[ 2 ];
	const a = rgba[ 3 ];

	for( let i = voffset << 2, imax = (voffset + vcount) << 2; i < imax; i += 4 ) {
		colors[ i + 0 ] = r;
		colors[ i + 1 ] = g;
		colors[ i + 2 ] = b;
		colors[ i + 3 ] = a;
	}
};
