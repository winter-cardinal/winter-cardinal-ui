/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTextOffsetLike } from "../e-shape-text-offset";
import { EShapeGroupPropertyParent } from "./e-shape-group-property-parent";

export class EShapeGroupTextPaddingEditor {
	protected _parent: EShapeGroupPropertyParent;

	constructor( parent: EShapeGroupPropertyParent ) {
		this._parent = parent;
	}

	get horizontal(): number {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.padding.horizontal;
		}
		return 0;
	}

	set horizontal( horizontal: number ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.padding.horizontal = horizontal;
		}
	}

	get vertical(): number {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.padding.vertical;
		}
		return 0;
	}

	set vertical( vertical: number ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.padding.vertical = vertical;
		}
	}

	copy( target: EShapeTextOffsetLike ): void {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.padding.copy( target );
		}
	}

	set( horizontal: number, vertical: number ): void {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.padding.set( horizontal, vertical );
		}
	}

	toObject(): EShapeTextOffsetLike {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.padding.toObject();
		}
		return {
			horizontal: 0,
			vertical: 0
		};
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		return -1;
	}

	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void {
		// DO NOTHING
	}
}
