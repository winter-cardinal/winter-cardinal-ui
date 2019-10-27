/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeBarUploadeds } from "../shape/variant/e-shape-bar-uploadeds";
import { EShapeBars } from "../shape/variant/e-shape-bars";

export const loadShapeBar = () => {
	EShapeUploadeds[ EShapeType.BAR ] = EShapeBarUploadeds.create;
	EShapeDeserializers[ EShapeType.BAR ] = EShapeBars.deserialize;
};
