import { Matrix, Point, TextureUvs } from "pixi.js";
import { UtilCharacterIterator } from "../../util/util-character-iterator";
import { EShape } from "../e-shape";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import {
	EShapeTextAtlas,
	EShapeTextAtlasCharacter,
	EShapeTextStyle,
	EShapeTextWeight
} from "../e-shape-text";
import { EShapeTextAlignHorizontal } from "../e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "../e-shape-text-align-vertical";
import { EShapeTextDirection } from "../e-shape-text-direction";
import { toLength } from "./to-length";
import { toScaleInvariant } from "./to-scale-invariant";

export const TEXT_VERTEX_COUNT = 4;
export const TEXT_INDEX_COUNT = 2;
export const TEXT_FMIN: number = 0.00001;
const TEXT_WORK_POINT: Point = new Point();

export const toTextBufferCount = (shape: EShape): number => {
	return Math.ceil(shape.text.value.length / 12) * 12;
};

export const buildTextClipping = (
	clippings: Float32Array,
	voffset: number,
	vcount: number
): void => {
	let ic = voffset * 3 - 1;
	const icmax = (voffset + vcount) * 3 - 1;
	for (; ic < icmax; ) {
		clippings[++ic] = 0;
		clippings[++ic] = 0;
		clippings[++ic] = 2;
	}
};

export const buildTextIndex = (
	indices: Uint16Array | Uint32Array,
	voffset: number,
	ioffset: number,
	icount: number
): void => {
	let ii = ioffset * 3 - 1;
	const iimax = (ioffset + icount) * 3 - 1;
	let iv = voffset;
	for (; ii < iimax; ) {
		indices[++ii] = iv;
		indices[++ii] = iv + 1;
		indices[++ii] = iv + 3;

		indices[++ii] = iv + 1;
		indices[++ii] = iv + 2;
		indices[++ii] = iv + 3;
		iv += 4;
	}
};

export const buildTextStep = (
	steps: Float32Array,
	voffset: number,
	vcount: number,
	textAtlas: EShapeTextAtlas | undefined,
	textSize: number,
	textOutlineWidth: number,
	textWeight: EShapeTextWeight,
	scaleX: number,
	scaleY: number
): void => {
	let is = voffset * 6 - 1;
	const ismax = (voffset + vcount) * 6 - 1;
	const scaleInvariant = toScaleInvariant(EShapeStrokeStyle.NONE);
	if (textAtlas != null) {
		const scale = textAtlas.font.size / (textSize * (scaleX + scaleY) * 0.5);
		const position = textWeight === EShapeTextWeight.NORMAL ? 0.0 : 0.05;
		for (; is < ismax; ) {
			steps[++is] = textOutlineWidth;
			steps[++is] = scaleInvariant;
			steps[++is] = scale;
			steps[++is] = 1;
			steps[++is] = 0;
			steps[++is] = position;
		}
	} else {
		for (; is < ismax; ) {
			steps[++is] = 0;
			steps[++is] = scaleInvariant;
			steps[++is] = 0;
			steps[++is] = 1;
			steps[++is] = 0;
			steps[++is] = 0;
		}
	}
};

