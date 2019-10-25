/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-to-shape-or-promise";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeCircleUploadeds } from "../shape/variant/e-shape-circle-uploadeds";
import { EShapeCircles } from "../shape/variant/e-shape-circles";

export const loadShapeCircle = () => {
	EShapeUploadeds[ EShapeType.CIRCLE ] = EShapeCircleUploadeds.create;
	EShapeDeserializers[ EShapeType.CIRCLE ] = EShapeCircles.deserialize;
};
