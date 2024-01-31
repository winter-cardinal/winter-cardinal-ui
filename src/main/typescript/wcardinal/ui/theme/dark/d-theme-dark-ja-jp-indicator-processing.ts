/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import type { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkIndicatorProcess } from "./d-theme-dark-indicator-processing";
import { dThemeDarkJaJpDialogProcessingMessage } from "./d-theme-dark-ja-jp-dialog-processing";

export class DThemeDarkJaJpIndicatorProcessing<
	VALUE = unknown
> extends DThemeDarkIndicatorProcess<VALUE> {
	override newProcessTextValue(): DStateAwareOrValueMightBe<VALUE> {
		return dThemeDarkJaJpDialogProcessingMessage as any;
	}
}
