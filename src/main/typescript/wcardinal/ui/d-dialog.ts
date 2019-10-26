/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DAnimation } from "./d-animation";
import { DAnimationFadeIn } from "./d-animation-fade-in";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DFocusable } from "./d-controller-focus";
import { DControllers } from "./d-controllers";
import { UtilClickOutside } from "./util/util-click-outside";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";

export enum DDialogCloseOn {
	NONE = 0,
	ESC = 1,
	CLICK_OUTSIDE = 2
}

export interface DDialogOptions<THEME extends DThemeDialog = DThemeDialog> extends DBaseOptions<THEME> {
	closeOn?: DDialogCloseOn;
	animation?: DAnimation;
}

export interface DThemeDialog extends DThemeBase {
	closeOn(): DDialogCloseOn;
}

export class DDialog<
	THEME extends DThemeDialog = DThemeDialog,
	OPTIONS extends DDialogOptions<THEME> = DDialogOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected _animation!: DAnimation;
	protected _closeOn!: DDialogCloseOn;
	protected _focusable!: DFocusable | null;
	protected _isOpened!: boolean;

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

		// Parent
		if( options == null || options.parent == null ) {
			DApplications.getInstance().stage.addChild( this );
		}
	}

	protected onAnimationEnd( isReverse: boolean ) {
		if( ! isReverse ) {
			const focusController = DControllers.getFocusController();
			this._focusable = focusController.getFocused();
			const firstFocusable = focusController.findFocusable( this, false, true, true );
			focusController.setFocused( firstFocusable || this, true, true );
		}
	}

	open() {
		if( ! this._isOpened ) {
			this._isOpened = true;
			const parent = this.parent;
			if( parent != null ) {
				parent.addChild( this );
			}
			this.onOpen();
		}
	}

	protected onOpen() {
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

	protected onClose() {
		// Focus
		const focusable = this._focusable;
		if( focusable != null ) {
			this._focusable = null;
			DControllers.getFocusController().setFocused( focusable, true, false );
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
