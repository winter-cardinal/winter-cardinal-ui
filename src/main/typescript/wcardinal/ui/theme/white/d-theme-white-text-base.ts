/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DBaseStateSet } from "../../d-base-state-set";
import { DDynamicTextStyleWordWrap } from "../../d-dynamic-text-style-word-wrap";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeTextBase } from "../../d-text-base";
import { toString } from "../../util/to-string";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhiteTextBase<VALUE = unknown>
	extends DThemeWhiteBase
	implements DThemeTextBase<VALUE>
{
	getTextAlignVertical(): DAlignVertical {
		return DAlignVertical.MIDDLE;
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}

	isOverflowMaskEnabled(): boolean {
		return false;
	}

	getTextStyleClipping(): boolean {
		return true;
	}

	getTextStyleWordWrap(): DDynamicTextStyleWordWrap {
		return DDynamicTextStyleWordWrap.NONE;
	}

	getTextFormatter(): (value: VALUE, caller: any) => string {
		return toString;
	}

	getTextValue(state: DBaseStateSet): VALUE | undefined {
		return undefined;
	}

	newTextValue(): DStateAwareOrValueMightBe<VALUE> {
		return undefined;
	}
}
