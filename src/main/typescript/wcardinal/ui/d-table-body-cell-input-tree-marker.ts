/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonBase, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";

export interface DTableBodyCellInputTreeMarkerOptions<
	VALUE = unknown,
	THEME extends DThemeTableBodyCellInputTreeMarker<VALUE> = DThemeTableBodyCellInputTreeMarker<VALUE>
> extends DButtonBaseOptions<VALUE, THEME> {

}

export interface DThemeTableBodyCellInputTreeMarker<VALUE = unknown> extends DThemeButtonBase<VALUE> {

}

export class DTableBodyCellInputTreeMarker<
	VALUE = unknown,
	THEME extends DThemeTableBodyCellInputTreeMarker<VALUE> = DThemeTableBodyCellInputTreeMarker<VALUE>,
	OPTIONS extends DTableBodyCellInputTreeMarkerOptions<VALUE, THEME> = DTableBodyCellInputTreeMarkerOptions<VALUE, THEME>
> extends DButtonBase<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DTableBodyCellInputTreeMarker";
	}
}
