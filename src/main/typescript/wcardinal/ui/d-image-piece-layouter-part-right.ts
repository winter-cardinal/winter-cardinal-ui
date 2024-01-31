import { Rectangle } from "pixi.js";
import { DImagePiece } from "./d-image-piece";
import { DImagePieceLayouterPart } from "./d-image-piece-layouter-part";

export class DImagePieceLayouterPartRight extends DImagePieceLayouterPart {
	override add(image: DImagePiece, bound: Rectangle, margin: number): void {
		this._pieces.push(image);
		this._bounds.push(bound);
		this._size += margin + bound.width;
		this._margin = margin;
	}

	execute(pright: number, width: number): void {
		const pieces = this._pieces;
		const bounds = this._bounds;
		let x = width - pright;
		if (this._text !== undefined) {
			let margin = 0;
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				const bound = bounds[i];
				const object = piece.object!;
				x -= margin + bound.width;
				object.x = x - bound.x;
				margin = piece.margin.horizontal;
			}
		} else {
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				const bound = bounds[i];
				const object = piece.object!;
				x -= piece.margin.horizontal + bound.width;
				object.x = x - bound.x;
			}
		}
	}
}
