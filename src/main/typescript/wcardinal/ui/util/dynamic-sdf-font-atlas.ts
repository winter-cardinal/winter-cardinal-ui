/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Renderer } from "pixi.js";
import { DThemes } from "../theme/d-themes";
import { ASCII_CHARACTERS } from "./ascii";
import { DynamicFontAtlasCharacter } from "./dynamic-font-atlas-character";
import { DynamicFontAtlasCharacterType } from "./dynamic-font-atlas-character-type";
import { DynamicFontAtlasCharacters } from "./dynamic-font-atlas-characters";
import { SdfGenerator } from "./sdf-generator";
import { UtilCharacterIterator } from "./util-character-iterator";

export interface DynamicSDFFontAtlasFont {
	family: string;
	size: number;
	italic: boolean;
}

export interface DynamicSDFFontAtlasJson {
	width: number;
	height: number;
	font: DynamicSDFFontAtlasFont;
	characters: DynamicFontAtlasCharacters;
}

export class DynamicSDFFontAtlas {
	protected static FONT_FAMILY_AUTO: string | null = null;

	protected _id: string;
	protected _generator: SdfGenerator | null;
	protected _canvas: HTMLCanvasElement | null;
	protected _font: DynamicSDFFontAtlasFont;
	protected _characters: DynamicFontAtlasCharacters;
	protected _length: number;
	protected _width: number;
	protected _height: number;
	protected _isDirty: boolean;

	constructor(fontFamily: string) {
		this._id = `font-atlas:${fontFamily}`;
		this._generator = new SdfGenerator();
		this._canvas = this._generator.canvas;
		this._font = {
			family: DynamicSDFFontAtlas.toFontFamily(fontFamily),
			size: 32,
			italic: false
		};
		this._characters = {};
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
		this._font.family = font.family;
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

	get generator(): SdfGenerator | null {
		return this._generator;
	}

	get characters(): DynamicFontAtlasCharacters {
		return this._characters;
	}

	begin(): void {
		this._length = 0;
		const characters = this._characters;
		for (const id in characters) {
			characters[id].ref = 0;
		}
	}

	end(): void {
		const characters = this._characters;
		for (const id in characters) {
			const data = characters[id];
			if (data.ref <= 0) {
				data.life -= 1;
				if (data.life <= 0) {
					delete characters[id];
					this._isDirty = true;
				}
			}
		}
	}

	addAscii(): void {
		this.addChar(" ", " ", DynamicFontAtlasCharacterType.SPACE_R);
		this.addChar("\t", "    ", DynamicFontAtlasCharacterType.SPACE_R);
		this.addChar("...", "...", DynamicFontAtlasCharacterType.LETTER_RNB);
		for (let i = 0, imax = ASCII_CHARACTERS.length; i < imax; ++i) {
			const char = ASCII_CHARACTERS[i];
			this.addChar(char, char, DynamicFontAtlasCharacterType.LETTER_RNB);
		}
	}

	addChar(id: string, character: string, type: DynamicFontAtlasCharacterType): void {
		const characters = this._characters;
		if (!this.isIgnored(character)) {
			const data = characters[id];
			if (data != null) {
				if (data.ref <= 0) {
					this._length += 1;
				}
				data.ref += 1;
			} else {
				characters[id] = new DynamicFontAtlasCharacter(type, character, 0, 0, 1, 1, 0);
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
		return this._characters[id];
	}

	update(renderer: Renderer): boolean {
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
					const width = DynamicSDFFontAtlas.toPowerOf2(
						Math.ceil(Math.sqrt(this._length)) * characterSize
					);
					this._width = width;
					const fontStyle =
						(font.italic ? "italic " : "") + (font.size + "px ") + font.family;

					context.font = fontStyle;
					context.textAlign = "left";
					context.textBaseline = "middle";
					context.lineWidth = 0;
					context.lineCap = "round";
					context.lineJoin = "miter";
					context.miterLimit = 0;
					context.fillStyle = "#FFFFFF";

					const offsetX = 7;
					const offsetY = characterSize >> 1;
					let x = 0;
					let y = 0;
					for (const id in characters) {
						const data = characters[id];
						const advance = context.measureText(data.character).width;
						const characterWidth = Math.ceil(offsetX + advance + offsetX);
						const characterHeight = characterSize;
						if (width <= x + characterWidth) {
							x = 0;
							y += characterSize;
						}

						data.x = x;
						data.y = y;
						data.width = characterWidth;
						data.height = characterHeight;
						data.advance = advance;
						data.origin.x = x + offsetX;
						data.origin.y = y + offsetY;

						x += characterWidth;
					}
					const height = (this._height = y + characterSize);

					// Make a input canvas
					// Here, we need to reset the context because
					// context settings will be lost when we set the width/height.
					canvas.width = width;
					canvas.height = height;
					context.font = fontStyle;
					context.textAlign = "left";
					context.textBaseline = "middle";
					context.lineWidth = 0;
					context.lineCap = "round";
					context.lineJoin = "miter";
					context.miterLimit = 4;
					context.fillStyle = "#FFFFFF";
					context.clearRect(0, 0, width, height);
					for (const id in characters) {
						const data = characters[id];
						context.fillText(data.character, data.origin.x, data.origin.y);
					}

					// Convert to SDF font texture
					generator.toDirty();
					generator.generate(renderer);

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

		const characters = this._characters;
		for (const id in characters) {
			delete characters[id];
		}
	}

	static toFontFamily(fontFamily: string): string {
		return fontFamily === "auto" ? DynamicSDFFontAtlas.getAutoFontFamily() : fontFamily;
	}

	static toPowerOf2(size: number): number {
		let result = 32;
		while (result < size) {
			result <<= 1;
		}
		return result;
	}

	static getAutoFontFamily(): string {
		if (DynamicSDFFontAtlas.FONT_FAMILY_AUTO == null) {
			DynamicSDFFontAtlas.FONT_FAMILY_AUTO = DThemes.getInstance()
				.get<any>("DBase")
				.getFontFamilly() as string;
		}
		return DynamicSDFFontAtlas.FONT_FAMILY_AUTO;
	}
}
