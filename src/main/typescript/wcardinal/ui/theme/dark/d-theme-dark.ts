/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilSvgAtlasBuilder } from "../../util/util-svg-atlas-builder";
import { DTheme } from "../d-theme";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";

export class DThemeDark implements DTheme {
	protected static _classes: Record<string, new () => any> = {};
	protected _instances: Record<string, unknown>;

	constructor() {
		this._instances = {};
	}

	get<THEME>(type: string): THEME {
		let instance = this._instances[type] as any;
		if (instance != null) {
			return instance;
		} else {
			const klass = DThemeDark._classes[type];
			if (klass != null) {
				instance = this._instances[type] = new klass();
				return instance;
			} else {
				throw new Error(`No theme for the type '${type}'`);
			}
		}
	}

	set<THEME>(type: string, instance: THEME): this {
		this._instances[type] = instance;
		return this;
	}

	getClass<THEME>(type: string): new () => THEME {
		const result = DThemeDark._classes[type];
		if (result != null) {
			return result;
		} else {
			throw new Error(`No theme for the type '${type}'`);
		}
	}

	setClass<THEME>(type: string, themeClass: new () => THEME): this {
		DThemeDark._classes[type] = themeClass;
		return this;
	}

	getAtlas(): UtilSvgAtlasBuilder {
		return DThemeDarkAtlas;
	}

	static set<THEME>(type: string, themeClass: new () => THEME): void {
		this._classes[type] = themeClass;
	}
}