const getTextBBox = (
	halign: EShapeTextAlignHorizontal,
	valign: EShapeTextAlignVertical,
	hoffset: number,
	voffset: number,
	hpadding: number,
	vpadding: number,
	width: number,
	height: number,
	x0: number,
	y0: number,
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	x3: number,
	y3: number,
	hnx: number,
	hny: number,
	vnx: number,
	vny: number,
	result: Point
): void => {
	switch (halign) {
		case EShapeTextAlignHorizontal.LEFT:
			switch (valign) {
				case EShapeTextAlignVertical.TOP:
					result.x = x0 + hnx * (hoffset + hpadding) + vnx * (voffset + vpadding);
					result.y = y0 + hny * (hoffset + hpadding) + vny * (voffset + vpadding);
					break;
				case EShapeTextAlignVertical.MIDDLE:
					result.x =
						0.5 * (x0 + x3) +
						hnx * (hoffset + hpadding) +
						vnx * (voffset - 0.5 * height);
					result.y =
						0.5 * (y0 + y3) +
						hny * (hoffset + hpadding) +
						vny * (voffset - 0.5 * height);
					break;
				case EShapeTextAlignVertical.BOTTOM:
					result.x =
						x3 + hnx * (hoffset + hpadding) + vnx * (voffset - vpadding - height);
					result.y =
						y3 + hny * (hoffset + hpadding) + vny * (voffset - vpadding - height);
					break;
				case EShapeTextAlignVertical.OUTSIDE_TOP:
					result.x =
						x0 + hnx * (hoffset + hpadding) + vnx * (voffset - vpadding - height);
					result.y =
						y0 + hny * (hoffset + hpadding) + vny * (voffset - vpadding - height);
					break;
				case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
					result.x = x3 + hnx * (hoffset + hpadding) + vnx * (voffset + vpadding);
					result.y = y3 + hny * (hoffset + hpadding) + vny * (voffset + vpadding);
					break;
			}
			break;
		case EShapeTextAlignHorizontal.CENTER:
			switch (valign) {
				case EShapeTextAlignVertical.TOP:
					result.x =
						0.5 * (x0 + x1) +
						hnx * (hoffset - 0.5 * width) +
						vnx * (voffset + vpadding);
					result.y =
						0.5 * (y0 + y1) +
						hny * (hoffset - 0.5 * width) +
						vny * (voffset + vpadding);
					break;
				case EShapeTextAlignVertical.MIDDLE:
					result.x =
						0.5 * (x0 + x2) +
						hnx * (hoffset - 0.5 * width) +
						vnx * (voffset - 0.5 * height);
					result.y =
						0.5 * (y0 + y2) +
						hny * (hoffset - 0.5 * width) +
						vny * (voffset - 0.5 * height);
					break;
				case EShapeTextAlignVertical.BOTTOM:
					result.x =
						0.5 * (x3 + x2) +
						hnx * (hoffset - 0.5 * width) +
						vnx * (voffset - vpadding - height);
					result.y =
						0.5 * (y3 + y2) +
						hny * (hoffset - 0.5 * width) +
						vny * (voffset - vpadding - height);
					break;
				case EShapeTextAlignVertical.OUTSIDE_TOP:
					result.x =
						0.5 * (x0 + x1) +
						hnx * (hoffset - 0.5 * width) +
						vnx * (voffset - vpadding - height);
					result.y =
						0.5 * (y0 + y1) +
						hny * (hoffset - 0.5 * width) +
						vny * (voffset - vpadding - height);
					break;
				case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
					result.x =
						0.5 * (x3 + x2) +
						hnx * (hoffset - 0.5 * width) +
						vnx * (voffset + vpadding);
					result.y =
						0.5 * (y3 + y2) +
						hny * (hoffset - 0.5 * width) +
						vny * (voffset + vpadding);
					break;
			}
			break;
		case EShapeTextAlignHorizontal.RIGHT:
			switch (valign) {
				case EShapeTextAlignVertical.TOP:
					result.x = x1 + hnx * (hoffset - hpadding - width) + vnx * (voffset + vpadding);
					result.y = y1 + hny * (hoffset - hpadding - width) + vny * (voffset + vpadding);
					break;
				case EShapeTextAlignVertical.MIDDLE:
					result.x =
						0.5 * (x1 + x2) +
						hnx * (hoffset - hpadding - width) +
						vnx * (voffset - 0.5 * height);
					result.y =
						0.5 * (y1 + y2) +
						hny * (hoffset - hpadding - width) +
						vny * (voffset - 0.5 * height);
					break;
				case EShapeTextAlignVertical.BOTTOM:
					result.x =
						x2 +
						hnx * (hoffset - hpadding - width) +
						vnx * (voffset - vpadding - height);
					result.y =
						y2 +
						hny * (hoffset - hpadding - width) +
						vny * (voffset - vpadding - height);
					break;
				case EShapeTextAlignVertical.OUTSIDE_TOP:
					result.x =
						x1 +
						hnx * (hoffset - hpadding - width) +
						vnx * (voffset - vpadding - height);
					result.y =
						y1 +
						hny * (hoffset - hpadding - width) +
						vny * (voffset - vpadding - height);
					break;
				case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
					result.x = x2 + hnx * (hoffset - hpadding - width) + vnx * (voffset + vpadding);
					result.y = y2 + hny * (hoffset - hpadding - width) + vny * (voffset + vpadding);
					break;
			}
			break;
		case EShapeTextAlignHorizontal.OUTSIDE_LEFT:
			switch (valign) {
				case EShapeTextAlignVertical.TOP:
					result.x = x0 + hnx * (hoffset - hpadding - width) + vnx * (voffset + vpadding);
					result.y = y0 + hny * (hoffset - hpadding - width) + vny * (voffset + vpadding);
					break;
				case EShapeTextAlignVertical.MIDDLE:
					result.x =
						0.5 * (x0 + x3) +
						hnx * (hoffset - hpadding - width) +
						vnx * (voffset - 0.5 * height);
					result.y =
						0.5 * (y0 + y3) +
						hny * (hoffset - hpadding - width) +
						vny * (voffset - 0.5 * height);
					break;
				case EShapeTextAlignVertical.BOTTOM:
					result.x =
						x3 +
						hnx * (hoffset - hpadding - width) +
						vnx * (voffset - vpadding - height);
					result.y =
						y3 +
						hny * (hoffset - hpadding - width) +
						vny * (voffset - vpadding - height);
					break;
				case EShapeTextAlignVertical.OUTSIDE_TOP:
					result.x =
						x0 +
						hnx * (hoffset - hpadding - width) +
						vnx * (voffset - vpadding - height);
					result.y =
						y0 +
						hny * (hoffset - hpadding - width) +
						vny * (voffset - vpadding - height);
					break;
				case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
					result.x = x3 + hnx * (hoffset - hpadding - width) + vnx * (voffset + vpadding);
					result.y = y3 + hny * (hoffset - hpadding - width) + vny * (voffset + vpadding);
					break;
			}
			break;
		case EShapeTextAlignHorizontal.OUTSIDE_RIGHT:
			switch (valign) {
				case EShapeTextAlignVertical.TOP:
					result.x = x1 + hnx * (hoffset + hpadding) + vnx * (voffset + vpadding);
					result.y = y1 + hny * (hoffset + hpadding) + vny * (voffset + vpadding);
					break;
				case EShapeTextAlignVertical.MIDDLE:
					result.x =
						0.5 * (x1 + x2) +
						hnx * (hoffset + hpadding) +
						vnx * (voffset - 0.5 * height);
					result.y =
						0.5 * (y1 + y2) +
						hny * (hoffset + hpadding) +
						vny * (voffset - 0.5 * height);
					break;
				case EShapeTextAlignVertical.BOTTOM:
					result.x =
						x2 + hnx * (hoffset + hpadding) + vnx * (voffset - vpadding - height);
					result.y =
						y2 + hny * (hoffset + hpadding) + vny * (voffset - vpadding - height);
					break;
				case EShapeTextAlignVertical.OUTSIDE_TOP:
					result.x =
						x1 + hnx * (hoffset + hpadding) + vnx * (voffset - vpadding - height);
					result.y =
						y1 + hny * (hoffset + hpadding) + vny * (voffset - vpadding - height);
					break;
				case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
					result.x = x2 + hnx * (hoffset + hpadding) + vnx * (voffset + vpadding);
					result.y = y2 + hny * (hoffset + hpadding) + vny * (voffset + vpadding);
					break;
			}
			break;
	}
};

