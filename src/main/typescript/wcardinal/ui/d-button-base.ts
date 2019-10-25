/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseStates } from "./d-base-states";
import { DButtonGroup } from "./d-button-group";
import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DButtonBaseOptions<
	VALUE = unknown,
	THEME extends DThemeButtonBase = DThemeButtonBase
> extends DImageBaseOptions<VALUE, THEME> {
	toggle?: boolean;
	group?: DButtonGroup;
}

export interface DThemeButtonBase extends DThemeImageBase {
	isToggle(): boolean;
}

// Option parser
const isToggle = <VALUE, THEME extends DThemeButtonBase>(
	theme: DThemeButtonBase, options: DButtonBaseOptions<VALUE, THEME> | undefined
): boolean => {
	if( options != null && options.toggle != null ) {
		return options.toggle;
	}
	return theme.isToggle();
};

export class DButtonBase<
	VALUE = unknown,
	THEME extends DThemeButtonBase = DThemeButtonBase,
	OPTIONS extends DButtonBaseOptions<VALUE, THEME> = DButtonBaseOptions<VALUE, THEME>
> extends DImageBase<VALUE, THEME, OPTIONS> {
	protected _isToggle!: boolean;
	protected _onActiveUpBound!: () => void;
	protected _onActiveUpBoundTarget!: Container | null;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this.buttonMode = true;
		this._isToggle = isToggle( this.theme, options );
		this._onActiveUpBound = (): void => {
			this.setPressed( false );
			const target = this._onActiveUpBoundTarget;
			if( target != null ) {
				target.off( UtilPointerEvent.up, this._onActiveUpBound );
			}
		};
		this._onActiveUpBoundTarget = null;
		this.setActiveHandlers();

		// Group
		if( options != null && options.group != null ) {
			options.group.add( this );
		}
	}

	protected onShortcut( e: KeyboardEvent ): void {
		super.onShortcut( e );
		this.onClick();
	}

	isToggle(): boolean {
		return this._isToggle;
	}

	protected setActiveHandlers(): void {
		UtilPointerEvent.onClick( this, (): void => {
			this.onClick();
		});

		if( ! this.isToggle() ) {
			this.on( UtilPointerEvent.down, (): void => {
				this.setPressed( true );
				const target = this._onActiveUpBoundTarget = DApplications.getInstance().stage;
				target.on( UtilPointerEvent.up, this._onActiveUpBound );
			});
		}
	}

	protected onStateChange( newState: number, oldState: number ): void {
		super.onStateChange( newState, oldState );
		this.buttonMode = DBaseStates.isActionable( newState );
	}

	protected getType(): string {
		return "DButton";
	}

	onClick(): void {
		if( this.isActionable() ) {
			if( this.isToggle() ) {
				this.onToggleStart();
				this.onToggleEnd();
			} else {
				this.emit( "active", this );
			}
		}
	}

	protected onToggleStart(): void {
		this.setActive( ! this.isActive() );
	}

	protected onToggleEnd(): void {
		this.emit( this.isActive() ? "active" : "inactive", this );
	}

	protected onActivateKeyDown(): void {
		if( this.isActionable() ) {
			if( this.isToggle() ) {
				this.onToggleStart();
			} else {
				this.setPressed( true );
			}
		}
	}

	protected onActivateKeyUp(): void {
		if( this.isActionable() ) {
			if( this.isToggle() ) {
				this.onToggleEnd();
			} else {
				if( this.isPressed() ) {
					this.emit( "active", this );
				}
				this.setPressed( false );
			}
		}
	}

	onKeyDown( e: KeyboardEvent ): boolean {
		if( UtilKeyboardEvent.isActivateKey( e ) ) {
			this.onActivateKeyDown();
		}

		return super.onKeyDown( e );
	}

	onKeyUp( e: KeyboardEvent ): boolean {
		if( UtilKeyboardEvent.isActivateKey( e ) ) {
			this.onActivateKeyUp();
		}

		return super.onKeyUp( e );
	}

	destroy(): void {
		// Group
		const options = this._options;
		if( options != null && options.group != null ) {
			options.group.remove( this );
		}

		super.destroy();
	}
}
