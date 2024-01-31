/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateAndValue } from "./d-base-state-and-value";
import { DBaseStateSetBlinker } from "./d-base-state-set-blinker";
import { DBaseStateSetLike } from "./d-base-state-set-like";
import { DBaseStateSetTicker } from "./d-base-state-set-ticker";

export interface DBaseStateSet {
	parent: DBaseStateSet | null;
	readonly blinker: DBaseStateSetBlinker;
	readonly ticker: DBaseStateSetTicker;

	isHovered: boolean;
	readonly inHovered: boolean;
	readonly onHovered: boolean;
	readonly underHovered: boolean;
	isActive: boolean;
	readonly inActive: boolean;
	readonly onActive: boolean;
	readonly underActive: boolean;
	isPressed: boolean;
	readonly inPressed: boolean;
	readonly onPressed: boolean;
	readonly underPressed: boolean;
	isReadOnly: boolean;
	readonly inReadOnly: boolean;
	readonly onReadOnly: boolean;
	readonly underReadOnly: boolean;
	isEnabled: boolean;
	readonly inEnabled: boolean;
	readonly onEnabled: boolean;
	readonly underEnabled: boolean;
	isDisabled: boolean;
	readonly inDisabled: boolean;
	readonly onDisabled: boolean;
	readonly underDisabled: boolean;
	isActionable: boolean;
	isGesturing: boolean;
	readonly inGesturing: boolean;
	readonly onGesturing: boolean;
	readonly underGesturing: boolean;
	isFocused: boolean;
	readonly inFocused: boolean;
	readonly onFocused: boolean;
	readonly underFocused: boolean;
	isFocusable: boolean;
	readonly inFocusable: boolean;
	readonly onFocusable: boolean;
	readonly underFocusable: boolean;
	isUnfocusable: boolean;
	readonly inUnfocusable: boolean;
	readonly onUnfocusable: boolean;
	readonly underUnfocusable: boolean;
	isFocusRoot: boolean;
	readonly inFocusRoot: boolean;
	readonly onFocusRoot: boolean;
	readonly underFocusRoot: boolean;
	isFocusReverse: boolean;
	readonly inFocusReverse: boolean;
	readonly onFocusReverse: boolean;
	readonly underFocusReverse: boolean;
	isInvalid: boolean;
	readonly inInvalid: boolean;
	readonly onInvalid: boolean;
	readonly underInvalid: boolean;
	isProcessing: boolean;
	readonly inProcessing: boolean;
	readonly onProcessing: boolean;
	readonly underProcessing: boolean;
	isSucceeded: boolean;
	readonly inSucceeded: boolean;
	readonly onSucceeded: boolean;
	readonly underSucceeded: boolean;
	isFailed: boolean;
	readonly inFailed: boolean;
	readonly onFailed: boolean;
	readonly underFailed: boolean;
	isWarned: boolean;
	readonly inWarned: boolean;
	readonly onWarned: boolean;
	readonly underWarned: boolean;
	isChanged: boolean;
	readonly inChanged: boolean;
	readonly onChanged: boolean;
	readonly underChanged: boolean;
	isAlternated: boolean;
	readonly inAlternated: boolean;
	readonly onAlternated: boolean;
	readonly underAlternated: boolean;

	/**
	 * Returns true if the given state is on.
	 * If the given value is undefined, values assigned to states are ignored.
	 * If the given value is not undefined, values assigned to states are taken into account.
	 *
	 * @param state a state
	 * @param value a state value
	 * @return true if the given state is on
	 */
	is(state: string, value?: number | null): boolean;

	/**
	 * Returns true if the given state is on or if one of the parents has the given state.
	 * If the given value is undefined, values assigned to states are ignored.
	 * If the given value is not undefined, values assigned to states are taken into account.
	 *
	 * @param state a state
	 * @param value a state value
	 * @return true if the given state is on or if one of the parents has the given state.
	 */
	in(state: string, value?: number | null): boolean;

	/**
	 * Returns true if the direct parent has the given state.
	 * If the given value is undefined, values assigned to states are ignored.
	 * If the given value is not undefined, values assigned to states are taken into account.
	 *
	 * @param state a state
	 * @param value a state value
	 * @return true if the direct parent has the given state.
	 */
	on(state: string, value?: number | null): boolean;

	/**
	 * Returns true if one of the parents has the given state.
	 * If the given value is undefined, values assigned to states are ignored.
	 * If the given value is not undefined, values assigned to states are taken into account.
	 *
	 * @param state a state
	 * @param value a state value
	 * @return true if one of the parents has the given state.
	 */
	under(state: string, value?: number | null): boolean;

	/**
	 * Locks this state set.
	 * The locked state set delays calling the change event handler.
	 *
	 * @param callOnChange false to stop calling the change event handler when unlocked
	 * @return this
	 */
	lock(callOnChange?: boolean): this;

	/**
	 * Unlocks this state set and calls the change event handler if this state set has changed.
	 * However, if this state set is locked with the `callOnChange` of false, the change event handler is not called.
	 *
	 * @return this
	 */
	unlock(): this;

	add(state: string, value?: number | null): this;

	addAll(states: string[]): this;
	addAll(states: DBaseStateAndValue[]): this;
	addAll(states: string[] | DBaseStateAndValue[]): this;

	addAll(...states: string[]): this;
	addAll(...states: DBaseStateAndValue[]): this;

	remove(state: string): this;

	removeAll(states: string[]): this;
	removeAll(states: DBaseStateAndValue[]): this;
	removeAll(states: string[] | DBaseStateAndValue[]): this;

	removeAll(...states: string[]): this;
	removeAll(...states: DBaseStateAndValue[]): this;

	removeAll(matcher: (state: string) => void | boolean): this;

	set(state: string, on: boolean): this;
	set(state: string, value: number | null, on: boolean): this;

	set(added: string | null, removed: string | null): this;
	set(added: string | null, value: number | null, removed: string | null): this;

	setAll(states: string[], on: boolean): this;
	setAll(states: DBaseStateAndValue[], on: boolean): this;
	setAll(states: string[] | DBaseStateAndValue[], on: boolean): this;

	setAll(addeds: string[] | null, removeds: string[] | null): this;
	setAll(addeds: DBaseStateAndValue[] | null, removeds: string[] | null): this;
	setAll(addeds: string[] | DBaseStateAndValue[] | null, removeds: string[] | null): this;

	clear(): this;

	valueOf(state: string, def?: number | null): number | null | undefined;

	each(iteratee: (state: string, value: number | null) => void): this;
	size(): number;
	copy(state: DBaseStateSet): this;

	onParentChange(newState: DBaseStateSet, oldState: DBaseStateSet): void;

	toObject(): DBaseStateSetLike;
	toString(): string;
}
