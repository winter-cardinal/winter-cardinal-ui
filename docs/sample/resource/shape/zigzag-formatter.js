(function() {
	const at = [0];
	const af = [1, 0];

	const acopy = (source, result) => {
		const sourceLength = source.length;
		for (let i = 0; i < sourceLength; ++i) {
			result[i] = source[i];
		}
		if (result.length !== sourceLength) {
			result.length = sourceLength;
		}
		return result;
	};

	window.zigzagFormatter = (length, values, segments, style, result) => {
		const rvalues = result.values;
		const rsegments = result.segments;

		// Copy the style
		result.style = style;

		// If the length is less than 2, just copy the original.
		if (length <= 1) {
			acopy(values, rvalues);
			acopy(segments, rsegments);
			result.length = length;
			return result;
		}

		// Calculate the total length
		let x0 = values[0];
		let y0 = values[1];
		let t = 0;
		const isClosed = !!(style & wcardinal.ui.EShapePointsStyle.CLOSED);
		const imax = isClosed ? length + 1 : length;
		for (let i = 1, iv = 2; i < imax; ++i) {
			const x1 = values[iv + 0];
			const y1 = values[iv + 1];
			const dx = x1 - x0;
			const dy = y1 - y0;
			const d = dx * dx + dy * dy;
			const l = Math.sqrt(d);
			const f = 1 / l;
			const fx = f * dx;
			const fy = f * dy;
			t += l;
			at[i] = t;
			af[iv + 0] = fx;
			af[iv + 1] = fy;
			x0 = x1;
			y0 = y1;
			if (isClosed && i === length - 1) {
				iv = 0;
			} else {
				iv += 2;
			}
		}
		if (!isClosed) {
			af[0] = af[2];
			af[1] = af[3];
		}

		// Calculate the space at the both edges.
		let span = 10 / Math.sqrt(3);
		let space = 0;
		if (!isClosed) {
			const m = Math.round((t - 4 * span) / (2 * span));
			if (m < 1) {
				acopy(values, rvalues);
				acopy(segments, rsegments);
				result.length = length;
				return result;
			}
			space = 2 * span;
			span = 0.5 * (t - 4 * span) / m;
		}

		// Fill the first vertex
		let irv = 0;
		let irs = 0;
		if (!isClosed) {
			rvalues[0] = values[0];
			rvalues[1] = values[1];
			irv += 2;
		}

		// Fill middle vertices
		let t0 = 0;
		x0 = values[0];
		y0 = values[1];
		let fx0 = af[0];
		let fy0 = af[1];
		const ims = 0;
		const ime = Math.round((t - 2 * space) / span);
		for (let i = 1, iv = 2; i < imax; i += 1) {
			const x1 = values[iv + 0];
			const y1 = values[iv + 1];
			const t1 = at[i];
			const fx1 = af[iv + 0];
			const fy1 = af[iv + 1];
			if (0 <= wcardinal.ui.toIndexOf(segments, iv >> 1)) {
				rvalues[irv + 0] = x0;
				rvalues[irv + 1] = y0;
				irv += 2;
				rsegments[irs] = irv >> 1;
				irs += 1;
			} else {
				const im0 = (t0 - space) / span;
				const im1 = (t1 - space) / span;
				for (let im = Math.max(ims, Math.ceil(im0)); im <= im1 && im <= ime; ++im) {
					const d = span * (im - im0);
					const x2 = x0 + fx1 * d;
					const y2 = y0 + fy1 * d;
					if (im % 2 === 0) {
						rvalues[irv + 0] = x2;
						rvalues[irv + 1] = y2;
					} else {
						const w = 0 <= fx0 * fy1 - fy0 * fx1 ? +10 : -10;
						rvalues[irv + 0] = x2 + fy1 * w;
						rvalues[irv + 1] = y2 - fx1 * w;
					}
					irv += 2;
				}
			}
			x0 = x1;
			y0 = y1;
			t0 = t1;
			fx0 = fx1;
			fy0 = fy1;
			if (isClosed && i === length - 1) {
				iv = 0;
			} else {
				iv += 2;
			}
		}

		// Fill the last vertex
		if (!isClosed) {
			const iv = (length - 1) << 1;
			if (0 <= wcardinal.ui.toIndexOf(segments, length - 1)) {
				rvalues[irv + 0] = x0;
				rvalues[irv + 1] = y0;
				irv += 2;
				rsegments[irs] = irv >> 1;
				irs += 1;
			} else {
				rvalues[irv + 0] = values[iv + 0];
				rvalues[irv + 1] = values[iv + 1];
				irv += 2;
			}
		}

		// Remove the remaining vertices
		rvalues.length = irv;
		rsegments.length = irs;
		result.length = irv >> 1;

		// Done
		return result;
	};
}());
