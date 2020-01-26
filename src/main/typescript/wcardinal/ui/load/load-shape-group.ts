/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { createGroupUploaded } from "../shape/variant/create-group-uploaded";
import { deserializeGroup } from "../shape/variant/deserialize-group";

export const loadShapeGroup = () => {
	EShapeUploadeds[ EShapeType.GROUP ] = createGroupUploaded;
	EShapeDeserializers[ EShapeType.GROUP ] = deserializeGroup;
};
