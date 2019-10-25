/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTheme } from "./d-theme";

export class DThemes {
	private static DEFAULT_THEME_CLASS: (new () => DTheme) | null = null;
	private static INSTANCE: DTheme | null = null;

	public static setDefaultThemeClass( theme: new () => DTheme ): void {
		this.DEFAULT_THEME_CLASS = theme;
	}

	public static getDefaultThemeClass(): (new () => DTheme) | null {
		return this.DEFAULT_THEME_CLASS;
	}

	public static getInstance(): DTheme {
		if( this.INSTANCE == null ) {
			const defaultThemeClass = this.getDefaultThemeClass();
			if( defaultThemeClass == null ) {
				throw new Error( "No default theme class found" );
			}
			this.INSTANCE = new defaultThemeClass();
		}
		return this.INSTANCE;
	}

	public static setInstance( instance: DTheme ): DTheme | null {
		const result = this.INSTANCE;
		this.INSTANCE = instance;
		return result;
	}
}
