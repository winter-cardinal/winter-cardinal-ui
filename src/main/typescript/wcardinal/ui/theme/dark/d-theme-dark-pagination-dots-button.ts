/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DThemePaginationDotsButton } from "../../d-pagination-dots-button";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";

export class DThemeDarkPaginationDotsButton
			extends DThemeDarkButtonAmbient implements DThemePaginationDotsButton {

	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	newTextValue(): any {
		return "...";
	}

}
