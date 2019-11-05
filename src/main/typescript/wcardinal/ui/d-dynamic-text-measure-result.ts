import { DDynamicTextMeasureResultCharacter } from "./d-dynamic-text-measure-result-character";
import { DynamicFontAtlasCharacter } from "./util/dynamic-font-atlas-character";

export class DDynamicTextMeasureResult {
	count: number;
	width: number;
	height: number;
	characters: DDynamicTextMeasureResultCharacter[];

	x: number;
	y: number;

	constructor() {
		this.count = 0;
		this.width = 0;
		this.height = 0;
		this.characters = [];

		this.x = 0;
		this.y = 0;
	}

	start(): void {
		this.count = 0;
		this.width = 0;
		this.height = 0;

		this.x = 0;
		this.y = 0;
	}

	push( character: DynamicFontAtlasCharacter ): void {
		const x = this.x;
		this.x += character.advance;
		const y = this.y;
		const count = this.count;
		const characters = this.characters;
		if( count < characters.length ) {
			characters[ count ].set( x, y, character );
		} else {
			characters.push( new DDynamicTextMeasureResultCharacter( x, y, character ) );
		}
		this.count += 1;
	}

	newLine( lineHeight: number ): void {
		this.width = Math.max( this.width, this.x );
		this.x = 0;
		this.y += lineHeight;
	}

	pop(): boolean {
		if( 0 < this.x ) {
			const count = this.count;
			const characters = this.characters;
			if( 0 < count ) {
				const character = characters[ count - 1 ];
				this.x -= character.character.advance;
				this.count -= 1;
				return true;
			}
		}
		return false;
	}

	end( lineHeight: number ): void {
		this.newLine( lineHeight );
		this.height = this.y;
	}
}
