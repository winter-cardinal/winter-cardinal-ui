/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemePaginationDotsButton } from "../../d-pagination-dots-button";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";

export class DThemeDarkPaginationDotsButton
	extends DThemeDarkButtonAmbient<string>
	implements DThemePaginationDotsButton
{
	getBackgroundColor(state: DBaseStateSet): number | null {
		return null;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "...";
	}
}
