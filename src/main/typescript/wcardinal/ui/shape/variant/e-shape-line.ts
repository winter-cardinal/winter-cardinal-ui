/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeType } from "../e-shape-type";
import { EShapeLineBase } from "./e-shape-line-base";
import { EShapeLinePoints } from "./e-shape-line-points";

export class EShapeLine extends EShapeLineBase {
	protected declare _points: EShapeLinePoints;

	constructor(type: EShapeType = EShapeType.LINE) {
		super(type);
		this._points = new EShapeLinePoints(this);
	}

	get points(): EShapeLinePoints {
		return this._points;
	}

	clone(): EShapeLine {
		return new EShapeLine().copy(this);
	}

	serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem {
		const result = super.serialize(manager);
		result[15] = this._points.serialize(manager);
		return result;
	}
}
