/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeWhiteDialogProcessing } from "./d-theme-white-dialog-processing";

const message = (state: DBaseStateSet): string => {
	if (state.isSucceeded) {
		return "Processed successfully";
	} else if (state.isFailed) {
		return "Failed to process the request";
	} else {
		return "Processing...";
	}
};

export class DThemeWhiteEnUsDialogProcessing extends DThemeWhiteDialogProcessing {
	override getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return {
			button: {
				ok: "OK",
				cancel: null
			}
		};
	}

	override getMessage(): DStateAwareOrValue<string> {
		return message;
	}
}
