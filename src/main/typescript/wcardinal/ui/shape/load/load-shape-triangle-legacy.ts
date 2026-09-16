/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createTriangleLegacyUploaded } from "../variant/create-triangle-legacy-uploaded";
import { deserializeTriangleLegacy } from "../variant/deserialize-triangle-legacy";

export const loadShapeTriangleLegacy = (): void => {
	EShapeUploadeds[EShapeType.TRIANGLE_LEGACY] = createTriangleLegacyUploaded;
	EShapeDeserializers[EShapeType.TRIANGLE_LEGACY] = deserializeTriangleLegacy;
};
