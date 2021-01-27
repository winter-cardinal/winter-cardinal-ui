/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DAnimation } from "./d-animation";
import { DAnimationFadeIn } from "./d-animation-fade-in";
import { DApplications } from "./d-applications";
import { DBase, DBaseEvents, DBaseOptions, DThemeBase } from "./d-base";
import { DFocusable } from "./d-controller-focus";
import { DDialogAlign } from "./d-dialog-align";
import { DDialogCloseOn } from "./d-dialog-close-on";
import { DDialogMode } from "./d-dialog-mode";
import { DDialogState } from "./d-dialog-state";
import { toEnum } from "./util/to-enum";
import { UtilAttach } from "./util/util-attach";
import { UtilClickOutside } from "./util/util-click-outside";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilOverlay } from "./util/util-overlay";

/**
 * {@link DDialog} events.
 */
export interface DDialogEvents<EMITTER> extends DBaseEvents<EMITTER> {
	/**
	 * Triggered when a dialog is opened.
	 *
	 * @param emitter this
	 */
	open( emitter: EMITTER ): void;

	/**
	 * Triggered when a dialog is closed.
	 *
	 * @param emitter this
	 */
	close( emitter: EMITTER ): void;
}

/**
 * {@link DDialog} `on` options.
 */
export interface DDialogOnOptions<EMITTER> extends Partial<DDialogEvents<EMITTER>> {
	[ key: string ]: Function | undefined;
}

/**
 * {@link DDialog} options.
 */
export interface DDialogOptions<
	THEME extends DThemeDialog = DThemeDialog,
	EMITTER = any
> extends DBaseOptions<THEME> {
	closeOn?: DDialogCloseOn;
	animation?: DAnimation<DBase>;

	/**
	 * A dialog mode.
	 */
	mode?: DDialogMode | (keyof typeof DDialogMode);

	sticky?: boolean;

	align?: DDialogAlign;

	/**
	 * Mappings of event names and handlers.
	 */
	on?: DDialogOnOptions<EMITTER>;
}

/**
 * {@link DDialog} theme.
 */
export interface DThemeDialog extends DThemeBase {
	getMode(): DDialogMode;
	closeOn(): DDialogCloseOn;
	isSticky(): boolean;
	getOffsetX(): number;
	getOffsetY(): number;
}

/**
 * A dialog class.
 *
 * If multiple application instances are there, better to set the constructor
 * option `parent` to an `application.stage` so that the dialog picks a right
 * application. By default, the dialog assumes the last created application is
 * the one it belongs to at the time when it is created.
 */
