/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButtonGroup } from "./d-button-group";
import { DInputBooleanButtonOff } from "./d-input-boolean-button-off";
import { DInputBooleanButtonOn } from "./d-input-boolean-button-on";
import { DLayoutOptions } from "./d-layout";
import { DLayoutHorizontal, DThemeLayoutHorizontal } from "./d-layout-horizontal";

export interface DInputBooleanOptions<THEME extends DThemeInputBoolean = DThemeInputBoolean>
	extends DLayoutOptions<THEME> {
	value?: boolean;
}

export interface DThemeInputBoolean extends DThemeLayoutHorizontal {}

export class DInputBoolean<
	THEME extends DThemeInputBoolean = DThemeInputBoolean,
	OPTIONS extends DInputBooleanOptions<THEME> = DInputBooleanOptions<THEME>
> extends DLayoutHorizontal<THEME, OPTIONS> {
	protected _buttonGroup?: DButtonGroup;
	protected _buttonOn?: DInputBooleanButtonOn;
	protected _buttonOff?: DInputBooleanButtonOff;

	constructor(options?: OPTIONS) {
		super(options);
		this.addChild(this.getButtonOff());
		this.addChild(this.getButtonOn());

		const value = options?.value;
		if (value != null) {
			this.value = value;
		}

		this.getButtonGroup().on("active", (): void => {
			const newValue = this.value;
			this.emit("change", newValue, !newValue, this);
		});
	}

	protected getButtonGroup(): DButtonGroup {
		let result = this._buttonGroup;
		if (result == null) {
			result = this.newButtonGroup();
			this._buttonGroup = result;
		}
		return result;
	}

	protected newButtonGroup(): DButtonGroup {
		return new DButtonGroup();
	}

	protected getButtonOn(): DInputBooleanButtonOn {
		let result = this._buttonOn;
		if (result == null) {
			result = this.newButtonOn();
			this._buttonOn = result;
		}
		return result;
	}

	protected newButtonOn(): DInputBooleanButtonOn {
		return new DInputBooleanButtonOn({
			weight: 1,
			group: this.getButtonGroup()
		});
	}

	protected getButtonOff(): DInputBooleanButtonOff {
		let result = this._buttonOff;
		if (result == null) {
			result = this.newButtonOff();
			this._buttonOff = result;
		}
		return result;
	}

	protected newButtonOff(): DInputBooleanButtonOff {
		return new DInputBooleanButtonOff({
			weight: 1,
			group: this.getButtonGroup(),
			state: DBaseState.ACTIVE
		});
	}

	get value(): boolean {
		return this.getButtonOn().state.isActive;
	}

	set value(value: boolean) {
		if (this.value !== value) {
			if (value) {
				this.getButtonOn().activate();
			} else {
				this.getButtonOff().activate();
			}
		}
	}

	protected getType(): string {
		return "DInputBoolean";
	}
}
