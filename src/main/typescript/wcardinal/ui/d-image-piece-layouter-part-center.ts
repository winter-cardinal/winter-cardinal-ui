import { Rectangle } from "pixi.js";
import { DImagePiece } from "./d-image-piece";
import { DImagePieceLayouterPart } from "./d-image-piece-layouter-part";

export class DImagePieceLayouterPartCenter extends DImagePieceLayouterPart {
	override add(image: DImagePiece, bound: Rectangle, margin: number): void {
		this._pieces.push(image);
		this._bounds.push(bound);
		this._size = Math.max(this.size, bound.width);
	}

	execute(pleft: number, pright: number, width: number): void {
		const c = pleft + (width - pleft - pright) * 0.5;
		const pieces = this._pieces;
		const bounds = this._bounds;
		for (let i = 0, imax = pieces.length; i < imax; ++i) {
			const piece = pieces[i];
			const bound = bounds[i];
			const object = piece.object!;
			object.x = c - bound.x - bound.width * 0.5;
		}
	}
}
