/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DThemeBase } from "../../d-base";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DLayoutClearType } from "../../d-layout-clear-type";
import { DShadow } from "../../d-shadow";
import { DShadowImpl } from "../../d-shadow-impl";
import { UtilTexturePlane } from "../../util/util-texture-plane";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteFont } from "./d-theme-white-font";

const newShadow = ( id: string, radius: number, opacity: number ): void => {
	const d = radius * 2;
	DThemeWhiteAtlas.add( id, d, d,
		`<g>` +
			`<defs>` +
				`<radialGradient id="${id}_filter">` +
					`<stop offset="0%" stop-color="black" stop-opacity="${opacity}" />` +
					`<stop offset="100%" stop-color="black" stop-opacity="0" />` +
				`</radialGradient>` +
			`</defs>` +
			`<rect x="0" y="0" width="${d}" height="${d}" fill="url(#${id}_filter)"/>` +
		`</g>`
	);
};
newShadow( "shadow_weak", 8, 0.15 );
newShadow( "shadow", 12, 0.15 );

export class DThemeWhiteBase extends DThemeWhiteFont implements DThemeBase {
	getX(): DCoordinatePosition {
		return 0;
	}

	getY(): DCoordinatePosition {
		return 0;
	}

	getHeight(): DCoordinateSize {
		return 100;
	}

	getWidth(): DCoordinateSize {
		return 100;
	}

	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBackgroundAlpha( state: DBaseState ): number {
		return 1;
	}

	getBackgroundTexture( radius: number ): Texture {
		return UtilTexturePlane.getInstance().getBackground( radius );
	}

	getBorderColor( state: DBaseState ): number | null {
		if( DBaseStates.isFocused( state ) ) {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		} else {
			return null;
		}
	}

	getBorderAlpha( state: DBaseState ): number {
		return 1;
	}

	getBorderWidth( state: DBaseState ): number {
		return 1;
	}

	getBorderAlign( state: DBaseState ): number {
		return 0.5;
	}

	getBorderMask( state: DBaseState ): number {
		return DBorderMask.NONE;
	}

	getBorderTexture( radius: number, width: number ): Texture {
		return UtilTexturePlane.getInstance().getBorder( radius, width );
	}

	getPaddingLeft(): number {
		return 0;
	}

	getPaddingRight(): number {
		return 0;
	}

	getPaddingTop(): number {
		return 0;
	}

	getPaddingBottom(): number {
		return 0;
	}

	getCornerRadius(): number {
		return 4;
	}

	getCornerMask(): number {
		return DCornerMask.NONE;
	}

	getOutlineColor( state: DBaseState ): number | null {
		return null;
	}

	getOutlineAlpha( state: DBaseState ): number {
		return 1;
	}

	getOutlineWidth( state: DBaseState ): number {
		return 1;
	}

	getOutlineOffset( state: DBaseState ): number {
		return 1;
	}

	getOutlineAlign( state: DBaseState ): number {
		return 1;
	}

	getOutlineMask( state: DBaseState ): DBorderMask {
		return DBorderMask.NONE;
	}

	getClearType(): DLayoutClearType {
		return DLayoutClearType.NONE;
	}

	getShadow(): DShadow | null {
		return null;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.SELF;
	}

	getTitle(): string {
		return "";
	}

	getWeight(): number {
		return -1;
	}

	newShadow(): DShadow | null {
		return new DShadowImpl( DThemeWhiteAtlas.mappings.shadow, 12, 12, 0, 3 );
	}

	newShadowWeak(): DShadow | null {
		return new DShadowImpl( DThemeWhiteAtlas.mappings.shadow_weak, 8, 8, 0, 2 );
	}

	getCursor(): string | null {
		return null;
	}
}
