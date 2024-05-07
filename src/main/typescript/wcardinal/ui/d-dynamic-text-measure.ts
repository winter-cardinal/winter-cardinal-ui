import { DDynamicTextMeasureResult } from "./d-dynamic-text-measure-result";
import { DynamicFontAtlas } from "./util/dynamic-font-atlas";
import { UtilCharacterIterator } from "./util/util-character-iterator";
import type { LineBreaker } from "css-line-break";
import { LineBreak } from "css-line-break/dist/types/LineBreak";
import { DDynamicTextStyleWordWrap } from "./d-dynamic-text-style-word-wrap";
import { DynamicFontAtlasCharacter } from "./util/dynamic-font-atlas-character";
import { DynamicFontAtlasCharacterType } from "./util/dynamic-font-atlas-character-type";
import { Character } from "./util/character";

export interface DDynamicTextMeasureModifier {
	clipping: boolean;
	fitting: boolean;
	wordWrap: DDynamicTextStyleWordWrap;
	width: number;
	height: number;
	lineHeight: number;
}

export class DDynamicTextMeasure {
	protected static RESULT: DDynamicTextMeasureResult | null = null;

	static measure(
		text: string,
		atlas: DynamicFontAtlas | null,
		modifier: DDynamicTextMeasureModifier
	): DDynamicTextMeasureResult {
		const result = DDynamicTextMeasure.RESULT || new DDynamicTextMeasureResult();
		DDynamicTextMeasure.RESULT = result;
		if (atlas != null) {
			const itr = UtilCharacterIterator.from(text);
			const fh = atlas.font.height;
			const lh = modifier.lineHeight;
			const cf = modifier.fitting;
			const cc = !cf && modifier.clipping;
			const cw = modifier.width;
			const ch = modifier.height;
			const cp = !cf && modifier.wordWrap;
			result.start(lh, fh);
			switch (cp) {
				case DDynamicTextStyleWordWrap.BREAK_ALL:
					if (cc) {
						this.measure1(itr, cw, ch, fh, lh, atlas, result);
					} else {
						this.measure2(itr, cw, lh, atlas, result);
					}
					break;
				case DDynamicTextStyleWordWrap.NORMAL:
					const lb = this.newLineBreaker(text);
					if (lb) {
						if (cc) {
							this.measure1a(lb, itr, cw, ch, fh, lh, atlas, result);
						} else {
							this.measure2a(lb, itr, cw, lh, atlas, result);
						}
					} else {
						if (cc) {
							this.measure1b(itr, cw, ch, fh, lh, atlas, result);
						} else {
							this.measure2b(itr, cw, lh, atlas, result);
						}
					}
					break;
				default:
					if (cc) {
						this.measure3(itr, cw, ch, fh, lh, atlas, result);
					} else {
						this.measure4(itr, lh, atlas, result);
					}
					break;
			}
			result.end(lh, fh);
			if (cf) {
				result.fit(cw, ch);
			}
		} else {
			result.start(0, 0);
			result.end(0, 0);
		}
		return result;
	}

	private static measure1a(
		lineBreaker: ReturnType<typeof LineBreaker>,
		iterator: UtilCharacterIterator,
		clippingWidth: number,
		clippingHeight: number,
		fontHeight: number,
		lineHeight: number,
		atlas: DynamicFontAtlas,
		result: DDynamicTextMeasureResult
	): void {
		let lineBreak = lineBreaker.next();
		while (iterator.hasNext()) {
			const characterPosition = iterator.position;
			const character = iterator.next();
			if (character === Character.NEW_LINE) {
				if (result.isPushableAtNewLine(clippingHeight, lineHeight, fontHeight)) {
					result.newLine(lineHeight);
				} else {
					this.measure5(iterator, clippingWidth, lineHeight, atlas, result, true);
				}
			} else {
				const a = atlas.get(character);
				if (a == null) continue;

				lineBreak = this.advance(characterPosition, lineBreak, lineBreaker);
				const isWrappable = this.isWrappable1(characterPosition, lineBreak);

				if (result.isPushable(clippingWidth, a)) {
					result.push(a, isWrappable);
				} else {
					if (result.isPushableAtNewLine(clippingHeight, lineHeight, fontHeight)) {
						result.push(a, isWrappable);
						result.wordWrap(lineHeight);
					} else {
						this.measure5(iterator, clippingWidth, lineHeight, atlas, result, true);
					}
				}
			}
		}
	}

