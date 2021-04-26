import { newPolygonDefinition, PolygonDefinition } from "./build-polygon";

let RECTANGLE_DEFINITION: PolygonDefinition | undefined;
export const getRectangleDefinition = (): PolygonDefinition => {
	let result = RECTANGLE_DEFINITION;
	if (result == null) {
		result = newPolygonDefinition(
			[-0.5, -0.5, +0.5, -0.5, +0.5, +0.5, -0.5, +0.5],
			[0, 0],
			[-0.5, -0.5, +0.5, -0.5, +0.5, +0.5, -0.5, +0.5]
		);
		RECTANGLE_DEFINITION = result;
	}
	return result;
};
