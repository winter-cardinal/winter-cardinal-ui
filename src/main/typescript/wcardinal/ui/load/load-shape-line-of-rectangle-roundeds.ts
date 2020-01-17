/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../shape/e-shape-capabilities";
import { EShapeCapability } from "../shape/e-shape-capability";
import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeLineOfRectangleRoundedsUploadeds } from "../shape/variant/e-shape-line-of-rectangle-roundeds-uploadeds";
import { EShapeLinesOfRectangleRoundeds } from "../shape/variant/e-shape-lines-of-rectangle-roundeds";

export const loadShapeLineOfRectangleRoundeds = () => {
	EShapeUploadeds[ EShapeType.LINE_OF_RECTANGLE_ROUNDEDS ] = EShapeLineOfRectangleRoundedsUploadeds.create;
	EShapeDeserializers[ EShapeType.LINE_OF_RECTANGLE_ROUNDEDS ] = EShapeLinesOfRectangleRoundeds.deserialize;
	EShapeCapabilities.set(
		EShapeType.RECTANGLE_ROUNDED,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE | EShapeCapability.BORDER_RADIUS
	);
};
