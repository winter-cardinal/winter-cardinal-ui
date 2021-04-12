/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matrix, ObservablePoint, Transform } from "pixi.js";
import { EShapeTransformParent } from "./e-shape-transform-parent";

export interface EShapeTransform extends Transform {
	internalTransform: Matrix;

	position: ObservablePoint;
	pivot: ObservablePoint;
	rotation: number;
	skew: ObservablePoint;
	scale: ObservablePoint;

	getLocalIdCurrent(): number;
	getLocalId(): number;
	getParentId(): number;
	getWorldId(): number;
}

export class EShapeTransformImpl extends Transform implements EShapeTransform {
	protected _parent: EShapeTransformParent;
	internalTransform: Matrix;

	constructor(parent: EShapeTransformParent) {
		super();
		this.internalTransform = new Matrix();
		this._parent = parent;
	}

	protected onChange(): void {
		super.onChange();
		this._parent.onTransformChange();
	}

	protected updateSkew(): void {
		super.updateSkew();
		this._parent.onTransformChange();
	}

	getLocalIdCurrent(): number {
		return this._currentLocalID;
	}

	getLocalId(): number {
		return this._localID;
	}

	getParentId(): number {
		return this._parentID;
	}

	getWorldId(): number {
		return this._worldID;
	}

	updateTransform(parentTransform: Transform): void {
		const oldLocalId = this._currentLocalID;
		const oldWorldId = this._worldID;
		super.updateTransform(parentTransform);
		const newLocalId = this._currentLocalID;
		const newWorldId = this._worldID;
		if (oldLocalId !== newLocalId) {
			const localTransform = this.localTransform;
			const internalTransform = this.internalTransform;
			localTransform.copyTo(internalTransform);
			if (parentTransform instanceof EShapeTransformImpl) {
				internalTransform.prepend(parentTransform.internalTransform);
			}
		} else if (oldWorldId !== newWorldId) {
			const localTransform = this.localTransform;
			const internalTransform = this.internalTransform;
			if (parentTransform instanceof EShapeTransformImpl) {
				localTransform.copyTo(internalTransform).prepend(parentTransform.internalTransform);
				this._currentLocalID += 1;
				this._localID = this._currentLocalID;
			}
		}
	}
}