const rotateAlignHorizontalRight = (align: EShapeTextAlignHorizontal): EShapeTextAlignVertical => {
	switch (align) {
		case EShapeTextAlignHorizontal.LEFT:
			return EShapeTextAlignVertical.BOTTOM;
		case EShapeTextAlignHorizontal.CENTER:
			return EShapeTextAlignVertical.MIDDLE;
		case EShapeTextAlignHorizontal.RIGHT:
			return EShapeTextAlignVertical.TOP;
		case EShapeTextAlignHorizontal.OUTSIDE_LEFT:
			return EShapeTextAlignVertical.OUTSIDE_BOTTOM;
		case EShapeTextAlignHorizontal.OUTSIDE_RIGHT:
			return EShapeTextAlignVertical.OUTSIDE_TOP;
	}
};

const rotateAlignVerticalRight = (align: EShapeTextAlignVertical): EShapeTextAlignHorizontal => {
	switch (align) {
		case EShapeTextAlignVertical.TOP:
			return EShapeTextAlignHorizontal.LEFT;
		case EShapeTextAlignVertical.MIDDLE:
			return EShapeTextAlignHorizontal.CENTER;
		case EShapeTextAlignVertical.BOTTOM:
			return EShapeTextAlignHorizontal.RIGHT;
		case EShapeTextAlignVertical.OUTSIDE_TOP:
			return EShapeTextAlignHorizontal.OUTSIDE_LEFT;
		case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
			return EShapeTextAlignHorizontal.OUTSIDE_RIGHT;
	}
};

const rotateAlignHorizontalLeft = (align: EShapeTextAlignHorizontal): EShapeTextAlignVertical => {
	switch (align) {
		case EShapeTextAlignHorizontal.LEFT:
			return EShapeTextAlignVertical.TOP;
		case EShapeTextAlignHorizontal.CENTER:
			return EShapeTextAlignVertical.MIDDLE;
		case EShapeTextAlignHorizontal.RIGHT:
			return EShapeTextAlignVertical.BOTTOM;
		case EShapeTextAlignHorizontal.OUTSIDE_LEFT:
			return EShapeTextAlignVertical.OUTSIDE_TOP;
		case EShapeTextAlignHorizontal.OUTSIDE_RIGHT:
			return EShapeTextAlignVertical.OUTSIDE_BOTTOM;
	}
};

const rotateAlignVerticalLeft = (align: EShapeTextAlignVertical): EShapeTextAlignHorizontal => {
	switch (align) {
		case EShapeTextAlignVertical.TOP:
			return EShapeTextAlignHorizontal.RIGHT;
		case EShapeTextAlignVertical.MIDDLE:
			return EShapeTextAlignHorizontal.CENTER;
		case EShapeTextAlignVertical.BOTTOM:
			return EShapeTextAlignHorizontal.LEFT;
		case EShapeTextAlignVertical.OUTSIDE_TOP:
			return EShapeTextAlignHorizontal.OUTSIDE_RIGHT;
		case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
			return EShapeTextAlignHorizontal.OUTSIDE_LEFT;
	}
};

