import { EShapeLayerContainer } from "./e-shape-layer-container";

export class EShapePieceDatum {
	layer: EShapeLayerContainer;
	tags?: string[];

	constructor( layer: EShapeLayerContainer, tags: string[] | undefined ) {
		this.layer = layer;
		this.tags = tags;
	}
}
