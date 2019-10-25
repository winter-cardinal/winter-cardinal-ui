/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTextOutline, EShapeTextOutlineLike } from "../e-shape-text-outline";
import { EShapeTextOutlineImplParent } from "./e-shape-text-outline-impl-parent";

export class EShapeTextOutlineImpl implements EShapeTextOutline {
	protected _parent: EShapeTextOutlineImplParent;
	protected _enable: boolean;
	protected _color: number;
	protected _alpha: number;
	protected _width: number;

	constructor( parent: EShapeTextOutlineImplParent, enable: boolean, color: number, alpha: number, width: number ) {
		this._parent = parent;
		this._enable = enable;
		this._color = color;
		this._alpha = alpha;
		this._width = width;
	}

	get enable(): boolean {
		return this._enable;
	}

	set enable( enable: boolean ) {
		if( this._enable !== enable ) {
			this._enable = enable;
			this._parent.updateUploaded();
		}
	}

	get color(): number {
		return this._color;
	}

	set color( color: number ) {
		if( this._color !== color ) {
			this._color = color;
			this._parent.updateUploaded();
		}
	}

	get alpha(): number {
		return this._alpha;
	}

	set alpha( alpha: number ) {
		if( this._alpha !== alpha ) {
			this._alpha = alpha;
			this._parent.updateUploaded();
		}
	}

	get width(): number {
		return this._width;
	}

	set width( width: number ) {
		if( this._width !== width ) {
			this._width = width;
			this._parent.updateUploaded();
		}
	}

	copy( target?: Partial<EShapeTextOutlineLike> ): void {
		if( target ) {
			this.set( target.enable, target.color, target.alpha, target.width );
		}
	}

	set( enable?: boolean, color?: number, alpha?: number, width?: number ) {
		let isChanged = false;

		if( enable !== undefined && this._enable !== enable ) {
			this._enable = enable;
			isChanged = true;
		}

		if( color !== undefined && this._color !== color ) {
			this._color = color;
			isChanged = true;
		}

		if( alpha !== undefined && this._alpha !== alpha ) {
			this._alpha = alpha;
			isChanged = true;
		}

		if( width !== undefined && this._width !== width ) {
			this._width = width;
			isChanged = true;
		}

		if( isChanged ) {
			this._parent.updateUploaded();
		}
	}

	clone(): EShapeTextOutline {
		return new EShapeTextOutlineImpl( this._parent, this._enable, this._color, this._alpha, this._width );
	}

	toObject(): EShapeTextOutlineLike {
		return {
			enable: this._enable,
			color: this._color,
			alpha: this._alpha,
			width: this._width
		};
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const serialized = `[${this._enable ? 1 : 0},${this._color},${this._alpha},${this._width}]`;
		return manager.add( serialized );
	}

	deserialize( target: number, manager: EShapeResourceManagerDeserialization ) {
		const resources = manager.resources;
		if( 0 <= target && target < resources.length ) {
			const parsed = manager.textOutlines.get( target );
			if( parsed != null ) {
				this.set(
					parsed[ 0 ] !== 0,
					parsed[ 1 ],
					parsed[ 2 ],
					parsed[ 3 ]
				);
			} else {
				const deserialized = JSON.parse( resources[ target ] );
				manager.textOutlines.set( target, deserialized );
				this.set(
					deserialized[ 0 ] !== 0,
					deserialized[ 1 ],
					deserialized[ 2 ],
					deserialized[ 3 ]
				);
			}
		}
	}
}
