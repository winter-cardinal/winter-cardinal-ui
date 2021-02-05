/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInput, DInputOptions, DThemeInput } from "./d-input";
import { UtilInputNumber, UtilInputNumberOptions, UtilThemeInputNumber } from "./util/util-input-number";

export interface DInputNumberOptions<
	THEME extends DThemeInputNumber = DThemeInputNumber
> extends DInputOptions<number, THEME>, UtilInputNumberOptions {

}

export interface DThemeInputNumber extends DThemeInput<number>, UtilThemeInputNumber {

}

export abstract class DInputNumber<
	THEME extends DThemeInputNumber = DThemeInputNumber,
	OPTIONS extends DInputNumberOptions<THEME> = DInputNumberOptions<THEME>
> extends DInput<number, THEME, OPTIONS, UtilInputNumber> {
	protected newUtil(): UtilInputNumber {
		return new UtilInputNumber(
			this, this.newOperation(), this.theme, this._options
		);
	}

	get step(): number | null {
		return this.getUtil().step;
	}

	set step( step: number | null ) {
		this.getUtil().step = step;
	}

	get min(): number | null {
		return this.getUtil().min;
	}

	set min( min: number | null ) {
		this.getUtil().min = min;
	}

	get max(): number | null {
		return this.getUtil().max;
	}

	set max( max: number | null ) {
		this.getUtil().max = max;
	}
}
