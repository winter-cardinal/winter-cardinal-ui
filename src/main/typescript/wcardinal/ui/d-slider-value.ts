/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTextBase, DTextBaseOptions, DThemeTextBase } from "./d-text-base";

export interface DSliderValueOptions<
	VALUE = number,
	THEME extends DThemeSliderValue<VALUE> = DThemeSliderValue<VALUE>
> extends DTextBaseOptions<VALUE, THEME> {
	value?: number;
	precision?: number;
	rounder?: (value: number) => number;
	delta?: number;
}

export interface DThemeSliderValue<VALUE = unknown> extends DThemeTextBase<VALUE> {
	getPrecision(): number;
}

export class DSliderValue<
	VALUE = number,
	THEME extends DThemeSliderValue<VALUE> = DThemeSliderValue<VALUE>,
	OPTIONS extends DSliderValueOptions<VALUE, THEME> = DSliderValueOptions<VALUE, THEME>
> extends DTextBase<VALUE, THEME, OPTIONS> {
	protected _value: number;
	protected _rounder: (value: number) => number;
	protected _delta: number;

	constructor(options: OPTIONS) {
		super(options);
		this._value = options?.value ?? 0;
		this._rounder = this.toRounder(options);
		this._delta = options?.delta ?? 1;
	}

	toRounder(options?: OPTIONS): (value: number) => number {
		const rounder = options?.rounder;
		if (rounder) {
			return rounder;
		}

		const precision = options?.precision ?? this.theme.getPrecision();
		const base = Math.pow(10, precision);
		return (value: number) => {
			return Math.round(value * base) / base;
		};
	}

	set value(value: number) {
		this._value = value;
	}

	get value(): number {
		return this._value;
	}

	get rounder(): (value: number) => number {
		return this._rounder;
	}

	get delta(): number {
		return this._delta;
	}

	protected getType(): string {
		return "DSliderValue";
	}
}
