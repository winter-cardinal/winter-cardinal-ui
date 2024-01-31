import { Rectangle } from "pixi.js";
import { DDynamicText } from "./d-dynamic-text";
import { DImagePiece } from "./d-image-piece";

export abstract class DImagePieceLayouterPart {
	protected _pieces: DImagePiece[];
	protected _bounds: Rectangle[];
	protected _size: number;
	protected _margin: number;

	protected _text?: DDynamicText | null;

	constructor() {
		this._pieces = [];
		this._bounds = [];
		this._size = 0;
		this._margin = 0;
	}

	clear(): void {
		this._pieces.length = 0;
		this._size = 0;
		this._margin = 0;
		this._text = undefined;
	}

	abstract add(image: DImagePiece, bound: Rectangle, margin: number): void;

	set(text: DDynamicText | null): void {
		this._text = text;
	}

	get size(): number {
		return this._size - (this._text === null ? this._margin : 0);
	}
}
