/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DBaseStateSet } from "./d-base-state-set";
import { isString } from "./util/is-string";

export class DBaseStateSetImpl implements DBaseStateSet {
	protected _local: Set<string>;
	protected _parent: DBaseStateSet | null;

	constructor() {
		this._local = new Set<string>();
		this._parent = null;
	}

	is( state: string ): boolean {
		return this._local.has( state );
	}

	in( state: string ): boolean {
		return this.is( state ) || this.under( state );
	}

	on( state: string ): boolean {
		return this._parent?.is( state ) ?? false;
	}

	under( state: string ): boolean {
		return this._parent?.in( state ) ?? false;
	}

	lock( callOnChange?: boolean ): this {
		return this;
	}

	unlock(): this {
		return this;
	}

	protected begin(): this {
		return this;
	}

	protected end(): this {
		return this;
	}

	protected checkAdded( added: string ): boolean {
		return ! this._local.has( added );
	}

	add( state: string ): this {
		if( this.checkAdded( state ) ) {
			this.begin();
			this._local.add( state );
			this.end();
		}
		return this;
	}

	protected checkAddeds( states: string[] ) {
		const local = this._local;
		for( let i = 0, imax = states.length; i < imax; ++i ) {
			if( ! local.has( states[ i ] ) ) {
				return true;
			}
		}
		return false;
	}

	addAll( states: string[] ): this;
	addAll( ...states: string[] ): this;
	addAll( stateOrStates: string | string[] ): this {
		const states = ( isString( stateOrStates ) ?
			arguments as unknown as string[] : stateOrStates
		);
		if( this.checkAddeds( states ) ) {
			this.begin();
			const local = this._local;
			for( let i = 0, imax = states.length; i < imax; ++i ) {
				local.add( states[ i ] );
			}
			this.end();
		}
		return this;
	}

	protected checkRemoved( removed: string ): boolean {
		return this._local.has( removed );
	}

	remove( state: string ): this {
		if( this.checkRemoved( state ) ) {
			this.begin();
			this._local.delete( state );
			this.end();
		}
		return this;
	}

	protected checkRemoveds( states: string[] ) {
		const local = this._local;
		for( let i = 0, imax = states.length; i < imax; ++i ) {
			if( local.has( states[ i ] ) ) {
				return true;
			}
		}
		return false;
	}

	removeAll( states: string[] ): this;
	removeAll( ...states: string[] ): this;
	removeAll( stateOrStates: string | string[] ): this {
		const states = ( isString( stateOrStates ) ?
			arguments as unknown as string[] : stateOrStates
		);
		if( this.checkRemoveds( states ) ) {
			this.begin();
			const local = this._local;
			for( let i = 0, imax = states.length; i < imax; ++i ) {
				local.delete( states[ i ] );
			}
			this.end();
		}
		return this;
	}

	set( state: string, isOn: boolean ): this;
	set( added: string | null, removed: string | null ): this;
	set( stateOrAdded: string | null, isOnOrRemoved: string | null | boolean ): this {
		if( isOnOrRemoved === true ) {
			this.add( stateOrAdded! );
		} else if( isOnOrRemoved === false ) {
			this.remove( stateOrAdded! );
		} else {
			const added = stateOrAdded;
			const removed = isOnOrRemoved;
			if( added != null ) {
				if( removed != null ) {
					if( this.checkAdded( added ) || this.checkRemoved( removed ) ) {
						this.begin();
						this._local.add( added ).delete( removed );
						this.end();
					}
				} else {
					this.add( added );
				}
			} else if( removed != null ) {
				this.remove( removed );
			}
		}
		return this;
	}

	setAll( states: string[], isOn: boolean ): this;
	setAll( addeds: string[] | null, removeds: string[] | null ): this;
	setAll( statesOrAddeds: string[] | null, isOnOrRemoveds: string[] | null | boolean ): this {
		if( isOnOrRemoveds === true ) {
			this.addAll( statesOrAddeds! );
		} else if( isOnOrRemoveds === false ) {
			this.removeAll( statesOrAddeds! );
		} else {
			const addeds = statesOrAddeds;
			const removeds = isOnOrRemoveds;
			if( addeds != null ) {
				if( removeds != null ) {
					if( this.checkAddeds( addeds ) || this.checkRemoveds( removeds ) ) {
						this.begin();
						const local = this._local;
						for( let i = 0, imax = addeds.length; i < imax; ++i ) {
							local.add( addeds[ i ] );
						}
						for( let i = 0, imax = removeds.length; i < imax; ++i ) {
							local.delete( removeds[ i ] );
						}
						this.end();
					}
				} else {
					this.addAll( addeds );
				}
			} else if( removeds != null ) {
				this.removeAll( removeds );
			}
		}
		return this;
	}

	copy( other: DBaseStateSet ): this {
		if( other instanceof DBaseStateSetImpl ) {
			this.begin();
			const local = this._local;
			local.clear();
			other.local.forEach(( value: string ): void => {
				local.add( value );
			});
			this._parent = other.parent;
			this.end();
		}
		return this;
	}

