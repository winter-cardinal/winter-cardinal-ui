/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DButtonBase } from "./d-button-base";

export interface DButtonGroupOptions {
	on?: { [name: string]: Function };
}

export class DButtonGroup<
	BUTTON extends DButtonBase<any, any, any> = DButtonBase<any, any, any>
> extends utils.EventEmitter {
	protected _buttons: BUTTON[];
	protected _active: BUTTON | null;
	protected _onActiveBound: ( button: BUTTON ) => void;
	protected _isEnabled?: boolean;

	constructor( options?: DButtonGroupOptions ) {
		super();

		this._buttons = [];
		this._active = null;
		this._onActiveBound = ( button: BUTTON ): void => {
			this.onActive( button );
		};

		// Events
		if( options != null ) {
			const on = options.on;
			if( on != null ) {
				for( const name in on ) {
					this.on( name, on[ name ] );
				}
			}
		}

		// Done
		this.emit( "init", this );
	}

	add( button: BUTTON ): void {
		const buttons = this._buttons;
		const index = buttons.indexOf( button );
		if( index < 0 ) {
			this._buttons.push( button );
			const isEnabled = this._isEnabled;
			if( isEnabled != null ) {
				button.state.isEnabled = isEnabled;
			}
			button.on( "active", this._onActiveBound );
			if( button.state.isActive ) {
				this.onActive( button );
			}
		}
	}

	get active() {
		return this._active;
	}

	protected onActive( active: BUTTON ): void {
		if( active.isToggle() ) {
			this._active = active;
			const buttons = this._buttons;
			for( let i = 0, imax = buttons.length; i < imax; ++i ) {
				const button = buttons[ i ];
				if( button !== active && button.isToggle() && button.state.isActive ) {
					button.toggle();
				}
			}
		}
	}

	remove( button: BUTTON ): void {
		const buttons = this._buttons;
		const index = buttons.indexOf( button );
		if( 0 <= index ) {
			buttons.splice( index, 1 );
			button.off( "active", this._onActiveBound );
		}
	}

	contains( button: BUTTON ): boolean {
		const buttons = this._buttons;
		const index = buttons.indexOf( button );
		return ( 0 <= index );
	}

	clear(): void {
		this._buttons.length = 0;
	}

	size(): number {
		return this._buttons.length;
	}

	each( iteratee: ( button: BUTTON ) => boolean | void ): void {
		const buttons = this._buttons;
		for( let i = 0, imax = buttons.length; i < imax; ++i ) {
			const button = buttons[ i ];
			if( iteratee( button ) === false ) {
				break;
			}
		}
	}

	disable(): void {
		const buttons = this._buttons;
		for( let i = 0, imax = buttons.length; i < imax; ++i ) {
			buttons[ i ].state.isDisabled = true;
		}
		this._isEnabled = false;
	}

	enable(): void {
		const buttons = this._buttons;
		for( let i = 0, imax = buttons.length; i < imax; ++i ) {
			buttons[ i ].state.isDisabled = false;
		}
		this._isEnabled = true;
	}

	destroy(): void {
		this.clear();
	}
}
