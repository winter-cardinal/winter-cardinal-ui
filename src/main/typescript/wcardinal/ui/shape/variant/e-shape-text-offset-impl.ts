/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTextOffset, EShapeTextOffsetLike } from "../e-shape-text-offset";
import { EShapeTextOffsetImplParent } from "./e-shape-text-offset-impl-parent";

export class EShapeTextOffsetImpl implements EShapeTextOffset {
	protected _parent: EShapeTextOffsetImplParent;
	protected _horizontal: number;
	protected _vertical: number;

	constructor( parent: EShapeTextOffsetImplParent, horizontal: number, vertical: number ) {
		this._parent = parent;
		this._horizontal = horizontal;
		this._vertical = vertical;
	}

	get horizontal(): number {
		return this._horizontal;
	}

	set horizontal( horizontal: number ) {
		if( this._horizontal !== horizontal ) {
			this._horizontal = horizontal;
			this._parent.updateUploaded();
		}
	}

	get vertical(): number {
		return this._vertical;
	}

	set vertical( vertical: number ) {
		if( this._vertical !== vertical ) {
			this._vertical = vertical;
			this._parent.updateUploaded();
		}
	}

	copy( target?: Partial<EShapeTextOffsetLike> ): void {
		if( target ) {
			this.set( target.horizontal, target.vertical );
		}
	}

	set( horizontal?: number, vertical?: number ): void {
		let isChanged = false;

		if( horizontal != null && this._horizontal !== horizontal ) {
			this._horizontal = horizontal;
			isChanged = true;
		}

		if( vertical != null && this._vertical !== vertical ) {
			this._vertical = vertical;
			isChanged = true;
		}

		if( isChanged ) {
			this._parent.updateUploaded();
		}
	}

	toObject(): EShapeTextOffsetLike {
		return {
			horizontal: this._horizontal,
			vertical: this._vertical
		};
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		return manager.addResource( `[${this._horizontal},${this._vertical}]` );
	}

	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void {
		const resources = manager.resources;
		if( 0 <= target && target < resources.length ) {
			const parsed = manager.getMargin( target );
			if( parsed != null ) {
				this.set(
					parsed[ 0 ],
					parsed[ 1 ]
				);
			} else {
				const deserialized = JSON.parse( resources[ target ] );
				manager.setMargin( target, deserialized );
				this.set(
					deserialized[ 0 ],
					deserialized[ 1 ]
				);
			}
		}
	}
}
