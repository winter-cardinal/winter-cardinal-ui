/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createLineOfRectanglesUploaded } from "../variant/create-line-of-rectangles-uploaded";
import { deserializeLineOfRectangles } from "../variant/deserialize-line-of-rectangles";

export const loadShapeLineOfRectangles = () => {
	EShapeUploadeds[ EShapeType.LINE_OF_RECTANGLES ] = createLineOfRectanglesUploaded;
	EShapeDeserializers[ EShapeType.LINE_OF_RECTANGLES ] = deserializeLineOfRectangles;
	EShapeCapabilities.set(
		EShapeType.LINE_OF_RECTANGLES,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE
	);
};
