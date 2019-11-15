/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DApplications } from "./d-applications";
import { DBase } from "./d-base";
import { DCoordinatePosition, DCoordinateSize } from "./d-coordinate";
import { DScalarFunctions } from "./d-scalar-functions";
import { DScalarSet } from "./d-scalar-set";
import { utilIsNumber } from "./util/util-is-number";

const enum AutoFlag {
	NONE = 0,
	WIDTH = 1,
	HEIGHT = 2
}

export class DCoordinateSet {
	protected _base: DBase<any, any>;
	protected _scalarSet: DScalarSet;
	protected _autoFlags: AutoFlag;

	constructor( base: DBase<any, any>, scalarSet: DScalarSet ) {
		this._base = base;
		this._scalarSet = scalarSet;
		this._autoFlags = AutoFlag.NONE;
	}

	get x(): DCoordinatePosition {
		const scalarSet = this._scalarSet;
		if( scalarSet.x != null ) {
			return scalarSet.x;
		} else {
			return this._base.x;
		}
	}

	set x( x: DCoordinatePosition ) {
		const base = this._base;
		if( utilIsNumber( x ) ) {
			base.x = x;
		} else {
			const scalarSet = this._scalarSet;
			const scalar = DScalarFunctions.position( x );
			if( scalarSet.x !== scalar ) {
				scalarSet.x = scalar;
				base.layout();
			}
		}
	}

	get y(): DCoordinatePosition {
		const scalarSet = this._scalarSet;
		if( scalarSet.y != null ) {
			return scalarSet.y;
		} else {
			return this._base.y;
		}
	}

	set y( y: DCoordinatePosition ) {
		const base = this._base;
		if( utilIsNumber( y ) ) {
			base.y = y;
		} else {
			const scalarSet = this._scalarSet;
			const scalar = DScalarFunctions.position( y );
			if( scalarSet.y !== scalar ) {
				scalarSet.y = scalar;
				base.layout();
			}
		}
	}

	toAutoWidth() {
		this._autoFlags |= AutoFlag.WIDTH;
	}

	isWidthAuto(): boolean {
		return ( this._autoFlags & AutoFlag.WIDTH ) !== 0;
	}

	get width(): DCoordinateSize {
		const scalarSet = this._scalarSet;
		if( this.isWidthAuto() ) {
			return "auto";
		} else if( scalarSet.width != null ) {
			return scalarSet.width;
		} else {
			return this._base.width;
		}
	}

	set width( width: DCoordinateSize ) {
		if( utilIsNumber( width ) ) {
			this._base.width = width;
		} else if( width === "auto" || width === "AUTO" ) {
			if( ! this.isWidthAuto() ) {
				this.toAutoWidth();
				const base = this._base;
				base.toChildrenDirty();
				DApplications.update( this._base );
			}
		} else {
			const scalarSet = this._scalarSet;
			const scalar = DScalarFunctions.size( width );
			if( scalarSet.width !== scalar ) {
				scalarSet.width = scalar;
				this._base.layout();
			}
		}
	}

	toAutoHeight() {
		this._autoFlags |= AutoFlag.HEIGHT;
	}

	isHeightAuto(): boolean {
		return ( this._autoFlags & AutoFlag.HEIGHT ) !== 0;
	}

	get height(): DCoordinateSize {
		const scalarSet = this._scalarSet;
		if( this.isHeightAuto() ) {
			return "auto";
		} else if( scalarSet.height != null ) {
			return scalarSet.height;
		} else {
			return this._base.height;
		}
	}

	set height( height: DCoordinateSize ) {
		if( utilIsNumber( height ) ) {
			this._base.height = height;
		} else if( height === "auto" || height === "AUTO" ) {
			if( ! this.isHeightAuto() ) {
				this.toAutoHeight();
				const base = this._base;
				base.toChildrenDirty();
				DApplications.update( this._base );
			}
		} else {
			const scalarSet = this._scalarSet;
			const scalar = DScalarFunctions.size( height );
			if( scalarSet.height !== scalar ) {
				scalarSet.height = scalar;
				this._base.layout();
			}
		}
	}
}
