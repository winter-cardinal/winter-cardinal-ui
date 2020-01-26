/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../shape/e-shape-capabilities";
import { EShapeCapability } from "../shape/e-shape-capability";
import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { createLineOfRectanglesUploaded } from "../shape/variant/create-line-of-rectangles-uploaded";
import { deserializeLineOfRectangles } from "../shape/variant/deserialize-line-of-rectangles";

export const loadShapeLineOfRectangles = () => {
	EShapeUploadeds[ EShapeType.LINE_OF_RECTANGLES ] = createLineOfRectanglesUploaded;
	EShapeDeserializers[ EShapeType.LINE_OF_RECTANGLES ] = deserializeLineOfRectangles;
	EShapeCapabilities.set(
		EShapeType.LINE_OF_RECTANGLES,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE
	);
};
