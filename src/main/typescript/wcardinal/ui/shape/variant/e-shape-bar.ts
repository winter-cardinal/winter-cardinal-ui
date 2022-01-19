/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeType } from "../e-shape-type";
import { EShapeBarPoints } from "./e-shape-bar-points";
import { EShapeLineBase } from "./e-shape-line-base";

export class EShapeBar extends EShapeLineBase {
	protected declare _points: EShapeBarPoints;

	constructor(type: EShapeType = EShapeType.BAR) {
		super(type);
		this._points = new EShapeBarPoints(this);
	}

	get points(): EShapeBarPoints {
		return this._points;
	}

	clone(): EShapeBar {
		return new EShapeBar(this.type).copy(this);
	}

	containsAbsBBox(x: number, y: number, ax: number, ay: number): boolean {
		const size = Math.max(0, this._points.size);
		return super.containsAbsBBox(x, y, ax + size, ay + size);
	}

	serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem {
		const result = super.serialize(manager);
		result[15] = this._points.serialize(manager);
		return result;
	}
}
