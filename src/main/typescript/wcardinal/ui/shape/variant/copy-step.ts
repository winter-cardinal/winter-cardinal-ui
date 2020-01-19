export const copyStep = (
	steps: Float32Array,
	antialiases: Float32Array,
	voffset: number,
	vcountPerPoint: number,
	pointCount: number
): void => {
	let iv = voffset + vcountPerPoint;
	for( let i = 1; i < pointCount; ++i ) {
		let ivd = iv << 1;
		let ivs = voffset << 1;
		let iad = iv << 2;
		let ias = voffset << 2;
		for( let j = 0; j < vcountPerPoint; ++j ) {
			steps[ ivd     ] = steps[ ivs     ];
			steps[ ivd + 1 ] = steps[ ivs + 1 ];
			antialiases[ iad     ] = antialiases[ ias     ];
			antialiases[ iad + 1 ] = antialiases[ ias + 1 ];
			antialiases[ iad + 2 ] = antialiases[ ias + 2 ];
			antialiases[ iad + 3 ] = antialiases[ ias + 3 ];
			ivd += 2;
			ivs += 2;
			iad += 4;
			ias += 4;
		}
		iv += vcountPerPoint;
	}
};
