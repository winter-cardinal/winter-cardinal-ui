import { DDynamicTextMeasureResultCharacter } from "./d-dynamic-text-measure-result-character";
import { DynamicFontAtlasCharacter } from "./util/dynamic-font-atlas-character";
import { DynamicFontAtlasCharacterType } from "./util/dynamic-font-atlas-character-type";

export class DDynamicTextMeasureResult {
	count: number;
	countPerLine: number;
	width: number;
	height: number;
	characters: DDynamicTextMeasureResultCharacter[];
	clipped: boolean;

	x: number;
	y: number;

	constructor() {
		this.count = 0;
		this.countPerLine = 0;
		this.width = 0;
		this.height = 0;
		this.characters = [];
		this.clipped = false;

		this.x = 0;
		this.y = 0;
	}

	start(lineHeight: number, fontHeight: number): void {
		this.count = 0;
		this.countPerLine = 0;
		this.width = 0;
		this.height = 0;
		this.clipped = false;

		this.x = 0;
		this.y = 0.5 * (lineHeight - fontHeight);
	}

	isPushable(width: number, character: DynamicFontAtlasCharacter): boolean {
		const x = this.x + character.advance;
		if (width < x) {
			if (character.type & DynamicFontAtlasCharacterType.SPACE) {
				return true;
			} else {
				return false;
			}
		}
		return true;
	}

	isPushableAtNewLine(height: number, lineHeight: number, fontHeight: number): boolean {
		return this.y + 1.5 * lineHeight + 0.5 * fontHeight <= height;
	}

	push(character: DynamicFontAtlasCharacter, isWrappable: boolean): void {
		const x = this.x;
		this.x += character.advance;
		const y = this.y;
		const count = this.count;
		const characters = this.characters;
		if (count < characters.length) {
			characters[count].set(x, y, character, isWrappable);
		} else {
			characters.push(new DDynamicTextMeasureResultCharacter(x, y, character, isWrappable));
		}
		this.count += 1;
		this.countPerLine += 1;
	}

	newLine(lineHeight: number): void {
		this.width = Math.max(this.width, this.x);
		this.x = 0;
		this.y += lineHeight;
		this.countPerLine = 0;
	}

	wordWrap(lineHeight: number): boolean {
		const countPerLine = this.countPerLine;
		const characters = this.characters;
		if (0 < countPerLine) {
			const count = this.count;
			for (let i = count - 1, imin = count - countPerLine; imin < i; --i) {
				let character = characters[i];
				if (character.wrappable) {
					let x = character.character.advance;
					const y = character.y + lineHeight;
					character.x = 0;
					character.y = y;
					for (let j = i + 1; j < count; ++j) {
						character = characters[j];
						character.x = x;
						character.y = y;
						x += character.character.advance;
					}
					this.x = x;
					this.y = y;
					this.countPerLine = count - i;
					return true;
				}
			}
			const last = characters[count - 1];
			last.x = 0;
			last.y = last.y + lineHeight;
			this.x = last.character.advance;
			this.y = last.y;
			this.countPerLine = 1;
			return false;
		}
		return false;
	}

	pop(): boolean {
		const countPerLine = this.countPerLine;
		const characters = this.characters;
		if (0 < countPerLine) {
			const character = characters[this.count - 1];
			this.x -= character.character.advance;
			this.count -= 1;
			this.countPerLine -= 1;
			return true;
		}
		return false;
	}

	end(lineHeight: number, fontHeight: number): void {
		this.newLine(lineHeight);
		this.y -= 0.5 * (lineHeight - fontHeight);
		this.height = this.y;
	}
}
