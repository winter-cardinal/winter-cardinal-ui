/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createBarUploaded } from "../variant/create-bar-uploaded";
import { deserializeBar } from "../variant/deserialize-bar";

export const loadShapeBar = (): void => {
	EShapeUploadeds[ EShapeType.BAR ] = createBarUploaded;
	EShapeDeserializers[ EShapeType.BAR ] = deserializeBar;
};
