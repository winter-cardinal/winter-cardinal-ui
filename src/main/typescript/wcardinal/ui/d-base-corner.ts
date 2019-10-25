/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseOptions, DThemeBase } from "./d-base";
import { DCorner, DCornerMask } from "./d-corner";
import { utilIsNumber } from "./util/util-is-number";
import { utilIsString } from "./util/util-is-string";

type Callback = () => void;

export class DBaseCorner implements DCorner {
	protected _theme: DThemeBase;
	protected _radius?: number;
	protected _mask?: DCornerMask;
	protected _callback: Callback | undefined;

	constructor( theme: DThemeBase, options?: DBaseOptions<any>, callback?: () => void ) {
		this._theme = theme;
		this._callback = callback;
		if( options != null && options.corner != null ) {
			const corner = options.corner;
			if( utilIsNumber( corner ) ) {
				this._radius = corner;
				this._mask = undefined;
			} else {
				this._radius = corner.radius;
				this._mask = ( utilIsString( corner.mask ) ? DCornerMask[ corner.mask ] : corner.mask );
			}
		}
	}

	getTheme(): DThemeBase {
		return this._theme;
	}

	setTheme( theme: DThemeBase ): void {
		this._theme = theme;
	}

	getRadius(): number {
		const radius = this._radius;
		return ( radius !== undefined ? radius : this._theme.getCornerRadius() );
	}

	get radius(): number | undefined {
		return this._radius;
	}

	set radius( radius: number | undefined ) {
		if( this._radius !== radius ) {
			this._radius = radius;
			const callback = this._callback;
			if( callback != null ) {
				callback();
			}
		}
	}

	getMask(): DCornerMask {
		const mask = this._mask;
		return ( mask !== undefined ? mask : this._theme.getCornerMask() );
	}

	get mask(): DCornerMask | undefined {
		return this._mask;
	}

	set mask( mask: DCornerMask | undefined ) {
		if( this._mask !== mask ) {
			this._mask = mask;
			const callback = this._callback;
			if( callback != null ) {
				callback();
			}
		}
	}

	set( radius?: number, mask?: DCornerMask ): void {
		let isChanged = false;

		if( this._radius !== radius ) {
			this._radius = radius;
			isChanged = true;
		}

		if( this._mask !== mask ) {
			this._mask = mask;
			isChanged = true;
		}

		const callback = this._callback;
		if( isChanged && callback != null ) {
			callback();
		}
	}
}
