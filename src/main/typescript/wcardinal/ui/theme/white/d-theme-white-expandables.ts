import { Texture } from "pixi.js";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";

export class DThemeWhiteExpandables {
	static init(): void {
		/* eslint-disable prettier/prettier */
		DThemeWhiteAtlas.add("expandable_closed", 14, 14,
			`<g transform="scale(1, 0.7)">` +
				`<polyline fill="none" stroke="#fff" stroke-width="1" points="6 16 10 10 6 4"></polyline>` +
			`</g>`
		);

		DThemeWhiteAtlas.add("expandable_opened", 14, 14,
			`<g transform="scale(0.7, 1)">` +
				`<polyline fill="none" stroke="#fff" stroke-width="1" points="16 6 10 10 4 6"></polyline>` +
			`</g>`
		);
		/* eslint-enable prettier/prettier */
	}

	static getImageOpened(): Texture {
		return DThemeWhiteAtlas.mappings.expandable_opened;
	}

	static getImageClosed(): Texture {
		return DThemeWhiteAtlas.mappings.expandable_closed;
	}
}
