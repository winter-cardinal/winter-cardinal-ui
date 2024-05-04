/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { ASCII_LETTERS } from "./ascii";
import { DynamicFontAtlasCharacter } from "./dynamic-font-atlas-character";
import { DynamicFontAtlasCharacterType } from "./dynamic-font-atlas-character-type";
import { DynamicFontAtlasCharacters } from "./dynamic-font-atlas-characters";
import { DynamicSDFFontAtlasFont } from "./dynamic-sdf-font-atlas-font";
import { DynamicSDFFontGenerator } from "./dynamic-sdf-font-generator";
import { UtilCharacterIterator } from "./util-character-iterator";
import { UtilFont } from "./util-font";

export interface DynamicSDFFontAtlasJson {
	width: number;
	height: number;
	font: DynamicSDFFontAtlasFont;
	characters: DynamicFontAtlasCharacters;
}

export class DynamicSDFFontAtlas {
	protected _id: string;
	protected _generator: DynamicSDFFontGenerator | null;
	protected _canvas: HTMLCanvasElement | null;
	protected _font: DynamicSDFFontAtlasFont;
	protected _characters: DynamicFontAtlasCharacters;
	protected _length: number;
	protected _width: number;
	protected _height: number;
	protected _isDirty: boolean;

	constructor(fontFamily: string) {
		this._id = `font-atlas:${fontFamily}`;
		this._generator = DynamicSDFFontGenerator.getInstance().init();
		this._canvas = document.createElement("canvas");
		this._font = new DynamicSDFFontAtlasFont(fontFamily);
		this._characters = new Map<string, DynamicFontAtlasCharacter>();
		this._length = 0;
		this._width = 1;
		this._height = 1;
		this._isDirty = true;
	}

	get id(): string {
		return this._id;
	}

	get font(): DynamicSDFFontAtlasFont {
		return this._font;
	}

	set font(font: DynamicSDFFontAtlasFont) {
		this._font.id = font.id;
		this._font.size = font.size;
		this._font.italic = font.italic;
	}

	get width(): number {
		return this._width;
	}

	get height(): number {
		return this._height;
	}

	get canvas(): HTMLCanvasElement | null {
		return this._canvas;
	}

	get generator(): DynamicSDFFontGenerator | null {
		return this._generator;
	}

	get characters(): DynamicFontAtlasCharacters {
		return this._characters;
	}

	begin(): void {
		this._length = 0;
		const characters = this._characters;
		characters.forEach((character) => {
			character.ref = 0;
		});
	}

	end(): void {
		const characters = this._characters;
		characters.forEach((character, id) => {
			if (character.ref <= 0) {
				character.life -= 1;
				if (character.life <= 0) {
					characters.delete(id);
					this._isDirty = true;
				}
			}
		});
	}

	addAscii(): void {
		this.addChar(" ", " ", DynamicFontAtlasCharacterType.SPACE_R);
		this.addChar("\t", "    ", DynamicFontAtlasCharacterType.SPACE_R);
		this.addChar("...", "...", DynamicFontAtlasCharacterType.LETTER_RNB);
		for (let i = 0, imax = ASCII_LETTERS.length; i < imax; ++i) {
			const letter = ASCII_LETTERS[i];
			this.addChar(letter, letter, DynamicFontAtlasCharacterType.LETTER_RNB);
		}
	}

	addChar(id: string, character: string, type: DynamicFontAtlasCharacterType): void {
		const characters = this._characters;
		if (!this.isIgnored(character)) {
			const data = characters.get(id);
			if (data != null) {
				if (data.ref <= 0) {
					this._length += 1;
				}
				data.ref += 1;
			} else {
				characters.set(id, new DynamicFontAtlasCharacter(type, character, 0, 0, 1, 1, 0));
				this._length += 1;
				this._isDirty = true;
			}
		}
	}

	protected isIgnored(character: string): boolean {
		switch (character) {
			case "\n": // Line feed
				return true;
			case "\r": // Carriage return
				return true;
			case "\v": // Vertical tab
				return true;
			case "\f": // Form feed
				return true;
			case "\u0085": // Next line
				return true;
		}
		return false;
	}

	add(
		characters: string,
		type: DynamicFontAtlasCharacterType = DynamicFontAtlasCharacterType.LETTER
	): void {
		const iterator = UtilCharacterIterator.from(characters);
		while (iterator.hasNext()) {
			const character = iterator.next();
			this.addChar(character, character, type);
		}
	}

	get(id: string): DynamicFontAtlasCharacter | undefined {
		return this._characters.get(id);
	}

	update(): boolean {
		if (this._isDirty) {
			const canvas = this._canvas;
			const generator = this._generator;
			if (canvas != null && generator != null) {
				const context = canvas.getContext("2d");
				if (context != null) {
					this._isDirty = false;

					const font = this._font;
					const characters = this._characters;
					const characterSize = font.size + 14;
					const width = this.toPowerOf2(
						Math.ceil(Math.sqrt(this._length)) * characterSize
					);
					this._width = width;
					const fontStyle =
						(font.italic ? "italic " : "") + (font.size + "px ") + font.id;

					context.font = fontStyle;
					context.textAlign = "left";
					context.textBaseline = "alphabetic";
					context.lineWidth = 0;
					context.lineCap = "round";
					context.lineJoin = "miter";
					context.miterLimit = 10;
					context.fillStyle = "#FFFFFF";
					UtilFont.measure(context, font);

					const offsetX = 7;
					const offsetY = Math.round(
						(characterSize - (font.ascent + font.descent)) * 0.5 + font.ascent
					);
					let x = 0;
					let y = 0;
					characters.forEach((character) => {
						const advance = context.measureText(character.character).width;
						const characterWidth = Math.ceil(offsetX + advance + offsetX);
						const characterHeight = characterSize;
						if (width <= x + characterWidth) {
							x = 0;
							y += characterSize;
						}

						character.x = x;
						character.y = y;
						character.width = characterWidth;
						character.height = characterHeight;
						character.advance = advance;
						character.origin.x = x + offsetX;
						character.origin.y = y + offsetY;

						x += characterWidth;
					});
					const height = (this._height = y + characterSize);

					// Make a input canvas
					// Here, we need to reset the context because
					// context settings will be lost when we set the width/height.
					canvas.width = width;
					canvas.height = height;
					context.font = fontStyle;
					context.textAlign = "left";
					context.textBaseline = "alphabetic";
					context.lineWidth = 0;
					context.lineCap = "round";
					context.lineJoin = "miter";
					context.miterLimit = 10;
					context.fillStyle = "#FFFFFF";
					context.clearRect(0, 0, width, height);
					characters.forEach((character) => {
						context.fillText(
							character.character,
							character.origin.x,
							character.origin.y
						);
					});

					// Convert to SDF font texture
					generator.updateTexture(width, height, canvas);
					generator.render();
					generator.read(canvas);

					return true;
				}
			}
		}
		return false;
	}

	get length(): number {
		return this._length;
	}

	toJson(): DynamicSDFFontAtlasJson {
		return {
			width: this._width,
			height: this._height,
			font: this._font,
			characters: this._characters
		};
	}

	toString(): string {
		return JSON.stringify(this.toJson());
	}

	destroy(): void {
		const generator = this._generator;
		if (generator != null) {
			this._generator = null;
		}

		const canvas = this._canvas;
		if (canvas != null) {
			this._canvas = null;
		}

		this._characters.clear();
	}

	protected toPowerOf2(size: number): number {
		let result = 32;
		while (result < size) {
			result <<= 1;
		}
		return result;
	}
}