const invertAlignHorizontal = (align: EShapeTextAlignHorizontal): EShapeTextAlignHorizontal => {
	switch (align) {
		case EShapeTextAlignHorizontal.LEFT:
			return EShapeTextAlignHorizontal.RIGHT;
		case EShapeTextAlignHorizontal.CENTER:
			return EShapeTextAlignHorizontal.CENTER;
		case EShapeTextAlignHorizontal.RIGHT:
			return EShapeTextAlignHorizontal.LEFT;
		case EShapeTextAlignHorizontal.OUTSIDE_LEFT:
			return EShapeTextAlignHorizontal.OUTSIDE_RIGHT;
		case EShapeTextAlignHorizontal.OUTSIDE_RIGHT:
			return EShapeTextAlignHorizontal.OUTSIDE_LEFT;
	}
};

const invertAlignVertical = (align: EShapeTextAlignVertical): EShapeTextAlignVertical => {
	switch (align) {
		case EShapeTextAlignVertical.TOP:
			return EShapeTextAlignVertical.BOTTOM;
		case EShapeTextAlignVertical.MIDDLE:
			return EShapeTextAlignVertical.MIDDLE;
		case EShapeTextAlignVertical.BOTTOM:
			return EShapeTextAlignVertical.TOP;
		case EShapeTextAlignVertical.OUTSIDE_TOP:
			return EShapeTextAlignVertical.OUTSIDE_BOTTOM;
		case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
			return EShapeTextAlignVertical.OUTSIDE_TOP;
	}
};

