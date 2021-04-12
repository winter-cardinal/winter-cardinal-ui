/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createLineOfTrianglesUploaded } from "../variant/create-line-of-triangles-uploaded";
import { deserializeLineOfTriangles } from "../variant/deserialize-line-of-triangles";

export const loadShapeLineOfTriangles = (): void => {
	EShapeUploadeds[EShapeType.LINE_OF_TRIANGLES] = createLineOfTrianglesUploaded;
	EShapeDeserializers[EShapeType.LINE_OF_TRIANGLES] = deserializeLineOfTriangles;
};
