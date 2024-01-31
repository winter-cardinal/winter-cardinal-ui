import { Rectangle } from "pixi.js";
import { DImagePiece } from "./d-image-piece";
import { DImagePieceLayouterPart } from "./d-image-piece-layouter-part";

export class DImagePieceLayouterPartLeft extends DImagePieceLayouterPart {
	override add(image: DImagePiece, bound: Rectangle, margin: number): void {
		this._pieces.push(image);
		this._bounds.push(bound);
		this._size += margin + bound.width;
		this._margin = margin;
	}

	execute(pleft: number): void {
		const pieces = this._pieces;
		const bounds = this._bounds;
		let x = pleft;
		if (this._text !== undefined) {
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				const bound = bounds[i];
				const object = piece.object!;
				object.x = x - bound.x;
				x += bound.width + piece.margin.horizontal;
			}
		} else {
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				const bound = bounds[i];
				const object = piece.object!;
				x += piece.margin.horizontal;
				object.x = x - bound.x;
				x += bound.width;
			}
		}
	}
}
