/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";

export interface DPickerDatetimeSpaceOptions<
	THEME extends DThemePickerDatetimeSpace = DThemePickerDatetimeSpace
> extends DBaseOptions<THEME> {

}

export interface DThemePickerDatetimeSpace extends DThemeBase {

}

export class DPickerDatetimeSpace<
	THEME extends DThemePickerDatetimeSpace = DThemePickerDatetimeSpace,
	OPTIONS extends DPickerDatetimeSpaceOptions<THEME> = DPickerDatetimeSpaceOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	constructor( options?: OPTIONS ) {
		super( options );
		this.setState( DBaseState.UNFOCUSABLE, true );
		this.renderable = false;
	}

	protected getType(): string {
		return "DPickerDatetimeSpace";
	}
}
