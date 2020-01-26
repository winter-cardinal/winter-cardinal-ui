/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../shape/e-shape-capabilities";
import { EShapeCapability } from "../shape/e-shape-capability";
import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { createRectangleUploaded } from "../shape/variant/create-rectangle-uploaded";
import { deserializeRectangle } from "../shape/variant/deserialize-rectangle";

export const loadShapeRectangle = () => {
	EShapeUploadeds[ EShapeType.RECTANGLE ] = createRectangleUploaded;
	EShapeDeserializers[ EShapeType.RECTANGLE ] = deserializeRectangle;
	EShapeCapabilities.set(
		EShapeType.RECTANGLE,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE
	);
};
