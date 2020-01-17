/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputNumber } from "../../d-input-number";
import { DThemeInputReal } from "../../d-input-real";
import { DThemeDarkInputNumber } from "./d-theme-dark-input-number";

const editingUnformatter = ( text: string ): number => {
	return parseFloat( text );
};

export class DThemeDarkInputReal extends DThemeDarkInputNumber implements DThemeInputReal {
	getStep(): number | null {
		return 0.1;
	}

	getEditingUnformatter(): ( text: string, caller: DInputNumber ) => number {
		return editingUnformatter;
	}
}
