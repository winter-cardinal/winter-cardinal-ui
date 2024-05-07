/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { MIPMAP_MODES, SCALE_MODES, Texture } from "pixi.js";
import { Character } from "./character";
import { DynamicFontAtlasCharacter } from "./dynamic-font-atlas-character";
import { DynamicFontAtlasCharacterType } from "./dynamic-font-atlas-character-type";
import { DynamicFontAtlasCharacters } from "./dynamic-font-atlas-characters";
import { DynamicFontAtlasFont } from "./dynamic-font-atlas-font";
import { UtilFont } from "./util-font";

export class DynamicFontAtlas {
	protected _id: string;
	protected _canvas: HTMLCanvasElement | null;
	protected _context: CanvasRenderingContext2D | null;
	protected _font: DynamicFontAtlasFont;
	protected _characters: DynamicFontAtlasCharacters;
	protected _createds: DynamicFontAtlasCharacters;
	protected _unrefCount: number;
	protected _width: number;
	protected _height: number;
	protected _revision: number;
	protected _revisionUpdated: number;
	protected _texture: Texture;
	protected _padding: number;

	constructor(fontId: string, fontSize: number, fontColor: number, resolution: number) {
		this._id = fontId;
		this._canvas = document.createElement("canvas");
		this._context = null;
		const padding = this.toPadding(fontSize);
		this._padding = padding;
		this._font = new DynamicFontAtlasFont(fontId, fontSize, fontColor, padding);
		this._unrefCount = 0;
		this._width = 1;
		this._height = 1;
		this._revisionUpdated = 0;
		this._texture = Texture.from(this._canvas, {
			mipmap: MIPMAP_MODES.OFF,
			resolution,
			scaleMode: SCALE_MODES.NEAREST
		});

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
		this._createds = new Map<string, DynamicFontAtlasCharacter>();
		this._revision = 1;
	}

	protected toPadding(fontSize: number): number {
		return Math.max(3, Math.ceil(fontSize * 0.2));
	}

	get id(): string {
		return this._id;
	}

