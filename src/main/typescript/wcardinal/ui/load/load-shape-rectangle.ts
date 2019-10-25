/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../shape/e-shape-capabilities";
import { EShapeCapability } from "../shape/e-shape-capability";
import { EShapeDeserializers } from "../shape/e-shape-to-shape-or-promise";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeRectangleUploadeds } from "../shape/variant/e-shape-rectangle-uploadeds";
import { EShapeRectangles } from "../shape/variant/e-shape-rectangles";

export const loadShapeRectangle = () => {
	EShapeUploadeds[ EShapeType.RECTANGLE ] = EShapeRectangleUploadeds.create;
	EShapeDeserializers[ EShapeType.RECTANGLE ] = EShapeRectangles.deserialize;
	EShapeCapabilities.set(
		EShapeType.RECTANGLE,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE
	);
};
