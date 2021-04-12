import { DynamicFontAtlasCharacter } from "./util/dynamic-font-atlas-character";

export class DDynamicTextMeasureResultCharacter {
	x: number;
	y: number;
	character: DynamicFontAtlasCharacter;

	constructor(x: number, y: number, character: DynamicFontAtlasCharacter) {
		this.x = x;
		this.y = y;
		this.character = character;
	}

	set(x: number, y: number, character: DynamicFontAtlasCharacter): void {
		this.x = x;
		this.y = y;
		this.character = character;
	}
}
