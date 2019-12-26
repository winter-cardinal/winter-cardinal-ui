/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputNumber } from "../../d-input-number";
import { DThemeInputReal } from "../../d-input-real";
import { DThemeWhiteInputNumber } from "./d-theme-default-input-number";

const editingUnformatter = ( text: string ): number => {
	return parseFloat( text );
};

export class DThemeWhiteInputReal extends DThemeWhiteInputNumber implements DThemeInputReal {
	getStep(): number | null {
		return 0.1;
	}

	getEditingUnformatter(): ( text: string, caller: DInputNumber ) => number {
		return editingUnformatter;
	}
}
