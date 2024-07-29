import { newSvgRoundedCheckerboard } from "../common/new-svg-rounded-checkerboard";

export const newWhiteSvgRoundedCheckerboard = (
	width: number,
	height: number,
	stroke?: string,
	strokeWidth?: number,
	strokeOpacity?: number
): string => {
	return newSvgRoundedCheckerboard(
		width,
		height,
		"#bfbfbf",
		"#a5a5a5",
		stroke,
		strokeWidth,
		strokeOpacity
	);
};
