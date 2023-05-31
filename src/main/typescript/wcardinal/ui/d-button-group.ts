/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DButtonBase } from "./d-button-base";
import { DOnOptions } from "./d-on-options";

/**
 * {@link DButtonGroup} events.
 */
export interface DButtonGroupEvents<BUTTON, EMITTER> {
	/**
	 * Triggered when the active button is changed.
	 *
	 * @param emitter an emitter
	 */
	active(newActive: BUTTON | null, oldActive: BUTTON | null, emitter: EMITTER): void;
}

/**
 * {@link DButtonGroup} "on" options.
 */
export interface DButtonGroupOnOptions<BUTTON, EMITTER>
	extends Partial<DButtonGroupEvents<BUTTON, EMITTER>>,
		DOnOptions {}

export interface DButtonGroupOptions<
	BUTTON extends DButtonBase<any, any, any> = DButtonBase<any, any, any>,
	EMITTER = any
> {
	on?: DButtonGroupOnOptions<BUTTON, EMITTER>;
}

export class DButtonGroup<
	BUTTON extends DButtonBase<any, any, any> = DButtonBase<any, any, any>,
	OPTIONS extends DButtonGroupOptions<BUTTON> = DButtonGroupOptions<BUTTON>
> extends utils.EventEmitter {
	protected _buttons: BUTTON[];
	protected _active: BUTTON | null;
	protected _onActiveBound: (button: BUTTON) => void;
	protected _isEnabled?: boolean;

	constructor(options?: OPTIONS) {
		super();

		this._buttons = [];
		this._active = null;
		this._onActiveBound = (button: BUTTON): void => {
			this.active = button;
		};

		// Events
		const on = options?.on;
		if (on != null) {
			for (const name in on) {
				const handler = on[name];
				if (handler) {
					this.on(name, handler);
				}
			}
		}

		// Done
		this.emit("init", this);
	}

	add(button: BUTTON): void {
		const buttons = this._buttons;
		const index = buttons.indexOf(button);
		if (index < 0) {
			this._buttons.push(button);
			button.isGrouped = true;
			const isEnabled = this._isEnabled;
			if (isEnabled != null) {
				button.state.isEnabled = isEnabled;
			}
			button.on("active", this._onActiveBound);
			if (button.state.isActive) {
				this.active = button;
			}
		}
	}

	get active(): BUTTON | null {
		return this._active;
	}

	set active(newActive: BUTTON | null) {
		if ((newActive == null || newActive.isToggle) && this._active !== newActive) {
			const oldActive = this._active;
			this._active = newActive;
			const buttons = this._buttons;
			for (let i = 0, imax = buttons.length; i < imax; ++i) {
				const button = buttons[i];
				if (button !== newActive && button.isToggle && button.state.isActive) {
					button.toggle();
				}
			}
			this.emit("active", newActive, oldActive, this);
		}
	}

	remove(button: BUTTON): void {
		const buttons = this._buttons;
		const index = buttons.indexOf(button);
		if (0 <= index) {
			buttons.splice(index, 1);
			button.isGrouped = false;
			button.off("active", this._onActiveBound);
			if (this._active === button) {
				this.active = null;
			}
		}
	}

	contains(button: BUTTON): boolean {
		const buttons = this._buttons;
		const index = buttons.indexOf(button);
		return 0 <= index;
	}

	clear(): void {
		const buttons = this._buttons;
		for (let i = 0, imax = buttons.length; i < imax; ++i) {
			buttons[i].isGrouped = false;
		}
		buttons.length = 0;
		this.active = null;
	}

	size(): number {
		return this._buttons.length;
	}

	each(iteratee: (button: BUTTON) => boolean | void): void {
		const buttons = this._buttons;
		for (let i = 0, imax = buttons.length; i < imax; ++i) {
			const button = buttons[i];
			if (iteratee(button) === false) {
				break;
			}
		}
	}

	disable(): void {
		const buttons = this._buttons;
		for (let i = 0, imax = buttons.length; i < imax; ++i) {
			buttons[i].state.isDisabled = true;
		}
		this._isEnabled = false;
	}

	enable(): void {
		const buttons = this._buttons;
		for (let i = 0, imax = buttons.length; i < imax; ++i) {
			buttons[i].state.isDisabled = false;
		}
		this._isEnabled = true;
	}

	destroy(): void {
		this.clear();
	}
}
