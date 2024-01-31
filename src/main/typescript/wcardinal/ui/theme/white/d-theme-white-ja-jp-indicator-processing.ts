/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import type { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteIndicatorProcess } from "./d-theme-white-indicator-processing";
import { dThemeWhiteJaJpDialogProcessingMessage } from "./d-theme-white-ja-jp-dialog-processing";

export class DThemeWhiteJaJpIndicatorProcessing<
	VALUE = unknown
> extends DThemeWhiteIndicatorProcess<VALUE> {
	override newProcessTextValue(): DStateAwareOrValueMightBe<VALUE> {
		return dThemeWhiteJaJpDialogProcessingMessage as any;
	}
}