	get local(): Set<string> {
		return this._local;
	}

	get parent(): DBaseStateSet | null {
		return this._parent;
	}

	set parent( parent: DBaseStateSet | null ) {
		if( this._parent !== parent ) {
			this.begin();
			this._parent = parent;
			this.end();
		}
	}

	onParentChange( newState: DBaseStateSet, oldState: DBaseStateSet ): void {
		this._parent = oldState;
		this.begin();
		this._parent = newState;
		this.end();
	}

	get isHovered(): boolean {
		return this.is( DBaseState.HOVERED );
	}

	set isHovered( isHovered: boolean ) {
		this.set( DBaseState.HOVERED, isHovered );
	}

	get inHovered(): boolean {
		return this.in( DBaseState.HOVERED );
	}

	get onHovered(): boolean {
		return this.on( DBaseState.HOVERED );
	}

	get underHovered(): boolean {
		return this.under( DBaseState.HOVERED );
	}

	get isActive(): boolean {
		return this.is( DBaseState.ACTIVE );
	}

	set isActive( isActive: boolean ) {
		this.set( DBaseState.ACTIVE, isActive );
	}

	get inActive(): boolean {
		return this.in( DBaseState.ACTIVE );
	}

	get onActive(): boolean {
		return this.on( DBaseState.ACTIVE );
	}

	get underActive(): boolean {
		return this.under( DBaseState.ACTIVE );
	}

	get isPressed(): boolean {
		return this.is( DBaseState.PRESSED );
	}

	set isPressed( isPressed: boolean ) {
		this.set( DBaseState.PRESSED, isPressed );
	}

	get inPressed(): boolean {
		return this.in( DBaseState.PRESSED );
	}

	get onPressed(): boolean {
		return this.on( DBaseState.PRESSED );
	}

	get underPressed(): boolean {
		return this.under( DBaseState.PRESSED );
	}

	get isReadOnly(): boolean {
		return this.is( DBaseState.READ_ONLY );
	}

	set isReadOnly( isReadOnly: boolean ) {
		this.set( DBaseState.READ_ONLY, isReadOnly );
	}

	get inReadOnly(): boolean {
		return this.in( DBaseState.READ_ONLY );
	}

	get onReadOnly(): boolean {
		return this.on( DBaseState.READ_ONLY );
	}

	get underReadOnly(): boolean {
		return this.under( DBaseState.READ_ONLY );
	}

	get isEnabled(): boolean {
		return ! this.is( DBaseState.DISABLED );
	}

	set isEnabled( isEnabled: boolean ) {
		this.set( DBaseState.DISABLED, ! isEnabled );
	}

	get inEnabled(): boolean {
		return ! this.in( DBaseState.DISABLED );
	}

	get onEnabled(): boolean {
		return ! this.on( DBaseState.DISABLED );
	}

	get underEnabled(): boolean {
		return ! this.under( DBaseState.DISABLED );
	}

	get isDisabled(): boolean {
		return this.is( DBaseState.DISABLED );
	}

	set isDisabled( isDisabled: boolean ) {
		this.set( DBaseState.DISABLED, isDisabled );
	}

	get inDisabled(): boolean {
		return this.in( DBaseState.DISABLED );
	}

	get onDisabled(): boolean {
		return this.on( DBaseState.DISABLED );
	}

	get underDisabled(): boolean {
		return this.under( DBaseState.DISABLED );
	}

	get isActionable(): boolean {
		return ! this.in( DBaseState.DISABLED ) && ! this.in( DBaseState.READ_ONLY );
	}

	get isDragging(): boolean {
		return this.is( DBaseState.DRAGGING );
	}

	set isDragging( isDragging: boolean ) {
		this.set( DBaseState.DRAGGING, isDragging );
	}

	get inDragging(): boolean {
		return this.in( DBaseState.DRAGGING );
	}

	get onDragging(): boolean {
		return this.on( DBaseState.DRAGGING );
	}

	get underDragging(): boolean {
		return this.under( DBaseState.DRAGGING );
	}

	get isFocused(): boolean {
		return this.is( DBaseState.FOCUSED );
	}

	set isFocused( isFocused: boolean ) {
		this.set( DBaseState.FOCUSED, isFocused );
	}

	get inFocused(): boolean {
		return this.in( DBaseState.FOCUSED );
	}

	get onFocused(): boolean {
		return this.on( DBaseState.FOCUSED );
	}

	get underFocused(): boolean {
		return this.under( DBaseState.FOCUSED );
	}

	get isFocusRoot(): boolean {
		return this.is( DBaseState.FOCUS_ROOT );
	}

	set isFocusRoot( isFocusRoot: boolean ) {
		this.set( DBaseState.FOCUS_ROOT, isFocusRoot );
	}

	get inFocusRoot(): boolean {
		return this.in( DBaseState.FOCUS_ROOT );
	}

