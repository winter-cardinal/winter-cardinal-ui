/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point, Rectangle, Renderer, Text } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DControllers } from "./d-controllers";
import { DDynamicText } from "./d-dynamic-text";
import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { utilIsString } from "./util/util-is-string";

export type DHTMLElementElementCreator<T> = ( parent: HTMLElement ) => T;

export type DHTMLElementStyle<THEME extends DThemeHTMLElement> = (
	target: HTMLElement,
	state: DBaseState, theme: THEME,
	elementRect: Rectangle, clipperRect: Rectangle
) => void;

export type DHTMLElementStyleBefore<THEME extends DThemeHTMLElement> =
	( target: HTMLElement, theme: THEME ) => void;

export type DHTMLElementStyleAfter<THEME extends DThemeHTMLElement> =
	( target: HTMLElement, theme: THEME ) => void;

export enum DHTMLElementWhen {
	FOCUSED,
	ALWAYS
}

export interface DHTMLElementOptions<
	VALUE = unknown,
	ELEMENT extends HTMLElement = HTMLElement,
	THEME extends DThemeHTMLElement<ELEMENT> = DThemeHTMLElement<ELEMENT>
> extends DImageBaseOptions<VALUE, THEME> {
	element?: {
		creator?: DHTMLElementElementCreator<ELEMENT>;
		style?: DHTMLElementStyle<THEME>;
	};
	clipper?: {
		creator?: DHTMLElementElementCreator<HTMLDivElement>;
		style?: DHTMLElementStyle<THEME>;
	};
	before?: {
		creator?: DHTMLElementElementCreator<HTMLDivElement>;
		style?: DHTMLElementStyleBefore<THEME>;
	};
	after?: {
		creator?: DHTMLElementElementCreator<HTMLDivElement>;
		style?: DHTMLElementStyleAfter<THEME>;
	};
	when?: DHTMLElementWhen | (keyof typeof DHTMLElementWhen);
	select?: boolean;
}

export interface DThemeHTMLElement<
	ELEMENT extends HTMLElement = HTMLElement
> extends DThemeImageBase {
	getElementCreator(): DHTMLElementElementCreator<ELEMENT> | null;
	setElementStyle(
		target: ELEMENT, state: DBaseState,
		elementRect: Rectangle, clipperRect: Rectangle
	): void;
	getClipperCreator(): DHTMLElementElementCreator<HTMLDivElement> | null;
	setClipperStyle(
		target: HTMLDivElement, state: DBaseState,
		elementRect: Rectangle, clipperRect: Rectangle
	): void;
	getBeforeCreator(): DHTMLElementElementCreator<HTMLDivElement> | null;
	setBeforeStyle( target: HTMLDivElement ): void;
	getAfterCreator(): DHTMLElementElementCreator<HTMLDivElement> | null;
	setAfterStyle( target: HTMLDivElement ): void;
	getWhen(): DHTMLElementWhen;
	getSelect(): boolean;
}

export class DHTMLElement<
	VALUE = unknown,
	ELEMENT extends HTMLElement = HTMLElement,
	THEME extends DThemeHTMLElement<ELEMENT> = DThemeHTMLElement<ELEMENT>,
	OPTIONS extends DHTMLElementOptions<VALUE, ELEMENT, THEME> = DHTMLElementOptions<VALUE, ELEMENT, THEME>
