/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions } from "./d-base";
import { DDialogCommand, DDialogCommandOptions, DThemeDialogCommand } from "./d-dialog-command";
import { DLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutSpace } from "./d-layout-space";
import { DLayoutVertical } from "./d-layout-vertical";
import { DText, DTextOptions } from "./d-text";
import { isNumber } from "./util/is-number";
import { isString } from "./util/is-string";

export interface DDialogInputMargin {
	horizontal: number;
	vertical: number;
}

export interface DDialogInputMarginOptions extends Partial<DDialogInputMargin> {

}

export interface DDialogInputOptions<
	INPUT_OPTIONS extends DBaseOptions,
	THEME extends DThemeDialogInput
> extends DDialogCommandOptions<THEME> {
	label?: string | DTextOptions<string>;
	input?: INPUT_OPTIONS;
	margin?: number | DDialogInputMarginOptions;
}

export interface DThemeDialogInput extends DThemeDialogCommand {
	getMarginVertical(): number;
	getMarginHorizontal(): number;
	getLabel(): string;
}

export abstract class DDialogInput<
	VALUE = void,
	INPUT extends DBase & { value: VALUE } = any,
	INPUT_OPTIONS extends DBaseOptions = DBaseOptions,
	THEME extends DThemeDialogInput = DThemeDialogInput,
	OPTIONS extends DDialogInputOptions<INPUT_OPTIONS, THEME> = DDialogInputOptions<INPUT_OPTIONS, THEME>
> extends DDialogCommand<VALUE, THEME, OPTIONS> {
	protected _label?: DText<string>;
	protected _input?: INPUT;

	protected onInit( layout: DLayoutVertical, options?: OPTIONS ) {
		super.onInit( layout, options );

		const theme = this.theme;
		const margin = this.toMargin( theme, options );
		const marginHorizontal = margin.horizontal;
		const marginVertical = margin.vertical;
		const labelOptions = this.toLabelOptions( theme, options );
		if( labelOptions ) {
			this._label = new DText<string>( labelOptions );
			new DLayoutHorizontal({
				parent: layout,
				width: "padding", height: "auto",
				margin: 0,
				children: [
					new DLayoutSpace({ width: marginHorizontal }),
					this._label
				]
			});
		}
		new DLayoutHorizontal({
			parent: layout,
			width: "padding", height: "auto",
			margin: 0,
			padding: ( labelOptions ? { top: marginVertical } : undefined ),
			children: [
				new DLayoutSpace({ width: marginHorizontal }),
				this.input,
				new DLayoutSpace({ width: marginHorizontal })
			]
		});
	}

	protected toMargin( theme: THEME, options?: OPTIONS ): Required<DDialogInputMarginOptions> {
		const margin = options && options.margin;
		if( margin != null ) {
			if( isNumber( margin ) ) {
				return {
					horizontal: margin,
					vertical: margin
				};
			} else {
				const horizontal = margin.horizontal;
				const vertical = margin.vertical;
				return {
					horizontal: ( horizontal != null ? horizontal : theme.getMarginHorizontal() ),
					vertical: ( vertical != null ? vertical : theme.getMarginVertical() )
				};
			}
		}
		return {
			horizontal: theme.getMarginHorizontal(),
			vertical: theme.getMarginVertical()
		};
	}

	protected toLabelOptions( theme: THEME, options: OPTIONS | undefined ): DTextOptions<string> | null {
		const label = options && options.label ;
		if( label == null ) {
			return null;
		}

		if( isString( label ) ) {
			return {
				weight: 1,
				text: {
					value: label
				}
			};
		} else {
			// Text
			const text = label.text = label.text || {};
			if( text.value === undefined ) {
				text.value = theme.getLabel();
			}

			// Margin
			if( label.width === undefined && label.weight === undefined ) {
				label.weight = 1;
			}

			return label;
		}
	}

	get label(): DText<string> | undefined {
		return this._label;
	}

	protected abstract newInput( options?: INPUT_OPTIONS ): INPUT;

	get input(): INPUT {
		let result = this._input;
		if( result == null ) {
			const options = this._options;
			result = this.newInput( options && options.input );
			this._input = result;
		}
		return result;
	}

	get value(): VALUE {
		return this.input.value;
	}

	set value( value: VALUE ) {
		this.input.value = value;
	}

	protected doResolve( resolve: ( value?: VALUE | PromiseLike<VALUE> ) => void ): void {
		resolve( this.value );
	}

	protected getType(): string {
		return "DDialogInput";
	}
}
