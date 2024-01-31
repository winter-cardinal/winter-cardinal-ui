import { Rectangle } from "pixi.js";
import { DImagePiece } from "./d-image-piece";
import { DImagePieceLayouterPart } from "./d-image-piece-layouter-part";

export class DImagePieceLayouterPartTop extends DImagePieceLayouterPart {
	override add(image: DImagePiece, bound: Rectangle, margin: number): void {
		this._pieces.push(image);
		this._bounds.push(bound);
		this._size += margin + bound.height;
		this._margin = margin;
	}

	execute(ptop: number): void {
		const pieces = this._pieces;
		const bounds = this._bounds;
		let y = ptop;
		if (this._text !== undefined) {
			let margin = 0;
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				const bound = bounds[i];
				const object = piece.object!;
				object.y = margin + y - bound.y;
				y += bound.height;
				margin = piece.margin.vertical;
			}
		} else {
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				const bound = bounds[i];
				const object = piece.object!;
				y += piece.margin.vertical;
				object.y = y - bound.y;
				y += bound.height;
			}
		}
	}
}
