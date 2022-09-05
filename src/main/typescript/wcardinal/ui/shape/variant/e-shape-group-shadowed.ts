/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeResourceManagerDeserializationMode } from "../e-shape-resource-manager-deserialization-mode";
import { EShapeType } from "../e-shape-type";
import { EShapeGroup } from "./e-shape-group";
import { EShapeGroupSize } from "./e-shape-group-size";
import { EShapeGroupSizeShadowed } from "./e-shape-group-size-shadowed";

export class EShapeGroupShadowed extends EShapeGroup {
	constructor(
		mode: EShapeResourceManagerDeserializationMode,
		type: EShapeType = EShapeType.GROUP_SHADOWED
	) {
		super(mode, type);
	}

	protected newGroupSize(mode: EShapeResourceManagerDeserializationMode): EShapeGroupSize {
		if (mode !== EShapeResourceManagerDeserializationMode.VIEWER) {
			return new EShapeGroupSizeShadowed(this, EShapeDefaults.SIZE_X, EShapeDefaults.SIZE_Y);
		} else {
			return super.newGroupSize(mode);
		}
	}
}
