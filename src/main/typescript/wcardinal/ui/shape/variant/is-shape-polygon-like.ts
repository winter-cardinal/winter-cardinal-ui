import { EShape } from "../e-shape";
import { EShapePolygonLike } from "./e-shape-polygon-like";

export const isShapePolygonLike = (shape: EShape): shape is EShape & EShapePolygonLike => {
	return "triangulated" in shape;
};
