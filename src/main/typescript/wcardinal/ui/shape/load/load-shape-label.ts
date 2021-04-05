/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createLabelUploaded } from "../variant/create-label-uploaded";
import { deserializeLabel } from "../variant/deserialize-label";

export const loadShapeLabel = (): void => {
	EShapeUploadeds[ EShapeType.LABEL ] = createLabelUploaded;
	EShapeDeserializers[ EShapeType.LABEL ] = deserializeLabel;
};
