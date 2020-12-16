/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DBaseStateSet } from "./d-base-state-set";
import { isNumber } from "./util/is-number";

export type DBaseStateSetImplOnChange = ( newState: DBaseStateSet, oldState: DBaseStateSet ) => void;

export class DBaseStateSetImpl implements DBaseStateSet {
	protected _onChange?: DBaseStateSetImplOnChange;
	protected _onChangeWork?: DBaseStateSetImpl;

	protected _local: DBaseState;
	protected _parentLocal: DBaseState;
	protected _parentMerged: DBaseState;

	/**
	 * Merged state is a bit or of the Local state and the parent's merged state.
	 */
	protected _merged: DBaseState;

	constructor( onChange?: DBaseStateSetImplOnChange ) {
		this._local = DBaseState.NONE;
		this._merged = DBaseState.NONE;
		this._parentLocal = DBaseState.NONE;
		this._parentMerged = DBaseState.NONE;

		this._onChange = onChange;
	}

	is( state: DBaseState ): boolean {
		return !!(this._local & state);
	}

	in( state: DBaseState ): boolean {
		return !!(this._merged & state);
	}

	on( state: DBaseState ): boolean {
		return !!(this._parentLocal & state);
	}

	under( state: DBaseState ): boolean {
		return !!(this._parentMerged & state);
	}

	add( state: DBaseState ): this {
		return this.set( state, true );
	}

	remove( state: DBaseState ): this {
		return this.set( state, false );
	}

	set( state: DBaseState, toOn: boolean ): this;
	set( on: DBaseState, off: DBaseState ): this;
	set( stateOrOn: DBaseState, toOnOrOff: boolean | DBaseState ): this {
		const oldLocal = this._local;
		const newLocal = ( isNumber( toOnOrOff ) ?
			( (oldLocal | stateOrOn) & ~toOnOrOff ) :
			( toOnOrOff ? (oldLocal | stateOrOn) : (oldLocal & ~stateOrOn ) )
		);
		if( oldLocal !== newLocal ) {
			this._local = newLocal;
			const parentLocal = this._parentLocal;
			const parentMerged = this._parentMerged;
			this.onChange( newLocal, parentLocal, parentMerged, oldLocal, parentLocal, parentMerged );
		}
		return this;
	}

	update( parentState: DBaseStateSet ): this {
		if( parentState instanceof DBaseStateSetImpl ) {
			const newParentLocal = parentState.local;
			const newParentMerged = parentState.merged;
			const oldParentLocal = this._parentLocal;
			const oldParentMerged = this._parentMerged;
			if( newParentLocal !== oldParentLocal || newParentMerged !== oldParentMerged ) {
				this._parentLocal = newParentLocal;
				this._parentMerged = newParentMerged;
				const local = this._local;
				this.onChange( local, newParentLocal, newParentMerged, local, oldParentLocal, oldParentMerged );
			}
		}
		return this;
	}

	copy( state: DBaseStateSet ): this;
	copy( local: DBaseState, parentLocal: DBaseState, parentMerged: DBaseState, merged: DBaseState ): this;
	copy(
		stateOrLocal: DBaseState | DBaseStateSet,
		parentLocal?: DBaseState,
		parentMerged?: DBaseState,
		merged?: DBaseState
	): this {
		if( isNumber( stateOrLocal ) ) {
			this._local = stateOrLocal;
			this._parentLocal = parentLocal!;
			this._parentMerged = parentMerged!;
			this._merged = merged!;
		} else {
			if( stateOrLocal instanceof DBaseStateSetImpl ) {
				this._local = stateOrLocal.local;
				this._parentLocal = stateOrLocal.parentLocal;
				this._parentMerged = stateOrLocal.parentMerged;
				this._merged = stateOrLocal.merged;
			}
		}
		return this;
	}

	protected onChange(
		newLocal: DBaseState,
		newParentLocal: DBaseState,
		newParentMerged: DBaseState,
		oldLocal: DBaseState,
		oldParentLocal: DBaseState,
		oldParentMerged: DBaseState
	): void {
		const newMerged = newLocal | newParentMerged;
		const oldMerged = this._merged;
		this._merged = newMerged;

		const onChange = this._onChange;
		if( onChange ) {
			let oldState = this._onChangeWork;
			if( oldState == null ) {
				oldState = new DBaseStateSetImpl();
				this._onChangeWork = oldState;
			}
			oldState.copy( oldLocal, oldParentLocal, oldParentMerged, oldMerged );

			onChange( this, oldState );
		}
	}

	get local(): DBaseState {
		return this._local;
	}

	set local( local: DBaseState ) {
		this._local = local;
	}

	get parentLocal(): DBaseState {
		return this._parentLocal;
	}

	set parentLocal( parentLocal: DBaseState ) {
		this._parentLocal = parentLocal;
	}

	get parentMerged(): DBaseState {
		return this._parentMerged;
	}

	set parentMerged( parentMerged: DBaseState ) {
		this._parentMerged = parentMerged;
	}

	get merged(): DBaseState {
		return this._merged;
	}

	set merged( merged: DBaseState ) {
		this._merged = merged;
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
		return ! this.in( DBaseState.DISABLED | DBaseState.READ_ONLY );
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
		const local = this._local.toString( 2 );
		const parentLocal = this._parentLocal.toString( 2 );
		const parentMerged = this._parentMerged.toString( 2 );
		return `[${local},${parentLocal},${parentMerged}]`;
	}
}
