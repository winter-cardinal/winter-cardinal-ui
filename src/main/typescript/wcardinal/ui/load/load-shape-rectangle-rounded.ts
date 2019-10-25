/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../shape/e-shape-capabilities";
import { EShapeCapability } from "../shape/e-shape-capability";
import { EShapeDeserializers } from "../shape/e-shape-to-shape-or-promise";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeRectangleRoundedUploadeds } from "../shape/variant/e-shape-rectangle-rounded-uploadeds";
import { EShapeRectangleRoundeds } from "../shape/variant/e-shape-rectangle-roundeds";

export const loadShapeRectangleRounded = () => {
	EShapeUploadeds[ EShapeType.RECTANGLE_ROUNDED ] = EShapeRectangleRoundedUploadeds.create;
	EShapeDeserializers[ EShapeType.RECTANGLE_ROUNDED ] = EShapeRectangleRoundeds.deserialize;
	EShapeCapabilities.set(
		EShapeType.RECTANGLE_ROUNDED,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE | EShapeCapability.BORDER_RADIUS
	);
};
