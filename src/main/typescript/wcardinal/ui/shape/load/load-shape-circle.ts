/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createCircleUploaded } from "../variant/create-circle-uploaded";
import { deserializeCircle } from "../variant/deserialize-circle";

export const loadShapeCircle = (): void => {
	EShapeUploadeds[EShapeType.CIRCLE] = createCircleUploaded;
	EShapeDeserializers[EShapeType.CIRCLE] = deserializeCircle;
};
