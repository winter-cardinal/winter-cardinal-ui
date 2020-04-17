import { EShapeLayerContainer } from "../e-shape-layer-container";

export class EShapeEmbeddedDatum {
	name: string;
	width: number;
	height: number;
	tags: string[] | undefined;
	layer: EShapeLayerContainer;

	constructor( name: string, width: number, height: number, tags: string[] | undefined, layer: EShapeLayerContainer ) {
		this.name = name;
		this.width = width;
		this.height = height;
		this.tags = tags;
		this.layer = layer;
	}
}
