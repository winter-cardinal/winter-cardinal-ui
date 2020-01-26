/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createGroupUploaded } from "../variant/create-group-uploaded";
import { deserializeGroupShadowed } from "../variant/deserialize-group-shadowed";

export const loadShapeGroupShadowed = () => {
	EShapeUploadeds[ EShapeType.GROUP_SHADOWED ] = createGroupUploaded;
	EShapeDeserializers[ EShapeType.GROUP_SHADOWED ] = deserializeGroupShadowed;
};
