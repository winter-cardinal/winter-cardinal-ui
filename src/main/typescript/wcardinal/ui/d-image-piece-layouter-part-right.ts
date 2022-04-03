import { DImagePieceLayouterPart } from "./d-image-piece-layouter-part";

export class DImagePieceLayouterPartRight extends DImagePieceLayouterPart {
	execute(pright: number, width: number): void {
		const pieces = this._pieces;
		let x = width - pright;
		if (this._text !== undefined) {
			let margin = 0;
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				x -= margin + piece.bound.width;
				piece.image!.x = x;
				margin = piece.margin.horizontal;
			}
		} else {
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				x -= piece.margin.horizontal + piece.bound.width;
				piece.image!.x = x;
			}
		}
	}
}
