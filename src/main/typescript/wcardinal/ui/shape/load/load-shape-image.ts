/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createPolygonUploaded } from "../variant";
import { deserializeImage } from "../variant/deserialize-image";

export const loadShapeImage = (): void => {
	EShapeUploadeds[EShapeType.IMAGE] = createPolygonUploaded;
	EShapeDeserializers[EShapeType.IMAGE] = deserializeImage;
};
