/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DThemeInputNumber } from "../../d-input-number";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkInputInput } from "./d-theme-dark-input-input";

export class DThemeDarkInputNumber
	extends DThemeDarkInputInput<number>
	implements DThemeInputNumber
{
	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getStep(): number | null {
		return null;
	}

	getMin(): number | null {
		return null;
	}

	getMax(): number | null {
		return null;
	}

	newTextValue(): DStateAwareOrValueMightBe<number> {
		return 0;
	}
}
