/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilSvgAtlasBuilder } from "../../util/util-atlas-builder";
import { DTheme } from "../d-theme";
import { DThemeWhiteAtlas } from "./d-theme-default-atlas";

interface CLASSES {
	[ type: string ]: new () => any;
}

interface INSTANCES {
	[ type: string ]: DTheme;
}

export class DThemeWhite implements DTheme {
	protected static _classes: CLASSES = {};
	protected _instances: INSTANCES;

	constructor() {
		this._instances = {};
	}

	get<THEME>( type: string ): THEME {
		let instance = this._instances[ type ] as any;
		if( instance != null ) {
			return instance;
		} else {
			const klass = DThemeWhite._classes[ type ];
			if( klass != null ) {
				instance = this._instances[ type ] = new klass();
				return instance;
			} else {
				throw new Error( `No theme for the type '${type}'` );
			}
		}
	}

	getAtlas(): UtilSvgAtlasBuilder {
		return DThemeWhiteAtlas;
	}

	static set<THEME>( type: string, themeClass: new () => THEME ): void {
		this._classes[ type ] = themeClass;
	}
}
