/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBaseStateSet } from "./d-base-state-set";
import { DButtonGroup } from "./d-button-group";
import { DImageBase, DImageBaseEvents, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { EventSupport } from "./decorator/event-support";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";

/**
 * {@link DButtonBase} events.
 */
export interface DButtonBaseEvents<VALUE, EMITTER> extends DImageBaseEvents<VALUE, EMITTER> {
	/**
	 * Triggered when the button is activated.
	 *
	 * @param emitter an emitter
	 */
	active( emitter: EMITTER ): void;

	/**
	 * Triggered when the button is inactivated.
	 *
	 * @param emitter an emitter
	 */
	inactive( emitter: EMITTER ): void;
}

/**
 * {@link DButtonBase} "on" options.
 */
export interface DButtonBaseOnOptions<VALUE, EMITTER>
	extends Partial<DButtonBaseEvents<VALUE, EMITTER> & Record<string, Function>> {

}

/**
 * {@link DButtonBase} options.
 */
export interface DButtonBaseOptions<
	VALUE = unknown,
	THEME extends DThemeButtonBase = DThemeButtonBase,
	EMITTER = any
> extends DImageBaseOptions<VALUE, THEME, EMITTER> {
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
	on?: DButtonBaseOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DButtonBase} theme.
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

/**
 * A base class for button classes.
 * See {@link DButtonBaseEvents} for event details.
 */
@EventSupport
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
			this.state.isPressed = false;
			if( interactionManager != null ) {
				interactionManager.off( UtilPointerEvent.up, onUp );
				interactionManager = null;
			}
		};

		this.on( UtilPointerEvent.down, (): void => {
			this.state.isPressed = true;
			const layer = DApplications.getLayer( this );
			if( layer ) {
				interactionManager = layer.renderer.plugins.interaction;
				interactionManager.on( UtilPointerEvent.up, onUp );
			}
		});
	}

	protected onStateChange( newState: DBaseStateSet, oldState: DBaseStateSet ): void {
		super.onStateChange( newState, oldState );
		this.buttonMode = newState.isActionable;
	}

	protected getType(): string {
		return "DButton";
	}

	onClick( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		if( this.state.isActionable ) {
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
		if( this.state.isActionable ) {
			if( this.isToggle() ) {
				this.onToggleStart();
				this.onToggleEnd();
			}
		}
	}

	protected onToggleStart(): void {
		this.state.isActive = ! this.state.isActive;
	}

	protected onToggleEnd(): void {
		this.emit( this.state.isActive ? "active" : "inactive", this );
	}

	protected onActivateKeyDown( e: KeyboardEvent ): void {
		if( this.state.isActionable ) {
			if( this.isToggle() ) {
				this.onToggleStart();
			} else {
				this.state.isPressed = true;
			}
		}
	}

	protected onActivateKeyUp( e: KeyboardEvent ): void {
		if( this.state.isActionable ) {
			if( this.isToggle() ) {
				this.onToggleEnd();
			} else {
				if( this.state.isPressed ) {
					this.onActivate( e );
				}
				this.state.isPressed = false;
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

	// Event handlings
	on<E extends keyof DButtonBaseEvents<VALUE, this>>(
		event: E, handler: DButtonBaseEvents<VALUE, this>[ E ], context?: any
	): this;
	on( event: string, handler: Function, context?: any ): this;
	on(): this { return this; }

	once<E extends keyof DButtonBaseEvents<VALUE, this>>(
		event: E, handler: DButtonBaseEvents<VALUE, this>[ E ], context?: any
	): this;
	once( event: string, handler: Function, context?: any ): this;
	once(): this { return this; }

	emit<E extends keyof DButtonBaseEvents<VALUE, this>>(
		event: E, ...args: Parameters<DButtonBaseEvents<VALUE, this>[ E ]>
	): boolean;
	emit( event: string, ...args: any ): boolean;
	emit(): boolean { return true; }
}
