/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createSemicircleUploaded } from "../variant/create-semicircle-uploaded";
import { deserializeSemicircle } from "../variant/deserialize-semicircle";

export const loadShapeSemicircle = (): void => {
	EShapeUploadeds[EShapeType.SEMICIRCLE] = createSemicircleUploaded;
	EShapeDeserializers[EShapeType.SEMICIRCLE] = deserializeSemicircle;
};
