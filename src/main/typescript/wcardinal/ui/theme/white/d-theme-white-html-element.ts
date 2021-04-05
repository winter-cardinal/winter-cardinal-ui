import { Matrix, Rectangle } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeHtmlElement } from "../../d-html-element";
import { DHtmlElementState } from "../../d-html-element-state";
import { UtilHtmlElementCreator, UtilHtmlElementPadding } from "../../util/util-html-element";
import { UtilHtmlElementWhen } from "../../util/util-html-element-when";
import { DThemeWhiteImageBase } from "./d-theme-white-image-base";

const nullCreator = (): null => {
	return null;
};

const divCreator = ( container: HTMLElement ): HTMLDivElement => {
	const result = document.createElement( "div" );
	container.appendChild( result );
	return result;
};

export class DThemeWhiteHtmlElement<
	VALUE = unknown,
	ELEMENT extends HTMLElement = HTMLElement
> extends DThemeWhiteImageBase<VALUE> implements DThemeHtmlElement<VALUE, ELEMENT> {
	getElementCreator(): UtilHtmlElementCreator<ELEMENT> {
		return nullCreator;
	}

	setElementStyle(
		target: ELEMENT, state: DBaseStateSet, padding: UtilHtmlElementPadding | null,
		elementRect: Rectangle | null, elementMatrix: Matrix | null,
		clipperRect: Rectangle | null
	): void {
		// Style
		const style = this.getElementStylePointerEvent( state ) +
			this.getElementStylePosition( state, elementRect, elementMatrix, clipperRect ) +
			this.getElementStyleMargin( state ) +
			this.getElementStyleText( state ) +
			this.getElementStyleBackground( state ) +
			this.getElementStyleBorder( state ) +
			this.getElementStylePadding( state, padding ) +
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

	protected getElementStylePointerEvent( state: DBaseStateSet ): string {
		if( ! state.is( DHtmlElementState.NO_POINTER_EVENTS )  ) {
			return `pointer-events: auto;`;
		}
		return "";
	}

	protected getElementStyleBackground( state: DBaseStateSet ): string {
		return `background-color: transparent;`;
	}

	protected getElementStyleBorder( state: DBaseStateSet ): string {
		return `border: none; box-sizing: border-box;`;
	}

	protected getElementStylePadding( state: DBaseStateSet, padding: UtilHtmlElementPadding | null ): string {
		if( padding ) {
			if( "getLeft" in padding ) {
				return `padding: ${padding.getTop()}px ${padding.getRight()}px ` +
					`${padding.getBottom()}px ${padding.getLeft()}px;`;
			} else {
				return `padding: ${padding.vertical}px ${padding.horizontal}px;`;
			}
		}
		return `padding: 0px;`;
	}

	protected getElementStyleOutline( state: DBaseStateSet ): string {
		return `outline: none;`;
	}

	protected getElementStylePositionPosition( elementRect: Rectangle | null, clipperRect: Rectangle | null ): string {
		if( elementRect ) {
			if( clipperRect ) {
				return `left:${elementRect.x - clipperRect.x}px; top:${elementRect.y - clipperRect.y}px;`;
			}
			return `left:${elementRect.x}px; top: ${elementRect.y}px;`;
		}
		return `left: 0px; top: 0px;`;
	}

	protected getElementStylePositionSize( rect: Rectangle | null ): string {
		if( rect ) {
			return `width: ${rect.width}px; height: ${rect.height}px;` +
				`line-height: ${rect.height}px;`;
		}
		return "width: 0px; height: 0px;";
	}

	protected getElementStylePositionTransform( matrix: Matrix | null ): string {
		if( matrix ) {
			return `transform: matrix(${matrix.a},${matrix.b},${matrix.c},${matrix.d},${matrix.tx},${matrix.ty});`;
		}
		return "";
	}

	protected getElementStylePosition(
		state: DBaseStateSet,
		elementRect: Rectangle | null, elementMatrix: Matrix | null,
		clipperRect: Rectangle | null
	): string {
		return `position: absolute;` +
			this.getElementStylePositionPosition( elementRect, clipperRect ) +
			this.getElementStylePositionSize( elementRect ) +
			this.getElementStylePositionTransform( elementMatrix );
	}

	protected getElementStyleText( state: DBaseStateSet ): string {
		return `font-family: ${this.getFontFamilly()};` +
			`font-size: ${this.getFontSize()}px;` +
			`color: #${this.getColor( state ).toString( 16 )};`;
	}

	protected getElementStyleMargin( state: DBaseStateSet ): string {
		return "margin: 0;";
	}

	getClipperCreator(): UtilHtmlElementCreator<HTMLDivElement> {
		return divCreator;
	}

	setClipperStyle(
		target: HTMLDivElement, state: DBaseStateSet, padding: UtilHtmlElementPadding | null,
		elementRect: Rectangle | null, elementMatrix: Matrix | null,
		clipperRect: Rectangle | null
	): void {
		const style = `outline: none; padding: 0; margin: 0; border: none;` +
			`background-color: transparent; pointer-events: none;` +
			this.getClipperStyleOverflow( clipperRect ) +
			this.getClipperStylePosition( clipperRect );
		target.setAttribute( "style", style );
	}

	protected getClipperStyleOverflow( rect: Rectangle | null ): string {
		if( rect ) {
			return `overflow: hidden;`;
		}
		return "overflow: visible;";
	}

	protected getClipperStylePositionPosition( rect: Rectangle | null ): string {
		if( rect ) {
			return `left: ${rect.x}px; top: ${rect.y}px;`;
		}
		return `left: 0px; top: 0px;`;
	}

	protected getClipperStylePositionSize( rect: Rectangle | null ): string {
		if( rect ) {
			return `width: ${rect.width}px; height: ${rect.height}px;` +
				`line-height: ${rect.height}px;`;
		}
		return "width: 0px; height: 0px;";
	}

	protected getClipperStylePosition( rect: Rectangle | null ): string {
		return `position: absolute;` +
			this.getClipperStylePositionPosition( rect ) +
			this.getClipperStylePositionSize( rect );
	}

	getBeforeCreator(): UtilHtmlElementCreator<HTMLDivElement> {
		return divCreator;
	}

	setBeforeStyle( target: HTMLDivElement ): void {
		const style = "overflow: hidden; outline: none;" +
			"padding: 0; margin: 0; border: none; background-color: transparent;" +
			"position: absolute; left: 0; top: 0; width: 0; height: 0; line-height: 0;";
		target.setAttribute( "style", style );
		target.setAttribute( "tabindex", "0" );
	}

	getAfterCreator(): UtilHtmlElementCreator<HTMLDivElement> {
		return divCreator;
	}

	setAfterStyle( target: HTMLDivElement ): void {
		this.setBeforeStyle( target );
	}

	getWhen(): UtilHtmlElementWhen {
		return UtilHtmlElementWhen.FOCUSED;
	}

	getSelect(): boolean {
		return false;
	}
}
