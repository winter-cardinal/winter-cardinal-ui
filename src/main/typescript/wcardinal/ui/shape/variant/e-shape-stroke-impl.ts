/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeStroke, EShapeStrokeLike } from "../e-shape-stroke";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeStrokeImplParent } from "./e-shape-stroke-impl-parent";

export class EShapeStrokeImpl implements EShapeStroke {
	protected _parent: EShapeStrokeImplParent;
	protected _enable: boolean;
	protected _color: number;
	protected _alpha: number;
	protected _width: number;
	protected _align: number;
	protected _side: EShapeStrokeSide;

	constructor(
		parent: EShapeStrokeImplParent,
		enable: boolean, color: number, alpha: number,
		width: number, align: number, side: EShapeStrokeSide
	) {
		this._parent = parent;
		this._enable = enable;
		this._color = color;
		this._alpha = alpha;
		this._width = width;
		this._align = align;
		this._side = side;
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

	get align(): number {
		return this._align;
	}

	set align( align: number ) {
		if( this._align !== align ) {
			this._align = align;
			this._parent.updateUploaded();
		}
	}

	get side(): EShapeStrokeSide {
		return this._side;
	}

	set side( side: EShapeStrokeSide ) {
		if( this._side !== side ) {
			this._side = side;
			this._parent.updateUploaded();
		}
	}

	copy( target?: Partial<EShapeStrokeLike> ): void {
		if( target ) {
			this.set( target.enable, target.color, target.alpha, target.width, target.align, target.side );
		}
	}

	set( enable?: boolean, color?: number, alpha?: number, width?: number, align?: number, side?: EShapeStrokeSide ): void {
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

		if( align !== undefined && this._align !== align ) {
			this._align = align;
			isChanged = true;
		}

		if( side !== undefined && this._side !== side ) {
			this._side = side;
			isChanged = true;
		}

		if( isChanged ) {
			this._parent.updateUploaded();
		}
	}

	clone(): EShapeStroke {
		return new EShapeStrokeImpl(
			this._parent,
			this._enable, this._color, this._alpha,
			this._width, this._align, this._side
		);
	}

	toObject(): EShapeStrokeLike {
		return {
			enable: this._enable,
			color: this._color,
			alpha: this._alpha,
			width: this._width,
			align: this._align,
			side: this._side
		};
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const enable = this._enable ? 1 : 0;
		const serialized = `[${enable},${this._color},${this._alpha},${this._width},${this._align},${this._side}]`;
		return manager.addResource( serialized );
	}

	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void {
		const resources = manager.resources;
		if( 0 <= target && target < resources.length ) {
			const parsed = manager.getStroke( target );
			if( parsed != null ) {
				this.set(
					parsed[ 0 ] !== 0,
					parsed[ 1 ],
					parsed[ 2 ],
					parsed[ 3 ],
					parsed[ 4 ],
					parsed[ 5 ]
				);
			} else {
				const deserialized = JSON.parse( resources[ target ] );
				manager.setStroke( target, deserialized );
				this.set(
					deserialized[ 0 ] !== 0,
					deserialized[ 1 ],
					deserialized[ 2 ],
					deserialized[ 3 ],
					deserialized[ 4 ],
					deserialized[ 5 ]
				);
			}
		}
	}
}
