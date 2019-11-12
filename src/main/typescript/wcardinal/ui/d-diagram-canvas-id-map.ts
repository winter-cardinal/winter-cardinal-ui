import { EShape } from "./shape/e-shape";

export interface DDiagramCanvasIdMap {
	[ id: string ]: EShape[] | undefined;
}
