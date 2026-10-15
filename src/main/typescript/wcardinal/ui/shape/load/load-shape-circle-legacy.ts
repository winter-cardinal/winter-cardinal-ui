/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createCircleLegacyUploaded } from "../variant/create-circle-legacy-uploaded";
import { deserializeCircleLegacy } from "../variant/deserialize-circle-legacy";

export const loadShapeCircleLegacy = (): void => {
	EShapeUploadeds[EShapeType.CIRCLE_LEGACY] = createCircleLegacyUploaded;
	EShapeDeserializers[EShapeType.CIRCLE_LEGACY] = deserializeCircleLegacy;
};
