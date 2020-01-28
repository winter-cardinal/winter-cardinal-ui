import { EShape } from "../e-shape";
import { EShapeBuffer } from "../e-shape-buffer";
import { BAR_INDEX_COUNT, BAR_VERTEX_COUNT } from "./build-bar";
import { TEXT_INDEX_COUNT, TEXT_VERTEX_COUNT, toTextBufferCount } from "./build-text";
import { EShapeBarUploaded } from "./e-shape-bar-uploaded";

export const createBarUploaded = (
	buffer: EShapeBuffer, shape: EShape,
	voffset: number, ioffset: number,
	antialiasWeight: number
): EShapeBarUploaded | null => {
	const tcount = toTextBufferCount( shape );
	const tvcount = tcount * TEXT_VERTEX_COUNT;
	const ticount = tcount * TEXT_INDEX_COUNT;
	const vcount = BAR_VERTEX_COUNT + tvcount;
	const icount = BAR_INDEX_COUNT + ticount;
	if( buffer.check( voffset, ioffset, vcount, icount ) ) {
		return new EShapeBarUploaded(
			buffer,
			voffset, ioffset,
			tvcount, ticount,
			vcount, icount,
			antialiasWeight
		).init( shape );
	}
	return null;
};