export const buildTextVertex = (
	vertices: Float32Array,
	uvs: Float32Array,
	voffset: number,
	vcount: number,
	originX: number,
	originY: number,
	sizeX: number,
	sizeY: number,
	textAtlas: EShapeTextAtlas,
	textSize: number,
	textValue: string,
	textStyle: EShapeTextStyle,
	textAlignHorizontal: EShapeTextAlignHorizontal,
	textAlignVertical: EShapeTextAlignVertical,
	textOffsetHorizontal: number,
	textOffsetVertical: number,
	textSpacingHorizontal: number,
	textSpacingVertical: number,
	textDirection: EShapeTextDirection,
	textPaddingHorizontal: number,
	textPaddingVertical: number,
	textClipping: boolean,
	textFitting: boolean,
	textWorld: number[],
	textureUvs: TextureUvs,
	internalTransform: Matrix
): void => {
	// Calculate the transformed positions
	//
	//  0               1
	// |---------------|
	// |               |
	// |3              |2
	// |---------------|
	//
	const sx = sizeX * 0.5;
	const sy = sizeY * 0.5;

	const a = internalTransform.a;
	const b = internalTransform.b;
	const c = internalTransform.c;
	const d = internalTransform.d;
	const tx = internalTransform.tx;
	const ty = internalTransform.ty;

	const ltx = originX - sx;
	const lty = originY - sy;
	const rtx = originX + sx;
	const rty = originY - sy;
	const rbx = originX + sx;
	const rby = originY + sy;
	const x0 = a * ltx + c * lty + tx;
	const y0 = b * ltx + d * lty + ty;
	const x1 = a * rtx + c * rty + tx;
	const y1 = b * rtx + d * rty + ty;
	const x2 = a * rbx + c * rby + tx;
	const y2 = b * rbx + d * rby + ty;
	const x3 = x0 + (x2 - x1);
	const y3 = y0 + (y2 - y1);

	// Horizontal normal
	const hl = toLength(x0, y0, x1, y1);
	let hnl = toLength(0, 0, a, b);
	let hnx = 1;
	let hny = 0;
	if (TEXT_FMIN < hnl) {
		const hnli = 1 / hnl;
		hnx = a * hnli;
		hny = b * hnli;
	}

	// Vertical normal
	const vl = toLength(x0, y0, x3, y3);
	let vnl = toLength(0, 0, c, d);
	let vnx = 0;
	let vny = 1;
	if (TEXT_FMIN < hnl) {
		const vnli = 1 / vnl;
		vnx = c * vnli;
		vny = d * vnli;
	}

	const work = TEXT_WORK_POINT;
	switch (textDirection) {
		case EShapeTextDirection.LEFT_TO_RIGHT:
			// DO NOTHING
			break;
		case EShapeTextDirection.TOP_TO_BOTTOM:
			work.set(vnx, vny);
			vnx = -hnx;
			vny = -hny;
			hnx = work.x;
			hny = work.y;

			work.x = vnl;
			vnl = hnl;
			hnl = work.x;
			break;
		case EShapeTextDirection.BOTTOM_TO_TOP:
			work.set(vnx, vny);
			vnx = hnx;
			vny = hny;
			hnx = -work.x;
			hny = -work.y;

			work.x = vnl;
			vnl = hnl;
			hnl = work.x;
			break;
		case EShapeTextDirection.RIGHT_TO_LEFT:
			hnx = -hnx;
			hny = -hny;
			vnx = -vnx;
			vny = -vny;
			break;
	}

	// Calculate the width / height
	let width = 0;
	let height = 0;
	let heightChar = 0;
	let textSizeY = textSize * vnl;
	let lineHeight = Math.max(0, textSize + textSpacingVertical) * vnl;
	let lineWidth = 0;
	let lineCount = 1;
	const textAtlasCharacters = textAtlas.characters;
	const iterator = UtilCharacterIterator.from(textValue);
	let advancePrevious = 0;
	while (iterator.hasNext()) {
		const character = iterator.next();
		if (character !== "\n") {
			if (0 < advancePrevious) {
				lineWidth += Math.max(0, advancePrevious + textSpacingHorizontal);
			}
			const data = textAtlasCharacters[character];
			if (data) {
				advancePrevious = data.advance;
				heightChar = data.height;
			} else {
				advancePrevious = 0;
			}
		} else {
			lineWidth += advancePrevious;
			advancePrevious = 0;
			width = Math.max(width, lineWidth);
			lineWidth = 0;
			height += lineHeight;
			lineCount += 1;
		}
	}
	lineWidth += advancePrevious;
	width = Math.max(width, lineWidth);
	height += textSizeY;
	lineWidth = 0;

	if (textFitting && isIn(textAlignHorizontal, textAlignVertical)) {
		let w0 = 0;
		let h0 = 0;
		switch (textDirection) {
			case EShapeTextDirection.LEFT_TO_RIGHT:
			case EShapeTextDirection.RIGHT_TO_LEFT:
				w0 = Math.max(0, hl - textPaddingHorizontal * 2);
				h0 = Math.max(0, vl - textPaddingVertical * 2);
				break;
			case EShapeTextDirection.TOP_TO_BOTTOM:
			case EShapeTextDirection.BOTTOM_TO_TOP:
				w0 = Math.max(0, vl - textPaddingVertical * 2);
				h0 = Math.max(0, hl - textPaddingHorizontal * 2);
				break;
		}
		const w1 = width * hnl * (textSize / textAtlas.font.size);
		const h1 = height;
		const s = Math.min(1, Math.min(w0 / w1, h0 / h1));
		textSize *= s;
		textSizeY *= s;
		lineHeight *= s;
		height *= s;
	}

	const scaleZ = textSize / textAtlas.font.size;
	const scaleX = hnl * scaleZ;
	const scaleY = vnl * scaleZ;
	width *= scaleX;
	heightChar *= scaleY;

	//
	let tx0 = 0;
	let ty0 = 0;
	let lineWidthMaximum = NaN;
	switch (textDirection) {
		case EShapeTextDirection.LEFT_TO_RIGHT:
			getTextBBox(
				textAlignHorizontal,
				textAlignVertical,
				textOffsetHorizontal,
				textOffsetVertical,
				textPaddingHorizontal,
				textPaddingVertical,
				width,
				height,
				x0,
				y0,
				x1,
				y1,
				x2,
				y2,
				x3,
				y3,
				hnx,
				hny,
				vnx,
				vny,
				work
			);
			tx0 = work.x;
			ty0 = work.y;
			if (textClipping && isIn(textAlignHorizontal, textAlignVertical)) {
				lineWidthMaximum = hl - textPaddingHorizontal * 2;
			}
			break;
		case EShapeTextDirection.TOP_TO_BOTTOM:
			getTextBBox(
				rotateAlignVerticalRight(textAlignVertical),
				rotateAlignHorizontalRight(textAlignHorizontal),
				textOffsetVertical,
				textOffsetHorizontal,
				textPaddingVertical,
				textPaddingHorizontal,
				width,
				height,
				x1,
				y1,
				x2,
				y2,
				x3,
				y3,
				x0,
				y0,
				hnx,
				hny,
				vnx,
				vny,
				work
			);
			tx0 = work.x;
			ty0 = work.y;
			if (textClipping && isIn(textAlignHorizontal, textAlignVertical)) {
				lineWidthMaximum = vl - textPaddingVertical * 2;
			}
			break;
		case EShapeTextDirection.BOTTOM_TO_TOP:
			getTextBBox(
				rotateAlignVerticalLeft(textAlignVertical),
				rotateAlignHorizontalLeft(textAlignHorizontal),
				textOffsetVertical,
				textOffsetHorizontal,
				textPaddingVertical,
				textPaddingHorizontal,
				width,
				height,
				x3,
				y3,
				x0,
				y0,
				x1,
				y1,
				x2,
				y2,
				hnx,
				hny,
				vnx,
				vny,
				work
			);
			tx0 = work.x;
			ty0 = work.y;
			if (textClipping && isIn(textAlignHorizontal, textAlignVertical)) {
				lineWidthMaximum = vl - textPaddingVertical * 2;
			}
			break;
		case EShapeTextDirection.RIGHT_TO_LEFT:
			getTextBBox(
				invertAlignHorizontal(textAlignHorizontal),
				invertAlignVertical(textAlignVertical),
				textOffsetHorizontal,
				textOffsetVertical,
				textPaddingHorizontal,
				textPaddingVertical,
				width,
				height,
				x2,
				y2,
				x3,
				y3,
				x0,
				y0,
				x1,
				y1,
				hnx,
				hny,
				vnx,
				vny,
				work
			);
			tx0 = work.x;
			ty0 = work.y;
			if (textClipping && isIn(textAlignHorizontal, textAlignVertical)) {
				lineWidthMaximum = hl - textPaddingHorizontal * 2;
			}
			break;
	}

	//
	if (lineWidthMaximum < width) {
		const dwidth = (width - lineWidthMaximum) * 0.5;
		textWorld[0] = tx0 + hnx * dwidth;
		textWorld[1] = ty0 + hny * dwidth;
		textWorld[2] = hnx;
		textWorld[3] = hny;
		textWorld[4] = vnx;
		textWorld[5] = vny;
		textWorld[6] = lineWidthMaximum;
		textWorld[7] = height;
		textWorld[8] = hnl;
		textWorld[9] = vnl;
	} else {
		textWorld[0] = tx0;
		textWorld[1] = ty0;
		textWorld[2] = hnx;
		textWorld[3] = hny;
		textWorld[4] = vnx;
		textWorld[5] = vny;
		textWorld[6] = width;
		textWorld[7] = height;
		textWorld[8] = hnl;
		textWorld[9] = vnl;
	}

	// Texture
	const uvx0 = textureUvs.x0;
	const uvx1 = textureUvs.x1;
	const uvx3 = textureUvs.x3;
	const uvy0 = textureUvs.y0;
	const uvy1 = textureUvs.y1;
	const uvy3 = textureUvs.y3;

	const duvx01 = uvx1 - uvx0;
	const duvy01 = uvy1 - uvy0;
	const duvx03 = uvx3 - uvx0;
	const duvy03 = uvy3 - uvy0;

	// Vertices & UVs
	const lhx = lineHeight * vnx;
	const lhy = lineHeight * vny;

	const snx = scaleX * hnx;
	const sny = scaleX * hny;

	const offsetY = (heightChar - textSizeY) * 0.5;
	const oyx = offsetY * vnx;
	const oyy = offsetY * vny;

	const offsetItalic = textStyle === EShapeTextStyle.NORMAL ? 0 : textSize * 0.25;
	let bx0 = tx0 - oyx + offsetItalic * snx;
	let by0 = ty0 - oyy + offsetItalic * sny;
	let bx3 = tx0 + oyx + textSizeY * vnx;
	let by3 = ty0 + oyy + textSizeY * vny;
	let cx0 = bx0;
	let cy0 = by0;
	let cx3 = bx3;
	let cy3 = by3;

	lineWidth = 0;
	advancePrevious = 0;
	iterator.position = 0;
	lineCount = 0;
	let iv = voffset * 2;
	for (; iterator.hasNext(); iv += 8) {
		const character = iterator.next();
		if (character !== "\n") {
			const lineWidthPrevious = lineWidth;
			if (0 < advancePrevious) {
				lineWidth += Math.max(0, advancePrevious + textSpacingHorizontal);
			}

			const ax = lineWidth * snx;
			const ay = lineWidth * sny;
			cx0 = bx0 + ax;
			cy0 = by0 + ay;
			cx3 = bx3 + ax;
			cy3 = by3 + ay;

			const data = textAtlasCharacters[character];
			lineCount += 1;
			if (data) {
				const advance = data.advance;
				if (lineWidthMaximum < (lineWidth + advance) * scaleX) {
					const dots = textAtlasCharacters["..."];
					if (dots) {
						if (
							1 < lineCount &&
							lineWidthMaximum < (lineWidth + dots.advance) * scaleX
						) {
							lineWidth = lineWidthPrevious;
							iv -= 8;
							lineCount -= 1;
							const bx = lineWidth * snx;
							const by = lineWidth * sny;
							cx0 = bx0 + bx;
							cy0 = by0 + by;
							cx3 = bx3 + bx;
							cy3 = by3 + by;
						}

						advancePrevious = dots.advance;

						writeCharacter(
							vertices,
							uvs,
							iv,
							dots,
							textAtlas,
							snx,
							sny,
							cx0,
							cy0,
							cx3,
							cy3,
							duvx01,
							duvy01,
							duvx03,
							duvy03,
							uvx0,
							uvy0
						);

						for (iv += 8; true; iv += 8) {
							if (iterator.hasNext() && iterator.advance("\n")) {
								writeCharacterEmpty(
									vertices,
									uvs,
									iv,
									cx0,
									cy0,
									cx3,
									cy3,
									uvx0,
									uvy0,
									uvx3,
									uvy3
								);
								lineCount += 1;
							} else {
								iv -= 8;
								break;
							}
						}
					} else {
						advancePrevious = advance;

						writeCharacterEmpty(
							vertices,
							uvs,
							iv,
							cx0,
							cy0,
							cx3,
							cy3,
							uvx0,
							uvy0,
							uvx3,
							uvy3
						);
					}
				} else {
					advancePrevious = advance;

					writeCharacter(
						vertices,
						uvs,
						iv,
						data,
						textAtlas,
						snx,
						sny,
						cx0,
						cy0,
						cx3,
						cy3,
						duvx01,
						duvy01,
						duvx03,
						duvy03,
						uvx0,
						uvy0
					);
				}
			} else {
				advancePrevious = 0;

				writeCharacterEmpty(vertices, uvs, iv, cx0, cy0, cx3, cy3, uvx0, uvy0, uvx3, uvy3);
			}
		} else {
			lineWidth += advancePrevious;
			advancePrevious = 0;

			bx0 += lhx;
			by0 += lhy;
			bx3 += lhx;
			by3 += lhy;
			cx0 = bx0;
			cy0 = by0;
			cx3 = bx3;
			cy3 = by3;

			writeCharacterEmpty(vertices, uvs, iv, cx0, cy0, cx3, cy3, uvx0, uvy0, uvx3, uvy3);

			adjustTextAlignment(
				vertices,
				hnx,
				hny,
				lineCount,
				iv,
				width - lineWidth * scaleX,
				textDirection,
				textAlignHorizontal,
				textAlignVertical
			);
			lineWidth = 0;
			lineCount = 0;
		}
	}

	lineWidth += advancePrevious;
	adjustTextAlignment(
		vertices,
		hnx,
		hny,
		lineCount,
		iv,
		width - lineWidth * scaleX,
		textDirection,
		textAlignHorizontal,
		textAlignVertical
	);

	for (const ivmax = (voffset + vcount) * 2; iv < ivmax; iv += 2) {
		vertices[iv + 0] = tx0;
		vertices[iv + 1] = ty0;
		uvs[iv + 0] = uvx0;
		uvs[iv + 1] = uvy0;
	}
};

