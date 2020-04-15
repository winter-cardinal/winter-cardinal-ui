/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeFill, EShapeFillLike } from "../e-shape-fill";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeFillImplParent } from "./e-shape-fill-impl-parent";

export class EShapeFillImpl implements EShapeFill {
	protected _parent: EShapeFillImplParent;
	protected _enable: boolean;
	protected _color: number;
	protected _alpha: number;

	constructor( parent: EShapeFillImplParent, enable: boolean, color: number, alpha: number ) {
		this._parent = parent;
		this._enable = enable;
		this._color = color;
		this._alpha = alpha;
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

	copy( target?: Partial<EShapeFillLike> ): void {
		if( target ) {
			this.set( target.enable, target.color, target.alpha );
		}
	}

	set( enable?: boolean, color?: number, alpha?: number ): void {
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

		if( isChanged ) {
			this._parent.updateUploaded();
		}
	}

	clone(): EShapeFill {
		return new EShapeFillImpl( this._parent, this._enable, this._color, this._alpha );
	}

	toObject(): EShapeFillLike {
		return {
			enable: this._enable,
			color: this._color,
			alpha: this._alpha
		};
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const stringified = `[${this._enable ? 1 : 0},${this._color},${this._alpha}]`;
		return manager.addResource( stringified );
	}

	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void {
		const resources = manager.resources;
		if( 0 <= target && target < resources.length ) {
			const parsed = manager.getFill( target );
			if( parsed != null ) {
				this.set(
					parsed[ 0 ] !== 0,
					parsed[ 1 ],
					parsed[ 2 ]
				);
			} else {
				const deserialized = JSON.parse( resources[ target ] );
				manager.setFill( target, deserialized );
				this.set(
					deserialized[ 0 ] !== 0,
					deserialized[ 1 ],
					deserialized[ 2 ]
				);
			}
		}
	}
}
