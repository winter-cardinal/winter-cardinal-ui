import { Rectangle } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DHTMLElementElementCreator, DHTMLElementWhen, DThemeHTMLElement } from "../../d-html-element";
import { DThemeDarkImageBase } from "./d-theme-dark-image-base";

const divCreator = ( parent: HTMLElement ): HTMLDivElement => {
	const result = document.createElement( "div" );
	parent.appendChild( result );
	return result;
};

export class DThemeDarkHTMLElement<
	ELEMENT extends HTMLElement = HTMLElement
> extends DThemeDarkImageBase implements DThemeHTMLElement<ELEMENT> {
	getElementCreator(): DHTMLElementElementCreator<ELEMENT> | null {
		return null;
	}

	setElementStyle(
		target: ELEMENT, state: DBaseState,
		elementRect: Rectangle, clipperRect: Rectangle
	): void {
		// Style
		const style = this.getElementStylePosition( state, elementRect, clipperRect ) +
			this.getElementStyleMargin( state ) +
			this.getElementStyleText( state ) +
			this.getElementStyleBackground( state ) +
			this.getElementStyleBorder( state ) +
			this.getElementStylePadding( state, elementRect ) +
			this.getElementStyleOutline( state );
		target.setAttribute( "style", style );

		// ReadOnly
		if( DBaseStates.isReadOnly( state ) ) {
			target.setAttribute( "readonly", "readonly" );
		} else {
			target.removeAttribute( "readonly" );
		}

		// Disabled
		if( DBaseStates.isDisabled( state ) ) {
			target.setAttribute( "disabled", "disabled" );
		} else {
			target.removeAttribute( "disabled" );
		}
	}

	protected getElementStyleBackground( state: DBaseState ): string {
		return `background-color: transparent;`;
	}

	protected getElementStyleBorder( state: DBaseState ): string {
		return `border: none; box-sizing: border-box;`;
	}

	protected getElementStylePadding( state: DBaseState, elementRect: Rectangle ): string {
		const paddingTop = this.getPaddingTop();
		const paddingRight = this.getPaddingRight();
		const paddingBottom = this.getPaddingBottom();
		const paddingLeft = this.getPaddingLeft();
		return `padding: ${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;`;
	}

	protected getElementStyleOutline( state: DBaseState ): string {
		return `outline: none;`;
	}

	protected getElementStylePosition(
		state: DBaseState, elementRect: Rectangle, clipperRect: Rectangle
	): string {
		return `position: absolute;` +
			`left: ${elementRect.x - clipperRect.x}px;` +
			`top: ${elementRect.y - clipperRect.y}px;` +
			`width: ${elementRect.width}px;` +
			`height: ${elementRect.height}px;` +
			`line-height: ${elementRect.height}px;`;
	}

	protected getElementStyleText( state: DBaseState ): string {
		return `font-family: ${this.getFontFamilly()};` +
			`font-size: ${this.getFontSize()}px;` +
			`color: #${this.getColor( state ).toString( 16 )};`;
	}

	protected getElementStyleMargin( state: DBaseState ): string {
		return "margin: 0;";
	}

	getClipperCreator(): DHTMLElementElementCreator<HTMLDivElement> | null {
		return divCreator;
	}

	setClipperStyle(
		target: HTMLDivElement,  state: DBaseState,
		elementRect: Rectangle, clipperRect: Rectangle
	): void {
		const style = `overflow: hidden; outline: none;` +
			`padding: 0; margin: 0; border: none; background-color: transparent;` +
			this.getClipperStylePosition( state, elementRect, clipperRect );
		target.setAttribute( "style", style );
	}

	protected getClipperStylePosition( state: DBaseState, elementRect: Rectangle, clipperRect: Rectangle ): string {
		return `position: absolute;` +
			`left: ${clipperRect.x}px;` +
			`top: ${clipperRect.y}px;` +
			`width: ${clipperRect.width}px;` +
			`height: ${clipperRect.height}px;` +
			`line-height: ${elementRect.height}px;`;
	}

	getBeforeCreator(): DHTMLElementElementCreator<HTMLDivElement> | null {
		return divCreator;
	}

	setBeforeStyle( target: HTMLDivElement ): void {
		const style = "overflow: hidden; outline: none;" +
			"padding: 0; margin: 0; border: none; background-color: transparent;" +
			"position: absolute; left: 0; top: 0; width: 0; height: 0; line-height: 0;";
		target.setAttribute( "style", style );
		target.setAttribute( "tabindex", "0" );
	}

	getAfterCreator(): DHTMLElementElementCreator<HTMLDivElement> | null {
		return divCreator;
	}

	setAfterStyle( target: HTMLDivElement ): void {
		this.setBeforeStyle( target );
	}

	getWhen(): DHTMLElementWhen {
		return DHTMLElementWhen.FOCUSED;
	}

	getSelect(): boolean {
		return false;
	}
}
