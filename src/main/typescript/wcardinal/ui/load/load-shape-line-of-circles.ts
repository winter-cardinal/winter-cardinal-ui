/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeLineOfCirclesUploadeds } from "../shape/variant/e-shape-line-of-circles-uploadeds";
import { EShapeLinesOfCircles } from "../shape/variant/e-shape-lines-of-circles";

export const loadShapeLineOfCircles = () => {
	EShapeUploadeds[ EShapeType.LINE_OF_CIRCLES ] = EShapeLineOfCirclesUploadeds.create;
	EShapeDeserializers[ EShapeType.LINE_OF_CIRCLES ] = EShapeLinesOfCircles.deserialize;
};