const isIn = (
	textAlignHorizontal: EShapeTextAlignHorizontal,
	textAlignVertical: EShapeTextAlignVertical
): boolean => {
	switch (textAlignHorizontal) {
		case EShapeTextAlignHorizontal.LEFT:
		case EShapeTextAlignHorizontal.CENTER:
		case EShapeTextAlignHorizontal.RIGHT:
			switch (textAlignVertical) {
				case EShapeTextAlignVertical.TOP:
				case EShapeTextAlignVertical.MIDDLE:
				case EShapeTextAlignVertical.BOTTOM:
					return true;
					break;
			}
			break;
	}
	return false;
};

const writeCharacterEmpty = (
	vertices: Float32Array,
	uvs: Float32Array,
	iv: number,
	cx0: number,
	cy0: number,
	cx3: number,
	cy3: number,
	uvx0: number,
	uvy0: number,
	uvx3: number,
	uvy3: number
): void => {
	vertices[iv + 0] = cx0;
	vertices[iv + 1] = cy0;
	vertices[iv + 2] = cx0;
	vertices[iv + 3] = cy0;
	vertices[iv + 4] = cx3;
	vertices[iv + 5] = cy3;
	vertices[iv + 6] = cx3;
	vertices[iv + 7] = cy3;

	uvs[iv + 0] = uvx0;
	uvs[iv + 1] = uvy0;
	uvs[iv + 2] = uvx0;
	uvs[iv + 3] = uvy0;
	uvs[iv + 4] = uvx3;
	uvs[iv + 5] = uvy3;
	uvs[iv + 6] = uvx3;
	uvs[iv + 7] = uvy3;
};

