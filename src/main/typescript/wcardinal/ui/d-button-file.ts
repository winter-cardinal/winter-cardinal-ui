/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonEvents, DButtonOptions, DThemeButton } from "./d-button";
import { EventSupport } from "./decorator/event-support";
import { isString } from "./util/is-string";
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
export interface DButtonFileOnOptions<VALUE, EMITTER>
	extends Partial<DButtonFileEvents<VALUE, EMITTER> & Record<string, Function>> {

}

/**
 * {@link DButtonFile} options.
 */
export interface DButtonFileOptions<
	VALUE = unknown,
	THEME extends DThemeButtonFile = DThemeButtonFile,
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
export interface DThemeButtonFile extends DThemeButton {

}

/**
 * A file selector.
 */
@EventSupport
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

	// Event handlings
	on<E extends keyof DButtonFileEvents<VALUE, this>>(
		event: E, handler: DButtonFileEvents<VALUE, this>[ E ], context?: any
	): this;
	on( event: string, handler: Function, context?: any ): this;
	on(): this { return this; }

	once<E extends keyof DButtonFileEvents<VALUE, this>>(
		event: E, handler: DButtonFileEvents<VALUE, this>[ E ], context?: any
	): this;
	once( event: string, handler: Function, context?: any ): this;
	once(): this { return this; }

	emit<E extends keyof DButtonFileEvents<VALUE, this>>(
		event: E, ...args: Parameters<DButtonFileEvents<VALUE, this>[ E ]>
	): boolean;
	emit( event: string, ...args: any ): boolean;
	emit(): boolean { return true; }
}
