/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";

export class DBaseStates {
	static is( target: DBaseState, state: DBaseState ): boolean {
		return ( (target & state) !== 0 );
	}

	static isHovered( target: DBaseState ) {
		return DBaseStates.is( target, DBaseState.HOVERED );
	}

	static isDragging( target: DBaseState ) {
		return DBaseStates.is( target, DBaseState.DRAGGING );
	}

	static isFocused( target: DBaseState ) {
		return DBaseStates.is( target, DBaseState.FOCUSED );
	}

	static isFocusedIn( target: DBaseState ) {
		return DBaseStates.is( target, DBaseState.FOCUSED | DBaseState.FOCUSED_IN );
	}

	static isActive( target: DBaseState ) {
		return DBaseStates.is( target, DBaseState.ACTIVE );
	}

	static isActiveIn( target: DBaseState ) {
		return DBaseStates.is( target, DBaseState.ACTIVE | DBaseState.ACTIVE_IN );
	}

	static isNotActive( state: DBaseState ): boolean {
		return DBaseStates.is( state, DBaseState.DISABLED ) || ! DBaseStates.is( state, DBaseState.ACTIVE );
	}

	static isPressed( target: DBaseState ) {
		return DBaseStates.is( target, DBaseState.PRESSED );
	}

	static isDisabled( target: DBaseState ) {
		return DBaseStates.is( target, DBaseState.DISABLED );
	}

	static isReadOnly( target: DBaseState ) {
		return DBaseStates.is( target, DBaseState.READ_ONLY );
	}

	static isActionable( target: DBaseState ) {
		return ! DBaseStates.is( target, DBaseState.DISABLED | DBaseState.READ_ONLY );
	}

	static isInvalid( target: DBaseState ) {
		return DBaseStates.is( target, DBaseState.INVALID );
	}

	static isSucceeded( target: DBaseState ) {
		return DBaseStates.is( target, DBaseState.SUCCEEDED );
	}

	static isFailed( target: DBaseState ) {
		return DBaseStates.is( target, DBaseState.FAILED );
	}

	static bind(
		destination: DBase<any, any>, destinationState: DBaseState,
		source: DBase<any, any>, when: ( sourceState: DBaseState ) => boolean
	) {
		destination.setState( destinationState, when( source.state ) );
		source.on( "statechange", ( newSourceState: DBaseState ) => {
			destination.setState( destinationState, when( newSourceState ) );
		});
	}

	static disable(
		destination: DBase<any, any>, source: DBase<any, any>,
		when: ( sourceState: DBaseState ) => boolean = DBaseStates.isNotActive
	) {
		DBaseStates.bind( destination, DBaseState.DISABLED, source, when );
	}
}
