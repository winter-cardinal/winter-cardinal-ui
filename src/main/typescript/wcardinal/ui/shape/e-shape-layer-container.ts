import { EShape } from "./e-shape";

export interface EShapeLayerContainer {
	children: EShape[];
	create( name: string ): EShape;
}
