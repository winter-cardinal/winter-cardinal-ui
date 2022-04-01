import { DImagePiece } from "./d-image-piece";
import { DImagePieceLayouterPart } from "./d-image-piece-layouter-part";

export class DImagePieceLayouterPartMiddle extends DImagePieceLayouterPart {
	add(image: DImagePiece, size: number, margin: number): void {
		const pieces = this.pieces;
		pieces.push(image);
		this.size = Math.max(this.size, size);
	}

	execute(ptop: number, pbottom: number, height: number): void {
		const c = ptop + (height - ptop - pbottom) * 0.5;
		const pieces = this.pieces;
		for (let i = 0, imax = pieces.length; i < imax; ++i) {
			const piece = pieces[i];
			piece.image!.y = c - piece.bound.height * 0.5;
		}
	}
}
