/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import type { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteIndicatorProcess } from "./d-theme-white-indicator-processing";
import { dThemeWhiteEnUsDialogProcessingMessage } from "./d-theme-white-en-us-dialog-processing";

export class DThemeWhiteEnUsIndicatorProcessing<
	VALUE = unknown
> extends DThemeWhiteIndicatorProcess<VALUE> {
	override newProcessTextValue(): DStateAwareOrValueMightBe<VALUE> {
		return dThemeWhiteEnUsDialogProcessingMessage as any;
	}
}
