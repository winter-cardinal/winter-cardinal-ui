/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonBase, DButtonBaseOn, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";

/**
 * Event handlers.
 */
export interface DButtonOn<VALUE, SELF> extends DButtonBaseOn<VALUE, SELF> {

}

/**
 * Mappings of event names and handlers.
 */
export interface DButtonOnOptions<VALUE, SELF> extends Partial<DButtonOn<VALUE, SELF> & Record<string, Function>> {

}

export interface DButtonOptions<
	VALUE = unknown,
	THEME extends DThemeButton = DThemeButton,
	SELF = any
> extends DButtonBaseOptions<VALUE, THEME, SELF> {
	on?: DButtonOnOptions<VALUE, SELF>;
}

export interface DThemeButton extends DThemeButtonBase {

}

export interface DButton<VALUE> {
	on<E extends keyof DButtonOn<VALUE, this>>(
		event: E, handler: DButtonOn<VALUE, this>[ E ], context?: any
	): this;
	on( event: string, handler: Function, context?: any ): this;

	emit<E extends keyof DButtonOn<VALUE, this>>(
		event: E, ...args: Parameters<DButtonOn<VALUE, this>[ E ]>
	): boolean;
	emit( event: string, ...args: any ): boolean;
}

export class DButton<
	VALUE = unknown,
	THEME extends DThemeButton = DThemeButton,
	OPTIONS extends DButtonOptions<VALUE, THEME> = DButtonOptions<VALUE, THEME>
> extends DButtonBase<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DButton";
	}
}
