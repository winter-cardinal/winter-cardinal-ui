/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DBaseStateAndValue } from "./d-base-state-and-value";
import { DBaseStateMatcher } from "./d-base-state-matcher";
import { DBaseStateSet } from "./d-base-state-set";
import { DBaseStateSetBlinker } from "./d-base-state-set-blinker";
import { DBaseStateSetBlinkerImpl } from "./d-base-state-set-blinker-impl";
import { DBaseStateSetLike } from "./d-base-state-set-like";
import { DBaseStateSetTicker } from "./d-base-state-set-ticker";
import { DBaseStateSetTickerImpl } from "./d-base-state-set-ticker-impl";
import { isArray } from "./util/is-array";
import { isFunction } from "./util/is-function";
import { isNumber } from "./util/is-number";
import { isString } from "./util/is-string";

export class DBaseStateSetImpl implements DBaseStateSet {
	protected _local: Map<string, number | null>;
	protected _parent: DBaseStateSet | null;
	protected _blinker?: DBaseStateSetBlinker;
	protected _ticker?: DBaseStateSetTicker;

	constructor() {
		this._local = new Map<string, number | null>();
		this._parent = null;
	}

	get local(): Map<string, number | null> {
		return this._local;
	}

	get parent(): DBaseStateSet | null {
		return this._parent;
	}

	set parent(parent: DBaseStateSet | null) {
		if (this._parent !== parent) {
			this.begin();
			this._parent = parent;
			this.end();
		}
	}

	onParentChange(newState: DBaseStateSet, oldState: DBaseStateSet): void {
		this._parent = oldState;
		this.begin();
		this._parent = newState;
		this.end();
	}

	get blinker(): DBaseStateSetBlinker {
		let result = this._blinker;
		if (result == null) {
			result = this.newBlinker();
			this._blinker = result;
		}
		return result;
	}

	protected newBlinker(): DBaseStateSetBlinker {
		return new DBaseStateSetBlinkerImpl(this);
	}

	get ticker(): DBaseStateSetTicker {
		let result = this._ticker;
		if (result == null) {
			result = this.newTicker();
			this._ticker = result;
		}
		return result;
	}

	protected newTicker(): DBaseStateSetTicker {
		return new DBaseStateSetTickerImpl(this);
	}

	is(state: string, value?: number | null): boolean {
		const v = this._local.get(state);
		return v !== undefined && (value === undefined || value === v);
	}

	in(state: string, value?: number | null): boolean {
		return this.is(state, value) || this.under(state, value);
	}

	on(state: string, value?: number | null): boolean {
		const parent = this._parent;
		return parent != null && parent.is(state, value);
	}

	under(state: string, value?: number | null): boolean {
		const parent = this._parent;
		return parent != null && parent.in(state, value);
	}

