/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeType } from "../e-shape-type";
import { EShapeRectangleRounded } from "./e-shape-rectangle-rounded";

export class EShapeButton extends EShapeRectangleRounded {
	protected _isToggle: boolean;

	constructor(type = EShapeType.BUTTON) {
		super(type);
		this._isToggle = false;
	}

	get isToggle(): boolean {
		return this._isToggle;
	}

	set isToggle(isToggle: boolean) {
		this._isToggle = isToggle;
	}

	serialize(manager: EShapeResourceManagerSerialization): DDiagramSerializedItem {
		const result = super.serialize(manager);
		result[15] = manager.addResource(`[${this._isToggle ? 1 : 0}]`);
		return result;
	}
}
