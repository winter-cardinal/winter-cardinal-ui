/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonSelect, DThemeButtonSelect } from "../../d-button-select";
import { toLabel } from "../../util/to-label";
import { DThemeDarkButton } from "./d-theme-dark-button";

export class DThemeDarkButtonSelect extends DThemeDarkButton implements DThemeButtonSelect {
	getTextFormatter(): ( value: unknown | null, caller: DButtonSelect ) => string {
		return toLabel;
	}

	newTextValue(): unknown | null {
		return null;
	}
}
