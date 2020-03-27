/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeExpandableHeader } from "../../d-expandable-header";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkImage } from "./d-theme-dark-image";

DThemeDarkAtlas.add( "menu_item_expandable_header_closed", 14, 14,
	`<g transform="scale(1, 0.7)">` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="6 16 10 10 6 4"></polyline>` +
	`</g>`
);

DThemeDarkAtlas.add( "menu_item_expandable_header_opened", 14, 14,
	`<g transform="scale(0.7, 1)">` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="16 6 10 10 4 6"></polyline>` +
	`</g>`
);

export class DThemeDarkExpandableHeader extends DThemeDarkImage implements DThemeExpandableHeader {
	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return null;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return 0x2e2e2e;
		} else if( DBaseStates.isActiveIn( state ) ) {
			return 0x2e2e2e;
		} else {
			return null;
		}
	}

	getBorderColor( state: DBaseState ): number | null {
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
