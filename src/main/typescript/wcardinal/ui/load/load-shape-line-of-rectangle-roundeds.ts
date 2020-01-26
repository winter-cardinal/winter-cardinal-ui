/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../shape/e-shape-capabilities";
import { EShapeCapability } from "../shape/e-shape-capability";
import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { createLineOfRectangleRoundedsUploaded } from "../shape/variant/create-line-of-rectangle-roundeds-uploaded";
import { deserializeLineOfRectangleRoundeds } from "../shape/variant/deserialize-line-of-rectangle-roundeds";

export const loadShapeLineOfRectangleRoundeds = () => {
	EShapeUploadeds[ EShapeType.LINE_OF_RECTANGLE_ROUNDEDS ] = createLineOfRectangleRoundedsUploaded;
	EShapeDeserializers[ EShapeType.LINE_OF_RECTANGLE_ROUNDEDS ] = deserializeLineOfRectangleRoundeds;
	EShapeCapabilities.set(
		EShapeType.LINE_OF_RECTANGLE_ROUNDEDS,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE | EShapeCapability.BORDER_RADIUS
	);
};
