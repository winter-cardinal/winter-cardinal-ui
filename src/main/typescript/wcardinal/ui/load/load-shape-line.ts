/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { createLineUploaded } from "../shape/variant/create-line-uploaded";
import { deserializeLine } from "../shape/variant/deserialize-line";

export const loadShapeLine = () => {
	EShapeUploadeds[ EShapeType.LINE ] = createLineUploaded;
	EShapeDeserializers[ EShapeType.LINE ] = deserializeLine;
};
