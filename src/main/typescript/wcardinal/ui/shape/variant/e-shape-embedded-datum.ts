import { EShapeLayerContainer } from "../e-shape-layer-container";

export class EShapeEmbeddedDatum {
	name: string;
	width: number;
	height: number;
	layer: EShapeLayerContainer;

	constructor(name: string, width: number, height: number, layer: EShapeLayerContainer) {
		this.name = name;
		this.width = width;
		this.height = height;
		this.layer = layer;
	}
}
