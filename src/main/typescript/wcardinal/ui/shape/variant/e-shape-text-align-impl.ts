/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTextAlign, EShapeTextAlignLike } from "../e-shape-text-align";
import { EShapeTextAlignHorizontal } from "../e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "../e-shape-text-align-vertical";
import { EShapeTextAlignImplParent } from "./e-shape-text-align-impl-parent";

export class EShapeTextAlignImpl implements EShapeTextAlign {
	protected _parent: EShapeTextAlignImplParent;
	protected _horizontal: EShapeTextAlignHorizontal;
	protected _vertical: EShapeTextAlignVertical;

	constructor(
		parent: EShapeTextAlignImplParent,
		horizontal: EShapeTextAlignHorizontal, vertical: EShapeTextAlignVertical
	) {
		this._parent = parent;
		this._horizontal = horizontal;
		this._vertical = vertical;
	}

	get horizontal(): EShapeTextAlignHorizontal {
		return this._horizontal;
	}

	set horizontal( horizontal: EShapeTextAlignHorizontal ) {
		if( this._horizontal !== horizontal ) {
			this._horizontal = horizontal;
			this._parent.updateUploaded();
		}
	}

	get vertical(): EShapeTextAlignVertical {
		return this._vertical;
	}

	set vertical( vertical: EShapeTextAlignVertical ) {
		if( this._vertical !== vertical ) {
			this._vertical = vertical;
			this._parent.updateUploaded();
		}
	}

	copy( target?: Partial<EShapeTextAlignLike> ): void {
		if( target ) {
			this.set( target.horizontal, target.vertical );
		}
	}

	set( horizontal?: EShapeTextAlignHorizontal, vertical?: EShapeTextAlignVertical ): void {
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

	toObject(): EShapeTextAlignLike {
		return {
			horizontal: this._horizontal,
			vertical: this._vertical
		};
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		return manager.add( `[${this._horizontal},${this._vertical}]` );
	}

	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void {
		const resources = manager.resources;
		if( 0 <= target && target < resources.length ) {
			const parsed = manager.aligns.get( target );
			if( parsed != null ) {
				this.set(
					parsed[ 0 ],
					parsed[ 1 ]
				);
			} else {
				const deserialized = JSON.parse( resources[ target ] );
				manager.aligns.set( target, deserialized );
				this.set(
					deserialized[ 0 ],
					deserialized[ 1 ]
				);
			}
		}
	}
}
