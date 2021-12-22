/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDarkNote } from "./d-theme-dark-note";

export class DThemeDarkNoteSmall extends DThemeDarkNote {
	getFontSize(): number {
		return 18;
	}
}
