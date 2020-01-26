/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { createLineOfTrianglesUploaded } from "../shape/variant/create-line-of-triangles-uploaded";
import { deserializeLineOfTriangles } from "../shape/variant/deserialize-line-of-triangles";

export const loadShapeLineOfTriangles = () => {
	EShapeUploadeds[ EShapeType.LINE_OF_TRIANGLES ] = createLineOfTrianglesUploaded;
	EShapeDeserializers[ EShapeType.LINE_OF_TRIANGLES ] = deserializeLineOfTriangles;
};
