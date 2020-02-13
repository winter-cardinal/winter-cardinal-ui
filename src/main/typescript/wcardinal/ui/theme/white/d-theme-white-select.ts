/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DSelectFormatter, DThemeSelect } from "../../d-select";
import { DThemeWhiteSelectBase } from "./d-theme-white-select-base";

const formatter = ( value: unknown, text: string | null ): string => {
	return text || "";
};

export class DThemeWhiteSelect extends DThemeWhiteSelectBase implements DThemeSelect {
	getFormatter(): DSelectFormatter<unknown> {
		return formatter;
	}

	isSyncEnabled(): boolean {
		return true;
	}
}
