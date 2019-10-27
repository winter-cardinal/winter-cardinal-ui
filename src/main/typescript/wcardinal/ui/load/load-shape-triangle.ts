/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeTriangleUploadeds } from "../shape/variant/e-shape-triangle-uploadeds";
import { EShapeTriangles } from "../shape/variant/e-shape-triangles";

export const loadShapeTriangle = () => {
	EShapeUploadeds[ EShapeType.TRIANGLE ] = EShapeTriangleUploadeds.create;
	EShapeDeserializers[ EShapeType.TRIANGLE ] = EShapeTriangles.deserialize;
};
