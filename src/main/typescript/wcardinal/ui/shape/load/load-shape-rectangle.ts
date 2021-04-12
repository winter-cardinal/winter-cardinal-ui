/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createRectangleUploaded } from "../variant/create-rectangle-uploaded";
import { deserializeRectangle } from "../variant/deserialize-rectangle";

export const loadShapeRectangle = (): void => {
	EShapeUploadeds[EShapeType.RECTANGLE] = createRectangleUploaded;
	EShapeDeserializers[EShapeType.RECTANGLE] = deserializeRectangle;
	EShapeCapabilities.set(
		EShapeType.RECTANGLE,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE
	);
};
