/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { createLineOfCirclesUploaded } from "../shape/variant/create-line-of-circles-uploaded";
import { deserializeLineOfCircles } from "../shape/variant/deserialize-line-of-circles";

export const loadShapeLineOfCircles = () => {
	EShapeUploadeds[ EShapeType.LINE_OF_CIRCLES ] = createLineOfCirclesUploaded;
	EShapeDeserializers[ EShapeType.LINE_OF_CIRCLES ] = deserializeLineOfCircles;
};
