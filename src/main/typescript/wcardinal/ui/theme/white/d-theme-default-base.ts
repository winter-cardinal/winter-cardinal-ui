/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DThemeBase } from "../../d-base";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DBorderMask } from "../../d-border";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DLayoutClearType } from "../../d-layout-clear-type";
import { DShadow } from "../../d-shadow";
import { DShadowImpl } from "../../d-shadow-impl";
import { UtilTexturePlane } from "../../util/util-texture-plane";
import { DThemeWhiteAtlas } from "./d-theme-default-atlas";
import { DThemeWhiteConstants } from "./d-theme-default-constants";
import { DThemeWhiteFont } from "./d-theme-default-font";

const newShadow = (
	id: string,
	radius: number = 8, opacity: number = 0.1,
	size: number = radius * 0.125, stdDeviation: number = radius * 0.375
): void => {
	const d = radius * 2;
	DThemeWhiteAtlas.add( id, d, d,
		`<g>` +
			`<defs>` +
				`<filter id="${id}_filter" x="0" y="0" width="${d}" height="${d}" filterUnits="userSpaceOnUse">` +
					`<feGaussianBlur in="SourceAlpha" stdDeviation="${stdDeviation}"></feGaussianBlur>` +
				`</filter>` +
			`</defs>` +
			`<circle cx="${radius}" cy="${radius}" r="${size}" stroke="none" ` +
				`fill="rgba(0,0,0,${opacity})" filter="url(#${id}_filter)" />` +
		`</g>`
	);
};
newShadow( "shadow_weak", 8, 1 );
newShadow( "shadow", 12, 1 );

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
		return new DShadowImpl( DThemeWhiteAtlas.mappings.shadow, 12, 12, 0, 6 );
	}

	newShadowWeak(): DShadow | null {
		return new DShadowImpl( DThemeWhiteAtlas.mappings.shadow_weak, 8, 8, 0, 4 );
	}

	getCursor(): string | null {
		return null;
	}
}
