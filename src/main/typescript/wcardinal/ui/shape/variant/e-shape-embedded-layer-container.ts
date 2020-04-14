import { EShapeLayerContainer } from "../e-shape-layer-container";
import { EShapeEmbeddedLayer } from "./e-shape-embedded-layer";

export class EShapeEmbeddedLayerContainer implements EShapeLayerContainer {
	children: EShapeEmbeddedLayer[];

	constructor() {
		this.children = [];
	}

	create( name: string ): EShapeEmbeddedLayer {
		const result = new EShapeEmbeddedLayer( name );
		this.children.push( result );
		return result;
	}
}
