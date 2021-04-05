/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DynamicAtlas } from "./dynamic-atlas";
import { DynamicAtlasItemFontAtlas } from "./dynamic-atlas-item-font-atlas";
import { DynamicSDFFontAtlas } from "./dynamic-sdf-font-atlas";

export class DynamicSDFFontAtlases {
	protected _atlases: { [ family: string ]: DynamicSDFFontAtlas };

	constructor() {
		this._atlases = {};
	}

	begin(): void {
		const atlases = this._atlases;
		for( const family in atlases ) {
			const atlas = atlases[ family ];
			atlas.begin();
		}
	}

	end(): void {
		const atlases = this._atlases;
		for( const family in atlases ) {
			const atlas = atlases[ family ];
			if( 0 < atlas.length ) {
				atlas.addAscii();
			}
			atlas.end();
			if( atlas.length <= 0 ) {
				atlas.destroy();
				delete atlases[ family ];
			}
		}
	}

	add( family: string, targets: string ): void {
		const atlas = this._atlases[ family ];
		if( atlas != null ) {
			atlas.add( targets );
		} else {
			const newAtlas = new DynamicSDFFontAtlas( family );
			newAtlas.add( targets );
			this._atlases[ family ] = newAtlas;
		}
	}

	get( family: string ): DynamicSDFFontAtlas | null {
		const atlas = this._atlases[ family ];
		if( atlas != null ) {
			return atlas;
		}
		return null;
	}

	update( baseAtlas: DynamicAtlas ): void {
		const atlases = this._atlases;
		const baseTexture = baseAtlas.getBaseTexture();
		for( const family in atlases ) {
			const atlas = atlases[ family ];
			if( atlas.update() ) {
				const atlasId = atlas.id;
				const item = baseAtlas.get( atlasId );
				if( item != null ) {
					const width = atlas.width;
					const height = atlas.height;
					const resolution = baseTexture.resolution;
					item.frame.width = width;
					item.frame.height = height;
					item.width = width / resolution;
					item.height = height / resolution;
					baseAtlas.toDirty();
				} else {
					baseAtlas.set(
						atlasId,
						new DynamicAtlasItemFontAtlas( atlas, baseTexture )
					);
				}
			}
		}
	}

	destroy(): void {
		const atlases = this._atlases;
		for( const family in atlases ) {
			const atlas = atlases[ family ];
			atlas.destroy();
		}
		this._atlases = {};
	}
}
