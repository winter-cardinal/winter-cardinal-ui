/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeFill } from "../e-shape-fill";
import { EShapeGradientLike } from "../e-shape-gradient";
import { EShapePoints } from "../e-shape-points";
import { EShapeStroke } from "../e-shape-stroke";
import { EShapeTag } from "../e-shape-tag";
import { EShapeText } from "../e-shape-text";
import { EShapeType } from "../e-shape-type";
import { EShapeBase } from "./e-shape-base";
import { EShapeGroupFillEditor } from "./e-shape-group-fill-editor";
import { EShapeGroupPoints } from "./e-shape-group-points";
import { EShapeGroupPropertyParent } from "./e-shape-group-property-parent";
import { EShapeGroupSize } from "./e-shape-group-size";
import { EShapeGroupSizeEditor } from "./e-shape-group-size-editor";
import { EShapeGroupSizeViewer } from "./e-shape-group-size-viewer";
import { EShapeGroupStrokeEditor } from "./e-shape-group-stroke-editor";
import { EShapeGroupTextEditor } from "./e-shape-group-text-editor";
import { EShapeTagImpl } from "./e-shape-tag-impl";

export class EShapeGroup extends EShapeBase implements EShapeGroupPropertyParent {
	size: EShapeGroupSize;
	fill: EShapeFill;
	stroke: EShapeStroke;
	tag: EShapeTag;
	text: EShapeText;

	protected _isEditMode: boolean;
	protected _points?: EShapePoints;

	constructor( isEditMode: boolean, type = EShapeType.GROUP ) {
		super( type );
		this._isEditMode = isEditMode;
		this.tag = new EShapeTagImpl();
		this.size = this.newGroupSize( isEditMode );
		this.fill = this.newGroupFill();
		this.stroke = this.newGroupStroke();
		this.text = this.newGroupText();
		this._points = this.newGroupPoints();
	}

	get isEditMode(): boolean {
		return this._isEditMode;
	}

	protected newGroupSize( isEditMode: boolean ): EShapeGroupSize {
		if( isEditMode ) {
			return new EShapeGroupSizeEditor(
				this,
				EShapeDefaults.SIZE_X,
				EShapeDefaults.SIZE_Y
			);
		} else {
			const result = new EShapeGroupSizeViewer(
				() => {
					const base = result.base;
					this.transform.scale.set(
						result.x / base.x,
						result.y / base.y
					);
				},
				EShapeDefaults.SIZE_X,
				EShapeDefaults.SIZE_Y
			);
			return result;
		}
	}

	protected newGroupFill(): EShapeFill {
		return new EShapeGroupFillEditor( this );
	}

	protected newGroupStroke(): EShapeStroke {
		return new EShapeGroupStrokeEditor( this );
	}

	protected newGroupText(): EShapeText {
		return new EShapeGroupTextEditor( this );
	}

	protected newGroupPoints(): EShapePoints | undefined {
		return new EShapeGroupPoints( this );
	}

	protected getBoundsSize(): IPoint {
		const size = this.size;
		if( size instanceof EShapeGroupSizeViewer ) {
			return size.base;
		} else {
			return size;
		}
	}

	onChildTransformChange(): void {
		super.onChildTransformChange();
		this.size.fit();
	}

	get corner(): EShapeCorner {
		const children = this.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].corner;
		}
		return EShapeCorner.ALL;
	}

	set corner( corner: EShapeCorner ) {
		const children = this.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].corner = corner;
		}
	}

	get cursor(): string {
		const children = this.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].cursor;
		}
		return "";
	}

	set cursor( cursor: string ) {
		const children = this.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].cursor = cursor;
		}
	}

	get gradient(): EShapeGradientLike | undefined {
		const children = this.children;
		for( let i = children.length - 1; 0 <= i; --i ) {
			const gradient = children[ i ].gradient;
			if( gradient != null ) {
				return gradient;
			}
		}
		return undefined;
	}

	set gradient( gradient: EShapeGradientLike | undefined ) {
		const children = this.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].gradient = gradient;
		}
	}

	get radius(): number {
		const children = this.children;
		if( 0 < children.length ) {
			return children[ children.length - 1 ].radius;
		}
		return 0.5;
	}

	set radius( radius: number ) {
		const children = this.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].radius = radius;
		}
	}

	get image(): HTMLImageElement | undefined {
		const children = this.children;
		for( let i = children.length - 1; 0 <= i; --i ) {
			const image = children[ i ].image;
			if( image != null ) {
				return image;
			}
		}
		return undefined;
	}

	set image( image: HTMLImageElement | undefined ) {
		const children = this.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			children[ i ].image = image;
		}
	}

	get points(): EShapePoints | undefined {
		const children = this.children;
		for( let i = children.length - 1; 0 <= i; --i ) {
			const points = children[ i ].points;
			if( points != null ) {
				return this._points;
			}
		}
		return undefined;
	}

	set points( points: EShapePoints | undefined ) {
		// DO NOTHING
	}

	clone(): EShapeGroup {
		const result = this.newClone().copy( this );
		const children = this.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const clone = children[ i ].clone();
			clone.parent = result;
			result.children.push( clone );
		}
		result.onChildTransformChange();
		result.toDirty();
		return result;
	}

	protected newClone(): EShapeGroup {
		const constructor = this.constructor as typeof EShapeGroup;
		return new constructor( this._isEditMode, this.type );
	}

	containsAbs( x: number, y: number, ax: number, ay: number ): boolean {
		return false;
	}
}
