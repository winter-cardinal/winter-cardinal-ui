/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeNullUploadeds } from "../shape/variant/e-shape-null-uploadeds";
import { EShapeNulls } from "../shape/variant/e-shape-nulls";

export const loadShapeNull = () => {
	EShapeUploadeds[ EShapeType.NULL ] = EShapeNullUploadeds.create;
	EShapeDeserializers[ EShapeType.NULL ] = EShapeNulls.deserialize;
};
