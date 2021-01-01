/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Texture } from "pixi.js";
import { DDiagramSerializedText } from "../../d-diagram-serialized";
import { DeepPartial } from "../../util/deep-partial";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeText, EShapeTextAtlas, EShapeTextLike, EShapeTextStyle, EShapeTextWeight } from "../e-shape-text";
import { EShapeTextAlign } from "../e-shape-text-align";
import { EShapeTextAlignHorizontal } from "../e-shape-text-align-horizontal";
import { EShapeTextAlignVertical } from "../e-shape-text-align-vertical";
import { EShapeTextDirection } from "../e-shape-text-direction";
import { EShapeTextOffset } from "../e-shape-text-offset";
import { EShapeTextOutline } from "../e-shape-text-outline";
import { EShapeTextAlignImpl } from "./e-shape-text-align-impl";
import { EShapeTextImplParent } from "./e-shape-text-impl-parent";
import { EShapeTextOffsetImpl } from "./e-shape-text-offset-impl";
import { EShapeTextOutlineImpl } from "./e-shape-text-outline-impl";

export class EShapeTextImpl implements EShapeText {
	protected _parent: EShapeTextImplParent;
	protected _enable: boolean;
	protected _value: string;
	protected _family: string;
	protected _color: number;
	protected _alpha: number;
	protected _size: number;
	protected _weight: EShapeTextWeight;
	readonly align: EShapeTextAlign;
	readonly offset: EShapeTextOffset;
	protected _style: EShapeTextStyle;
	readonly outline: EShapeTextOutline;
	readonly spacing: EShapeTextOffset;
	protected _direction: EShapeTextDirection;
	readonly padding: EShapeTextOffset;
	protected _clipping: boolean;

	texture?: Texture;			// Used for rendering and updated when rendered
	atlas?: EShapeTextAtlas;	// Used for rendering and updated when rendered
	world?: number[];			// Updated when rendered

