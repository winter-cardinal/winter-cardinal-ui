import { DDynamicText } from "./d-dynamic-text";
import { DImagePiece } from "./d-image-piece";

export class DImagePieceLayouterPart {
	protected _pieces: DImagePiece[];
	protected _size: number;
	protected _margin: number;

	protected _text?: DDynamicText | null;

	constructor() {
		this._pieces = [];
		this._size = 0;
		this._margin = 0;
	}

	clear(): void {
		this._pieces.length = 0;
		this._size = 0;
		this._margin = 0;
		this._text = undefined;
	}

	add(image: DImagePiece, size: number, margin: number): void {
		const pieces = this._pieces;
		pieces.push(image);
		this._size += margin + size;
		this._margin = margin;
	}

	set(text: DDynamicText | null): void {
		this._text = text;
	}

	get size(): number {
		return this._size - (this._text === null ? this._margin : 0);
	}
}