export class DDialog<
	VALUE = void,
	THEME extends DThemeDialog = DThemeDialog,
	OPTIONS extends DDialogOptions<THEME> = DDialogOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _promise?: Promise<VALUE>;
	protected _resolve?: ( value: VALUE | PromiseLike<VALUE> ) => void;
	protected _reject?: ( reason?: any ) => void;

	protected _animation?: DAnimation<DBase> | null;
	protected _closeOn!: DDialogCloseOn;
	protected _focusable?: DFocusable | null;
	protected _overlay!: UtilOverlay;
	protected _mode!: DDialogMode;
	protected _sticky!: boolean;
	protected _onPrerenderBound!: () => void;
	protected _align!: DDialogAlign;
	protected _owner?: DBase<any, any> | null;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._onPrerenderBound = (): void => {
			this.onPrerender();
		};

		// Modeless
		const theme = this.theme;
		const mode = toEnum( options?.mode ?? theme.getMode(), DDialogMode );
		this._mode = mode;

		// Sticky
		this._sticky = options?.sticky ?? theme.isSticky();

		// Close On
		const closeOn = options?.closeOn ?? theme.closeOn();
		this._closeOn = closeOn;

		// Align
		this._align = toEnum( options?.align ?? DDialogAlign.BOTTOM, DDialogAlign );

		// Overlay
		this._overlay = new UtilOverlay();

		// Others
		switch( mode ) {
		case DDialogMode.MODAL:
		case DDialogMode.MENU:
			this.visible = false;
			const state = this.state;
			state.lock();
			state.isFocusRoot = true;
			state.add( mode === DDialogMode.MODAL ? DDialogState.MODAL : DDialogState.MENU );
			state.unlock();
			if( closeOn & DDialogCloseOn.CLICK_OUTSIDE ) {
				UtilClickOutside.apply( this, (): void => {
					this.onCloseOn();
				});
			}
			break;
		case DDialogMode.MODELESS:
			this.state.add( DDialogState.MODELESS );
			break;
		}
	}

	protected getAnimation(): DAnimation | null {
		let result = this._animation;
		if( result === undefined ) {
			switch( this._mode ) {
			case DDialogMode.MODAL:
				result = this._options?.animation ?? new DAnimationFadeIn();
				break;
			case DDialogMode.MODELESS:
				result = null;
				break;
			case DDialogMode.MENU:
				result = this._options?.animation ?? null;
				break;
			}
			if( result ) {
				result.target = this;
				result.on( "end", ( isReverse: boolean ): void => {
					this.onAnimationEnd( isReverse );
				});
			}
			this._animation = result;
		}
		return result;
	}

	protected onAnimationEnd( isReverse: boolean ) {
		if( isReverse ) {
			const parent = this.parent;
			if( parent ) {
				parent.removeChild( this );
			}
		} else {
			const layer = DApplications.getLayer( this );
			if( layer ) {
				const focusController = layer.getFocusController();
				this._focusable = focusController.get();
				const firstFocusable = focusController.find( this, false, true, true );
				focusController.focus( firstFocusable || this );
			}
		}
	}

	open( owner?: DBase<any, any> ): Promise<VALUE> {
		let result = this._promise;
		if( result == null ) {
			result = new Promise<VALUE>(( resolve, reject ): void => {
				this._resolve = resolve;
				this._reject = reject;
			});
			this._promise = result;

			this._owner = owner;

			switch( this._mode ) {
			case DDialogMode.MODAL: {
					const layer = this._overlay.pick( this );
					layer.stage.addChild( this );
				}
				break;
			case DDialogMode.MODELESS:
				break;
			case DDialogMode.MENU: {
					const layer = this._overlay.pick( this );
					layer.stage.addChild( this );

					// Position & size
					const renderer = layer.renderer;
					const onPrerenderBound = this._onPrerenderBound;
					if( this._sticky ) {
						renderer.on( "prerender", onPrerenderBound );
					} else {
						renderer.once( "prerender", onPrerenderBound );
					}
				}
				break;
			}
			this.onOpen();
		}
		return result;
	}

	protected onPrerender(): void {
		const owner = this._owner;
		if( owner ) {
			const bounds = owner.getBounds();
			if( bounds ) {
				const layer = this._overlay.picked;
				if( layer ) {
					const theme = this.theme;
					UtilAttach.attach(
						this,
						bounds,
						theme.getOffsetX(), theme.getOffsetY(),
						layer.width, layer.height,
						this._align
					);
				}
			}
		}
	}

	protected onOpen(): void {
		this.emit( "open", this );

		// Animation
		const animation = this.getAnimation();
		if( animation ) {
			animation.start();
		} else if( this._mode === DDialogMode.MENU ) {
			this.visible = true;
			this.onAnimationEnd( false );
		}
	}

	isOpened(): boolean {
		return this._promise != null;
	}

	close() {
		this.doReject();
	}

	protected doResolve( value: VALUE | PromiseLike<VALUE>  ): void {
		const resolve = this._resolve;
		if( resolve ) {
			this._promise = undefined;
			this._resolve = undefined;
			this._reject = undefined;

			this.onClose();

			resolve( value );
		}
	}

	protected doReject( reason?: any ): void {
		const reject = this._reject;
		if( reject ) {
			this._promise = undefined;
			this._resolve = undefined;
			this._reject = undefined;

			this.onClose();

			reject( reason );
		}
	}

	protected onClose(): void {
		// Focus
		const layer = this._overlay.picked;
		const focusable = this._focusable;
		if( focusable != null ) {
			this._focusable = null;
			if( layer ) {
				layer.getFocusController().focus( focusable );
			} else {
				this.blur( true );
			}
		} else {
			this.blur( true );
		}

		// Remove the prerender event handler
		switch( this._mode ) {
		case DDialogMode.MODAL:
			break;
		case DDialogMode.MODELESS:
			break;
		case DDialogMode.MENU:
			if( layer ) {
				layer.renderer.off( "prerender", this._onPrerenderBound );
			}
			break;
		}

		// Forget the owner
		this._owner = null;

		// Animation
		const animation = this.getAnimation();
		if( animation ) {
			animation.start( true );
		} else if( this._mode === DDialogMode.MENU ) {
			this.visible = false;
			this.onAnimationEnd( true );
		}

		this.emit( "close", this );
	}

	onKeyDown( e: KeyboardEvent ): boolean {
		switch( this._mode ) {
		case DDialogMode.MODAL:
		case DDialogMode.MENU:
			if( this._closeOn & DDialogCloseOn.ESC ) {
				if( UtilKeyboardEvent.isCancelKey( e ) ) {
					this.onCloseOn();
				}
			}
			break;
		case DDialogMode.MODELESS:
			break;
		}
		return super.onKeyDown( e );
	}

	protected onCloseOn(): void {
		this.close();
	}

	protected containsGlobalPoint( point: Point ): boolean {
		switch( this._mode ) {
		case DDialogMode.MODAL:
		case DDialogMode.MENU:
			return true;
		case DDialogMode.MODELESS:
			return super.containsGlobalPoint( point );
		}
	}

	protected getType(): string {
		return "DDialog";
	}
}
