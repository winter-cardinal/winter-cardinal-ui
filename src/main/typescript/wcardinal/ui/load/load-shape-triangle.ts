/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { createTriangleUploaded } from "../shape/variant/create-triangle-uploaded";
import { deserializeTriangle } from "../shape/variant/deserialize-triangle";

export const loadShapeTriangle = () => {
	EShapeUploadeds[ EShapeType.TRIANGLE ] = createTriangleUploaded;
	EShapeDeserializers[ EShapeType.TRIANGLE ] = deserializeTriangle;
};
