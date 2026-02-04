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
import { deserializePolygon } from "../variant/deserialize-polygon";

export const loadShapePolygon = (): void => {
	EShapeUploadeds[EShapeType.POLYGON] = createPolygonUploaded;
	EShapeDeserializers[EShapeType.POLYGON] = deserializePolygon;
	EShapeCapabilities.set(
		EShapeType.POLYGON,
		EShapeCapability.PRIMITIVE & ~(EShapeCapability.LINE_HEAD | EShapeCapability.LINE_TAIL)
	);
};
