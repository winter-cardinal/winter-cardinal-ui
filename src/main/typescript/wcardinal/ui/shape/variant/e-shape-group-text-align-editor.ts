/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTextAlign, EShapeTextAlignLike } from "../e-shape-text-align";
import { EShapeTextAlignHorizontal } from "../e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "../e-shape-text-align-vertical";
import { EShapeGroupPropertyParent } from "./e-shape-group-property-parent";

export class EShapeGroupTextAlignEditor implements EShapeTextAlign {
	protected _parent: EShapeGroupPropertyParent;

	constructor( parent: EShapeGroupPropertyParent ) {
		this._parent = parent;
	}

	get horizontal(): EShapeTextAlignHorizontal {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.align.horizontal;
		}
		return EShapeTextAlignHorizontal.CENTER;
	}

	set horizontal( horizontal: EShapeTextAlignHorizontal ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.align.horizontal = horizontal;
		}
	}

	get vertical(): EShapeTextAlignVertical {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.align.vertical;
		}
		return EShapeTextAlignVertical.MIDDLE;
	}

	set vertical( vertical: EShapeTextAlignVertical ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.align.vertical = vertical;
		}
	}

	copy( target?: Partial<EShapeTextAlignLike> ): void {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.align.copy( target );
		}
	}

	set( horizontal?: EShapeTextAlignHorizontal, vertical?: EShapeTextAlignVertical ): void {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.align.set( horizontal, vertical );
		}
	}

	toObject(): EShapeTextAlignLike {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.align.toObject();
		}
		return {
			horizontal: EShapeTextAlignHorizontal.CENTER,
			vertical: EShapeTextAlignVertical.MIDDLE
		};
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		return -1;
	}

	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void {
		// DO NOTHING
	}
}
