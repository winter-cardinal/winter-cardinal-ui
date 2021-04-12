/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeInputInteger } from "../../d-input-integer";
import { DInputNumber } from "../../d-input-number";
import { DThemeWhiteInputNumber } from "./d-theme-white-input-number";

const editingUnformatter = (text: string): number => {
	const result = parseInt(text, 10);
	if (result === result) {
		return result;
	}
	return 0;
};

export class DThemeWhiteInputInteger extends DThemeWhiteInputNumber implements DThemeInputInteger {
	getEditingUnformatter(): (text: string, caller: DInputNumber) => number {
		return editingUnformatter;
	}
}
