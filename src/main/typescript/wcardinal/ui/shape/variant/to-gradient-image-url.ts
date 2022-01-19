/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { toSvgUrl } from "../../util/to-svg-url";
import { UtilRgb } from "../../util/util-rgb";
import { EShapeGradientLike } from "../e-shape-gradient";

export const toGradientImageUrl = (gradient: EShapeGradientLike): string => {
	const direction = gradient.direction;
	const points = gradient.points;

	let stops = "";
	for (let i = 0, imax = points.length; i < imax; ++i) {
		const point = points[i];
		const color = UtilRgb.toCode(point.color);
		const alpha = point.alpha;
		const offset = point.position * 100;
		stops += `<stop offset="${offset}%" stop-color="#${color}" stop-opacity="${alpha}" />`;
	}

	const radian = (direction * Math.PI) / 180;
	const dx = 0.5 * Math.cos(radian);
	const dy = -0.5 * Math.sin(radian);

	const url = toSvgUrl(
		/* eslint-disable prettier/prettier */
		`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">` +
			`<defs>` +
				`<linearGradient id="o2glkm3aeu2oio" x1="${0.5 - dx}" x2="${0.5 + dx}" y1="${0.5 - dy}" y2="${0.5 + dy}">` +
					stops +
				`</linearGradient>` +
			`</defs>` +
			`<rect x="0" y="0" width="32" height="32" stroke="none" fill="url(#o2glkm3aeu2oio)" />` +
		`</svg>`
		/* eslint-enable prettier/prettier */
	);

	return url;
};
