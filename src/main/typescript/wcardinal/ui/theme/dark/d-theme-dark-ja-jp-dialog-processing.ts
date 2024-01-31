/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeDarkDialogProcessing } from "./d-theme-dark-dialog-processing";

export const dThemeDarkJaJpDialogProcessingMessage = (state: DBaseStateSet): string => {
	if (state.isSucceeded) {
		return "正常に処理されました";
	} else if (state.isFailed) {
		return "処理中に問題が発生しました";
	} else {
		return "処理中です...";
	}
};

export class DThemeDarkJaJpDialogProcessing extends DThemeDarkDialogProcessing {
	override getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return {
			button: {
				ok: "OK",
				cancel: null
			}
		};
	}

	override getMessage(): DStateAwareOrValue<string> {
		return dThemeDarkJaJpDialogProcessingMessage;
	}
}
