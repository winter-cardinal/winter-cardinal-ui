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

const CREATOR_CLASSNAME = "d-theme-white-input";
const CREATOR_CLASSNAME_ELEMENT = `${CREATOR_CLASSNAME}-element`;
const elementCreator = ( parent: HTMLElement ): HTMLInputElement => {
	const found = parent.getElementsByClassName( CREATOR_CLASSNAME_ELEMENT );
	if( 0 < found.length ) {
		return found[ 0 ] as HTMLInputElement;
	}
	const element = document.createElement( "input" );
	element.setAttribute( "spellcheck", "false" );
	element.setAttribute( "class", CREATOR_CLASSNAME_ELEMENT );
	parent.appendChild( element );
	return element;
};

const divCreator = ( parent: HTMLElement, classname: string ): HTMLDivElement => {
	const found = parent.getElementsByClassName( classname );
	if( 0 < found.length ) {
		return found[ 0 ] as HTMLDivElement;
	}
	const result = document.createElement( "div" );
	result.setAttribute( "class", classname );
	parent.appendChild( result );
	return result;
};

const CREATOR_CLASSNAME_CLIPPER = `${CREATOR_CLASSNAME}-clipper`;
const clipperCreator = ( parent: HTMLElement ): HTMLDivElement => {
	return divCreator( parent, CREATOR_CLASSNAME_CLIPPER );
};

const CREATOR_CLASSNAME_BEFORE = `${CREATOR_CLASSNAME}-before`;
const beforeCreator = ( parent: HTMLElement ): HTMLDivElement => {
	return divCreator( parent, CREATOR_CLASSNAME_BEFORE );
};

const CREATOR_CLASSNAME_AFTER = `${CREATOR_CLASSNAME}-after`;
const afterCreator = ( parent: HTMLElement ): HTMLDivElement => {
	return divCreator( parent, CREATOR_CLASSNAME_AFTER );
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

	protected getElementStyleMargin( state: DBaseState ): string {
		return "margin: 0.1em 0 0 0;";
	}
}
