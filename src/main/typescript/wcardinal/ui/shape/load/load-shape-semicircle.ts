/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createPolygonUploaded } from "../variant/create-polygon-uploaded";
import { deserializeSemicircle } from "../variant/deserialize-semicircle";

export const loadShapeSemicircle = (): void => {
	EShapeUploadeds[EShapeType.SEMICIRCLE] = createPolygonUploaded;
	EShapeDeserializers[EShapeType.SEMICIRCLE] = deserializeSemicircle;
	EShapeCapabilities.set(
		EShapeType.SEMICIRCLE,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE
	);
};
