import { newSvgRoundedCheckerboard } from "../common/new-svg-rounded-checkerboard";

export const newDarkSvgRoundedCheckerboard = (
	width: number,
	height: number,
	stroke?: string,
	strokeWidth?: number,
	strokeOpacity?: number
): string => {
	return newSvgRoundedCheckerboard(
		width,
		height,
		"#5f5f5f",
		"#454545",
		stroke,
		strokeWidth,
		strokeOpacity
	);
};
