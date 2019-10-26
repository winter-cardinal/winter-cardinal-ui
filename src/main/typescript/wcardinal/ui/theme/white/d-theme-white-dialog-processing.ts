/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeDialogProcessing } from "../../d-dialog-processing";
import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeWhiteDialogConfirm } from "./d-theme-white-dialog-confirm";

const message = ( state: DBaseState ): string => {
	if( DBaseStates.isSucceeded( state ) ) {
		return "Processed successfully";
	} else if( DBaseStates.isFailed( state ) ) {
		return "Failed to process the request";
	} else {
		return "Processing...";
	}
};

export class DThemeWhiteDialogProcessing extends DThemeWhiteDialogConfirm implements DThemeDialogProcessing {
	getOk(): string | null {
		return "OK";
	}

	getCancel(): string | null {
		return null;
	}

	getMessage(): DStateAwareOrValue<string> {
		return message;
	}

	getInterval(): number {
		return 400;
	}
}
