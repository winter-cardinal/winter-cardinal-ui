/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DAnimation } from "./d-animation";
import { DAnimationFadeIn } from "./d-animation-fade-in";
import { DApplications } from "./d-applications";
import { DBase, DBaseEvents, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DFocusable } from "./d-controller-focus";
import { DDialogCloseOn } from "./d-dialog-close-on";
import { UtilClickOutside } from "./util/util-click-outside";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilOverlay } from "./util/util-overlay";

/**
 * {@link DDialog} events.
 */
export interface DDialogEvents<SELF> extends DBaseEvents<SELF> {
	/**
	 * Triggered when a dialog is opened.
	 *
	 * @param self this
	 */
	open( self: SELF ): void;

	/**
	 * Triggered when a dialog is closed.
	 *
	 * @param self this
	 */
	close( self: SELF ): void;
}

/**
 * Mappings of event names and handlers.
 */
export interface DDialogOnOptions<SELF> extends Partial<DDialogEvents<SELF> & Record<string, Function>> {

}

export interface DDialogOptions<
	THEME extends DThemeDialog = DThemeDialog,
	SELF = any
> extends DBaseOptions<THEME> {
	closeOn?: DDialogCloseOn;
	animation?: DAnimation<DBase>;

	/**
	 * Mappings of event names and handlers.
	 */
	on?: DDialogOnOptions<SELF>;
}

export interface DThemeDialog extends DThemeBase {
	closeOn(): DDialogCloseOn;
}

export interface DDialog {
	on<E extends keyof DDialogEvents<this>>(
		event: E, handler: DDialogEvents<this>[ E ], context?: any
	): this;
	on( event: string, handler: Function, context?: any ): this;

	emit<E extends keyof DDialogEvents<this>>(
		event: E, ...args: Parameters<DDialogEvents<this>[ E ]>
	): boolean;
	emit( event: string, ...args: any ): boolean;
}

/**
 * A base class for dialogs.
 *
 * If multiple application instances are there, better to set
 * the constructor option `parent` to an `application.stage`
 * so that the dialog picks a right application.
 *
 * By default, the dialog assumes the last created application is
 * the one it belongs to at the time when it is created.
 */
export class DDialog<
	THEME extends DThemeDialog = DThemeDialog,
	OPTIONS extends DDialogOptions<THEME> = DDialogOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _animation!: DAnimation<DBase>;
	protected _closeOn!: DDialogCloseOn;
	protected _focusable!: DFocusable | null;
	protected _isOpened!: boolean;
	protected _overlay!: UtilOverlay;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this.visible = false;
		this.setState( DBaseState.FOCUS_ROOT, true );
		this._focusable = null;
		this._isOpened = false;

		// Animation
		const animation = this._animation = ( options && options.animation ?
			options.animation : new DAnimationFadeIn() );
		animation.target = this;
		animation.on( "end", ( isReverse: boolean ): void => {
			this.onAnimationEnd( isReverse );
		});

		// Close-on
		const closeOn = this._closeOn = ( options && options.closeOn != null ?
			options.closeOn : this.theme.closeOn()
		);
		if( closeOn & DDialogCloseOn.CLICK_OUTSIDE ) {
			UtilClickOutside.apply( this, (): void => {
				this.onCloseOn();
			});
		}

		this._overlay = new UtilOverlay();
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
				this._focusable = focusController.getFocused();
				const firstFocusable = focusController.findFocusable( this, false, true, true );
				focusController.setFocused( firstFocusable || this, true, true );
			}
		}
	}

	open(): void {
		if( ! this._isOpened ) {
			const layer = this._overlay.pick( this );
			this._isOpened = true;
			layer.stage.addChild( this );
			this.onOpen();
		}
	}

	protected onOpen(): void {
		this.emit( "open", this );

		// Animation
		this._animation.start();
	}

	isOpened(): boolean {
		return this._isOpened;
	}

	close() {
		if( this._isOpened ) {
			this._isOpened = false;
			this.onClose();
		}
	}

	protected onClose(): void {
		// Focus
		const focusable = this._focusable;
		if( focusable != null ) {
			this._focusable = null;
			const layer = DApplications.getLayer( this );
			if( layer ) {
				layer.getFocusController().setFocused( focusable, true, false );
			}
		}

		// Animation
		this._animation.start( true );

		this.emit( "close", this );
	}

	protected getType(): string {
		return "DDialog";
	}

	onKeyDown( e: KeyboardEvent ): boolean {
		const closeOn = this._closeOn;
		if( closeOn & DDialogCloseOn.ESC ) {
			if( UtilKeyboardEvent.isCancelKey( e ) ) {
				this.onCloseOn();
			}
		}

		return super.onKeyDown( e );
	}

	protected onCloseOn(): void {
		this.close();
	}

	protected containsGlobalPoint( point: Point ): boolean {
		return true;
	}
}
