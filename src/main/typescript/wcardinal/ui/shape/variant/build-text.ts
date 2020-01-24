import { EShape } from "../e-shape";

export const TEXT_VERTEX_COUNT = 4;
export const TEXT_INDEX_COUNT = 2;

export const toTextBufferCount = ( shape: EShape ): number => {
	return Math.ceil( shape.text.value.length / 12 ) * 12;
};
