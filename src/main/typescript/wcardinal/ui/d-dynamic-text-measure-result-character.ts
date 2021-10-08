import { DynamicFontAtlasCharacter } from "./util/dynamic-font-atlas-character";

export class DDynamicTextMeasureResultCharacter {
	x: number;
	y: number;
	character: DynamicFontAtlasCharacter;
	wrappable: boolean;

	constructor(x: number, y: number, character: DynamicFontAtlasCharacter, wrappable: boolean) {
		this.x = x;
		this.y = y;
		this.character = character;
		this.wrappable = wrappable;
	}

	set(x: number, y: number, character: DynamicFontAtlasCharacter, isWrappable: boolean): void {
		this.x = x;
		this.y = y;
		this.character = character;
		this.wrappable = isWrappable;
	}
}
