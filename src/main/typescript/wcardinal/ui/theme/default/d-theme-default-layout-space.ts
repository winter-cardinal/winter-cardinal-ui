/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DLayoutClearType } from "../../d-layout-clear-type";
import { DThemeLayoutSpace } from "../../d-layout-space";
import { DThemeDefaultBase } from "./d-theme-default-base";

export class DThemeDefaultLayoutSpace extends DThemeDefaultBase implements DThemeLayoutSpace {
	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getWidth(): DCoordinateSize {
		return 0;
	}

	getHeight(): DCoordinateSize {
		return 0;
	}

	getClearType(): DLayoutClearType {
		return DLayoutClearType.BOTH;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.CHILDREN;
	}
}
