/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point, Rectangle, Renderer } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DBaseStateSet } from "./d-base-state-set";
import { DHtmlElementWhen } from "./d-html-element-when";
import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { DPadding } from "./d-padding";
import { toEnum } from "./util/to-enum";

export type DHtmlElementElementCreator<T> = ( parent: HTMLElement ) => T;

export type DHtmlElementStyle<THEME> = (
	target: HTMLElement,
	state: DBaseStateSet, theme: THEME, padding: DPadding,
	elementRect: Rectangle, clipperRect: Rectangle
) => void;

export type DHtmlElementStyleBefore<THEME> =
	( target: HTMLElement, theme: THEME ) => void;

export type DHtmlElementStyleAfter<THEME> =
	( target: HTMLElement, theme: THEME ) => void;

export interface DHtmlElementElementOptions<ELEMENT, THEME> {
	creator?: DHtmlElementElementCreator<ELEMENT>;
	style?: DHtmlElementStyle<THEME>;
}

export interface DHtmlElementClipperOptions<THEME> {
	creator?: DHtmlElementElementCreator<HTMLDivElement>;
	style?: DHtmlElementStyle<THEME>;
}

export interface DHtmlElementBeforeOptions<THEME> {
	creator?: DHtmlElementElementCreator<HTMLDivElement>;
	style?: DHtmlElementStyleBefore<THEME>;
}

export interface DHtmlElementAfterOptions<THEME> {
	creator?: DHtmlElementElementCreator<HTMLDivElement>;
	style?: DHtmlElementStyleAfter<THEME>;
}

export interface DHtmlElementOptions<
	VALUE = unknown,
	ELEMENT extends HTMLElement = HTMLElement,
	THEME extends DThemeHtmlElement<VALUE, ELEMENT> = DThemeHtmlElement<VALUE, ELEMENT>
> extends DImageBaseOptions<VALUE, THEME> {
	element?: DHtmlElementElementOptions<ELEMENT, THEME>;
	clipper?: DHtmlElementClipperOptions<THEME>;
	before?: DHtmlElementBeforeOptions<THEME>;
	after?: DHtmlElementAfterOptions<THEME>;
	when?: DHtmlElementWhen | (keyof typeof DHtmlElementWhen);
	select?: boolean;
}

export interface DThemeHtmlElement<
	VALUE,
	ELEMENT extends HTMLElement = HTMLElement
> extends DThemeImageBase<VALUE> {
	getElementCreator(): DHtmlElementElementCreator<ELEMENT> | null;
	setElementStyle(
		target: ELEMENT, state: DBaseStateSet, padding: DPadding,
		elementRect: Rectangle, clipperRect: Rectangle
	): void;
	getClipperCreator(): DHtmlElementElementCreator<HTMLDivElement> | null;
	setClipperStyle(
		target: HTMLDivElement, state: DBaseStateSet, padding: DPadding,
		elementRect: Rectangle, clipperRect: Rectangle
	): void;
	getBeforeCreator(): DHtmlElementElementCreator<HTMLDivElement> | null;
	setBeforeStyle( target: HTMLDivElement ): void;
	getAfterCreator(): DHtmlElementElementCreator<HTMLDivElement> | null;
	setAfterStyle( target: HTMLDivElement ): void;
	getWhen(): DHtmlElementWhen;
	getSelect(): boolean;
}

export class DHtmlElement<
	VALUE = unknown,
	ELEMENT extends HTMLElement = HTMLElement,
	THEME extends DThemeHtmlElement<VALUE, ELEMENT> = DThemeHtmlElement<VALUE, ELEMENT>,
	OPTIONS extends DHtmlElementOptions<VALUE, ELEMENT, THEME> = DHtmlElementOptions<VALUE, ELEMENT, THEME>
