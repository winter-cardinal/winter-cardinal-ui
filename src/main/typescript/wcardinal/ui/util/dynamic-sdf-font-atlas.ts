/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Character } from "./character";
import { DynamicFontAtlasCharacter } from "./dynamic-font-atlas-character";
import { DynamicFontAtlasCharacterType } from "./dynamic-font-atlas-character-type";
import { DynamicFontAtlasCharacters } from "./dynamic-font-atlas-characters";
import { DynamicSDFFontAtlasFont } from "./dynamic-sdf-font-atlas-font";
import { DynamicSDFFontGenerator } from "./dynamic-sdf-font-generator";
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
	protected _width: number;
	protected _height: number;
	protected _isDirty: boolean;
	protected _isTouched: boolean;
	protected _life: number;

	constructor(fontFamily: string) {
		this._id = `font-atlas:${fontFamily}`;
		this._generator = DynamicSDFFontGenerator.getInstance().init();
		this._canvas = document.createElement("canvas");
		this._font = new DynamicSDFFontAtlasFont(fontFamily);
		this._width = 1;
		this._height = 1;

		const characters = new Map<string, DynamicFontAtlasCharacter>();
		characters.set(
			Character.SPACE,
			this.newChar(Character.SPACE, DynamicFontAtlasCharacterType.SPACE_R)
		);
		characters.set(
			Character.TAB,
			this.newChar(Character.SOFT_TAB, DynamicFontAtlasCharacterType.SPACE_R)
		);
		characters.set(
			Character.DOTS,
			this.newChar(Character.DOTS, DynamicFontAtlasCharacterType.LETTER_RNB)
		);
		for (let i = 0, imax = Character.ASCII.length; i < imax; ++i) {
			const ac = Character.ASCII[i];
			characters.set(ac, this.newChar(ac, DynamicFontAtlasCharacterType.LETTER_RNB));
		}
		this._characters = characters;
		this._isDirty = true;
		this._isTouched = false;
		this._life = DynamicFontAtlasCharacter.LIFE;
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
		this._isTouched = false;
		this._characters.forEach((character) => {
			if (!(character.type & DynamicFontAtlasCharacterType.RESERVED)) {
				character.ref = 0;
			}
		});
	}

	end(): void {
		const characters = this._characters;
		if (this._isTouched) {
			this._life = DynamicFontAtlasCharacter.LIFE;
			characters.forEach((character, id) => {
				if (
					character.ref <= 0 &&
					!(character.type & DynamicFontAtlasCharacterType.RESERVED)
				) {
					character.life -= 1;
					if (character.life <= 0) {
						characters.delete(id);
						this._isDirty = true;
					}
				}
			});
		} else {
			this._life -= 1;
			if (this._life <= 0 && 0 < characters.size) {
				characters.clear();
				this._isDirty = true;
			}
		}
	}

	protected newChar(
		character: string,
		type: DynamicFontAtlasCharacterType
	): DynamicFontAtlasCharacter {
		return new DynamicFontAtlasCharacter(type, character, 0, 0, 1, 1, 0);
	}

	add(characters: string[], nacharacters: string[]): void {
		const cs = this._characters;
		for (let i = 0, imax = nacharacters.length; i < imax; ++i) {
			const nac = nacharacters[i];
			const data = cs.get(nac);
			if (data != null) {
				data.ref += 1;
				data.life = DynamicFontAtlasCharacter.LIFE;
			} else {
				cs.set(nac, this.newChar(nac, DynamicFontAtlasCharacterType.LETTER));
				this._isDirty = true;
			}
		}
		if (0 < characters.length) {
			this._isTouched = true;
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
					const fontSize = font.size + 14;
					const characters = this._characters;
					const width = this.toPowerOf2(Math.ceil(Math.sqrt(characters.size)) * fontSize);
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
						(fontSize - (font.ascent + font.descent)) * 0.5 + font.ascent
					);
					let x = 0;
					let y = 0;
					characters.forEach((character) => {
						const advance = context.measureText(character.character).width;
						const characterWidth = Math.ceil(offsetX + advance + offsetX);
						const characterHeight = fontSize;
						if (width <= x + characterWidth) {
							x = 0;
							y += fontSize;
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
					const height = (this._height = y + fontSize);

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
		return this._characters.size;
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
