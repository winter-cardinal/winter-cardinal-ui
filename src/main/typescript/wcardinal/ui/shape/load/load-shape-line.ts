/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createLineUploaded } from "../variant/create-line-uploaded";
import { deserializeLine } from "../variant/deserialize-line";

export const loadShapeLine = () => {
	EShapeUploadeds[ EShapeType.LINE ] = createLineUploaded;
	EShapeDeserializers[ EShapeType.LINE ] = deserializeLine;
};
