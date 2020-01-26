/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createRectangleUploaded } from "../variant/create-rectangle-uploaded";
import { deserializeImage } from "../variant/deserialize-image";

export const loadShapeImage = () => {
	EShapeUploadeds[ EShapeType.IMAGE ] = createRectangleUploaded;
	EShapeDeserializers[ EShapeType.IMAGE ] = deserializeImage;
};
