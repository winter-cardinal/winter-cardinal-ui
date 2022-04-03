import { DImagePiece } from "./d-image-piece";
import { DImagePieceLayouterPart } from "./d-image-piece-layouter-part";

export class DImagePieceLayouterPartCenter extends DImagePieceLayouterPart {
	add(image: DImagePiece, size: number, margin: number): void {
		const pieces = this._pieces;
		pieces.push(image);
		this._size = Math.max(this.size, size);
	}

	execute(pleft: number, pright: number, width: number): void {
		const c = pleft + (width - pleft - pright) * 0.5;
		const pieces = this._pieces;
		for (let i = 0, imax = pieces.length; i < imax; ++i) {
			const piece = pieces[i];
			piece.image!.x = c - piece.bound.width * 0.5;
		}
	}
}
