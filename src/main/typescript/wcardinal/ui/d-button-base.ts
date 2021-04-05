/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DApplications } from "./d-applications";
import { DButtonBaseWhen } from "./d-button-base-when";
import { DButtonGroup } from "./d-button-group";
import { DImageBase, DImageBaseEvents, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { DOnOptions } from "./d-on-options";
import { toEnum } from "./util/to-enum";
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
	extends Partial<DButtonBaseEvents<VALUE, EMITTER>>, DOnOptions {

}

/**
 * {@link DButtonBase} options.
 */
export interface DButtonBaseOptions<
	VALUE = unknown,
	THEME extends DThemeButtonBase<VALUE> = DThemeButtonBase<VALUE>,
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
	 * An option when to activate a button.
	 */
	when?: DButtonBaseWhen | (keyof typeof DButtonBaseWhen);

	/**
	 * Mappings of event names and handlers.
	 */
	on?: DButtonBaseOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DButtonBase} theme.
 */
export interface DThemeButtonBase<VALUE = unknown> extends DThemeImageBase<VALUE> {
	/**
	 * Returns true to turn a toggle mode on.
	 */
	isToggle(): boolean;

	/**
	 * Returns when to activate a button.
	 */
	getWhen(): DButtonBaseWhen;
}

/**
 * A base class for button classes.
 * See {@link DButtonBaseEvents} for event details.
 */
export class DButtonBase<
	VALUE = unknown,
	THEME extends DThemeButtonBase<VALUE> = DThemeButtonBase<VALUE>,
	OPTIONS extends DButtonBaseOptions<VALUE, THEME> = DButtonBaseOptions<VALUE, THEME>
> extends DImageBase<VALUE, THEME, OPTIONS> {
	protected _isToggle!: boolean;
	protected _when!: DButtonBaseWhen;

	protected init( options?: OPTIONS ): void {
		super.init( options );

		const theme = this.theme;
		this._isToggle = ( options?.toggle ?? theme.isToggle() );
		const when = toEnum( options?.when ?? theme.getWhen(), DButtonBaseWhen );
		this._when = when;

		// Event handlers
		this.initOnClick( when, theme, options );
		this.initOnPress( when, theme, options );

		// Group
		const group = options?.group;
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

	protected initOnClick( when: DButtonBaseWhen, theme: THEME, options?: OPTIONS ): void {
		UtilPointerEvent.onClick( this, ( e: interaction.InteractionEvent ): void => {
			if( when === DButtonBaseWhen.CLICKED ) {
				this.onClick( e );
			}
		});
	}

	protected initOnPress( when: DButtonBaseWhen, theme: THEME, options?: OPTIONS ): void {
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

	protected getType(): string {
		return "DButton";
	}

	onClick( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		if( this.state.isActionable ) {
			if( this.isToggle() ) {
				this.onToggleStart( e );
				this.onToggleEnd( e );
			} else {
				this.onActivate( e );
			}
		}
	}

	onDblClick( e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager ): boolean {
		if( this._when === DButtonBaseWhen.DOUBLE_CLICKED ) {
			this.onClick( e );
		}
		return super.onDblClick( e, interactionManager );
	}

	protected onActivate( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		this.emit( "active", this );
	}

	protected onInactivate( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		this.emit( "inactive", this );
	}

	toggle(): void {
		if( this.state.isActionable ) {
			if( this.isToggle() ) {
				this.onToggleStart();
				this.onToggleEnd();
			}
		}
	}

	protected onToggleStart( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		this.state.isActive = ! this.state.isActive;
	}

	protected onToggleEnd( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		if( this.state.isActive ) {
			this.onActivate( e );
		} else {
			this.onInactivate( e );
		}
	}

	protected onActivateKeyDown( e: KeyboardEvent ): void {
		if( this.state.isActionable ) {
			if( this.isToggle() ) {
				this.onToggleStart( e );
			} else {
				this.state.isPressed = true;
			}
		}
	}

	protected onActivateKeyUp( e: KeyboardEvent ): void {
		if( this.state.isActionable ) {
			if( this.isToggle() ) {
				this.onToggleEnd( e );
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
		this._options?.group?.remove( this );
		super.destroy();
	}
}
