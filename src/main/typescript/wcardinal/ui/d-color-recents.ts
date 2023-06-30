/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DColorRecent, DThemeColorRecent } from "./d-color-recent";
import { DThemes } from "./theme/d-themes";

export class DColorRecents {
	private static INSTANCE?: DColorRecent;

	static getInstance(): DColorRecent {
		return (this.INSTANCE ??= this.newInstance());
	}

	private static newInstance(): DColorRecent {
		const theme = DThemes.get<DThemeColorRecent>("DColorRecent");
		return new DColorRecent(theme.newColors(), theme.getCapacity());
	}
}