	constructor(
		parent: EShapeTextImplParent,
		value: string, color: number, alpha: number, family: string, size: number
	) {
		this._parent = parent;
		this._enable = true;
		this._value = value;
		this._color = color!;
		this._alpha = alpha!;
		this._family = family!;
		this._size = size!;
		this._weight = EShapeTextWeight.NORMAL;
		this.align = new EShapeTextAlignImpl( parent, EShapeTextAlignHorizontal.CENTER, EShapeTextAlignVertical.MIDDLE );
		this.offset = new EShapeTextOffsetImpl( parent, 0, 0 );
		this._style = EShapeTextStyle.NORMAL;
		this.spacing = new EShapeTextOffsetImpl( parent, 0, 0 );
		this.outline = new EShapeTextOutlineImpl( parent, false, 0xffffff, 1.0, 0.5 );
		this._direction = EShapeTextDirection.LEFT_TO_RIGHT;
		this.padding = new EShapeTextOffsetImpl( parent, 10, 10 );
		this._clipping = false;
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

	get value(): string {
		return this._value;
	}

	set value( value: string ) {
		if( this._value !== value ) {
			this._value = value;

			// Compatibility check
			const parent = this._parent;
			const uploaded = parent.uploaded;
			if( uploaded == null || ! uploaded.isCompatible( parent ) ) {
				this.atlas = undefined;
				parent.toDirty();
				return;
			}

			// Character code check
			const atlas = this.atlas;
			const characters = atlas && atlas.characters;
			if( characters != null ) {
				for( let i = 0, imax = value.length; i < imax; ++i ) {
					const char = value[ i ];
					if( ! (char in characters) ) {
						this.atlas = undefined;
						parent.toDirty();
						return;
					}
				}
			} else {
				this.atlas = undefined;
				parent.toDirty();
				return;
			}

			// Update uploaded
			parent.updateUploaded();
		}
	}

	get family(): string {
		return this._family;
	}

	set family( family: string ) {
		if( this._family !== family ) {
			this._family = family;
			this._parent.toDirty();
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

	get size(): number {
		return this._size;
	}

	set size( size: number ) {
		if( this._size !== size ) {
			this._size = size;
			this._parent.updateUploaded();
		}
	}

	get weight(): EShapeTextWeight {
		return this._weight;
	}

	set weight( weight: EShapeTextWeight ) {
		if( this._weight !== weight ) {
			this._weight = weight;
			this._parent.updateUploaded();
		}
	}

	get style(): EShapeTextStyle {
		return this._style;
	}

	set style( style: EShapeTextStyle ) {
		if( this._style !== style ) {
			this._style = style;
			this._parent.updateUploaded();
		}
	}

	get direction(): EShapeTextDirection {
		return this._direction;
	}

	set direction( direction: EShapeTextDirection ) {
		if( this._direction !== direction ) {
			this._direction = direction;
			this._parent.updateUploaded();
		}
	}

	get clipping(): boolean {
		return this._clipping;
	}

	set clipping( clipping: boolean ) {
		if( this._clipping !== clipping ) {
			this._clipping = clipping;
			this._parent.updateUploaded();
		}
	}

	copy( target?: DeepPartial<EShapeTextLike> ): this {
		if( target ) {
			this.set(
				target.value,
				target.color,
				target.alpha,
				target.family,
				target.size,
				target.weight,
				target.style,
				target.direction,
				target.clipping
			);
			this.align.copy( target.align );
			this.offset.copy( target.offset );
			this.outline.copy( target.outline );
			this.spacing.copy( target.spacing );
			this.padding.copy( target.padding );
		}
		return this;
	}

	set(
		value?: string, color?: number, alpha?: number,
		family?: string, size?: number, weight?: EShapeTextWeight,
		style?: EShapeTextStyle, direction?: EShapeTextDirection,
		clipping?: boolean
	): this {
		let isChangedDirty = false;
		let isChangedUploaded = false;

		if( value != null && this._value !== value ) {
			this._value = value;
			isChangedDirty = true;
		}

		if( color != null && this._color !== color ) {
			this._color = color;
			isChangedUploaded = true;
		}

		if( alpha != null && this._alpha !== alpha ) {
			this._alpha = alpha;
			isChangedUploaded = true;
		}

		if( family != null && this._family !== family ) {
			this._family = family;
			isChangedDirty = true;
		}

		if( size != null && this._size !== size ) {
			this._size = size;
			isChangedUploaded = true;
		}

		if( weight != null && this._weight !== weight ) {
			this._weight = weight;
			isChangedUploaded = true;
		}

		if( style != null && this._style !== style ) {
			this._style = style;
			isChangedUploaded = true;
		}

		if( direction != null && this._direction !== direction ) {
			this._direction = direction;
			isChangedUploaded = true;
		}

		if( clipping != null && this._clipping !== clipping ) {
			this._clipping = clipping;
			isChangedUploaded = true;
		}

		if( isChangedDirty ) {
			this._parent.toDirty();
		} else if( isChangedUploaded ) {
			this._parent.updateUploaded();
		}

		return this;
	}

	toObject(): EShapeTextLike {
		return {
			value: this._value,
			color: this._color,
			alpha: this._alpha,
			family: this._family,
			size: this._size,
			weight: this._weight,
			align: this.align.toObject(),
			offset: this.offset.toObject(),
			style: this._style,
			outline: this.outline.toObject(),
			direction: this._direction,
			spacing: this.spacing.toObject(),
			padding: this.padding.toObject(),
			clipping: this._clipping
		};
	}

	serialize( manager: EShapeResourceManagerSerialization ): number {
		const alignSerialized = this.align.serialize( manager );
		const offsetSerialized = this.offset.serialize( manager );
		const outlineSerialized = this.outline.serialize( manager );
		const spacingSerialized = this.spacing.serialize( manager );
		const paddingSerialized = this.padding.serialize( manager );
		const serialized = `[${manager.addResource( this._value )},${this._color},${this._alpha},` +
			`${manager.addResource( this._family )},${this._size},${this._weight},${alignSerialized},` +
			`${offsetSerialized},${this._style},${outlineSerialized},${spacingSerialized},` +
			`${this._direction},${paddingSerialized},${this._clipping ? 1 : 0 }]`;
		return manager.addResource( serialized );
	}

	deserialize( target: number, manager: EShapeResourceManagerDeserialization ) {
		const resources = manager.resources;
		if( 0 <= target && target < resources.length ) {
			let parsed = manager.getText( target );
			if( parsed == null ) {
				parsed = JSON.parse( resources[ target ] ) as DDiagramSerializedText;
				manager.setText( target, parsed );
			}
			this.set(
				resources[ parsed[ 0 ] ] || "",
				parsed[ 1 ],
				parsed[ 2 ],
				resources[ parsed[ 3 ] ] || "auto",
				parsed[ 4 ],
				parsed[ 5 ],
				parsed[ 8 ],
				parsed[ 11 ],
				( parsed[ 13 ] !== 0 )
			);
			this.align.deserialize( parsed[ 6 ], manager );
			this.offset.deserialize( parsed[ 7 ], manager );
			this.outline.deserialize( parsed[ 9 ], manager );
			this.spacing.deserialize( parsed[ 10 ], manager );
			this.padding.deserialize( parsed[ 12 ], manager );
		}
	}
}
