/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DynamicAtlas } from "./dynamic-atlas";
import { DynamicAtlasItemFontAtlas } from "./dynamic-atlas-item-font-atlas";
import { DynamicSDFFontAtlas } from "./dynamic-sdf-font-atlas";

export class DynamicSDFFontAtlases {
	protected _atlases: Map<string, DynamicSDFFontAtlas>;

	constructor() {
		this._atlases = new Map<string, DynamicSDFFontAtlas>();
	}

	begin(): void {
		this._atlases.forEach((atlas) => {
			atlas.begin();
		});
	}

	end(): void {
		const atlases = this._atlases;
		atlases.forEach((atlas, family) => {
			atlas.end();
			if (atlas.length <= 0) {
				atlas.destroy();
				atlases.delete(family);
			}
		});
	}

	add(family: string, characters: string[], nacharacters: string[]): void {
		const atlases = this._atlases;
		const atlas = atlases.get(family);
		if (atlas != null) {
			atlas.add(characters, nacharacters);
		} else {
			const newAtlas = new DynamicSDFFontAtlas(family);
			newAtlas.add(characters, nacharacters);
			atlases.set(family, newAtlas);
		}
	}

	get(family: string): DynamicSDFFontAtlas | null {
		const atlas = this._atlases.get(family);
		if (atlas != null) {
			return atlas;
		}
		return null;
	}

	update(baseAtlas: DynamicAtlas): void {
		const baseTexture = baseAtlas.getBaseTexture();
		this._atlases.forEach((atlas) => {
			if (atlas.update()) {
				const atlasId = atlas.id;
				const item = baseAtlas.get(atlasId);
				if (item != null) {
					const width = atlas.width;
					const height = atlas.height;
					const resolution = baseTexture.resolution;
					item.frame.width = width;
					item.frame.height = height;
					item.width = width / resolution;
					item.height = height / resolution;
					baseAtlas.toDirty();
				} else {
					baseAtlas.set(atlasId, new DynamicAtlasItemFontAtlas(atlas, baseTexture));
				}
			}
		});
	}

	destroy(): void {
		const atlases = this._atlases;
		atlases.forEach((atlas) => {
			atlas.destroy();
		});
		atlases.clear();
	}
}
