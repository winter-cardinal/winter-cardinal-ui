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
import { deserializeFan } from "../variant/deserialize-fan";

export const loadShapeFan = (): void => {
	EShapeUploadeds[EShapeType.FAN] = createPolygonUploaded;
	EShapeDeserializers[EShapeType.FAN] = deserializeFan;
	EShapeCapabilities.set(
		EShapeType.FAN,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE | EShapeCapability.ANGLE
	);
};
