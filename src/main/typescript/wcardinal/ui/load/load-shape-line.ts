/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-to-shape-or-promise";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeLineUploadeds } from "../shape/variant/e-shape-line-uploadeds";
import { EShapeLines } from "../shape/variant/e-shape-lines";

export const loadShapeLine = () => {
	EShapeUploadeds[ EShapeType.LINE ] = EShapeLineUploadeds.create;
	EShapeDeserializers[ EShapeType.LINE ] = EShapeLines.deserialize;
};
