/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { toEnum } from "./util/to-enum";
import { UtilFileAs, UtilFileEvents, UtilFileOpener } from "./util/util-file-opener";

export import DButtonFileAs = UtilFileAs;

/**
 * {@link DButtonFile} events.
 */
export interface DButtonFileEvents<VALUE, EMITTER> extends DButtonEvents<VALUE, EMITTER>, UtilFileEvents<EMITTER> {

}

/**
 * {@link DButtonFile} "on" options.
 */
export interface DButtonFileOnOptions<VALUE, EMITTER> extends Partial<DButtonFileEvents<VALUE, EMITTER>> {
	[ key: string ]: Function | undefined;
}

/**
 * {@link DButtonFile} options.
 */
export interface DButtonFileOptions<
	VALUE = unknown,
	THEME extends DThemeButtonFile<VALUE> = DThemeButtonFile<VALUE>,
	EMITTER = any
> extends DButtonOptions<VALUE, THEME, EMITTER> {
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

	on?: DButtonFileOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DButtonFile} theme.
 */
export interface DThemeButtonFile<VALUE = unknown> extends DThemeButton<VALUE> {

}

/**
 * A file selector.
 */
export class DButtonFile<
	VALUE = unknown,
	THEME extends DThemeButtonFile<VALUE> = DThemeButtonFile<VALUE>,
	OPTIONS extends DButtonFileOptions<VALUE, THEME> = DButtonFileOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected _checker!: (() => Promise<unknown> | boolean) | undefined;
	protected _opener!: UtilFileOpener;

	protected init( options?: OPTIONS ): void {
		super.init( options );

		this._checker = options?.checker;
		const as = toEnum( options?.as ?? DButtonFileAs.TEXT, DButtonFileAs );
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
