/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseStates } from "./d-base-states";
import { DButtonGroup } from "./d-button-group";
import { DImageBase, DImageBaseOnOptions, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

/**
 * Mappings of event names and handlers.
 */
export interface DButtonBaseOnOptions<VALUE> extends DImageBaseOnOptions<VALUE> {
	/**
	 * Called when the button is activated.
	 *
	 * @param self an activated button
	 */
	active?: ( self: any ) => void;

	/**
	 * Called when the button is inactivated.
	 *
	 * @param self an inactivated button
	 */
	inactive?: ( self: any ) => void;
}

/**
 * Base button options.
 */
export interface DButtonBaseOptions<
	VALUE = unknown,
	THEME extends DThemeButtonBase = DThemeButtonBase
> extends DImageBaseOptions<VALUE, THEME> {
	/**
	 * True to turn a toggle mode on.
	 */
	toggle?: boolean;

	/**
	 * A button group.
	 */
	group?: DButtonGroup;

	/**
	 * Mappings of event names and handlers.
	 */
	on?: DButtonBaseOnOptions<VALUE>;
}

/**
 * A base button theme.
 */
export interface DThemeButtonBase extends DThemeImageBase {
	/**
	 * Returns true to turn a toggle mode on.
	 */
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

	protected init( options?: OPTIONS ) {
		super.init( options );

		this.buttonMode = true;
		this._isToggle = isToggle( this.theme, options );

		// Event handlers
		this.initOnClick( options );
		if( ! this._isToggle ) {
			this.initOnPress( options );
		}

		// Group
		const group = options && options.group;
		if( group ) {
			group.add( this );
		}
	}

	protected onShortcut( e: KeyboardEvent ): void {
		super.onShortcut( e );
		this.onClick( e );
	}

	isToggle(): boolean {
		return this._isToggle;
	}

	protected initOnClick( options?: OPTIONS ): void {
		UtilPointerEvent.onClick( this, ( e: interaction.InteractionEvent ): void => {
			this.onClick( e );
		});
	}

	protected initOnPress( options?: OPTIONS ): void {
		let interactionManager: interaction.InteractionManager | null = null;

		const onUp = (): void => {
			this.setPressed( false );
			if( interactionManager != null ) {
				interactionManager.off( UtilPointerEvent.up, onUp );
				interactionManager = null;
			}
		};

		this.on( UtilPointerEvent.down, (): void => {
			this.setPressed( true );
			const layer = DApplications.getLayer( this );
			if( layer ) {
				interactionManager = layer.renderer.plugins.interaction;
				interactionManager.on( UtilPointerEvent.up, onUp );
			}
		});
	}

	protected onStateChange( newState: number, oldState: number ): void {
		super.onStateChange( newState, oldState );
		this.buttonMode = DBaseStates.isActionable( newState );
	}

	protected getType(): string {
		return "DButton";
	}

	onClick( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		if( this.isActionable() ) {
			if( this.isToggle() ) {
				this.onToggleStart();
				this.onToggleEnd();
			} else {
				this.onActivate( e );
			}
		}
	}

	protected onActivate( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		this.emit( "active", this );
	}

	toggle(): void {
		if( this.isActionable() ) {
			if( this.isToggle() ) {
				this.onToggleStart();
				this.onToggleEnd();
			}
		}
	}

	protected onToggleStart(): void {
		this.setActive( ! this.isActive() );
	}

	protected onToggleEnd(): void {
		this.emit( this.isActive() ? "active" : "inactive", this );
	}

	protected onActivateKeyDown( e: KeyboardEvent ): void {
		if( this.isActionable() ) {
			if( this.isToggle() ) {
				this.onToggleStart();
			} else {
				this.setPressed( true );
			}
		}
	}

	protected onActivateKeyUp( e: KeyboardEvent ): void {
		if( this.isActionable() ) {
			if( this.isToggle() ) {
				this.onToggleEnd();
			} else {
				if( this.isPressed() ) {
					this.onActivate( e );
				}
				this.setPressed( false );
			}
		}
	}

	onKeyDown( e: KeyboardEvent ): boolean {
		if( UtilKeyboardEvent.isActivateKey( e ) ) {
			this.onActivateKeyDown( e );
		}

		return super.onKeyDown( e );
	}

	onKeyUp( e: KeyboardEvent ): boolean {
		if( UtilKeyboardEvent.isActivateKey( e ) ) {
			this.onActivateKeyUp( e );
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