const writeCharacter = (
	vertices: Float32Array,
	uvs: Float32Array,
	iv: number,
	data: EShapeTextAtlasCharacter,
	atlas: EShapeTextAtlas,
	snx: number,
	sny: number,
	cx0: number,
	cy0: number,
	cx3: number,
	cy3: number,
	duvx01: number,
	duvy01: number,
	duvx03: number,
	duvy03: number,
	uvx0: number,
	uvy0: number
): void => {
	// Vertices
	const dataOffsetX = data.x - data.origin.x;
	const dataWidth = data.width;
	const dx0 = dataOffsetX * snx;
	const dy0 = dataOffsetX * sny;
	const dx1 = (dataOffsetX + dataWidth) * snx;
	const dy1 = (dataOffsetX + dataWidth) * sny;
	vertices[iv + 0] = cx0 + dx0;
	vertices[iv + 1] = cy0 + dy0;
	vertices[iv + 2] = cx0 + dx1;
	vertices[iv + 3] = cy0 + dy1;
	vertices[iv + 4] = cx3 + dx1;
	vertices[iv + 5] = cy3 + dy1;
	vertices[iv + 6] = cx3 + dx0;
	vertices[iv + 7] = cy3 + dy0;

	// UVs
	const px0 = data.x / atlas.width;
	const py0 = data.y / atlas.height;
	const px1 = (data.x + data.width) / atlas.width;
	const py1 = (data.y + data.height) / atlas.height;

	const dux0 = duvx01 * px0;
	const duy0 = duvy01 * px0;
	const dux1 = duvx01 * px1;
	const duy1 = duvy01 * px1;

	const dvx0 = duvx03 * py0;
	const dvy0 = duvy03 * py0;
	const dvx1 = duvx03 * py1;
	const dvy1 = duvy03 * py1;
	uvs[iv + 0] = uvx0 + dux0 + dvx0;
	uvs[iv + 1] = uvy0 + duy0 + dvy0;
	uvs[iv + 2] = uvx0 + dux1 + dvx0;
	uvs[iv + 3] = uvy0 + duy1 + dvy0;
	uvs[iv + 4] = uvx0 + dux1 + dvx1;
	uvs[iv + 5] = uvy0 + duy1 + dvy1;
	uvs[iv + 6] = uvx0 + dux0 + dvx1;
	uvs[iv + 7] = uvy0 + duy0 + dvy1;
};

