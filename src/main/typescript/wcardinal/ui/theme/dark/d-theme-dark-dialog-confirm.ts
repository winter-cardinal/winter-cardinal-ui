/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeDialogConfirm } from "../../d-dialog-confirm";
import { DStateAwareOrValue } from "../../d-state-aware";
import { DThemeDarkDialogLayered } from "./d-theme-dark-dialog-layered";

export class DThemeDarkDialogConfirm
	extends DThemeDarkDialogLayered
	implements DThemeDialogConfirm
{
	getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return {
			button: {
				ok: "Yes",
				cancel: "No"
			}
		};
	}

	getMessage(): DStateAwareOrValue<string> {
		return "";
	}
}
