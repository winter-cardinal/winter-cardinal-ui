/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { DThemeText } from "./d-text";
import { DTextBase, DTextBaseOptions, DThemeTextBase } from "./d-text-base";

export interface DTableHeaderCellOptions<THEME extends DThemeText = DThemeText>
	extends DTextBaseOptions<string | null, THEME> {
}

export interface DThemeTableHeaderCell extends DThemeTextBase {
	getTextFormatter(): ( value: string | null, caller: DTableHeaderCell ) => string;
	getTextValue( state: DBaseState ): string | null;
	newTextValue(): DStateAwareOrValueMightBe<string | null>;
}

export class DTableHeaderCell<
	THEME extends DThemeTableHeaderCell = DThemeTableHeaderCell,
	OPTIONS extends DTableHeaderCellOptions<THEME> = DTableHeaderCellOptions<THEME>
> extends DTextBase<string | null, THEME, OPTIONS> {
	protected init( options?: OPTIONS ) {
		super.init( options );
		this.setState( DBaseState.UNFOCUSABLE, true );
	}

	protected getType(): string {
		return "DTableHeaderCell";
	}
}