	get onFocusRoot(): boolean {
		return this.on( DBaseState.FOCUS_ROOT );
	}

	get underFocusRoot(): boolean {
		return this.under( DBaseState.FOCUS_ROOT );
	}

	get isFocusReverse(): boolean {
		return this.is( DBaseState.FOCUS_REVERSE );
	}

	set isFocusReverse( isFocusReverse: boolean ) {
		this.set( DBaseState.FOCUS_REVERSE, isFocusReverse );
	}

	get inFocusReverse(): boolean {
		return this.in( DBaseState.FOCUS_REVERSE );
	}

	get onFocusReverse(): boolean {
		return this.on( DBaseState.FOCUS_REVERSE );
	}

	get underFocusReverse(): boolean {
		return this.under( DBaseState.FOCUS_REVERSE );
	}

	get isFocusable(): boolean {
		return ! this.is( DBaseState.UNFOCUSABLE );
	}

	set isFocusable( isFocusable: boolean ) {
		this.set( DBaseState.UNFOCUSABLE, ! isFocusable );
	}

	get inFocusable(): boolean {
		return ! this.in( DBaseState.UNFOCUSABLE );
	}

	get onFocusable(): boolean {
		return ! this.on( DBaseState.UNFOCUSABLE );
	}

	get underFocusable(): boolean {
		return ! this.under( DBaseState.UNFOCUSABLE );
	}

	get isUnfocusable(): boolean {
		return this.is( DBaseState.UNFOCUSABLE );
	}

	set isUnfocusable( unfocusable: boolean ) {
		this.set( DBaseState.UNFOCUSABLE, unfocusable );
	}

	get inUnfocusable(): boolean {
		return this.in( DBaseState.UNFOCUSABLE );
	}

	get onUnfocusable(): boolean {
		return this.on( DBaseState.UNFOCUSABLE );
	}

	get underUnfocusable(): boolean {
		return this.under( DBaseState.UNFOCUSABLE );
	}

	get isInvalid(): boolean {
		return this.is( DBaseState.INVALID );
	}

	set isInvalid( invalid: boolean ) {
		this.set( DBaseState.INVALID, invalid );
	}

	get inInvalid(): boolean {
		return this.in( DBaseState.INVALID );
	}

	get onInvalid(): boolean {
		return this.on( DBaseState.INVALID );
	}

	get underInvalid(): boolean {
		return this.on( DBaseState.INVALID );
	}

	get isSucceeded(): boolean {
		return this.is( DBaseState.SUCCEEDED );
	}

	set isSucceeded( succeeded: boolean ) {
		this.set( DBaseState.SUCCEEDED, succeeded );
	}

	get inSucceeded(): boolean {
		return this.in( DBaseState.SUCCEEDED );
	}

	get onSucceeded(): boolean {
		return this.on( DBaseState.SUCCEEDED );
	}

	get underSucceeded(): boolean {
		return this.under( DBaseState.SUCCEEDED );
	}

	get isFailed(): boolean {
		return this.is( DBaseState.FAILED );
	}

	set isFailed( failed: boolean ) {
		this.set( DBaseState.FAILED, failed );
	}

	get inFailed(): boolean {
		return this.in( DBaseState.FAILED );
	}

	get onFailed(): boolean {
		return this.on( DBaseState.FAILED );
	}

	get underFailed(): boolean {
		return this.under( DBaseState.FAILED );
	}

	get isWarned(): boolean {
		return this.is( DBaseState.WARNED );
	}

	set isWarned( isWarned: boolean ) {
		this.set( DBaseState.WARNED, isWarned );
	}

	get inWarned(): boolean {
		return this.in( DBaseState.WARNED );
	}

	get onWarned(): boolean {
		return this.on( DBaseState.WARNED );
	}

	get underWarned(): boolean {
		return this.on( DBaseState.WARNED );
	}

	get isChanged(): boolean {
		return this.is( DBaseState.CHANGED );
	}

	set isChanged( isChanged: boolean ) {
		this.set( DBaseState.CHANGED, isChanged );
	}

	get inChanged(): boolean {
		return this.in( DBaseState.CHANGED );
	}

	get onChanged(): boolean {
		return this.on( DBaseState.CHANGED );
	}

	get underChanged(): boolean {
		return this.on( DBaseState.CHANGED );
	}

	get isAlternated(): boolean {
		return this.is( DBaseState.ALTERNATED );
	}

	set isAlternated( isAlternated: boolean ) {
		this.set( DBaseState.ALTERNATED, isAlternated );
	}

	get inAlternated(): boolean {
		return this.in( DBaseState.ALTERNATED );
	}

	get onAlternated(): boolean {
		return this.on( DBaseState.ALTERNATED );
	}

	get underAlternated(): boolean {
		return this.on( DBaseState.ALTERNATED );
	}

	toString(): string {
		const values: string[] = [];
		this._local.forEach(( value: string ): void => {
			values.push( value );
		});
		return `{${values.join( "," )}}`;
	}
}
