import { DImagePiece } from "./d-image-piece";

export class DImagePieceLayouterPart {
	pieces: DImagePiece[];
	size: number;

	constructor() {
		this.pieces = [];
		this.size = 0;
	}

	clear(): void {
		this.pieces.length = 0;
		this.size = 0;
	}

	add(image: DImagePiece, size: number, margin: number): void {
		const pieces = this.pieces;
		pieces.push(image);
		this.size += margin + size;
	}
}