	get font(): DynamicFontAtlasFont {
		return this._font;
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

	get characters(): DynamicFontAtlasCharacters {
		return this._characters;
	}

	get texture(): Texture {
		return this._texture;
	}

	protected newChar(
		character: string,
		type: DynamicFontAtlasCharacterType
	): DynamicFontAtlasCharacter {
		const advance = this.getAdvance(character);
		const padding = this._padding;
		const width = Math.ceil(padding + advance + padding);
		const height = this.font.height;
		return new DynamicFontAtlasCharacter(
			type,
			character,
			-width, // Setting X and Y to zeros leads to render the character at the UV coordinate (0, 0).
			-height,
			width,
			height,
			advance
		);
	}

	add(characters: string, type: DynamicFontAtlasCharacterType): void {
		const cs = this._characters;
		const cds = this._createds;
		for (let i = 0, imax = characters.length; i < imax; ) {
			if (characters.charCodeAt(i) <= 0xff) {
				// Ignore ASCII characters
				i += 1;
				continue;
			}
			let j = i + 1;
			for (; j < imax; ++j) {
				const cc = characters.charCodeAt(j);
				if ((0xdc00 <= cc && cc <= 0xdfff) || (0xfe00 <= cc && cc <= 0xfe0f)) {
					// Low surrogate
					// Variation selector
					continue;
				}
				break;
			}
			// Increment the reference count or create a new one
			const nac = characters.substring(i, j);
			const c = cs.get(nac);
			if (c != null) {
				if (!(c.type & DynamicFontAtlasCharacterType.RESERVED)) {
					if (c.ref === 0) {
						this._unrefCount -= 1;
					}
					c.ref += 1;
				}
			} else {
				const cd = cds.get(nac);
				if (cd != null) {
					cd.ref = 1;
					cs.set(nac, cd);
				} else {
					const newCharacter = this.newChar(nac, type);
					cs.set(nac, newCharacter);
					cds.set(nac, newCharacter);
				}
				this._revision += 1;
			}
			// Go to the next
			i = j;
		}
	}

	remove(characters: string): void {
		const cs = this._characters;
		for (let i = 0, imax = characters.length; i < imax; ) {
			if (characters.charCodeAt(i) <= 0xff) {
				// Ignore ASCII characters
				i += 1;
				continue;
			}
			let j = i + 1;
			for (; j < imax; ++j) {
				const cc = characters.charCodeAt(j);
				if ((0xdc00 <= cc && cc <= 0xdfff) || (0xfe00 <= cc && cc <= 0xfe0f)) {
					// Low surrogate
					// Variation selector
					continue;
				}
				break;
			}
			// Decrement the reference count
			const nac = characters.substring(i, j);
			const c = cs.get(nac);
			if (c != null && 0 < c.ref && !(c.type & DynamicFontAtlasCharacterType.RESERVED)) {
				c.ref -= 1;
				if (c.ref === 0) {
					this._unrefCount += 1;
				}
			}
			// Go to the next
			i = j;
		}
	}

	protected cleanup(): void {
		const characters = this._characters;
		if (characters.size >> 1 <= this._unrefCount) {
			characters.forEach((char, id) => {
				if (char.ref <= 0) {
					characters.delete(id);
				}
			});
			this._revision += 1;
			this._unrefCount = 0;
		}
	}

	get(id: string): DynamicFontAtlasCharacter | undefined {
		return this._characters.get(id);
	}

	getAdvance(target: string): number {
		const context = this.getContext();
		if (context != null) {
			return context.measureText(target).width;
		}
		return 0;
	}

	getContext(): CanvasRenderingContext2D | null {
		let context = this._context;
		if (context == null) {
			const canvas = this._canvas;
			if (canvas != null) {
				context = this._context = canvas.getContext("2d", { alpha: true });
				if (context == null) {
					return null;
				}
			} else {
				return null;
			}
		}

		const font = this._font;
		if (context.font !== font.id) {
			context.font = font.id;
			font.id = context.font;
			context.textAlign = "left";
			context.textBaseline = "alphabetic";
			context.lineWidth = 0;
			context.lineCap = "round";
			context.lineJoin = "miter";
			context.miterLimit = 10;
			context.fillStyle = font.color;
			context.strokeStyle = "#0000ff";
		}
		return context;
	}

	update(): boolean {
		this.cleanup();

		if (this._revisionUpdated < this._revision) {
			this._revisionUpdated = this._revision;

			const canvas = this._canvas;
			if (canvas != null) {
				const font = this._font;
				const fontHeight = font.height;
				const characters = this._characters;
				const width = (this._width = this.toPowerOf2(
					Math.ceil(Math.sqrt(characters.size)) * fontHeight
				));

				const offsetX = this._padding;
				let x = 0;
				let y = 0;
				characters.forEach((character) => {
					if (width <= x + character.width) {
						x = 0;
						y += fontHeight;
					}

					character.x = x;
					character.y = y;
					character.origin.x = x + offsetX;

					x += character.width;
				});
				const height = (this._height = y + fontHeight);

				// Make an input canvas
				// Here, we need to reset the context because
				// context settings will be lost when we set the width/height.
				const baseTexture = this._texture.baseTexture;
				const resolution = baseTexture.resolution;
				const realWidth = Math.ceil(width * resolution);
				const realHeight = Math.ceil(height * resolution);
				canvas.width = realWidth;
				canvas.height = realHeight;
				const context = this.getContext();
				if (context != null) {
					UtilFont.measure(context, font);
					const offsetY = Math.round(
						(fontHeight - (font.ascent + font.descent)) * 0.5 + font.ascent
					);
					context.save();
					context.scale(resolution, resolution);
					context.clearRect(0, 0, width, height);
					characters.forEach((character) => {
						character.origin.y = character.y + offsetY;
						context.fillText(
							character.character,
							character.origin.x,
							character.origin.y
						);
					});
					context.restore();
				}
				baseTexture.setRealSize(realWidth, realHeight);

				return true;
			}
		}
		return false;
	}

	getRevision(): number {
		return this._revision;
	}

	getRevisionUpdate(): number {
		return this._revisionUpdated;
	}

	get length(): number {
		return this._characters.size;
	}

	destroy(): void {
		const canvas = this._canvas;
		if (canvas != null) {
			this._canvas = null;
		}
		this._characters.clear();
		this._createds.clear();
		this._unrefCount = 0;
	}

	toPowerOf2(size: number): number {
		let result = 32;
		while (result < size) {
			result <<= 1;
		}
		return result;
	}
}
