/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeInputInteger } from "../../d-input-integer";
import { DInputNumber } from "../../d-input-number";
import { DThemeDarkInputNumber } from "./d-theme-dark-input-number";

const editingUnformatter = ( text: string ): number => {
	return parseInt( text, 10 );
};

export class DThemeDarkInputInteger extends DThemeDarkInputNumber implements DThemeInputInteger {
	getEditingUnformatter(): ( text: string, caller: DInputNumber ) => number {
		return editingUnformatter;
	}
}
