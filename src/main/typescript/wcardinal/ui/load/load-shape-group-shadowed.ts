/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-to-shape-or-promise";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeGroupShadoweds } from "../shape/variant/e-shape-group-shadoweds";
import { EShapeGroupUploadeds } from "../shape/variant/e-shape-group-uploadeds";

export const loadShapeGroupShadowed = () => {
	EShapeUploadeds[ EShapeType.GROUP_SHADOWED ] = EShapeGroupUploadeds.create;
	EShapeDeserializers[ EShapeType.GROUP_SHADOWED ] = EShapeGroupShadoweds.deserialize;
};
