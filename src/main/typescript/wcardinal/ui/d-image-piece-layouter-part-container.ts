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
import { DTextPieceAlign } from "./d-text-piece-align";

export class DImagePieceLayouterPartContainer {
	left: DImagePieceLayouterPartLeft;
	center: DImagePieceLayouterPartCenter;
	right: DImagePieceLayouterPartRight;
	top: DImagePieceLayouterPartTop;
	middle: DImagePieceLayouterPartMiddle;
	bottom: DImagePieceLayouterPartBottom;

	text?: DDynamicText | null;

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
		const object = image.object;
		if (object != null) {
			const bound = object.getLocalBounds();
			const margin = image.margin;
			const align = image.align;
			switch (align.horizontal) {
				case DAlignHorizontal.LEFT:
					this.left.add(image, bound, margin.horizontal);
					break;
				case DAlignHorizontal.CENTER:
					this.center.add(image, bound, margin.horizontal);
					break;
				case DAlignHorizontal.RIGHT:
					this.right.add(image, bound, margin.horizontal);
					break;
			}
			switch (align.vertical) {
				case DAlignVertical.TOP:
					this.top.add(image, bound, margin.vertical);
					break;
				case DAlignVertical.MIDDLE:
					this.middle.add(image, bound, margin.vertical);
					break;
				case DAlignVertical.BOTTOM:
					this.bottom.add(image, bound, margin.vertical);
					break;
			}
		}
	}

	set(text: DDynamicText | null): void {
		this.left.set(text);
		this.center.set(text);
		this.right.set(text);
		this.top.set(text);
		this.middle.set(text);
		this.bottom.set(text);
		this.text = text;
	}

	get width(): number {
		const text = this.text;
		const left = this.left;
		const leftSize = left.size;
		const center = this.center;
		const centerSize = center.size;
		const right = this.right;
		const rightSize = right.size;
		if (text !== undefined) {
			if (text !== null) {
				return Math.max(leftSize + text.width + rightSize, centerSize);
			} else {
				return Math.max(leftSize + rightSize, centerSize);
			}
		} else {
			return Math.max(leftSize, rightSize, centerSize);
		}
	}

	get height(): number {
		const text = this.text;
		const top = this.top;
		const topSize = top.size;
		const middle = this.middle;
		const middleSize = middle.size;
		const bottom = this.bottom;
		const bottomSize = bottom.size;
		if (text !== undefined) {
			if (text !== null) {
				return Math.max(topSize + text.height + bottomSize, middleSize);
			} else {
				return Math.max(topSize + bottomSize, middleSize);
			}
		} else {
			return Math.max(topSize, bottomSize, middleSize);
		}
	}

	execute(
		pleft: number,
		ptop: number,
		pright: number,
		pbottom: number,
		textAlign: DTextPieceAlign,
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
		if (text !== undefined) {
			const leftSize = left.size;
			const rightSize = right.size;
			const topSize = top.size;
			const bottomSize = bottom.size;

			let textX = 0;
			let textWidth = 0;
			let textHeight = 0;
			if (text != null) {
				textWidth = text.width;
				textHeight = text.height;
			}
			switch (textAlign.horizontal) {
				case DAlignHorizontal.LEFT:
					textX = pleft + leftSize;
					break;
				case DAlignHorizontal.CENTER:
					textX =
						pleft +
						(width - pleft - pright - (leftSize + textWidth + rightSize)) * 0.5 +
						leftSize;
					break;
				case DAlignHorizontal.RIGHT:
					textX = width - pright - rightSize - textWidth;
					break;
			}

			let textY = 0;
			switch (textAlign.vertical) {
				case DAlignVertical.TOP:
					textY = ptop + topSize;
					break;
				case DAlignVertical.MIDDLE:
					textY =
						ptop +
						(height - ptop - pbottom - (topSize + textHeight + bottomSize)) * 0.5 +
						topSize;
					break;
				case DAlignVertical.BOTTOM:
					textY = height - pbottom - bottomSize - textHeight;
					break;
			}
			if (text != null) {
				text.position.set(textX, textY);
				text.setClippingDelta(leftSize + rightSize, topSize + bottomSize);
			}
			left.execute(textX - leftSize);
			center.execute(0, 0, textX * 2 + textWidth);
			right.execute(0, textX + textWidth + rightSize);
			top.execute(textY - topSize);
			middle.execute(0, 0, textY * 2 + textHeight);
			bottom.execute(0, textY + textHeight + bottomSize);
		} else {
			left.execute(pleft);
			center.execute(pleft, pright, width);
			right.execute(pright, width);
			top.execute(ptop);
			middle.execute(ptop, pbottom, height);
			bottom.execute(pbottom, height);
		}
	}
}
