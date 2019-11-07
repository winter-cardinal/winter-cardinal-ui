/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinate } from "../../d-coordinate";
import { DHTMLElementElementCreator } from "../../d-html-element";
import { DThemeInput } from "../../d-input";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteHTMLElement } from "./d-theme-white-html-element";

const editingValidator = (): unknown => {
	return null;
};

const editingUnformatter = ( text: string ): string => {
	return text;
};

let element: HTMLInputElement | null = null;
const elementCreator = ( parent: HTMLElement ): HTMLInputElement => {
	if( element == null ) {
		element = document.createElement( "input" );
		parent.appendChild( element );
	}
	return element;
};

let clipper: HTMLDivElement | null = null;
const clipperCreator = ( parent: HTMLElement ): HTMLDivElement => {
	if( clipper == null ) {
		clipper = document.createElement( "div" );
		parent.appendChild( clipper );
	}
	return clipper;
};

let before: HTMLDivElement | null = null;
const beforeCreator = ( parent: HTMLElement ): HTMLDivElement => {
	if( before == null ) {
		before = document.createElement( "div" );
		parent.appendChild( before );
	}
	return before;
};

let after: HTMLDivElement | null = null;
const afterCreator = ( parent: HTMLElement ): HTMLDivElement => {
	if( after == null ) {
		after = document.createElement( "div" );
		parent.appendChild( after );
	}
	return after;
};

export class DThemeWhiteInput extends DThemeWhiteHTMLElement<HTMLInputElement> implements DThemeInput {
	COLOR = 0xffffff;
	COLOR_HOVERED = UtilRgb.darken( this.COLOR, 0.017 );

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) || DBaseStates.isReadOnly( state ) ) {
			return null;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.COLOR_HOVERED;
		} else {
			return this.COLOR;
		}
	}

	getBorderColor( state: DBaseState ): number | null {
		return 0xe5e5e5;
	}

	getOutlineColor( state: DBaseState ): number | null {
		if( DBaseStates.isInvalid( state ) ) {
			return DThemeWhiteConstants.INVALID_COLOR;
		}
		return super.getOutlineColor( state );
	}

	getHeight(): DCoordinate {
		return this.getLineHeight();
	}

	getWidth(): DCoordinate {
		return 100;
	}

	getPlaceholder(): string {
		return "";
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	getCursor(): string {
		return "text";
	}

	getEditingFormatter(): ( value: any, caller: any ) => string {
		return this.getTextFormatter();
	}

	getEditingUnformatter(): ( text: string, caller: any ) => any {
		return editingUnformatter;
	}

	getEditingValidator(): ( value: any, caller: any ) => unknown {
		return editingValidator;
	}

	getElementCreator(): DHTMLElementElementCreator<HTMLInputElement> {
		return elementCreator;
	}

	getClipperCreator(): DHTMLElementElementCreator<HTMLDivElement> {
		return clipperCreator;
	}

	getBeforeCreator(): DHTMLElementElementCreator<HTMLDivElement> {
		return beforeCreator;
	}

	getAfterCreator(): DHTMLElementElementCreator<HTMLDivElement> {
		return afterCreator;
	}

	getSelect(): boolean {
		return true;
	}
}
