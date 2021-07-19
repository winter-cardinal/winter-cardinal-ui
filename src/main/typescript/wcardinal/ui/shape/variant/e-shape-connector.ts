/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeAnchor } from "../e-shape-anchor";
import { EShapeType } from "../e-shape-type";
import { EShapeConnectorAnchorContainer } from "./e-shape-connector-anchor-container";
import { EShapeLineBase } from "./e-shape-line-base";

export class EShapeConnector extends EShapeLineBase {
	protected _anchor: EShapeConnectorAnchorContainer;

	constructor(left: EShapeAnchor, right: EShapeAnchor, type = EShapeType.CONNECTOR) {
		super(type);
		this._anchor = new EShapeConnectorAnchorContainer(this, left, right);
	}

	clone(): EShapeLineBase {
		const anchor = this._anchor;
		return new EShapeConnector(anchor.left, anchor.right).copy(this);
	}
}
