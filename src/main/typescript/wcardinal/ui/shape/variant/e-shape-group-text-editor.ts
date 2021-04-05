/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DeepPartial } from "../../util/deep-partial";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeText, EShapeTextLike, EShapeTextStyle, EShapeTextWeight } from "../e-shape-text";
import { EShapeTextDirection } from "../e-shape-text-direction";
import { EShapeTextOutline } from "../e-shape-text-outline";
import { EShapeGroupPropertyParent } from "./e-shape-group-property-parent";
import { EShapeGroupTextAlignEditor } from "./e-shape-group-text-align-editor";
import { EShapeGroupTextOffsetEditor } from "./e-shape-group-text-offset-editor";
import { EShapeGroupTextOutlineEditor } from "./e-shape-group-text-outline-editor";
import { EShapeGroupTextPaddingEditor } from "./e-shape-group-text-padding-editor";
import { EShapeGroupTextSpacingEditor } from "./e-shape-group-text-spacing-editor";

export class EShapeGroupTextEditor implements EShapeText {
	protected _parent: EShapeGroupPropertyParent;

	align: EShapeGroupTextAlignEditor;
	offset: EShapeGroupTextOffsetEditor;
	outline: EShapeTextOutline;
	spacing: EShapeGroupTextSpacingEditor;
	padding: EShapeGroupTextPaddingEditor;

	constructor( parent: EShapeGroupPropertyParent ) {
		this._parent = parent;

		this.align = new EShapeGroupTextAlignEditor( parent );
		this.offset = new EShapeGroupTextOffsetEditor( parent );
		this.outline = new EShapeGroupTextOutlineEditor( parent );
		this.spacing = new EShapeGroupTextSpacingEditor( parent );
		this.padding = new EShapeGroupTextPaddingEditor( parent );
	}

	get enable(): boolean {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.enable;
		}
		return true;
	}

	set enable( enable: boolean ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.enable = enable;
		}
	}

	get value(): string {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.value;
		}
		return "";
	}

	set value( value: string ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.value = value;
		}
	}

	get color(): number {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.color;
		}
		return 0x000000;
	}

	set color( color: number ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.color = color;
		}
	}

	get alpha(): number {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.alpha;
		}
		return 1.0;
	}

	set alpha( alpha: number ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.alpha = alpha;
		}
	}

	get family(): string {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.family;
		}
		return "auto";
	}

	set family( family: string ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.family = family;
		}
	}

	get size(): number {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.size;
		}
		return 24;
	}

	set size( size: number ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.size = size;
		}
	}

	get weight(): EShapeTextWeight {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.weight;
		}
		return EShapeTextWeight.NORMAL;
	}

	set weight( weight: EShapeTextWeight ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.weight = weight;
		}
	}

	get style(): EShapeTextStyle {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.style;
		}
		return EShapeTextStyle.NORMAL;
	}

	set style( style: EShapeTextStyle ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.style = style;
		}
	}

	get direction(): number {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.direction;
		}
		return 0;
	}

	set direction( direction: number ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.direction = direction;
		}
	}

	get clipping(): boolean {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.clipping;
		}
		return false;
	}

	set clipping( clipping: boolean ) {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.clipping = clipping;
		}
	}

	copy( target?: DeepPartial<EShapeTextLike> ): this {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.copy( target );
		}
		return this;
	}

	set(
		value?: string, color?: number, alpha?: number,
		family?: string, size?: number, weight?: EShapeTextWeight,
		style?: EShapeTextStyle, direction?: EShapeTextDirection
	): this {
		const children = this._parent.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].text.set( value, color, alpha, family, size, weight, style, direction );
		}
		return this;
	}

	toObject(): EShapeTextLike {
		const children = this._parent.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].text.toObject();
		}
		return {
			value: "",
			color: 0x000000,
			alpha: 1.0,
			family: "auto",
			size: 24,
			weight: EShapeTextWeight.NORMAL,
			align: this.align.toObject(),
			offset: this.offset.toObject(),
			style: EShapeTextStyle.NORMAL,
			outline: this.outline.toObject(),
			spacing: this.spacing.toObject(),
			direction: EShapeTextDirection.LEFT_TO_RIGHT,
			padding: this.padding.toObject(),
			clipping: false
		};
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		return -1;
	}

	deserialize( target: number, manager: EShapeResourceManagerDeserialization ): void {
		// DO NOTHING
	}
}
