/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DSelectFormatter, DThemeSelect } from "../../d-select";
import { DThemeDarkSelectBase } from "./d-theme-dark-select-base";

const formatter = ( value: unknown, text: string | null ): string => {
	return text || "";
};

export class DThemeDarkSelect extends DThemeDarkSelectBase implements DThemeSelect {
	getFormatter(): DSelectFormatter<unknown> {
		return formatter;
	}

	isSyncEnabled(): boolean {
		return true;
	}
}
