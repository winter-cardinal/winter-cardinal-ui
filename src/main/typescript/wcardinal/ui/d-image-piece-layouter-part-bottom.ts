import { Rectangle } from "pixi.js";
import { DImagePieceLayouterPart } from "./d-image-piece-layouter-part";
import { DImagePiece } from "./d-image-piece";

export class DImagePieceLayouterPartBottom extends DImagePieceLayouterPart {
	override add(image: DImagePiece, bound: Rectangle, margin: number): void {
		this._pieces.push(image);
		this._bounds.push(bound);
		this._size += margin + bound.height;
		this._margin = margin;
	}

	execute(pbottom: number, height: number): void {
		const pieces = this._pieces;
		const bounds = this._bounds;
		let y = height - pbottom;
		if (this._text !== undefined) {
			let margin = 0;
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				const bound = bounds[i];
				const object = piece.object!;
				y -= margin + bound.height;
				object.y = y - bound.y;
				margin = piece.margin.horizontal;
			}
		} else {
			for (let i = 0, imax = pieces.length; i < imax; ++i) {
				const piece = pieces[i];
				const bound = bounds[i];
				const object = piece.object!;
				y -= piece.margin.horizontal + bound.height;
				object.y = y - bound.y;
			}
		}
	}
}
