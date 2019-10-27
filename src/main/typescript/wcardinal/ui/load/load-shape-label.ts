/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeLabelUploadeds } from "../shape/variant/e-shape-label-uploadeds";
import { EShapeLabels } from "../shape/variant/e-shape-labels";

export const loadShapeLabel = () => {
	EShapeUploadeds[ EShapeType.LABEL ] = EShapeLabelUploadeds.create;
	EShapeDeserializers[ EShapeType.LABEL ] = EShapeLabels.deserialize;
};
