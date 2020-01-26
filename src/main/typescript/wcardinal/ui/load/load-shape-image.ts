/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { createRectangleUploaded } from "../shape/variant/create-rectangle-uploaded";
import { deserializeImage } from "../shape/variant/deserialize-image";

export const loadShapeImage = () => {
	EShapeUploadeds[ EShapeType.IMAGE ] = createRectangleUploaded;
	EShapeDeserializers[ EShapeType.IMAGE ] = deserializeImage;
};
