/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { isString } from "./util/is-string";
import { UtilFileAs, UtilFileOpener } from "./util/util-file-opener";

export import DButtonFileAs = UtilFileAs;

export interface DButtonFileOptions<
	VALUE = unknown,
	THEME extends DThemeButtonFile = DThemeButtonFile
> extends DButtonOptions<VALUE, THEME> {
	as?: (keyof typeof UtilFileAs) | UtilFileAs;
	checker?: () => Promise<unknown> | boolean;
}

export interface DThemeButtonFile extends DThemeButton {

}

export class DButtonFile<
	VALUE = unknown,
	THEME extends DThemeButtonFile = DThemeButtonFile,
	OPTIONS extends DButtonFileOptions<VALUE, THEME> = DButtonFileOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected _checker!: (() => Promise<unknown> | boolean) | undefined;
	protected _opener!: UtilFileOpener;

	protected init( options?: OPTIONS ): void {
		super.init( options );

		this._checker = ( options != null && options.checker != null ? options.checker : undefined );
		const as: DButtonFileAs = ( options != null && options.as != null ?
			( isString( options.as ) ? DButtonFileAs[ options.as ] : options.as ) :
			DButtonFileAs.TEXT
		);
		const opener = new UtilFileOpener( as, this );
		this._opener = opener;
		this.on( "active", (): void => {
			const result = this.onOpening();
			if( result === true ) {
				opener.open();
			} else if( result === false ) {
				// DO NOTHING
			} else {
				result.then((): void => {
					opener.open();
				});
			}
		});
	}

	onOpening(): boolean | Promise<unknown> {
		const checker = this._checker;
		if( checker != null ) {
			return checker();
		}
		return true;
	}

	open(): void {
		this._opener.open();
	}

	protected getType(): string {
		return "DButtonFile";
	}
}
