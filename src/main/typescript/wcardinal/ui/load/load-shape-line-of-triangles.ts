/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeLineOfTrianglesUploadeds } from "../shape/variant/e-shape-line-of-triangles-uploadeds";
import { EShapeLinesOfTriangles } from "../shape/variant/e-shape-lines-of-triangles";

export const loadShapeLineOfTriangles = () => {
	EShapeUploadeds[ EShapeType.LINE_OF_TRIANGLES ] = EShapeLineOfTrianglesUploadeds.create;
	EShapeDeserializers[ EShapeType.LINE_OF_TRIANGLES ] = EShapeLinesOfTriangles.deserialize;
};
