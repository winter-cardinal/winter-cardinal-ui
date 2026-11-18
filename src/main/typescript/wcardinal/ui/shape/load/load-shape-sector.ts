/*
 * Copyright (C) 2019-2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createPolygonUploaded } from "../variant/create-polygon-uploaded";
import { deserializeSector } from "../variant/deserialize-sector";
import { deserializeSectorFromSemicircle } from "../variant/deserialize-sector-from-semicircle";

export const loadShapeSector = (): void => {
	EShapeUploadeds[EShapeType.SECTOR] = createPolygonUploaded;
	EShapeDeserializers[EShapeType.SEMICIRCLE] = deserializeSectorFromSemicircle;
	EShapeDeserializers[EShapeType.SECTOR] = deserializeSector;
	EShapeCapabilities.set(
		EShapeType.SECTOR,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE | EShapeCapability.ANGLE
	);
};
