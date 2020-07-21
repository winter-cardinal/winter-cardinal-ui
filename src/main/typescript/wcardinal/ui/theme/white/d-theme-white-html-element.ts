import { Rectangle } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DHtmlElementElementCreator, DThemeHtmlElement } from "../../d-html-element";
import { DHtmlElementWhen } from "../../d-html-element-when";
import { DPadding } from "../../d-padding";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";

const divCreator = ( parent: HTMLElement ): HTMLDivElement => {
	const result = document.createElement( "div" );
	parent.appendChild( result );
	return result;
};

export class DThemeWhiteHtmlElement<
	ELEMENT extends HTMLElement = HTMLElement
> extends DThemeWhiteImageBase implements DThemeHtmlElement<ELEMENT> {
	getElementCreator(): DHtmlElementElementCreator<ELEMENT> | null {
		return null;
	}

	setElementStyle(
		target: ELEMENT, state: DBaseStateSet, padding: DPadding,
		elementRect: Rectangle, clipperRect: Rectangle
	): void {
		// Style
		const style = this.getElementStylePosition( state, elementRect, clipperRect ) +
			this.getElementStyleMargin( state ) +
			this.getElementStyleText( state ) +
			this.getElementStyleBackground( state ) +
			this.getElementStyleBorder( state ) +
			this.getElementStylePadding( state, padding, elementRect ) +
			this.getElementStyleOutline( state );
		target.setAttribute( "style", style );

		// ReadOnly
		if( state.inReadOnly ) {
			target.setAttribute( "readonly", "readonly" );
		} else {
			target.removeAttribute( "readonly" );
		}

		// Disabled
		if( state.inDisabled ) {
			target.setAttribute( "disabled", "disabled" );
		} else {
			target.removeAttribute( "disabled" );
		}
	}

	protected getElementStyleBackground( state: DBaseStateSet ): string {
		return `background-color: transparent;`;
	}

	protected getElementStyleBorder( state: DBaseStateSet ): string {
		return `border: none; box-sizing: border-box;`;
	}

	protected getElementStylePadding( state: DBaseStateSet, padding: DPadding, elementRect: Rectangle ): string {
		const paddingTop = padding.getTop();
		const paddingRight = padding.getRight();
		const paddingBottom = padding.getBottom();
		const paddingLeft = padding.getLeft();
		return `padding: ${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px;`;
	}

	protected getElementStyleOutline( state: DBaseStateSet ): string {
		return `outline: none;`;
	}

	protected getElementStylePosition(
		state: DBaseStateSet, elementRect: Rectangle, clipperRect: Rectangle
	): string {
		return `position: absolute;` +
			`left: ${elementRect.x - clipperRect.x}px;` +
			`top: ${elementRect.y - clipperRect.y}px;` +
			`width: ${elementRect.width}px;` +
			`height: ${elementRect.height}px;` +
			`line-height: ${elementRect.height}px;`;
	}

	protected getElementStyleText( state: DBaseStateSet ): string {
		return `font-family: ${this.getFontFamilly()};` +
			`font-size: ${this.getFontSize()}px;` +
			`color: #${this.getColor( state ).toString( 16 )};`;
	}

	protected getElementStyleMargin( state: DBaseStateSet ): string {
		return "margin: 0;";
	}

	getClipperCreator(): DHtmlElementElementCreator<HTMLDivElement> | null {
		return divCreator;
	}

	setClipperStyle(
		target: HTMLDivElement,  state: DBaseStateSet, padding: DPadding,
		elementRect: Rectangle, clipperRect: Rectangle
	): void {
		const style = `overflow: hidden; outline: none;` +
			`padding: 0; margin: 0; border: none; background-color: transparent;` +
			this.getClipperStylePosition( state, elementRect, clipperRect );
		target.setAttribute( "style", style );
	}

	protected getClipperStylePosition( state: DBaseStateSet, elementRect: Rectangle, clipperRect: Rectangle ): string {
		return `position: absolute;` +
			`left: ${clipperRect.x}px;` +
			`top: ${clipperRect.y}px;` +
			`width: ${clipperRect.width}px;` +
			`height: ${clipperRect.height}px;` +
			`line-height: ${elementRect.height}px;`;
	}

	getBeforeCreator(): DHtmlElementElementCreator<HTMLDivElement> | null {
		return divCreator;
	}

	setBeforeStyle( target: HTMLDivElement ): void {
		const style = "overflow: hidden; outline: none;" +
			"padding: 0; margin: 0; border: none; background-color: transparent;" +
			"position: absolute; left: 0; top: 0; width: 0; height: 0; line-height: 0;";
		target.setAttribute( "style", style );
		target.setAttribute( "tabindex", "0" );
	}

	getAfterCreator(): DHtmlElementElementCreator<HTMLDivElement> | null {
		return divCreator;
	}

	setAfterStyle( target: HTMLDivElement ): void {
		this.setBeforeStyle( target );
	}

	getWhen(): DHtmlElementWhen {
		return DHtmlElementWhen.FOCUSED;
	}

	getSelect(): boolean {
		return false;
	}
}
