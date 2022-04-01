import { DAlignHorizontal } from "./d-align-horizontal";
import { DAlignVertical } from "./d-align-vertical";
import { DDynamicText } from "./d-dynamic-text";
import { DImagePiece } from "./d-image-piece";
import { DImagePieceLayouterPartBottom } from "./d-image-piece-layouter-part-bottom";
import { DImagePieceLayouterPartCenter } from "./d-image-piece-layouter-part-center";
import { DImagePieceLayouterPartLeft } from "./d-image-piece-layouter-part-left";
import { DImagePieceLayouterPartMiddle } from "./d-image-piece-layouter-part-middle";
import { DImagePieceLayouterPartRight } from "./d-image-piece-layouter-part-right";
import { DImagePieceLayouterPartTop } from "./d-image-piece-layouter-part-top";
import { DTextBaseAlign } from "./d-text-base";

export class DImagePieceLayouterPartContainer {
	left: DImagePieceLayouterPartLeft;
	center: DImagePieceLayouterPartCenter;
	right: DImagePieceLayouterPartRight;
	top: DImagePieceLayouterPartTop;
	middle: DImagePieceLayouterPartMiddle;
	bottom: DImagePieceLayouterPartBottom;

	text?: DDynamicText;

	constructor() {
		this.left = new DImagePieceLayouterPartLeft();
		this.center = new DImagePieceLayouterPartCenter();
		this.right = new DImagePieceLayouterPartRight();
		this.top = new DImagePieceLayouterPartTop();
		this.middle = new DImagePieceLayouterPartMiddle();
		this.bottom = new DImagePieceLayouterPartBottom();
	}

	clear(): void {
		this.left.clear();
		this.center.clear();
		this.right.clear();
		this.top.clear();
		this.middle.clear();
		this.bottom.clear();
		this.text = undefined;
	}

	add(image: DImagePiece): void {
		const imageImage = image.image;
		if (imageImage != null) {
			const imageBound = image.bound;
			const imageBoundWidth = imageBound.width;
			const imageBoundHeight = imageBound.height;

			const imageMargin = image.margin;
			const imageMarginHorizontal = imageMargin.horizontal;
			const imageMarginVertical = imageMargin.vertical;

			const imageAlign = image.align;
			switch (imageAlign.horizontal) {
				case DAlignHorizontal.LEFT:
					this.left.add(image, imageBoundWidth, imageMarginHorizontal);
					break;
				case DAlignHorizontal.CENTER:
					this.center.add(image, imageBoundWidth, imageMarginHorizontal);
					break;
				case DAlignHorizontal.RIGHT:
					this.right.add(image, imageBoundWidth, imageMarginHorizontal);
					break;
			}
			switch (imageAlign.vertical) {
				case DAlignVertical.TOP:
					this.top.add(image, imageBoundHeight, imageMarginVertical);
					break;
				case DAlignVertical.MIDDLE:
					this.middle.add(image, imageBoundHeight, imageMarginVertical);
					break;
				case DAlignVertical.BOTTOM:
					this.bottom.add(image, imageBoundHeight, imageMarginVertical);
					break;
			}
		}
	}

	set(text: DDynamicText): void {
		this.text = text;
	}

	get width(): number {
		const text = this.text;
		const left = this.left;
		const center = this.center;
		const right = this.right;
		if (text) {
			return Math.max(left.size + text.width + right.size, center.size);
		} else {
			return Math.max(left.size, right.size, center.size);
		}
	}

	get height(): number {
		const text = this.text;
		const top = this.top;
		const middle = this.middle;
		const bottom = this.bottom;
		if (text) {
			return Math.max(top.size + text.height + bottom.size, middle.size);
		} else {
			return Math.max(top.size, bottom.size, middle.size);
		}
	}

	execute(
		pleft: number,
		ptop: number,
		pright: number,
		pbottom: number,
		textAlign: DTextBaseAlign,
		width: number,
		height: number
	): void {
		const left = this.left;
		const center = this.center;
		const right = this.right;
		const top = this.top;
		const middle = this.middle;
		const bottom = this.bottom;

		const text = this.text;
		if (text) {
			let textX = 0;
			const textWidth = text.width;
			switch (textAlign.horizontal) {
				case DAlignHorizontal.LEFT:
					textX = pleft + left.size;
					break;
				case DAlignHorizontal.CENTER:
					textX =
						pleft +
						(width - pleft - pright - (left.size + textWidth + right.size)) * 0.5 +
						left.size;
					break;
				case DAlignHorizontal.RIGHT:
					textX = width - pright - right.size - textWidth;
					break;
			}

			let textY = 0;
			const textHeight = text.height;
			switch (textAlign.vertical) {
				case DAlignVertical.TOP:
					textY = ptop + top.size;
					break;
				case DAlignVertical.MIDDLE:
					textY =
						ptop +
						(height - ptop - pbottom - (top.size + textHeight + bottom.size)) * 0.5 +
						top.size;
					break;
				case DAlignVertical.BOTTOM:
					textY = height - pbottom - bottom.size - textHeight;
					break;
			}

			text.position.set(textX, textY);
			text.setClippingDelta(left.size + right.size, top.size + bottom.size);

			left.execute(textX - left.size, true);
			center.execute(0, 0, textX * 2 + textWidth);
			right.execute(0, textX + textWidth + right.size, true);
			top.execute(textY - top.size, true);
			middle.execute(0, 0, textY * 2 + textHeight);
			bottom.execute(0, textY + textHeight + bottom.size, true);
		} else {
			left.execute(pleft, false);
			center.execute(pleft, pright, width);
			right.execute(pright, width, false);
			top.execute(ptop, false);
			middle.execute(ptop, pbottom, height);
			bottom.execute(pbottom, height, false);
		}
	}
}
