/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createLineOfRectangleRoundedsUploaded } from "../variant/create-line-of-rectangle-roundeds-uploaded";
import { deserializeLineOfRectangleRoundeds } from "../variant/deserialize-line-of-rectangle-roundeds";

export const loadShapeLineOfRectangleRoundeds = (): void => {
	EShapeUploadeds[ EShapeType.LINE_OF_RECTANGLE_ROUNDEDS ] = createLineOfRectangleRoundedsUploaded;
	EShapeDeserializers[ EShapeType.LINE_OF_RECTANGLE_ROUNDEDS ] = deserializeLineOfRectangleRoundeds;
	EShapeCapabilities.set(
		EShapeType.LINE_OF_RECTANGLE_ROUNDEDS,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE | EShapeCapability.BORDER_RADIUS
	);
};
