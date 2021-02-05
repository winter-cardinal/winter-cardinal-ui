/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { UtilInput, UtilInputOperation, UtilInputOptions, UtilInputTarget, UtilThemeInput } from "./util-input";

export interface UtilInputNumberTarget extends UtilInputTarget {

}

export interface UtilInputNumberOperation extends UtilInputOperation<number> {

}

export interface UtilInputNumberOptions extends UtilInputOptions<number> {
	step?: number | null;
	min?: number | null;
	max?: number | null;
}

export interface UtilThemeInputNumber extends UtilThemeInput<number> {
	getStep(): number | null;
	getMin(): number | null;
	getMax(): number | null;
}

export class UtilInputNumber<
	TARGET extends UtilInputNumberTarget = UtilInputNumberTarget,
	OPERATION extends UtilInputNumberOperation = UtilInputNumberOperation,
	THEME extends UtilThemeInputNumber = UtilThemeInputNumber,
	OPTIONS extends UtilInputNumberOptions = UtilInputNumberOptions
> extends UtilInput<number, TARGET, OPERATION, THEME, OPTIONS> {
	protected _step: number | null;
	protected _min: number | null;
	protected _max: number | null;

	constructor( target: TARGET, operation: OPERATION, theme: THEME, options?: OPTIONS ) {
		super( target, operation, theme, options );

		this._step = options?.step ?? theme.getStep();
		this._min = options?.min ?? theme.getMin();
		this._max = options?.max ?? theme.getMax();
	}

	get step(): number | null {
		return this._step;
	}

	set step( step: number | null ) {
		if( this._step !== step ) {
			this._step = step;
			this.onStepChange();
		}
	}

	get min(): number | null {
		return this._min;
	}

	set min( min: number | null ) {
		if( this._min !== min ) {
			this._min = min;
			this.onMinChange();
		}
	}

	get max(): number | null {
		return this._max;
	}

	set max( max: number | null ) {
		if( this._max !== max ) {
			this._max = max;
			this.onMaxChange();
		}
	}

	toValue( valueAsString: string ): number {
		const result = super.toValue( valueAsString );
		if( result === result /* NaN Check */ ) {
			if( this._min != null && result < this._min ) {
				return this._min;
			}
			if( this._max != null && this._max < result ) {
				return this._max;
			}
			return result;
		}
		return 0;
	}

	fromValue( value: number | undefined ): string {
		if( value !== undefined ) {
			return this._editingFormatter( value, this );
		}
		return "0";
	}

	protected onStepChange(): void {
		if( this.isShown() ) {
			const element = this.element;
			if( element ) {
				this.updateStep( element );
			}
		}
	}

	protected onMinChange(): void {
		if( this.isShown() ) {
			const element = this.element;
			if( element ) {
				this.updateMin( element );
			}
		}
	}

	protected onMaxChange(): void {
		if( this.isShown() ) {
			const element = this.element;
			if( element ) {
				this.updateMax( element );
			}
		}
	}

	protected updateStep( input: HTMLInputElement ): void {
		const step = this.step;
		if( step != null ) {
			input.step = `${step}`;
		} else {
			input.step = "any";
		}
	}

	protected updateMin( input: HTMLInputElement ): void {
		const min = this.min;
		if( min != null ) {
			input.min = `${min}`;
		} else {
			input.removeAttribute( "min" );
		}
	}

	protected updateMax( input: HTMLInputElement ): void {
		const max = this.max;
		if( max != null ) {
			input.max = `${max}`;
		} else {
			input.removeAttribute( "max" );
		}
	}

	protected onElementAttached(
		element: HTMLInputElement, before: HTMLDivElement | null, after: HTMLDivElement | null
	): void {
		super.onElementAttached( element, before, after );
		this.updateStep( element );
		this.updateMin( element );
		this.updateMax( element );
	}

	protected getInputType(): string {
		return "number";
	}
}
