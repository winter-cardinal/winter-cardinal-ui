/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeInputNumber } from "../../d-input-number";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteInput } from "./d-theme-white-input";

export class DThemeWhiteInputNumber extends DThemeWhiteInput implements DThemeInputNumber {
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

	getTextValue( state: DBaseStateSet ): number {
		return 0;
	}
}
