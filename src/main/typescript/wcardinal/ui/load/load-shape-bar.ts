/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { createBarUploaded } from "../shape/variant/create-bar-uploaded";
import { deserializeBar } from "../shape/variant/deserialize-bar";

export const loadShapeBar = () => {
	EShapeUploadeds[ EShapeType.BAR ] = createBarUploaded;
	EShapeDeserializers[ EShapeType.BAR ] = deserializeBar;
};
