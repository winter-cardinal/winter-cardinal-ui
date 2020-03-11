/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBackgroundStateAware } from "./d-background";
import { DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { UtilRgb } from "./util/util-rgb";

export class DDiagramCanvasEditorBackground implements DBackgroundStateAware {
	protected _target: DBackgroundStateAware;
	protected _base: number | null;

	constructor( target: DBackgroundStateAware, base: number | null ) {
		this._target = target;
		this._base = base;
	}

	getTheme(): DThemeBase {
		return this._target.getTheme();
	}

	setTheme( theme: DThemeBase ): void {
		this._target.setTheme( theme );
	}

	getBaseColor(): number | null {
		return this._base;
	}

	setBaseColor( baseColor: number | null ): void {
		this._base = baseColor;
	}

	getColor( state: DBaseState ): number | null {
		const target = this._target;
		const base = this._base;
		const color = target.getColor( state );
		if( base != null ) {
			if( color != null ) {
				return UtilRgb.blend( base, color, target.getAlpha( state ) );
			}
			return base;
		}
		return color;
	}

	get color(): DStateAwareOrValueMightBe<number | null> {
		return this._target.color;
	}

	set color( color: DStateAwareOrValueMightBe<number | null> ) {
		this._target.color = color;
	}

	getAlpha( state: DBaseState ): number {
		const base = this._base;
		if( base != null ) {
			return 1;
		}
		return this._target.getAlpha( state );
	}

	get alpha(): DStateAwareOrValueMightBe<number> {
		return this._target.alpha;
	}

	set alpha( alpha: DStateAwareOrValueMightBe<number> ) {
		this._target.alpha = alpha;
	}
}