> extends DImageBase<VALUE, THEME, OPTIONS> {
	protected _workPoint!: Point | null;

	protected _clipper!: HTMLDivElement | null;
	protected _clipperCreator!: DHtmlElementElementCreator<HTMLDivElement> | null;
	protected _clipperStyle!: DHtmlElementStyle<THEME> | undefined;
	protected _clipperRect!: Rectangle | null;

	protected _element!: ELEMENT | null;
	protected _elementCreator!: DHtmlElementElementCreator<ELEMENT> | null;
	protected _elementStyle!: DHtmlElementStyle<THEME> | undefined;
	protected _elementRect!: Rectangle | null;
	protected _isElementShown!: boolean;
	protected _onElementFocusBound!: ( e: FocusEvent ) => void;

	protected _before!: HTMLDivElement | null;
	protected _beforeCreator!: DHtmlElementElementCreator<HTMLDivElement> | null;
	protected _beforeStyle!: DHtmlElementStyleBefore<THEME> | undefined;
	protected _onBeforeFocusBound!: ( e: FocusEvent ) => void;

	protected _after!: HTMLDivElement | null;
	protected _afterCreator!: DHtmlElementElementCreator<HTMLDivElement> | null;
	protected _afterStyle!: DHtmlElementStyleAfter<THEME> | undefined;
	protected _onAfterFocusBound!: ( e: FocusEvent ) => void;

	protected _isStarted!: boolean;
	protected _select!: boolean;
	protected _doSelectBound!: () => void;
	protected _when!: DHtmlElementWhen;
	protected _isStartRequested!: boolean;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._workPoint = null;

		const theme = this.theme;
		const clipper = options?.clipper;
		const clipperCreator = clipper?.creator ?? theme.getClipperCreator();
		this._clipper = null;
		this._clipperCreator = clipperCreator;
		this._clipperRect = null;

		const element = options?.element;
		const elementCreator = element?.creator ?? theme.getElementCreator();
		this._element = null;
		this._elementCreator = elementCreator;
		this._elementStyle = element?.style;
		this._elementRect = null;
		this._isElementShown = false;
		this._onElementFocusBound = ( e: FocusEvent ): void => {
			this.onElementFocus( e );
		};

		const before = options?.before;
		this._before = null;
		this._beforeCreator = before?.creator ?? theme.getBeforeCreator();
		this._beforeStyle = before?.style;
		this._onBeforeFocusBound = ( e: FocusEvent ): void => {
			this.onBeforeFocus( e );
		};

		const after = options?.after;
		this._after = null;
		this._afterCreator = after?.creator ?? theme.getAfterCreator();
		this._afterStyle = after?.style;
		this._onAfterFocusBound = ( e: FocusEvent ): void => {
			this.onAfterFocus( e );
		};

		this._isStarted = false;
		this._select = options?.select ?? theme.getSelect();
		this._doSelectBound = () => {
			this.doSelect();
		};
		const when = toEnum( options?.when ?? theme.getWhen(), DHtmlElementWhen );
		this._when = when;
		this._isStartRequested = ( when === DHtmlElementWhen.ALWAYS );
	}

	get element(): ELEMENT | null {
		return this._element;
	}

	protected onDownThis( e: interaction.InteractionEvent ): void {
		const wasStarted = this._isStarted;
		super.onDownThis( e );
		if( ! wasStarted && this._isStarted ) {
			e.data.originalEvent.preventDefault();
		}
	}

	protected onFocus(): void {
		super.onFocus();
		if( this._when === DHtmlElementWhen.FOCUSED ) {
			this.start();
		} else {
			this._element?.focus();
		}
	}

	protected onBlur(): void {
		super.onBlur();
		if( this._when === DHtmlElementWhen.FOCUSED ) {
			this.onEndByBlur();
			this.cancel();
		} else {
			this._element?.blur();
		}
	}

	protected isStartable(): boolean {
		if( this._when === DHtmlElementWhen.FOCUSED ) {
			return this.state.isActionable;
		}
		return true;
	}

	start(): void {
		if( ! this._isStarted && this.isStartable() ) {
			this._isStarted = true;
			this.doStart();
			DApplications.update( this );
		}
	}

	render( renderer: Renderer ): void {
		if( this._isStartRequested ) {
			this._isStartRequested = false;
			this.doStart();
		}
		if( this._isStarted ) {
			this._isStarted = false;
		}
		super.render( renderer );
		if( this._isElementShown ) {
			this.updateElement( renderer );
		}
	}

	protected doStart( renderer?: Renderer ): void {
		if( ! this._isElementShown ) {
			this._isElementShown = true;

			this.onStart();

			const clipper = this.getClipper();
			if( clipper ) {
				const before = this.getBefore( clipper );
				const element = this.getElement( clipper );
				const after = this.getAfter( clipper );
				if( element ) {
					const resolution = ( renderer == null ?
						DApplications.getResolution( this ) :
						renderer.resolution
					);
					const elementRect = this.getElementRect( resolution );
					const clipperRect = this.getClipperRect( elementRect, resolution );
					const theme = this.theme;
					const state = this.state;
					const padding = this._padding;
					this.setClipperStyle( clipper, state, theme, padding, elementRect, clipperRect );
					this.setElementStyle( element, state, theme, padding, elementRect, clipperRect );
					if( before ) {
						this.setBeforeStyle( before, theme );
					}
					if( after ) {
						this.setAfterStyle( after, theme );
					}
					this.onElementAttached( element, before, after );

					// Show HTML elements
					clipper.style.display = "";
					if( this.state.isFocused ) {
						element.focus();
					}
					clipper.scrollTop = 0;
					clipper.scrollLeft = 0;

					// Select the element if required.
					if( this._select ) {
						setTimeout( this._doSelectBound, 0 );
					}
				}
			}
		}
	}

	protected doSelect(): void {
		const element = this._element;
		if( element ) {
			if( element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement ) {
				// The following does not work on mobile devices.
				// I think selecting texts on a tap is annoying.
				// Therefore, I leave this untouched.
				element.select();
			}
		}
	}

	/**
	 * Please note that this method does not update transforms.
	 *
	 * @param elementRect
	 * @param resolution
	 */
	protected getClipperRect( elementRect: Rectangle, resolution: number ): Rectangle {
		const point = this._workPoint = ( this._workPoint || new Point( 0, 0 ) );
		const rect = this._clipperRect = ( this._clipperRect || new Rectangle() );

		let x0 = elementRect.x;
		let y0 = elementRect.y;
		let x1 = x0 + elementRect.width;
		let y1 = y0 + elementRect.height;

		let current = this.parent;
		while( current instanceof DBase ) {
			current.getClippingRect( this, rect );

			point.set( rect.x, rect.y );
			current.toGlobal( point, point, false );
			const x = ( (point.x * resolution) | 0 ) / resolution;
			const y = ( (point.y * resolution) | 0 ) / resolution;

			point.set( rect.x + rect.width, rect.y + rect.height );
			current.toGlobal( point, point, true );
			const w = point.x - x;
			const h = point.y - y;

			x0 = Math.min( Math.max( x0, x ), x + w );
			y0 = Math.min( Math.max( y0, y ), y + h );

			x1 = Math.min( Math.max( x1, x ), x + w );
			y1 = Math.min( Math.max( y1, y ), y + h );

			current = current.parent;
		}

		rect.x = x0;
		rect.y = y0;
		rect.width = x1 - x0;
		rect.height = y1 - y0;
		return rect;
	}

	/**
	 * Please note that this method does not update transforms.
	 *
	 * @param resolution
	 */
	protected getElementRect( resolution: number ): Rectangle {
		const point = this._workPoint = ( this._workPoint || new Point( 0, 0 ) );
		const rect = this._elementRect = ( this._elementRect != null ? this._elementRect : new Rectangle() );

		point.set( 0, 0 );
		this.toGlobal( point, point, false );
		rect.x = point.x;
		rect.y = point.y;

		point.set( this.width, this.height );
		this.toGlobal( point, point, true );
		rect.width = point.x - rect.x;
		rect.height = point.y - rect.y;

		// Rounds pixels as Pixi.js does
		rect.x = ( (rect.x * resolution) | 0 ) / resolution;
		rect.y = ( (rect.y * resolution) | 0 ) / resolution;

		return rect;
	}

	cancel(): void {
		if( this._isElementShown ) {
			this._isElementShown = false;

			this.onCancel();

			const layer = DApplications.getLayer( this );
			if( layer ) {
				const view = layer.view;
				if( this._when === DHtmlElementWhen.FOCUSED && document.activeElement === this._element ) {
					view.focus();
				}

				const interactionManager = layer.renderer.plugins.interaction;
				if( this.containsPoint( interactionManager.mouse.global ) && ! this.state.isHovered ) {
					this.state.isHovered = true;
					view.style.cursor = this.cursor;
				}

				layer.update();
			}

			const element = this._element;
			if( element != null ) {
				this.onElementDetached( element, this._before, this._after );
			}

			const clipper = this._clipper;
			if( clipper != null ) {
				clipper.style.display = "none";
			}
		}
	}

	protected onStart(): void {
		// DO NOTHING
	}

	protected onCancel(): void {
		// DO NOTHING
	}

	protected onElementAttached(
		element: ELEMENT, before: HTMLDivElement | null, after: HTMLDivElement | null
	): void {
		before?.addEventListener( "focus", this._onBeforeFocusBound );
		after?.addEventListener( "focus", this._onAfterFocusBound );
		element.addEventListener( "focus", this._onElementFocusBound, true );
	}

	protected onElementDetached(
		element: ELEMENT, before: HTMLDivElement | null, after: HTMLDivElement | null
	): void {
		before?.removeEventListener( "focus", this._onBeforeFocusBound );
		after?.removeEventListener( "focus", this._onAfterFocusBound );
		element.removeEventListener( "focus", this._onElementFocusBound, true );
	}

	protected getElement( clipper: HTMLDivElement ): ELEMENT | null {
		let result = this._element;
		if( result == null ) {
			const creator = this._elementCreator;
			if( creator ) {
				result = creator( clipper );
				this._element = result;
			}
		}
		return result;
	}

	protected getClipper(): HTMLDivElement | null {
		let result = this._clipper;
		if( result == null ) {
			const creator = this._clipperCreator;
			const layer = DApplications.getLayer( this );
			if( creator && layer ) {
				result = creator( layer.getElementContainer() );
				this._clipper = result;
			}
		}
		return result;
	}

	protected getBefore( clipper: HTMLDivElement ): HTMLDivElement | null {
		let result = this._before;
		if( result == null ) {
			const creator = this._beforeCreator;
			if( creator ) {
				result = creator( clipper );
				this._before = result;
			}
		}
		return result;
	}

	protected getAfter( clipper: HTMLDivElement ): HTMLDivElement | null {
		let result = this._after;
		if( result == null ) {
			const creator = this._afterCreator;
			if( creator ) {
				result = creator( clipper );
				this._after = result;
			}
		}
		return result;
	}

	protected setElementStyle(
		target: ELEMENT,
		state: DBaseStateSet, theme: THEME, padding: DPadding,
		elementRect: Rectangle, clipperRect: Rectangle
	): void {
		const style = this._elementStyle;
		if( style ) {
			return style( target, state, theme, padding, elementRect, clipperRect );
		} else {
			return this.theme.setElementStyle( target, state, padding, elementRect, clipperRect );
		}
	}

	protected setClipperStyle(
		target: HTMLDivElement,
		state: DBaseStateSet, theme: THEME, padding: DPadding,
		elementRect: Rectangle, clipperRect: Rectangle
	): void {
		const style = this._clipperStyle;
		if( style ) {
			return style( target, state, theme, padding, elementRect, clipperRect );
		} else {
			return this.theme.setClipperStyle( target, state, padding, elementRect, clipperRect );
		}
	}

	protected setBeforeStyle( target: HTMLDivElement, theme: THEME ): void {
		const style = this._beforeStyle;
		if( style ) {
			return style( target, theme );
		} else {
			return this.theme.setBeforeStyle( target );
		}
	}

	protected setAfterStyle( target: HTMLDivElement, theme: THEME ): void {
		const style = this._afterStyle;
		if( style ) {
			return style( target, theme );
		} else {
			return this.theme.setAfterStyle( target );
		}
	}

	protected onBeforeFocus( e: FocusEvent ): void {
		const layer = DApplications.getLayer( this );
		if( layer ) {
			const focusController = layer.getFocusController();
			const focusable = focusController.find( this, false, false, false );
			layer.view.focus();
			focusController.focus( focusable );
			e.preventDefault();
			e.stopImmediatePropagation();
		}
	}

	protected onAfterFocus( e: FocusEvent ): void {
		const layer = DApplications.getLayer( this );
		if( layer ) {
			const focusController = layer.getFocusController();
			const focusable = focusController.find( this, false, false, true );
			layer.view.focus();
			focusController.focus( focusable );
			e.preventDefault();
			e.stopImmediatePropagation();
		}
	}

	protected onElementFocus( e: FocusEvent ): void {
		if( this._when === DHtmlElementWhen.ALWAYS ) {
			if( ! this.state.isFocused ) {
				this.focus();
			}
		}
	}

	protected onEndByBlur(): void {
		this.onEnd();
	}

	protected onEnd(): void {
		// DO NOTHING
	}

	end(): void {
		this.onEnd();
		this.cancel();
	}

	select(): this {
		if( this._isElementShown && this._select ) {
			this.doSelect();
		}
		return this;
	}

	protected updateElement( renderer: Renderer ) {
		if( this._isElementShown ) {
			if( this.worldVisible ) {
				const element = this._element;
				const clipper = this._clipper;
				if( element && clipper ) {
					const resolution = renderer.resolution;
					const elementRect = this.getElementRect( resolution );
					const clipperRect = this.getClipperRect( elementRect, resolution );
					const theme = this.theme;
					const state = this.state;
					const padding = this._padding;
					this.setClipperStyle( clipper, state, theme, padding, elementRect, clipperRect );
					this.setElementStyle( element, state, theme, padding, elementRect, clipperRect );
				}
			} else {
				this.cancel();
			}
		}
	}

	protected getType(): string {
		return "DHtmlElement";
	}
}
