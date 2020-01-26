/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { createCircle } from "../shape/variant/create-circle-uploaded";
import { deserializeCircle } from "../shape/variant/deserialize-circle";

export const loadShapeCircle = () => {
	EShapeUploadeds[ EShapeType.CIRCLE ] = createCircle;
	EShapeDeserializers[ EShapeType.CIRCLE ] = deserializeCircle;
};
