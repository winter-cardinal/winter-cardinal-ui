import { DImagePieceLayouterPart } from "./d-image-piece-layouter-part";

export class DImagePieceLayouterPartLeft extends DImagePieceLayouterPart {
	execute(pleft: number): void {
		const pieces = this._pieces;
		let x = pleft;
		if (this._text !== undefined) {
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				piece.image!.x = x;
				x += piece.bound.width + piece.margin.horizontal;
			}
		} else {
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				x += piece.margin.horizontal;
				piece.image!.x = x;
				x += piece.bound.width;
			}
		}
	}
}
