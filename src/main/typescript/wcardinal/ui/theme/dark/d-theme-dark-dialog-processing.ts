/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeDialogProcessing } from "../../d-dialog-processing";
import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeDarkDialogConfirm } from "./d-theme-dark-dialog-confirm";

const message = (state: DBaseStateSet): string => {
	if (state.isSucceeded) {
		return "Processed successfully";
	}
	if (state.isFailed) {
		return "Failed to process the request";
	}
	return "Processing...";
};

export class DThemeDarkDialogProcessing
	extends DThemeDarkDialogConfirm
	implements DThemeDialogProcessing {
	getOk(): string | null {
		return "OK";
	}

	getCancel(): string | null {
		return null;
	}

	getMessage(): DStateAwareOrValue<string> {
		return message;
	}

	getDoneDelay(): number {
		return 400;
	}

	getCloseDelay(): number | null {
		return 600;
	}
}
