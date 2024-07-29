import { newSvgRoundedRect } from "./new-svg-rounded-rect";

let isPatternInjected = false;
export const newSvgRoundedCheckerboard = (
	width: number,
	height: number,
	color1: string,
	color2: string,
	stroke?: string,
	strokeWidth?: number,
	strokeOpacity?: number
): string => {
	let result = "";
	if (!isPatternInjected) {
		isPatternInjected = true;
		result =
			`<defs>` +
			`<pattern id="rounded-checkerboard-pattern" patternUnits="userSpaceOnUse" width="18" height="18">` +
			`<rect x="0" y="0" width="9" height="9" fill="${color1}" />` +
			`<rect x="9" y="0" width="9" height="9" fill="${color2}" />` +
			`<rect x="0" y="9" width="9" height="9" fill="${color2}" />` +
			`<rect x="9" y="9" width="9" height="9" fill="${color1}" />` +
			`</pattern>` +
			`</defs>`;
	}
	result += newSvgRoundedRect(
		0,
		0,
		width,
		height,
		"url(#rounded-checkerboard-pattern)",
		stroke,
		strokeWidth,
		strokeOpacity
	);
	return result;
};
