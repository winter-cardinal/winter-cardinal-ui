/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "./d-base-state-set";
import { DBaseStateSetImpl } from "./d-base-state-set-impl";

export type DBaseStateSetImplObservableOnChange = (
	newState: DBaseStateSet,
	oldState: DBaseStateSet
) => void;

export class DBaseStateSetImplObservable extends DBaseStateSetImpl {
	protected _onChange: DBaseStateSetImplObservableOnChange;
	protected _isLocked: number;
	protected _isSaved: boolean;
	protected _doSave: boolean;
	protected _saved?: DBaseStateSetImpl;

	constructor(onChange: DBaseStateSetImplObservableOnChange) {
		super();
		this._onChange = onChange;
		this._isLocked = 0;
		this._isSaved = false;
		this._doSave = true;
	}

	lock(callOnChange?: boolean): this {
		this._isLocked += 1;
		if (callOnChange === false) {
			this._doSave = false;
		}
		return this;
	}

	unlock(): this {
		this._isLocked -= 1;
		return this.end();
	}

	protected get saved(): DBaseStateSetImpl {
		let result = this._saved;
		if (result == null) {
			result = new DBaseStateSetImpl();
			this._saved = result;
		}
		return result;
	}

	protected begin(): this {
		if (this._doSave && !this._isSaved) {
			this._isSaved = true;
			this.saved.copy(this);
		}
		return this;
	}

	protected end(): this {
		if (this._isLocked <= 0) {
			this._doSave = true;
			if (this._isSaved) {
				this._isSaved = false;
				this.onChange(this, this.saved);
			}
		}
		return this;
	}

	protected onChange(newState: DBaseStateSet, oldState: DBaseStateSet): void {
		this._onChange(newState, oldState);
	}
}
