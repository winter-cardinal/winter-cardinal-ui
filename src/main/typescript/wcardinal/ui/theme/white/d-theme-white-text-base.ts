/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DBaseState } from "../../d-base-state";
import { DThemeTextBase } from "../../d-text-base";
import { utilToString } from "../../util/util-to-string";
import { DThemeWhiteBase } from "./d-theme-white-base";

export class DThemeWhiteTextBase extends DThemeWhiteBase implements DThemeTextBase {
	getTextAlignVertical(): DAlignVertical {
		return DAlignVertical.MIDDLE;
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}

	isOverflowMaskEnabled(): boolean {
		return false;
	}

	isTextDynamic(): boolean {
		return true;
	}

	getTextStyleClipping(): boolean {
		return true;
	}

	newTextValue(): any {
		return "";
	}

	getTextValue( state: DBaseState ): any {
		return "";
	}

	getTextFormatter(): ( value: any, caller: any ) => string {
		return utilToString;
	}
}
