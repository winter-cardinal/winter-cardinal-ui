/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShapeAnchor } from "../e-shape-anchor";

export interface EShapeConnectorAnchorContainerParent {
	size: IPoint;
}

export class EShapeConnectorAnchorContainer {
	protected _parent: EShapeConnectorAnchorContainerParent;
	protected _left: EShapeAnchor;
	protected _right: EShapeAnchor;

	constructor(
		parent: EShapeConnectorAnchorContainerParent,
		left: EShapeAnchor,
		right: EShapeAnchor
	) {
		this._parent = parent;
		this._left = left;
		this._right = right;
		const onAnchorChangeBound = (): void => {
			this.onAnchorChange();
		};
		left.on("update", onAnchorChangeBound);
		right.on("update", onAnchorChangeBound);
	}

	get left(): EShapeAnchor {
		return this._left;
	}

	get right(): EShapeAnchor {
		return this._right;
	}

	protected onAnchorChange(): void {
		//
	}
}
