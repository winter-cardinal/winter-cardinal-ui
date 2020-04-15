import { EShapeEmbeddedTagMapping } from "./e-shape-embedded-tag-mapping";
import { EShapeTagImpl } from "./e-shape-tag-impl";

export class EShapeEmbeddedTag extends EShapeTagImpl {
	mapping: EShapeEmbeddedTagMapping;

	constructor() {
		super();
		this.mapping = new EShapeEmbeddedTagMapping();
	}
}