	private static measure1b(
		iterator: UtilCharacterIterator,
		clippingWidth: number,
		clippingHeight: number,
		fontHeight: number,
		lineHeight: number,
		atlas: DynamicFontAtlas,
		result: DDynamicTextMeasureResult
	): void {
		while (iterator.hasNext()) {
			const character = iterator.next();
			if (character === Character.NEW_LINE) {
				if (result.isPushableAtNewLine(clippingHeight, lineHeight, fontHeight)) {
					result.newLine(lineHeight);
				} else {
					this.measure5(iterator, clippingWidth, lineHeight, atlas, result, true);
				}
			} else {
				const a = atlas.get(character);
				if (a == null) continue;

				const isWrappable = this.isWrappable2(result, a);
				if (result.isPushable(clippingWidth, a)) {
					result.push(a, isWrappable);
				} else {
					if (result.isPushableAtNewLine(clippingHeight, lineHeight, fontHeight)) {
						result.push(a, isWrappable);
						result.wordWrap(lineHeight);
					} else {
						this.measure5(iterator, clippingWidth, lineHeight, atlas, result, true);
					}
				}
			}
		}
	}

	private static measure1(
		iterator: UtilCharacterIterator,
		clippingWidth: number,
		clippingHeight: number,
		fontHeight: number,
		lineHeight: number,
		atlas: DynamicFontAtlas,
		result: DDynamicTextMeasureResult
	): void {
		while (iterator.hasNext()) {
			const character = iterator.next();
			if (character === Character.NEW_LINE) {
				if (result.isPushableAtNewLine(clippingHeight, lineHeight, fontHeight)) {
					result.newLine(lineHeight);
				} else {
					this.measure5(iterator, clippingWidth, lineHeight, atlas, result, true);
				}
			} else {
				const a = atlas.get(character);
				if (a == null) continue;

				if (result.isPushable(clippingWidth, a)) {
					result.push(a, true);
				} else {
					if (result.isPushableAtNewLine(clippingHeight, lineHeight, fontHeight)) {
						result.newLine(lineHeight);
						result.push(a, true);
					} else {
						this.measure5(iterator, clippingWidth, lineHeight, atlas, result, true);
					}
				}
			}
		}
	}

	private static measure2a(
		lineBreaker: ReturnType<typeof LineBreaker>,
		iterator: UtilCharacterIterator,
		clippingWidth: number,
		lineHeight: number,
		atlas: DynamicFontAtlas,
		result: DDynamicTextMeasureResult
	): void {
		let lineBreak = lineBreaker.next();
		while (iterator.hasNext()) {
			const characterPosition = iterator.position;
			const character = iterator.next();
			if (character === Character.NEW_LINE) {
				result.newLine(lineHeight);
			} else {
				const a = atlas.get(character);
				if (a == null) continue;

				lineBreak = this.advance(characterPosition, lineBreak, lineBreaker);
				const isWrappable = this.isWrappable1(characterPosition, lineBreak);

				if (result.isPushable(clippingWidth, a)) {
					result.push(a, isWrappable);
				} else {
					result.push(a, isWrappable);
					result.wordWrap(lineHeight);
				}
			}
		}
	}

	private static measure2b(
		iterator: UtilCharacterIterator,
		clippingWidth: number,
		lineHeight: number,
		atlas: DynamicFontAtlas,
		result: DDynamicTextMeasureResult
	): void {
		while (iterator.hasNext()) {
			const character = iterator.next();
			if (character === Character.NEW_LINE) {
				result.newLine(lineHeight);
			} else {
				const a = atlas.get(character);
				if (a == null) continue;

				const isWrappable = this.isWrappable2(result, a);

				if (result.isPushable(clippingWidth, a)) {
					result.push(a, isWrappable);
				} else {
					result.push(a, isWrappable);
					result.wordWrap(lineHeight);
				}
			}
		}
	}

	private static measure2(
		iterator: UtilCharacterIterator,
		clippingWidth: number,
		lineHeight: number,
		atlas: DynamicFontAtlas,
		result: DDynamicTextMeasureResult
	): void {
		while (iterator.hasNext()) {
			const character = iterator.next();
			if (character === Character.NEW_LINE) {
				result.newLine(lineHeight);
			} else {
				const a = atlas.get(character);
				if (a == null) continue;

				if (result.isPushable(clippingWidth, a)) {
					result.push(a, false);
				} else {
					result.newLine(lineHeight);
					result.push(a, false);
				}
			}
		}
	}

