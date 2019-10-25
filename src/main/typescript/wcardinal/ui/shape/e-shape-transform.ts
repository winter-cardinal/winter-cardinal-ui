/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Matrix, Transform } from "pixi.js";
import { EShapeTransformParent } from "./e-shape-transform-parent";

export interface EShapeTransform extends Transform {
	internalTransform: Matrix;

	position: IPoint;
	pivot: IPoint;
	rotation: number;
	skew: IPoint;
	scale: IPoint;

	getLocalIdCurrent(): number;
	getLocalId(): number;
	getParentId(): number;
	getWorldId(): number;
}

export class EShapeTransformImpl extends Transform implements EShapeTransform {
	protected _parent: EShapeTransformParent;
	internalTransform: Matrix;

	constructor( parent: EShapeTransformParent ) {
		super();
		this.internalTransform = new Matrix();
		this._parent = parent;
	}

	protected onChange(): void {
		(Transform.prototype as any).onChange.call( this );
		this._parent.onTransformChange();
	}

	protected updateSkew(): void {
		(Transform.prototype as any).updateSkew.call( this );
		this._parent.onTransformChange();
	}

	getLocalIdCurrent(): number {
		return (this as any)._currentLocalID;
	}

	getLocalId(): number {
		return (this as any)._localID;
	}

	getParentId(): number {
		return (this as any)._parentID;
	}

	getWorldId(): number {
		return (this as any)._worldID;
	}

	updateTransform( parentTransform: Transform ): void {
		const oldLocalId = (this as any)._currentLocalID;
		const oldWorldId = (this as any)._worldID;
		super.updateTransform( parentTransform );
		const newLocalId = (this as any)._currentLocalID;
		const newWorldId = (this as any)._worldID;
		if( oldLocalId !== newLocalId ) {
			const localTransform = this.localTransform;
			const internalTransform = this.internalTransform;
			localTransform.copyTo( internalTransform );
			if( parentTransform instanceof EShapeTransformImpl ) {
				internalTransform.prepend( parentTransform.internalTransform );
			}
		} else if( oldWorldId !== newWorldId ) {
			const localTransform = this.localTransform;
			const internalTransform = this.internalTransform;
			if( parentTransform instanceof EShapeTransformImpl ) {
				localTransform.copyTo( internalTransform ).prepend( parentTransform.internalTransform );
				(this as any)._currentLocalID += 1;
				(this as any)._localID = (this as any)._currentLocalID;
			}
		}
	}
}
