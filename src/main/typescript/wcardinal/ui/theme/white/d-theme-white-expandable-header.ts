/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeExpandableHeader } from "../../d-expandable-header";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteImage } from "./d-theme-white-image";

DThemeWhiteAtlas.add( "menu_item_expandable_header_closed", 14, 14,
	`<g transform="scale(1, 0.7)">` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="6 16 10 10 6 4"></polyline>` +
	`</g>`
);

DThemeWhiteAtlas.add( "menu_item_expandable_header_opened", 14, 14,
	`<g transform="scale(0.7, 1)">` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="16 6 10 10 4 6"></polyline>` +
	`</g>`
);

export class DThemeWhiteExpandableHeader<VALUE> extends DThemeWhiteImage<VALUE> implements DThemeExpandableHeader<VALUE> {
	getBackgroundColor( state: DBaseStateSet ): number | null {
		if( state.inDisabled ) {
			return null;
		} else if( state.isFocused || state.isHovered ) {
			return 0xf8f8f8;
		} else if( state.inActive ) {
			return 0xf8f8f8;
		} else {
			return null;
		}
	}

	getBorderColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	getWidth(): DCoordinateSize {
		return "padding";
	}

	getPaddingLeft(): number {
		return 16;
	}

	getPaddingRight(): number {
		return 16;
	}

	getCornerMask(): number {
		return DCornerMask.ALL;
	}
}
