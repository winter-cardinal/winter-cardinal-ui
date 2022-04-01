import { DAlignWith } from "./d-align-with";
import { DDynamicText } from "./d-dynamic-text";
import { DImagePiece } from "./d-image-piece";
import { DImagePieceLayouterPartContainer } from "./d-image-piece-layouter-part-container";
import { DPadding } from "./d-padding";
import { DTextBaseAlign } from "./d-text-base";

export class DImagePieceLayouter {
	text: DImagePieceLayouterPartContainer;
	padding: DImagePieceLayouterPartContainer;
	border: DImagePieceLayouterPartContainer;

	constructor() {
		this.text = new DImagePieceLayouterPartContainer();
		this.padding = new DImagePieceLayouterPartContainer();
		this.border = new DImagePieceLayouterPartContainer();
	}

	clear(): void {
		this.text.clear();
		this.padding.clear();
		this.border.clear();
	}

	add(image: DImagePiece): void {
		const imageImage = image.image;
		if (imageImage) {
			switch (image.align.with) {
				case DAlignWith.TEXT:
					this.text.add(image);
					break;
				case DAlignWith.PADDING:
					this.padding.add(image);
					break;
				case DAlignWith.BORDER:
					this.border.add(image);
					break;
			}
		}
	}

	set(text: DDynamicText): void {
		this.text.set(text);
	}

	execute(
		padding: DPadding,
		textAlign: DTextBaseAlign,
		width: number | null,
		height: number | null
	): void {
		const pleft = padding.getLeft();
		const ptop = padding.getTop();
		const pright = padding.getRight();
		const pbottom = padding.getBottom();
		if (width == null) {
			width = pleft + this.width + pright;
		}
		if (height == null) {
			height = ptop + this.height + pbottom;
		}
		this.border.execute(0, 0, 0, 0, textAlign, width, height);
		this.padding.execute(pleft, ptop, pright, pbottom, textAlign, width, height);
		this.text.execute(pleft, ptop, pright, pbottom, textAlign, width, height);
	}

	get width(): number {
		return Math.max(this.border.width, this.padding.width, this.text.width);
	}

	get height(): number {
		return Math.max(this.border.height, this.padding.height, this.text.height);
	}
}
