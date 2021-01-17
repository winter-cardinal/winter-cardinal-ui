/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInput, DInputOptions, DThemeInput } from "./d-input";

export interface DInputNumberOptions<
	THEME extends DThemeInputNumber = DThemeInputNumber
> extends DInputOptions<number, THEME> {
	step?: number | null;
	min?: number | null;
	max?: number | null;
}

export interface DThemeInputNumber extends DThemeInput<number> {
	getStep(): number | null;
	getMin(): number | null;
	getMax(): number | null;
}

export abstract class DInputNumber<
	THEME extends DThemeInputNumber = DThemeInputNumber,
	OPTIONS extends DInputNumberOptions<THEME> = DInputNumberOptions<THEME>
> extends DInput<number, THEME, OPTIONS> {
	protected _step!: number | null;
	protected _min!: number | null;
	protected _max!: number | null;

	protected init( options?: OPTIONS ) {
		super.init( options );
		const theme = this.theme;
		this._step = ( options?.step ?? theme.getStep() );
		this._min = ( options?.min ?? theme.getMin() );
		this._max = ( options?.max ?? theme.getMax() );
	}

	get step(): number | null {
		return this._step;
	}

	set step( step: number | null ) {
		if( this._step !== step ) {
			this._step = step;
			this.updateInputStep();
		}
	}

	get min(): number | null {
		return this._min;
	}

	set min( min: number | null ) {
		if( this._min !== min ) {
			this._min = min;
			this.updateInputMin();
		}
	}

	get max(): number | null {
		return this._max;
	}

	set max( max: number | null ) {
		if( this._max !== max ) {
			this._max = max;
			this.updateInputMax();
		}
	}

	protected toValue( valueAsString: string ): number {
		const result = this._editingUnformatter( valueAsString, this );
		if( result === result /* NaN Check */ ) {
			if( this._min != null && result < this._min ) {
				return this._min;
			}
			if( this._max != null && this._max < result ) {
				return this._max;
			}
			return result;
		}
		return this.value;
	}

	protected updateInputStep(): void {
		if( this._isElementShown ) {
			const element = this._element;
			if( element ) {
				this.initInputStep( element );
			}
		}
	}

	protected updateInputMin(): void {
		if( this._isElementShown ) {
			const element = this._element;
			if( element ) {
				this.initInputMin( element );
			}
		}
	}

	protected updateInputMax(): void {
		if( this._isElementShown ) {
			const element = this._element;
			if( element ) {
				this.initInputMax( element );
			}
		}
	}

	protected initInputStep( input: HTMLInputElement ): void {
		if( this._step != null ) {
			input.step = String( this._step );
		} else {
			input.removeAttribute( "step" );
		}
	}

	protected initInputMin( input: HTMLInputElement ): void {
		if( this._min != null ) {
			input.min = `${this._min}`;
		} else {
			input.removeAttribute( "min" );
		}
	}

	protected initInputMax( input: HTMLInputElement ): void {
		if( this._max != null ) {
			input.max = `${this._max}`;
		} else {
			input.removeAttribute( "max" );
		}
	}

	protected onElementAttached(
		element: HTMLInputElement, before: HTMLDivElement | null, after: HTMLDivElement | null
	): void {
		super.onElementAttached( element, before, after );
		this.initInputStep( element );
		this.initInputMin( element );
		this.initInputMax( element );
	}

	protected getInputType(): string {
		return "number";
	}
}
