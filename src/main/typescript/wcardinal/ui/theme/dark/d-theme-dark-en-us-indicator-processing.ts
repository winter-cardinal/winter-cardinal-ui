/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import type { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkIndicatorProcess } from "./d-theme-dark-indicator-processing";
import { dThemeDarkEnUsDialogProcessingMessage } from "./d-theme-dark-en-us-dialog-processing";

export class DThemeDarkEnUsIndicatorProcessing<
	VALUE = unknown
> extends DThemeDarkIndicatorProcess<VALUE> {
	override newProcessTextValue(): DStateAwareOrValueMightBe<VALUE> {
		return dThemeDarkEnUsDialogProcessingMessage as any;
	}
}
