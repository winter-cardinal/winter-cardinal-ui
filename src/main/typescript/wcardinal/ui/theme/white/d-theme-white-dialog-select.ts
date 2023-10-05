/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DDialogLayeredFooterOptions } from "../../d-dialog-layered-footer";
import { DThemeDialogSelect } from "../../d-dialog-select";
import { toId } from "../../util/to-id";
import { toLabelWith } from "../../util/to-label";
import { DThemeWhiteDialogLayered } from "./d-theme-white-dialog-layered";

export class DThemeWhiteDialogSelect<VALUE>
	extends DThemeWhiteDialogLayered
	implements DThemeDialogSelect<VALUE>
{
	getWidth(): DCoordinateSize {
		return 480;
	}

	getFooter(): DDialogLayeredFooterOptions | undefined | null {
		return null;
	}

	getInputMargin(): number {
		return 19;
	}

	toCategoryId(category: unknown): unknown {
		return toId(category);
	}

	toCategoryLabel(category: unknown): string {
		return toLabelWith(category, "All");
	}
}
