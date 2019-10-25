/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeTextOutline, EShapeTextOutlineLike } from "../e-shape-text-outline";
import { EShapeGroupPropertyParent } from "./e-shape-group-property-parent";

export class EShapeGroupTextOutlineEditor implements EShapeTextOutline {
	protected _parent: EShapeGroupPropertyParent;

	constructor( parent: EShapeGroupPropertyParent ) {
		this._parent = parent;
	}

	get enable(): boolean {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.outline.enable;
		}
		return false;
	}

	set enable( enable: boolean ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.outline.enable = enable;
		}
	}

	get color(): number {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.outline.color;
		}
		return 0xffffff;
	}

	set color( color: number ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.outline.color = color;
		}
	}

	get alpha(): number {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.outline.alpha;
		}
		return 1.0;
	}

	set alpha( alpha: number ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.outline.alpha = alpha;
		}
	}

	get width(): number {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.outline.width;
		}
		return 1.0;
	}

	set width( width: number ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.outline.width = width;
		}
	}

	copy( target?: Partial<EShapeTextOutlineLike> ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.outline.copy( target );
		}
	}

	set( enable?: boolean, color?: number, alpha?: number, width?: number ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.outline.set( enable, color, alpha, width );
		}
	}

	clone(): EShapeGroupTextOutlineEditor {
		return new EShapeGroupTextOutlineEditor( this._parent );
	}

	toObject(): EShapeTextOutlineLike {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.outline.toObject();
		}
		return {
			enable: false,
			color: 0xffffff,
			alpha: 1.0,
			width: 1.0
		};
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		return -1;
	}

	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void {
		//
	}
}