const moveText = (
	vertices: Float32Array,
	vertexIndex: number,
	textCount: number,
	dx: number,
	dy: number
): void => {
	let iv = vertexIndex - 8 * textCount - 1;
	for (let i = 0; i < textCount; ++i) {
		vertices[++iv] += dx;
		vertices[++iv] += dy;
		vertices[++iv] += dx;
		vertices[++iv] += dy;
		vertices[++iv] += dx;
		vertices[++iv] += dy;
		vertices[++iv] += dx;
		vertices[++iv] += dy;
	}
};

const moveTextHalf = (
	vertices: Float32Array,
	vertexIndex: number,
	textCount: number,
	offset: number,
	nx: number,
	ny: number
): void => {
	offset *= 0.5;
	moveText(vertices, vertexIndex, textCount, offset * nx, offset * ny);
};

const moveTextFull = (
	vertices: Float32Array,
	vertexIndex: number,
	textCount: number,
	offset: number,
	nx: number,
	ny: number
): void => {
	moveText(vertices, vertexIndex, textCount, offset * nx, offset * ny);
};

const adjustTextAlignment = (
	vertices: Float32Array,
	nx: number,
	ny: number,
	lineCount: number,
	vertexIndex: number,
	offset: number,
	textDirection: EShapeTextDirection,
	textAlignHorizontal: EShapeTextAlignHorizontal,
	textAlignVertical: EShapeTextAlignVertical
): void => {
	if (TEXT_FMIN < offset) {
		switch (textDirection) {
			case EShapeTextDirection.LEFT_TO_RIGHT:
				switch (textAlignHorizontal) {
					case EShapeTextAlignHorizontal.OUTSIDE_RIGHT:
					case EShapeTextAlignHorizontal.LEFT:
						// DO NOTHING
						break;
					case EShapeTextAlignHorizontal.CENTER:
						moveTextHalf(vertices, vertexIndex, lineCount, offset, nx, ny);
						break;
					case EShapeTextAlignHorizontal.OUTSIDE_LEFT:
					case EShapeTextAlignHorizontal.RIGHT:
						moveTextFull(vertices, vertexIndex, lineCount, offset, nx, ny);
						break;
				}
				break;
			case EShapeTextDirection.TOP_TO_BOTTOM:
				switch (textAlignVertical) {
					case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
					case EShapeTextAlignVertical.TOP:
						// DO NOTHING
						break;
					case EShapeTextAlignVertical.MIDDLE:
						moveTextHalf(vertices, vertexIndex, lineCount, offset, nx, ny);
						break;
					case EShapeTextAlignVertical.OUTSIDE_TOP:
					case EShapeTextAlignVertical.BOTTOM:
						moveTextFull(vertices, vertexIndex, lineCount, offset, nx, ny);
						break;
				}
				break;
			case EShapeTextDirection.BOTTOM_TO_TOP:
				switch (textAlignVertical) {
					case EShapeTextAlignVertical.OUTSIDE_BOTTOM:
					case EShapeTextAlignVertical.TOP:
						moveTextFull(vertices, vertexIndex, lineCount, offset, nx, ny);
						break;
					case EShapeTextAlignVertical.MIDDLE:
						moveTextHalf(vertices, vertexIndex, lineCount, offset, nx, ny);
						break;
					case EShapeTextAlignVertical.OUTSIDE_TOP:
					case EShapeTextAlignVertical.BOTTOM:
						// DO NOTHING
						break;
				}
				break;
			case EShapeTextDirection.RIGHT_TO_LEFT:
				switch (textAlignHorizontal) {
					case EShapeTextAlignHorizontal.OUTSIDE_RIGHT:
					case EShapeTextAlignHorizontal.LEFT:
						moveTextFull(vertices, vertexIndex, lineCount, offset, nx, ny);
						break;
					case EShapeTextAlignHorizontal.CENTER:
						moveTextHalf(vertices, vertexIndex, lineCount, offset, nx, ny);
						break;
					case EShapeTextAlignHorizontal.OUTSIDE_LEFT:
					case EShapeTextAlignHorizontal.RIGHT:
						// DO NOTHING
						break;
				}
				break;
		}
	}
};
