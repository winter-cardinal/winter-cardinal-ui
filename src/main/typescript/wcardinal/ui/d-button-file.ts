/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { isString } from "./util/is-string";
import { UtilFileAs, UtilFileOn, UtilFileOpener } from "./util/util-file-opener";

export import DButtonFileAs = UtilFileAs;

/**
 * {@link DButtonFile} events.
 */
export interface DButtonFileEvents<VALUE, SELF> extends DButtonEvents<VALUE, SELF>, UtilFileOn<SELF> {

}

/**
 * Mappings of event names and handlers.
 */
export interface DButtonFileOnOptions<VALUE, SELF>
	extends Partial<DButtonFileEvents<VALUE, SELF> & Record<string, Function>> {

}

export interface DButtonFileOptions<
	VALUE = unknown,
	THEME extends DThemeButtonFile = DThemeButtonFile,
	SELF = any
> extends DButtonOptions<VALUE, THEME, SELF> {
	/**
	 * An output format.
	 */
	as?: (keyof typeof UtilFileAs) | UtilFileAs;

	/**
	 * A checker called before opening a file.
	 * If the checker returns false or the returned promise object is rejected,
	 * files will not be opened.
	 */
	checker?: () => Promise<unknown> | boolean;

	on?: DButtonFileOnOptions<VALUE, SELF>;
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
