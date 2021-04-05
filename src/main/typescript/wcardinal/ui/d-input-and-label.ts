/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DInputLabel, DInputLabelOptions } from "./d-input-label";
import { DLayoutOptions } from "./d-layout";
import { DLayoutHorizontal, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DLayoutSpace, DLayoutSpaceOptions } from "./d-layout-space";

interface InputOptions {
	weight?: number;
}

interface Input extends DisplayObject {
	readonly height: number;
}

export interface DInputAndLabelOptions<
	INPUT_OPTIONS extends InputOptions = InputOptions,
	THEME extends DThemeInputAndLabel = DThemeInputAndLabel
> extends DLayoutOptions<THEME> {
	input?: INPUT_OPTIONS;
	label?: DInputLabelOptions;
	space?: DLayoutSpaceOptions;
}

export interface DThemeInputAndLabel extends DThemeLayoutHorizontal {

}

export abstract class DInputAndLabel<
	INPUT extends Input,
	INPUT_OPTIONS extends InputOptions,
	THEME extends DThemeInputAndLabel = DThemeInputAndLabel,
	OPTIONS extends DInputAndLabelOptions<INPUT_OPTIONS, THEME> = DInputAndLabelOptions<INPUT_OPTIONS, THEME>
> extends DLayoutHorizontal<THEME, OPTIONS> {
	protected _input: INPUT;
	protected _label: DInputLabel;

	constructor( options?: OPTIONS ) {
		super( options );
		this.addChild( this._label = new DInputLabel( options?.label ) );
		this.addChild( this._input = this.createInput( options?.input ) );
		const space = options?.space;
		if( space != null ) {
			this.addChild( new DLayoutSpace( space ) );
		}
	}

	get input(): INPUT {
		return this._input;
	}

	get label(): DInputLabel {
		return this._label;
	}

	protected abstract createInput( options?: INPUT_OPTIONS | { weight: number } ): INPUT;

	protected getType(): string {
		return "DInputAndLabel";
	}
}
