/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DButtonBase,
	DButtonBaseEvents,
	DButtonBaseOptions,
	DThemeButtonBase
} from "./d-button-base";
import { DOnOptions } from "./d-on-options";

/**
 * {@link DButton} events.
 */
export interface DButtonEvents<VALUE, EMITTER> extends DButtonBaseEvents<VALUE, EMITTER> {}

/**
 * {@link DButton} "on" options.
 */
export interface DButtonOnOptions<VALUE, EMITTER>
	extends Partial<DButtonEvents<VALUE, EMITTER>>,
		DOnOptions {}

/**
 * {@link DButton} options.
 */
export interface DButtonOptions<
	VALUE = unknown,
	THEME extends DThemeButton<VALUE> = DThemeButton<VALUE>,
	EMITTER = any
> extends DButtonBaseOptions<VALUE, THEME, EMITTER> {
	on?: DButtonOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DButton} theme.
 */
export interface DThemeButton<VALUE = unknown> extends DThemeButtonBase<VALUE> {}

/**
 * A button class.
 */
export class DButton<
	VALUE = unknown,
	THEME extends DThemeButton<VALUE> = DThemeButton<VALUE>,
	OPTIONS extends DButtonOptions<VALUE, THEME> = DButtonOptions<VALUE, THEME>
> extends DButtonBase<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DButton";
	}
}
