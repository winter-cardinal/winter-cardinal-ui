/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DBaseState } from "./d-base-state";
import { DButtonBase } from "./d-button-base";

type BUTTON = DButtonBase<any, any, any>;

export interface DButtonGroupOptions {
	on?: { [name: string]: Function };
}

export class DButtonGroup extends utils.EventEmitter {
	protected _buttons: BUTTON[];
	protected _active: BUTTON | null;
	protected _stateOn: DBaseState;
	protected _stateOff: DBaseState;
	protected _onActiveBound: ( button: BUTTON ) => void;

	constructor( options?: DButtonGroupOptions ) {
		super();

		this._buttons = [];
		this._active = null;
		this._stateOn = DBaseState.NONE;
		this._stateOff = DBaseState.NONE;
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
			button.setState( this._stateOn, true );
			button.setState( this._stateOff, false );
			button.on( "active", this._onActiveBound );
			if( button.isActive() ) {
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
				if( button !== active && button.isToggle() && button.isActive() ) {
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

	setHovered( isHovered: boolean ) {
		return this.setState( DBaseState.HOVERED, isHovered );
	}

	setActive( isActive: boolean ) {
		return this.setState( DBaseState.ACTIVE, isActive );
	}

	setReadOnly( isReadOnly: boolean ) {
		return this.setState( DBaseState.READ_ONLY, isReadOnly );
	}

	setDisabled( isDisabled: boolean ) {
		return this.setState( DBaseState.DISABLED, isDisabled );
	}

	setDragging( isDragging: boolean ) {
		return this.setState( DBaseState.DRAGGING, isDragging );
	}

	isHovered(): boolean {
		return this.hasState( DBaseState.HOVERED );
	}

	isActive(): boolean {
		return this.hasState( DBaseState.ACTIVE );
	}

	isReadOnly(): boolean {
		return this.hasState( DBaseState.READ_ONLY );
	}

	isDisabled(): boolean {
		return this.hasState( DBaseState.DISABLED );
	}

	isDragging(): boolean {
		return this.hasState( DBaseState.DRAGGING );
	}

	isFocused(): boolean {
		return this.hasState( DBaseState.FOCUSED );
	}

	isUnfocusable(): boolean {
		return this.hasState( DBaseState.UNFOCUSABLE );
	}

	setState( state: DBaseState, isOn: boolean ) {
		if( isOn ) {
			this._stateOn |= state;
			this._stateOff &= ~state;
		} else {
			this._stateOff |= state;
			this._stateOn &= ~state;
		}

		const buttons = this._buttons;
		for( let i = 0, imax = buttons.length; i < imax; ++i ) {
			const button = buttons[ i ];
			button.setState( state, isOn );
		}
		return this;
	}

	hasState( state: DBaseState ): boolean {
		const buttons = this._buttons;
		for( let i = 0, imax = buttons.length; i < imax; ++i ) {
			if( buttons[ i ].hasState( state ) ) {
				return true;
			}
		}
		return false;
	}

	clear(): void {
		this._buttons.length = 0;
	}

	destroy(): void {
		this.clear();
	}
}