	lock(callOnChange?: boolean): this {
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

	protected checkAdded(added: string, value: number | null): boolean {
		const v = this._local.get(added);
		return v === undefined || v !== value;
	}

	add(state: string, value: number | null = null): this {
		if (this.checkAdded(state, value)) {
			this.begin();
			this._local.set(state, value);
			this.end();
		}
		return this;
	}

	protected checkAddedsString(states: string[]): boolean {
		const local = this._local;
		for (let i = 0, imax = states.length; i < imax; ++i) {
			const v = local.get(states[i]);
			if (v === undefined || v !== null) {
				return true;
			}
		}
		return false;
	}

	protected checkAddedsObject(states: DBaseStateAndValue[]): boolean {
		const local = this._local;
		for (let i = 0, imax = states.length; i < imax; ++i) {
			const state = states[i];
			const v = local.get(state.state);
			if (v === undefined || v !== state.value) {
				return true;
			}
		}
		return false;
	}

	addAll(states: string[]): this;
	addAll(states: DBaseStateAndValue[]): this;
	addAll(states: string[] | DBaseStateAndValue[]): this;

	addAll(...states: string[]): this;
	addAll(...states: DBaseStateAndValue[]): this;

	addAll(first: string | string[] | DBaseStateAndValue | DBaseStateAndValue[]): this {
		if (isString(first)) {
			return this.addAllString(arguments as any as string[]); // eslint-disable-line prefer-rest-params
		} else if (isArray(first)) {
			if (0 < first.length) {
				const element = first[0];
				if (isString(element)) {
					return this.addAllString(first as string[]);
				} else {
					return this.addAllObject(first as DBaseStateAndValue[]);
				}
			}
			return this;
		} else {
			return this.addAllObject(arguments as any as DBaseStateAndValue[]); // eslint-disable-line prefer-rest-params
		}
	}

	protected addAllString(states: string[]): this {
		if (this.checkAddedsString(states)) {
			this.begin();
			const local = this._local;
			for (let i = 0, imax = states.length; i < imax; ++i) {
				local.set(states[i], null);
			}
			this.end();
		}
		return this;
	}

	protected addAllObject(states: DBaseStateAndValue[]): this {
		if (this.checkAddedsObject(states)) {
			this.begin();
			const local = this._local;
			for (let i = 0, imax = states.length; i < imax; ++i) {
				const state = states[i];
				local.set(state.state, state.value);
			}
			this.end();
		}
		return this;
	}

	protected checkRemoved(removed: string): boolean {
		return this._local.has(removed);
	}

	remove(state: string): this {
		if (this.checkRemoved(state)) {
			this.begin();
			this._local.delete(state);
			this.end();
		}
		return this;
	}

	protected checkRemovedsString(states: string[]): boolean {
		const local = this._local;
		for (let i = 0, imax = states.length; i < imax; ++i) {
			if (local.has(states[i])) {
				return true;
			}
		}
		return false;
	}

	protected checkRemovedsObject(states: DBaseStateAndValue[]): boolean {
		const local = this._local;
		for (let i = 0, imax = states.length; i < imax; ++i) {
			if (local.has(states[i].state)) {
				return true;
			}
		}
		return false;
	}

	removeAll(states: string[]): this;
	removeAll(states: DBaseStateAndValue[]): this;
	removeAll(states: string[] | DBaseStateAndValue[]): this;

	removeAll(...states: string[]): this;
	removeAll(...states: DBaseStateAndValue[]): this;

	removeAll(matcher: DBaseStateMatcher): this;

	removeAll(
		first: string | string[] | DBaseStateAndValue | DBaseStateAndValue[] | DBaseStateMatcher
	): this {
		if (isFunction(first)) {
			return this.removeAllMatcher(first);
		} else if (isString(first)) {
			return this.removeAllString(arguments as any as string[]); // eslint-disable-line prefer-rest-params
		} else if (isArray(first)) {
			if (0 < first.length) {
				const element = first[0];
				if (isString(element)) {
					return this.removeAllString(first as string[]);
				} else {
					return this.removeAllObject(first as DBaseStateAndValue[]);
				}
			}
			return this;
		} else {
			return this.removeAllObject(arguments as any as DBaseStateAndValue[]); // eslint-disable-line prefer-rest-params
		}
	}

	protected removeAllMatcher(matcher: DBaseStateMatcher): this {
		let isDirty = false;
		const local = this._local;
		local.forEach((value, state): void => {
			if (matcher(state)) {
				if (!isDirty) {
					isDirty = true;
					this.begin();
				}
				local.delete(state);
			}
		});
		if (isDirty) {
			this.end();
		}
		return this;
	}

	protected removeAllString(states: string[]): this {
		if (this.checkRemovedsString(states)) {
			this.begin();
			const local = this._local;
			for (let i = 0, imax = states.length; i < imax; ++i) {
				local.delete(states[i]);
			}
			this.end();
		}
		return this;
	}

	protected removeAllObject(states: DBaseStateAndValue[]): this {
		if (this.checkRemovedsObject(states)) {
			this.begin();
			const local = this._local;
			for (let i = 0, imax = states.length; i < imax; ++i) {
				local.delete(states[i].state);
			}
			this.end();
		}
		return this;
	}

	set(state: string, on: boolean): this;
	set(state: string, value: number | null, on: boolean): this;

	set(added: string | null, removed: string | null): this;
	set(added: string | null, value: number | null, removed: string | null): this;

	set(
		first: string | null,
		second: string | number | boolean | null,
		third?: string | boolean | null
	): this {
		if (second === true) {
			if (first != null) {
				this.add(first);
			}
		} else if (second === false) {
			if (first != null) {
				this.remove(first);
			}
		} else if (second == null || isNumber(second)) {
			if (third === true) {
				if (first != null) {
					this.add(first, second);
				}
			} else if (third === false) {
				if (first != null) {
					this.remove(first);
				}
			} else {
				return this.doSet(first, second, third);
			}
		} else {
			return this.doSet(first, null, second);
		}
		return this;
	}

	protected doSet(added: string | null, value: number | null, removed?: string | null): this {
		if (added != null) {
			if (removed != null) {
				if (this.checkAdded(added, value) || this.checkRemoved(removed)) {
					this.begin();
					this._local.set(added, value).delete(removed);
					this.end();
				}
			} else {
				this.add(added, value);
			}
		} else if (removed != null) {
			this.remove(removed);
		}
		return this;
	}

	setAll(states: string[], on: boolean): this;
	setAll(states: DBaseStateAndValue[], on: boolean): this;
	setAll(states: string[] | DBaseStateAndValue[], on: boolean): this;

	setAll(addeds: string[] | null, removeds: string[] | null): this;
	setAll(addeds: DBaseStateAndValue[] | null, removeds: string[] | null): this;
	setAll(addeds: string[] | DBaseStateAndValue[] | null, removeds: string[] | null): this;

	setAll(first: string[] | DBaseStateAndValue[] | null, second: string[] | null | boolean): this {
		if (second === true) {
			if (first != null) {
				this.addAll(first);
			}
		} else if (second === false) {
			if (first != null) {
				this.removeAll(first);
			}
		} else {
			if (first != null && 0 < first.length) {
				if (second != null && 0 < second.length) {
					const added = first[0];
					if (isString(added)) {
						return this.setAllString(first as string[], second);
					} else {
						return this.setAllObject(first as DBaseStateAndValue[], second);
					}
				} else {
					this.addAll(first);
				}
			} else if (second != null) {
				this.removeAll(second);
			}
		}
		return this;
	}

	protected setAllString(addeds: string[], removeds: string[]): this {
		if (this.checkAddedsString(addeds) || this.checkRemovedsString(removeds)) {
			this.begin();
			const local = this._local;
			for (let i = 0, imax = addeds.length; i < imax; ++i) {
				local.set(addeds[i], null);
			}
			for (let i = 0, imax = removeds.length; i < imax; ++i) {
				local.delete(removeds[i]);
			}
			this.end();
		}
		return this;
	}

	protected setAllObject(addeds: DBaseStateAndValue[], removeds: string[]): this {
		if (this.checkAddedsObject(addeds) || this.checkRemovedsString(removeds)) {
			this.begin();
			const local = this._local;
			for (let i = 0, imax = addeds.length; i < imax; ++i) {
				const added = addeds[i];
				local.set(added.state, added.value);
			}
			for (let i = 0, imax = removeds.length; i < imax; ++i) {
				local.delete(removeds[i]);
			}
			this.end();
		}
		return this;
	}

	clear(): this {
		const local = this._local;
		if (0 < local.size) {
			this.begin();
			local.clear();
			this.end();
		}
		return this;
	}

	valueOf(state: string, def?: number | null): number | null | undefined {
		const result = this._local.get(state);
		if (result !== undefined) {
			return result;
		}
		const parent = this._parent;
		if (parent != null) {
			return parent.valueOf(state, def);
		}
		return def;
	}

	each(iteratee: (state: string, value: number | null) => void): this {
		this._local.forEach((value: number | null, state: string): void => {
			iteratee(state, value);
		});
		return this;
	}

	size(): number {
		return this._local.size;
	}

	copy(other: DBaseStateSet): this {
		if (other instanceof DBaseStateSetImpl) {
			this.begin();
			const local = this._local;
			local.clear();
			other.local.forEach((value: number | null, state: string): void => {
				local.set(state, value);
			});
			this._parent = other.parent;
			this.end();
		}
		return this;
	}

	get isHovered(): boolean {
		return this.is(DBaseState.HOVERED);
	}

	set isHovered(isHovered: boolean) {
		this.set(DBaseState.HOVERED, isHovered);
	}

	get inHovered(): boolean {
		return this.in(DBaseState.HOVERED);
	}

	get onHovered(): boolean {
		return this.on(DBaseState.HOVERED);
	}

	get underHovered(): boolean {
		return this.under(DBaseState.HOVERED);
	}

	get isActive(): boolean {
		return this.is(DBaseState.ACTIVE);
	}

	set isActive(isActive: boolean) {
		this.set(DBaseState.ACTIVE, isActive);
	}

	get inActive(): boolean {
		return this.in(DBaseState.ACTIVE);
	}

	get onActive(): boolean {
		return this.on(DBaseState.ACTIVE);
	}

	get underActive(): boolean {
		return this.under(DBaseState.ACTIVE);
	}

	get isPressed(): boolean {
		return this.is(DBaseState.PRESSED);
	}

	set isPressed(isPressed: boolean) {
		this.set(DBaseState.PRESSED, isPressed);
	}

	get inPressed(): boolean {
		return this.in(DBaseState.PRESSED);
	}

	get onPressed(): boolean {
		return this.on(DBaseState.PRESSED);
	}

	get underPressed(): boolean {
		return this.under(DBaseState.PRESSED);
	}

	get isReadOnly(): boolean {
		return this.is(DBaseState.READ_ONLY);
	}

	set isReadOnly(isReadOnly: boolean) {
		this.set(DBaseState.READ_ONLY, isReadOnly);
	}

	get inReadOnly(): boolean {
		return this.in(DBaseState.READ_ONLY);
	}

	get onReadOnly(): boolean {
		return this.on(DBaseState.READ_ONLY);
	}

	get underReadOnly(): boolean {
		return this.under(DBaseState.READ_ONLY);
	}

	get isEnabled(): boolean {
		return !this.is(DBaseState.DISABLED);
	}

	set isEnabled(isEnabled: boolean) {
		this.set(DBaseState.DISABLED, !isEnabled);
	}

	get inEnabled(): boolean {
		return !this.in(DBaseState.DISABLED);
	}

	get onEnabled(): boolean {
		return !this.on(DBaseState.DISABLED);
	}

	get underEnabled(): boolean {
		return !this.under(DBaseState.DISABLED);
	}

	get isDisabled(): boolean {
		return this.is(DBaseState.DISABLED);
	}

	set isDisabled(isDisabled: boolean) {
		this.set(DBaseState.DISABLED, isDisabled);
	}

	get inDisabled(): boolean {
		return this.in(DBaseState.DISABLED);
	}

	get onDisabled(): boolean {
		return this.on(DBaseState.DISABLED);
	}

	get underDisabled(): boolean {
		return this.under(DBaseState.DISABLED);
	}

	get isActionable(): boolean {
		return !this.in(DBaseState.DISABLED) && !this.in(DBaseState.READ_ONLY);
	}

	get isGesturing(): boolean {
		return this.is(DBaseState.GESTURING);
	}

	set isGesturing(isGesturing: boolean) {
		this.set(DBaseState.GESTURING, isGesturing);
	}

	get inGesturing(): boolean {
		return this.in(DBaseState.GESTURING);
	}

	get onGesturing(): boolean {
		return this.on(DBaseState.GESTURING);
	}

	get underGesturing(): boolean {
		return this.under(DBaseState.GESTURING);
	}

	get isFocused(): boolean {
		return this.is(DBaseState.FOCUSED);
	}

	set isFocused(isFocused: boolean) {
		this.set(DBaseState.FOCUSED, isFocused);
	}

	get inFocused(): boolean {
		return this.in(DBaseState.FOCUSED);
	}

	get onFocused(): boolean {
		return this.on(DBaseState.FOCUSED);
	}

	get underFocused(): boolean {
		return this.under(DBaseState.FOCUSED);
	}

	get isFocusRoot(): boolean {
		return this.is(DBaseState.FOCUS_ROOT);
	}

	set isFocusRoot(isFocusRoot: boolean) {
		this.set(DBaseState.FOCUS_ROOT, isFocusRoot);
	}

	get inFocusRoot(): boolean {
		return this.in(DBaseState.FOCUS_ROOT);
	}

	get onFocusRoot(): boolean {
		return this.on(DBaseState.FOCUS_ROOT);
	}

	get underFocusRoot(): boolean {
		return this.under(DBaseState.FOCUS_ROOT);
	}

	get isFocusReverse(): boolean {
		return this.is(DBaseState.FOCUS_REVERSE);
	}

	set isFocusReverse(isFocusReverse: boolean) {
		this.set(DBaseState.FOCUS_REVERSE, isFocusReverse);
	}

	get inFocusReverse(): boolean {
		return this.in(DBaseState.FOCUS_REVERSE);
	}

	get onFocusReverse(): boolean {
		return this.on(DBaseState.FOCUS_REVERSE);
	}

	get underFocusReverse(): boolean {
		return this.under(DBaseState.FOCUS_REVERSE);
	}

	get isFocusable(): boolean {
		return !this.is(DBaseState.UNFOCUSABLE);
	}

	set isFocusable(isFocusable: boolean) {
		this.set(DBaseState.UNFOCUSABLE, !isFocusable);
	}

	get inFocusable(): boolean {
		return !this.in(DBaseState.UNFOCUSABLE);
	}

	get onFocusable(): boolean {
		return !this.on(DBaseState.UNFOCUSABLE);
	}

	get underFocusable(): boolean {
		return !this.under(DBaseState.UNFOCUSABLE);
	}

	get isUnfocusable(): boolean {
		return this.is(DBaseState.UNFOCUSABLE);
	}

	set isUnfocusable(unfocusable: boolean) {
		this.set(DBaseState.UNFOCUSABLE, unfocusable);
	}

	get inUnfocusable(): boolean {
		return this.in(DBaseState.UNFOCUSABLE);
	}

	get onUnfocusable(): boolean {
		return this.on(DBaseState.UNFOCUSABLE);
	}

	get underUnfocusable(): boolean {
		return this.under(DBaseState.UNFOCUSABLE);
	}

	get isInvalid(): boolean {
		return this.is(DBaseState.INVALID);
	}

	set isInvalid(invalid: boolean) {
		this.set(DBaseState.INVALID, invalid);
	}

	get inInvalid(): boolean {
		return this.in(DBaseState.INVALID);
	}

	get onInvalid(): boolean {
		return this.on(DBaseState.INVALID);
	}

	get underInvalid(): boolean {
		return this.on(DBaseState.INVALID);
	}

	get isProcessing(): boolean {
		return this.is(DBaseState.PROCESSING);
	}

	set isProcessing(processing: boolean) {
		this.set(DBaseState.PROCESSING, processing);
	}

	get inProcessing(): boolean {
		return this.in(DBaseState.PROCESSING);
	}

	get onProcessing(): boolean {
		return this.on(DBaseState.PROCESSING);
	}

	get underProcessing(): boolean {
		return this.under(DBaseState.PROCESSING);
	}

	get isSucceeded(): boolean {
		return this.is(DBaseState.SUCCEEDED);
	}

	set isSucceeded(succeeded: boolean) {
		this.set(DBaseState.SUCCEEDED, succeeded);
	}

	get inSucceeded(): boolean {
		return this.in(DBaseState.SUCCEEDED);
	}

	get onSucceeded(): boolean {
		return this.on(DBaseState.SUCCEEDED);
	}

	get underSucceeded(): boolean {
		return this.under(DBaseState.SUCCEEDED);
	}

	get isFailed(): boolean {
		return this.is(DBaseState.FAILED);
	}

	set isFailed(failed: boolean) {
		this.set(DBaseState.FAILED, failed);
	}

	get inFailed(): boolean {
		return this.in(DBaseState.FAILED);
	}

	get onFailed(): boolean {
		return this.on(DBaseState.FAILED);
	}

	get underFailed(): boolean {
		return this.under(DBaseState.FAILED);
	}

	get isWarned(): boolean {
		return this.is(DBaseState.WARNED);
	}

	set isWarned(isWarned: boolean) {
		this.set(DBaseState.WARNED, isWarned);
	}

	get inWarned(): boolean {
		return this.in(DBaseState.WARNED);
	}

	get onWarned(): boolean {
		return this.on(DBaseState.WARNED);
	}

	get underWarned(): boolean {
		return this.on(DBaseState.WARNED);
	}

	get isChanged(): boolean {
		return this.is(DBaseState.CHANGED);
	}

	set isChanged(isChanged: boolean) {
		this.set(DBaseState.CHANGED, isChanged);
	}

	get inChanged(): boolean {
		return this.in(DBaseState.CHANGED);
	}

	get onChanged(): boolean {
		return this.on(DBaseState.CHANGED);
	}

	get underChanged(): boolean {
		return this.on(DBaseState.CHANGED);
	}

	get isAlternated(): boolean {
		return this.is(DBaseState.ALTERNATED);
	}

	set isAlternated(isAlternated: boolean) {
		this.set(DBaseState.ALTERNATED, isAlternated);
	}

	get inAlternated(): boolean {
		return this.in(DBaseState.ALTERNATED);
	}

	get onAlternated(): boolean {
		return this.on(DBaseState.ALTERNATED);
	}

	get underAlternated(): boolean {
		return this.on(DBaseState.ALTERNATED);
	}

	toObject(): DBaseStateSetLike {
		const states: string[] = [];
		this._local.forEach((value: number | null, state: string): void => {
			states.push(state);
		});
		return {
			local: states
		};
	}

	toString(): string {
		return JSON.stringify(this.toObject());
	}
}
