/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createNullUploaded } from "../variant/create-null-uploaded";
import { deserializeNull } from "../variant/deserialize-null";

export const loadShapeNull = (): void => {
	EShapeUploadeds[ EShapeType.NULL ] = createNullUploaded;
	EShapeDeserializers[ EShapeType.NULL ] = deserializeNull;
};
