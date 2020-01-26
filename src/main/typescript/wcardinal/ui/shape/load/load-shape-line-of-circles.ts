/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createLineOfCirclesUploaded } from "../variant/create-line-of-circles-uploaded";
import { deserializeLineOfCircles } from "../variant/deserialize-line-of-circles";

export const loadShapeLineOfCircles = () => {
	EShapeUploadeds[ EShapeType.LINE_OF_CIRCLES ] = createLineOfCirclesUploaded;
	EShapeDeserializers[ EShapeType.LINE_OF_CIRCLES ] = deserializeLineOfCircles;
};
