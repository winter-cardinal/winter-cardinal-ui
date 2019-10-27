/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeGroupUploadeds } from "../shape/variant/e-shape-group-uploadeds";
import { EShapeGroups } from "../shape/variant/e-shape-groups";

export const loadShapeGroup = () => {
	EShapeUploadeds[ EShapeType.GROUP ] = EShapeGroupUploadeds.create;
	EShapeDeserializers[ EShapeType.GROUP ] = EShapeGroups.deserialize;
};
