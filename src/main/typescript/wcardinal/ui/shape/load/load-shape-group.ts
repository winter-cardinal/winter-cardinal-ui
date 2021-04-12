/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createGroupUploaded } from "../variant/create-group-uploaded";
import { deserializeGroup } from "../variant/deserialize-group";

export const loadShapeGroup = (): void => {
	EShapeUploadeds[EShapeType.GROUP] = createGroupUploaded;
	EShapeDeserializers[EShapeType.GROUP] = deserializeGroup;
};
