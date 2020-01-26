/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { createNullUploaded } from "../shape/variant/create-null-uploaded";
import { deserializeNull } from "../shape/variant/deserialize-null";

export const loadShapeNull = () => {
	EShapeUploadeds[ EShapeType.NULL ] = createNullUploaded;
	EShapeDeserializers[ EShapeType.NULL ] = deserializeNull;
};