> extends DImageBase<VALUE, THEME, OPTIONS> {
	protected _clipper!: HTMLDivElement | null;
	protected _clipperCreator!: DHTMLElementElementCreator<HTMLDivElement> | null;
	protected _clipperStyle!: DHTMLElementStyle<THEME> | undefined;
	protected _clipperRect!: Rectangle | null;

	protected _element!: ELEMENT | null;
	protected _elementCreator!: DHTMLElementElementCreator<ELEMENT> | null;
	protected _elementStyle!: DHTMLElementStyle<THEME> | undefined;
	protected _elementRect!: Rectangle | null;
	protected _isElementShown!: boolean;
	protected _isElementSelected!: boolean;
	protected _onElementFocusedBound!: ( e: FocusEvent ) => void;

	protected _before!: HTMLDivElement | null;
	protected _beforeCreator!: DHTMLElementElementCreator<HTMLDivElement> | null;
	protected _beforeStyle!: DHTMLElementStyleBefore<THEME> | undefined;
	protected _onBeforeFocusedBound!: ( e: FocusEvent ) => void;

	protected _after!: HTMLDivElement | null;
	protected _afterCreator!: DHTMLElementElementCreator<HTMLDivElement> | null;
	protected _afterStyle!: DHTMLElementStyleAfter<THEME> | undefined;
	protected _onAfterFocusedBound!: ( e: FocusEvent ) => void;

	protected _renderer!: Renderer | null;
	protected _updateElementBound!: () => void;
	protected _onPreRenderBound!: () => void;

	protected _isStarted!: boolean;
	protected _select!: boolean;
	protected _doSelectBound!: () => void;
	protected _when!: DHTMLElementWhen;

	protected init( options?: OPTIONS ) {
		super.init( options );

		const theme = this.theme;
		const clipper = options && options.clipper;
		const clipperCreator = (clipper && clipper.creator) || theme.getClipperCreator();
		this._clipper = null;
		this._clipperCreator = clipperCreator;
		this._clipperRect = null;

		const element = options && options.element;
		const elementCreator = (element && element.creator) || theme.getElementCreator();
		this._element = null;
		this._elementCreator = elementCreator;
		this._elementStyle = element && element.style;
		this._elementRect = null;
		this._isElementShown = false;
		this._isElementSelected = false;
		this._onElementFocusedBound = ( e: FocusEvent ): void => {
			this.onElementFocused( e );
		};

		const before = options && options.before;
		this._before = null;
		this._beforeCreator = (before && before.creator) || theme.getBeforeCreator();
		this._beforeStyle = before && before.style;
		this._onBeforeFocusedBound = ( e: FocusEvent ): void => {
			this.onBeforeFocused( e );
		};

		const after = options && options.after;
		this._after = null;
		this._afterCreator = (after && after.creator) || theme.getAfterCreator();
		this._afterStyle = after && after.style;
		this._onAfterFocusedBound = ( e: FocusEvent ): void => {
			this.onAfterFocused( e );
		};

		this._renderer = null;
		this._updateElementBound = (): void => {
			this.updateElement();
		};
		this._onPreRenderBound = (): void => {
			this.onPreRender();
		};

		this._isStarted = false;
		this._select = ( options && options.select != null ?
			options.select : theme.getSelect()
		);
		this._doSelectBound = () => {
			this.doSelect();
		};
		const when = ( options && options.when != null ?
			( utilIsString( options.when ) ? DHTMLElementWhen[ options.when ] : options.when ) :
			theme.getWhen()
		);
		this._when = when;
		if( when === DHTMLElementWhen.ALWAYS ) {
			this.start();
		}
	}

	get element(): ELEMENT | null {
		return this._element;
	}

	protected onFocused(): void {
		super.onFocused();
		if( this._when === DHTMLElementWhen.FOCUSED ) {
			this.start();
		} else {
			const element = this._element;
			if( element ) {
				element.focus();
			}
		}
	}

	protected onBlured(): void {
		super.onBlured();
		if( this._when === DHTMLElementWhen.FOCUSED ) {
			this.onEndByBlured();
			this.cancel();
		}
	}

	protected onPreRender(): void {
		if( this._isStarted ) {
			this._isStarted = false;
			this.start_( false );
		}
	}

	start(): void {
		if( ! this.isDisabled() && this._isStarted !== true ) {
			this._isStarted = true;
			DApplications.getInstance().renderer.once(
				"prerender", this._onPreRenderBound
			);
			DApplications.update();
		}
	}

	protected start_( update?: boolean ): void {
		if( ! this._isElementShown ) {
			this._isElementShown = true;

			this.onStart();

			const app = DApplications.getInstance();
			const clipper = this.getClipper();
			if( clipper ) {
				const before = this.getBefore( clipper );
				const element = this.getElement( clipper );
				const after = this.getAfter( clipper );
				if( element ) {
					const resolution = app.renderer.resolution;
					const elementRect = this.getElementRect( resolution );
					const clipperRect = this.getClipperRect( elementRect, resolution );
					const theme = this.theme;
					const state = this.state;
					this.setClipperStyle( clipper, state, theme, elementRect, clipperRect );
					this.setElementStyle( element, state, theme, elementRect, clipperRect );
					if( before ) {
						this.setBeforeStyle( before, theme );
					}
					if( after ) {
						this.setAfterStyle( after, theme );
					}
					this.onElementAttached( element, before, after );

					const updateElementBound = this._updateElementBound;
					const renderer = this._renderer;
					if( renderer != null ) {
						renderer.off( "postrender", updateElementBound );
					}
					this._renderer = app.renderer;
					app.renderer.on( "postrender", updateElementBound );

					// Show HTML elements
					clipper.style.display = "";
					if( this.isFocused() ) {
						element.focus();
					}
					clipper.scrollTop = 0;
					clipper.scrollLeft = 0;

					// Select the element if required.
					// Note that a selecting without the setTimeout causes a keystroke drop on Microsoft Edge.
					if( this._isElementSelected && this._select && ("select" in element) ) {
						setTimeout( this._doSelectBound, 0 );
					}
				}
			}
			if( update !== false ) {
				DApplications.update();
			}
		}
	}

	protected doSelect(): void {
		if( this._isElementShown ) {
			const element = this._element;
			if( element && this._isElementSelected && this._select && ("select" in element) ) {
				this._isElementSelected = false;
				(element as any).select();
			}
		}
	}

	protected createText( formatted: string ): Text | DDynamicText {
		const result = super.createText( formatted );
		if( this._isElementShown ) {
			this.onStart();
		}
		return result;
	}

	/**
	 * Please note that this method does not update transforms.
	 *
	 * @param elementRect
	 * @param resolution
	 */
	protected getClipperRect( elementRect: Rectangle, resolution: number ) {
		const rect = this._clipperRect = ( this._clipperRect != null ? this._clipperRect : new Rectangle() );
		rect.copyFrom( elementRect );

		const p = new Point( 0, 0 );
		let current = this.parent;
		while( current instanceof DBase ) {
			p.set( 0, 0 );
			current.toGlobal( p, p, false );
			let x = p.x;
			let y = p.y;

			p.set( current.width, current.height );
			current.toGlobal( p, p, true );
			const w = p.x - x;
			const h = p.y - y;

			x = ( (x * resolution) | 0 ) / resolution;
			y = ( (y * resolution) | 0 ) / resolution;

			const x0 = rect.x;
			const y0 = rect.y;
			const x1 = rect.x + rect.width;
			const y1 = rect.y + rect.height;

			rect.x = Math.min( Math.max( x0, x ), x + w );
			rect.y = Math.min( Math.max( y0, y ), y + h );

			rect.width = Math.min( Math.max( x1, x ), x + w ) - rect.x;
			rect.height = Math.min( Math.max( y1, y ), y + h ) - rect.y;

			current = current.parent;
		}
		return rect;
	}

	/**
	 * Please note that this method does not update transforms.
	 *
	 * @param resolution
	 */
	protected getElementRect( resolution: number ) {
		const rect = this._elementRect = ( this._elementRect != null ? this._elementRect : new Rectangle() );

		const p = new Point( 0, 0 );
		this.toGlobal( p, p, false );
		rect.x = p.x;
		rect.y = p.y;

		p.set( this.width, this.height );
		this.toGlobal( p, p, true );
		rect.width = p.x - rect.x;
		rect.height = p.y - rect.y;

		// Rounds pixels as Pixi.js does
		rect.x = ( (rect.x * resolution) | 0 ) / resolution;
		rect.y = ( (rect.y * resolution) | 0 ) / resolution;

		return rect;
	}

	cancel(): void {
		if( this._isElementShown ) {
			this._isElementShown = false;

			this.onCancel();

			const clipper = this._clipper;
			if( clipper != null ) {
				clipper.style.display = "none";
			}

			const element = this._element;
			if( element != null ) {
				this.onElementDetached( element, this._before, this._after );
			}

			const renderer = this._renderer;
			if( renderer != null ) {
				this._renderer = null;
				renderer.off( "postrender", this._updateElementBound );
			}

			this._isElementSelected = false;

			const application = DApplications.getInstance();
			const view = application.view;
			if( this._when === DHTMLElementWhen.FOCUSED ) {
				view.focus();
			}

			const interactionManager = application.renderer.plugins.interaction;
			if( this.containsPoint( interactionManager.mouse.global ) && ! this.isHovered() ) {
				this.setHovered( true );
				view.style.cursor = this.cursor;
			}

			DApplications.update();
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
		if( before ) {
			before.addEventListener( "focus", this._onBeforeFocusedBound );
		}
		if( after ) {
			after.addEventListener( "focus", this._onAfterFocusedBound );
		}
		element.addEventListener( "focus", this._onElementFocusedBound, true );
	}

	protected onElementDetached(
		element: ELEMENT, before: HTMLDivElement | null, after: HTMLDivElement | null
	): void {
		if( before ) {
			before.removeEventListener( "focus", this._onBeforeFocusedBound );
		}
		if( after ) {
			after.removeEventListener( "focus", this._onAfterFocusedBound );
		}
		element.removeEventListener( "focus", this._onElementFocusedBound, true );
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
			if( creator ) {
				result = creator( DApplications.getInstance().getRootElement() );
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
		state: DBaseState, theme: THEME,
		elementRect: Rectangle, clipperRect: Rectangle
	): void {
		const style = this._elementStyle;
		if( style ) {
			return style( target, state, theme, elementRect, clipperRect );
		} else {
			return this.theme.setElementStyle( target, state, elementRect, clipperRect );
		}
	}

	protected setClipperStyle(
		target: HTMLDivElement,
		state: DBaseState, theme: THEME,
		elementRect: Rectangle, clipperRect: Rectangle
	): void {
		const style = this._clipperStyle;
		if( style ) {
			return style( target, state, theme, elementRect, clipperRect );
		} else {
			return this.theme.setClipperStyle( target, state, elementRect, clipperRect );
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

	protected onBeforeFocused( e: FocusEvent ): void {
		const focusController = DControllers.getFocusController();
		const focusable = focusController.findFocusable( this, false, false, false );
		DApplications.getInstance().view.focus();
		focusController.setFocused( focusable, true, true );
		e.preventDefault();
		e.stopImmediatePropagation();
	}

	protected onAfterFocused( e: FocusEvent ): void {
		const focusController = DControllers.getFocusController();
		const focusable = focusController.findFocusable( this, false, false, true );
		DApplications.getInstance().view.focus();
		focusController.setFocused( focusable, true, true );
		e.preventDefault();
		e.stopImmediatePropagation();
	}

	protected onElementFocused( e: FocusEvent ): void {
		if( this._when === DHTMLElementWhen.ALWAYS ) {
			if( ! this.isFocused() ) {
				this.focus();
			}
		}
	}

	protected onEndByBlured(): void {
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
		const element = this._element;
		if( element != null && this._isElementShown && this._select && "select" in element ) {
			(element as any).select();
		} else {
			this._isElementSelected = true;
		}
		return this;
	}

	protected updateElement() {
		if( this._isElementShown ) {
			if( this.worldVisible ) {
				const element = this._element;
				const clipper = this._clipper;
				if( element != null && clipper != null ) {
					const resolution = DApplications.getInstance().renderer.resolution;
					const elementRect = this.getElementRect( resolution );
					const clipperRect = this.getClipperRect( elementRect, resolution );
					const theme = this.theme;
					const state = this.state;
					this.setClipperStyle( clipper, state, theme, elementRect, clipperRect );
					this.setElementStyle( element, state, theme, elementRect, clipperRect );
				}
			} else {
				this.cancel();
			}
		}
	}

	protected getType(): string {
		return "DHTMLElement";
	}
}
