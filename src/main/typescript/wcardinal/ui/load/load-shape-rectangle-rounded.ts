/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../shape/e-shape-capabilities";
import { EShapeCapability } from "../shape/e-shape-capability";
import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { createRectangleRoundedUploaded } from "../shape/variant/create-rectangle-rounded-uploaded";
import { deserializeRectangleRounded } from "../shape/variant/deserialize-rectangle-rounded";

export const loadShapeRectangleRounded = () => {
	EShapeUploadeds[ EShapeType.RECTANGLE_ROUNDED ] = createRectangleRoundedUploaded;
	EShapeDeserializers[ EShapeType.RECTANGLE_ROUNDED ] = deserializeRectangleRounded;
	EShapeCapabilities.set(
		EShapeType.RECTANGLE_ROUNDED,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE | EShapeCapability.BORDER_RADIUS
	);
};
