/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createImageSdfUploaded } from "../variant/create-image-sdf-uploaded";
import { deserializeImageSdf } from "../variant/deserialize-image-sdf";

export const loadShapeImageSdf = (): void => {
	EShapeUploadeds[ EShapeType.IMAGE_SDF ] = createImageSdfUploaded;
	EShapeDeserializers[ EShapeType.IMAGE_SDF ] = deserializeImageSdf;
};
