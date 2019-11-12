import { EShapeTagValue } from "./shape/e-shape-tag-value";

export interface DDiagramCanvasTagMap {
	[ id: string ]: EShapeTagValue[] | undefined;
}
