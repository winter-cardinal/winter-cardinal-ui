/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { createLabelUploaded } from "../shape/variant/create-label-uploaded";
import { deserializeLabel } from "../shape/variant/deserialize-label";

export const loadShapeLabel = () => {
	EShapeUploadeds[ EShapeType.LABEL ] = createLabelUploaded;
	EShapeDeserializers[ EShapeType.LABEL ] = deserializeLabel;
};
