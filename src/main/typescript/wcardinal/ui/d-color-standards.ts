/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DColorStandard, DThemeColorStandard } from "./d-color-standard";
import { DThemes } from "./theme/d-themes";

export class DColorStandards {
	private static INSTANCE?: DColorStandard;

	static getInstance(): DColorStandard {
		return (this.INSTANCE ??= this.newInstance());
	}

	private static newInstance(): DColorStandard {
		const theme = DThemes.get<DThemeColorStandard>("DColorStandard");
		return new DColorStandard(theme.newColors());
	}
}
