/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Application, interaction, Point, Renderer, settings } from "pixi.js";
import { DApplicationOptions } from "./d-application-options";
import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { Focusable, FocusableContainer } from "./d-controller-focus";
import { DControllers } from "./d-controllers";
import { DPadding } from "./d-padding";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { UtilWheelEvent, UtilWheelEventDeltas } from "./util/util-wheel-event";

// Global Settings
settings.RESOLUTION = window.devicePixelRatio || 1;
settings.ROUND_PIXELS = false;
delete (Renderer as any).__plugins.accessibility;

//
interface DblClickable {
	onDblClick( e: MouseEvent | TouchEvent ): boolean;
}

const isDblClickable = ( target: any ): target is DblClickable => {
	return target != null && target.onDblClick != null;
};

interface Wheelable {
	onWheel( e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point ): boolean;
}

const isWheelable = ( target: any ): target is Wheelable => {
	return target != null && target.onWheel != null;
};

//
export class DApplication extends Application {
	protected _options: DApplicationOptions;
	protected _renderId: number | null = null;
	protected _renderBound: () => void;
	protected _isUpdateAllowed: boolean;
	protected _refitLimit: number;
	protected _reflowLimit: number;

	constructor( options: DApplicationOptions = new DApplicationOptions() ) {
		super( options.getPixiApplicationOptions() );

		DApplications.setInstace( this );

		this._options = options;
		this._isUpdateAllowed = true;
		this._refitLimit = 5;
		this._reflowLimit = 5;

		this._renderBound = (): void => {
			if( this._renderId != null ) {
				this.render();
			}
		};

		// Canvas initialization
		const rootElement = options.getRootElement();
		const children = rootElement.children;
		if( 0 < children.length ) {
			rootElement.insertBefore( this.view, children[ 0 ] );
		} else {
			rootElement.appendChild( this.view );
		}
		rootElement.style.margin = "0px";
		rootElement.style.padding = "0px";
		rootElement.style.overflow = "hidden";
		this.view.style.width = "100%";
		this.view.style.height = "100%";
		this.view.style.display = "block";

		// Focus handling
		let hasFocus = false;
		const focusController = DControllers.getFocusController();
		const onBlurBound = (): void => {
			if( ! hasFocus ) {
				focusController.setFocused( null, true, false );
			}
		};
		rootElement.addEventListener( "focus", ( e ): void => {
			hasFocus = true;
		}, true );
		rootElement.addEventListener( "blur", ( e ): void => {
			hasFocus = false;
			setTimeout( onBlurBound, 0 );
		}, true );
		this.view.setAttribute( "tabindex", "0" );

		DControllers.getKeyboardController().init( this.view, this.stage, focusController );

		const interactionManager: interaction.InteractionManager = this.renderer.plugins.interaction;
		interactionManager.on( UtilPointerEvent.down, ( e: interaction.InteractionEvent ): void => {
			if( e.target == null ) {
				focusController.setFocused( null, true, false );
			}
		});

		// Resize handling
		const onResize = (): void => {
			const bbox = options.getRootElement().getBoundingClientRect();
			this.renderer.resize( bbox.width, bbox.height );
			this.resizeChildren( bbox.width, bbox.height, options.getPadding() );
			this.update();
		};
		window.addEventListener( "resize", onResize );
		window.addEventListener( "orientationchange", onResize );

		// Mouse wheel handling
		const wheelGlobal = new Point();
		const wheelEventUtil = UtilWheelEvent.getInstance();
		wheelEventUtil.on( this.view, ( e: WheelEvent | Event ): void => {
			const wheelEvent = e as WheelEvent;
			UtilPointerEvent.toGlobal( wheelEvent, wheelGlobal );
			let current = interactionManager.hitTest( wheelGlobal );
			const deltas = wheelEventUtil.normalize( e );
			if( deltas != null ) {
				while( current != null ) {
					if( isWheelable( current ) ) {
						if( current.onWheel( wheelEvent, deltas, wheelGlobal ) ) {
							wheelEvent.preventDefault();
							break;
						}
					}
					current = current.parent;
				}
			}
		});

		// Double click handling
		UtilPointerEvent.onDblClick( this.view, ( e: MouseEvent | TouchEvent ) => {
			const focused = focusController.getFocused();
			if( focused != null ) {
				let current: Focusable | FocusableContainer | null = focused;
				while( current != null ) {
					if( isDblClickable( current ) ) {
						if( current.onDblClick( e ) ) {
							break;
						}
					}
					current = current.parent;
				}
			}
		});

		//
		this.stage.interactive = true;
	}

	disallowUpdate(): void {
		this._isUpdateAllowed = false;
	}

	allowUpdate(): void {
		this._isUpdateAllowed = true;
	}

	update(): void {
		if( this._isUpdateAllowed && this._renderId == null ) {
			this._renderId = requestAnimationFrame( this._renderBound );
		}
	}

	render(): void {
		const oldRenderId = this._renderId;
		this._renderId = null;
		this.onRendering();
		const newRenderId = this._renderId;
		this._renderId = oldRenderId;
		this.refit();
		this.reflow();
		super.render();
		this._renderId = newRenderId;
	}

	protected onRendering(): void {
		// DO NOTHING
	}

	get width(): number {
		return this.screen.width;
	}

	get height(): number {
		return this.screen.height;
	}

	get padding(): DPadding {
		return this._options.getPadding();
	}

	protected resizeChildren( width: number, height: number, padding: DPadding ): void {
		const children = this.stage.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const child = children[ i ];
			if( child instanceof DBase ) {
				child.onParentResize( width, height, padding );
			}
		}
	}

	refit(): void {
		const children = this.stage.children;
		for( let ilimit = 0, limit = this._refitLimit; ilimit < limit; ++ilimit ) {
			let isChildrenDirty = false;
			for( let i = 0, imax = children.length; i < imax; ++i ) {
				const child = children[ i ];
				if( child instanceof DBase ) {
					child.refit();
					isChildrenDirty = isChildrenDirty || child.isChildrenDirty();
				}
			}

			// If DBases are changed during the `refit` process, need to refit again.
			if( ! isChildrenDirty ) {
				break;
			}
		}
	}

	reflow(): void {
		const children = this.stage.children;
		for( let ilimit = 0, limit = this._refitLimit; ilimit < limit; ++ilimit ) {
			let isDirty = false;
			for( let i = 0, imax = children.length; i < imax; ++i ) {
				const child = children[ i ];
				if( child instanceof DBase ) {
					child.reflow();
					isDirty = isDirty || child.isDirty() || child.hasDirty();
				}
			}

			// If DBases are changed during the `reflow` process, need to reflow again.
			if( ! isDirty ) {
				break;
			}
		}
	}

	getRootElement(): HTMLElement {
		return this._options.getRootElement();
	}

	getOptions(): DApplicationOptions {
		return this._options;
	}
}
