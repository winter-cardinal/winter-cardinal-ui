import { Rectangle } from "pixi.js";
import { DImagePiece } from "./d-image-piece";
import { DImagePieceLayouterPart } from "./d-image-piece-layouter-part";

export class DImagePieceLayouterPartMiddle extends DImagePieceLayouterPart {
	override add(image: DImagePiece, bound: Rectangle, margin: number): void {
		this._pieces.push(image);
		this._bounds.push(bound);
		this._size = Math.max(this.size, bound.height);
	}

	execute(ptop: number, pbottom: number, height: number): void {
		const c = ptop + (height - ptop - pbottom) * 0.5;
		const pieces = this._pieces;
		const bounds = this._bounds;
		for (let i = 0, imax = pieces.length; i < imax; ++i) {
			const piece = pieces[i];
			const bound = bounds[i];
			const object = piece.object!;
			object.y = c - bound.y - bound.height * 0.5;
		}
	}
}