	private static measure3(
		iterator: UtilCharacterIterator,
		clippingWidth: number,
		clippingHeight: number,
		fontHeight: number,
		lineHeight: number,
		atlas: DynamicFontAtlas,
		result: DDynamicTextMeasureResult
	): void {
		while (iterator.hasNext()) {
			const character = iterator.next();
			if (character === Character.NEW_LINE) {
				if (result.isPushableAtNewLine(clippingHeight, lineHeight, fontHeight)) {
					result.newLine(lineHeight);
				} else {
					this.measure5(iterator, clippingWidth, lineHeight, atlas, result, true);
				}
			} else {
				const a = atlas.get(character);
				if (a == null) continue;

				if (result.isPushable(clippingWidth, a)) {
					result.push(a, false);
				} else {
					this.measure5(iterator, clippingWidth, lineHeight, atlas, result, false);
				}
			}
		}
	}

	private static measure4(
		iterator: UtilCharacterIterator,
		lineHeight: number,
		atlas: DynamicFontAtlas,
		result: DDynamicTextMeasureResult
	): void {
		while (iterator.hasNext()) {
			const character = iterator.next();
			if (character === Character.NEW_LINE) {
				result.newLine(lineHeight);
			} else {
				const a = atlas.get(character);
				if (a == null) continue;
				result.push(a, false);
			}
		}
	}

	static measure5(
		iterator: UtilCharacterIterator,
		clippingWidth: number,
		lineHeight: number,
		atlas: DynamicFontAtlas,
		result: DDynamicTextMeasureResult,
		close: boolean
	): void {
		result.clipped = true;
		const dots = atlas.get(Character.DOTS);
		if (dots != null) {
			while (!result.isPushable(clippingWidth, dots)) {
				if (!result.pop()) {
					break;
				}
			}
			if (result.isPushable(clippingWidth, dots)) {
				result.push(dots, false);
			}
		}
		if (close) {
			iterator.close();
		} else {
			while (iterator.hasNext()) {
				if (iterator.next() === Character.NEW_LINE) {
					result.newLine(lineHeight);
					break;
				}
			}
		}
	}

	private static isWrappable2(
		result: DDynamicTextMeasureResult,
		character: DynamicFontAtlasCharacter
	): boolean {
		if (result.countPerLine <= 0) {
			return false;
		}
		const last = result.characters[result.count - 1];
		const lastType = last.character.type;
		const type = character.type;
		if (lastType & DynamicFontAtlasCharacterType.SPACE) {
			if (type & DynamicFontAtlasCharacterType.SPACE) {
				return false;
			} else {
				if (lastType & DynamicFontAtlasCharacterType.NON_BREAKING) {
					return false;
				} else {
					return true;
				}
			}
		} else {
			if (type & DynamicFontAtlasCharacterType.SPACE) {
				return false;
			} else {
				if (lastType & DynamicFontAtlasCharacterType.NON_BREAKING) {
					if (type & DynamicFontAtlasCharacterType.NON_BREAKING) {
						return false;
					} else {
						return true;
					}
				} else {
					return true;
				}
			}
		}
	}

	private static advance(
		position: number,
		lineBreak: LineBreak,
		lineBreaker: ReturnType<typeof LineBreaker>
	): LineBreak {
		if (lineBreak.done) {
			return lineBreak;
		}
		if (position <= lineBreak.value.end) {
			return lineBreak;
		}
		lineBreak = lineBreaker.next();
		return lineBreak;
	}

	private static isWrappable1(position: number, lineBreak: LineBreak): boolean {
		if (lineBreak.done) {
			return false;
		}
		const value = lineBreak.value;
		return value.start === position || value.end === position;
	}

	private static newLineBreaker(target: string): ReturnType<typeof LineBreaker> | null {
		if ("css-line-break" in window) {
			const cssLineBreak = (window as any)["css-line-break"] as {
				LineBreaker: typeof LineBreaker;
			};
			return cssLineBreak.LineBreaker(target, {
				lineBreak: "strict",
				wordBreak: "normal"
			});
		}
		return null;
	}
}
