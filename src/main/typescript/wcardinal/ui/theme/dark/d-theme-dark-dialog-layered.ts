/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDialogLayered } from "../../d-dialog-layered";
import { DDialogLayeredContentOptions } from "../../d-dialog-layered-content";
import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DDialogLayeredHeaderOptions } from "../../d-dialog-layered-header";
import { DLayoutVerticalOptions } from "../../d-layout-vertical";
import { DThemeDarkDialog } from "./d-theme-dark-dialog";

export class DThemeDarkDialogLayered extends DThemeDarkDialog implements DThemeDialogLayered {
	getLayout(): DLayoutVerticalOptions | undefined {
		return undefined;
	}

	getHeader(): DDialogLayeredHeaderOptions | undefined | null {
		return null;
	}

	getContent(): DDialogLayeredContentOptions | undefined {
		return undefined;
	}

	getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return undefined;
	}
}
