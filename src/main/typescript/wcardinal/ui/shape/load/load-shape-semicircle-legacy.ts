/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createSemicircleLegacyUploaded } from "../variant/create-semicircle-legacy-uploaded";
import { deserializeSemicircleLegacy } from "../variant/deserialize-semicircle-legacy";

export const loadShapeSemicircleLegacy = (): void => {
	EShapeUploadeds[EShapeType.SEMICIRCLE_LEGACY] = createSemicircleLegacyUploaded;
	EShapeDeserializers[EShapeType.SEMICIRCLE_LEGACY] = deserializeSemicircleLegacy;
};
