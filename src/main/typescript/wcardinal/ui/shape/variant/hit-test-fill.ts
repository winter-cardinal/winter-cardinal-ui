import { EShapeFill } from "../e-shape-fill";
import { EShapeFillDirection } from "../e-shape-fill-direction";

export const hitTestFill = (
	x: number,
	y: number,
	ax: number,
	ay: number,
	fill: EShapeFill
): boolean => {
	if (fill.enable) {
		const percent = Math.max(0, Math.min(1, fill.percent));
		if (1 <= percent) {
			return true;
		}

		switch (fill.direction) {
			case EShapeFillDirection.TOP:
				if (y + ay <= percent * (2 * ay)) {
					return true;
				}
				break;
			case EShapeFillDirection.RIGHT:
				if ((1 - percent) * (2 * ax) <= x + ax) {
					return true;
				}
				break;
			case EShapeFillDirection.BOTTOM:
				if ((1 - percent) * (2 * ay) <= y + ay) {
					return true;
				}
				break;
			case EShapeFillDirection.LEFT:
				if (x + ax <= percent * (2 * ax)) {
					return true;
				}
				break;
		}
	}
	return false;
};
