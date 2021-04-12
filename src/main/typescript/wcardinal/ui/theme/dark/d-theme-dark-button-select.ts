/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonSelect, DThemeButtonSelect } from "../../d-button-select";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { toLabel } from "../../util/to-label";
import { DThemeDarkButton } from "./d-theme-dark-button";

export class DThemeDarkButtonSelect<VALUE = unknown>
	extends DThemeDarkButton<VALUE | null>
	implements DThemeButtonSelect<VALUE> {
	getTextFormatter(): (value: unknown | null, caller: DButtonSelect) => string {
		return toLabel;
	}

	newTextValue(): DStateAwareOrValueMightBe<VALUE | null> {
		return null;
	}
}
