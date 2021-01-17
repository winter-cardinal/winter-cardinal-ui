/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DThemeInputNumber } from "../../d-input-number";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteInput } from "./d-theme-white-input";

export class DThemeWhiteInputNumber extends DThemeWhiteInput<number> implements DThemeInputNumber {
	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getStep(): number | null {
		return 1;
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
