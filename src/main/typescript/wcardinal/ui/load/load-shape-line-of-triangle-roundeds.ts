/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../shape/e-shape-capabilities";
import { EShapeCapability } from "../shape/e-shape-capability";
import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeLineOfTriangleRoundedsUploadeds } from "../shape/variant/e-shape-line-of-triangle-roundeds-uploadeds";
import { EShapeLinesOfTriangleRoundeds } from "../shape/variant/e-shape-lines-of-triangle-roundeds";

export const loadShapeLineOfTriangleRoundeds = () => {
	EShapeUploadeds[ EShapeType.LINE_OF_TRIANGLE_ROUNDEDS ] = EShapeLineOfTriangleRoundedsUploadeds.create;
	EShapeDeserializers[ EShapeType.LINE_OF_TRIANGLE_ROUNDEDS ] = EShapeLinesOfTriangleRoundeds.deserialize;
	EShapeCapabilities.set(
		EShapeType.LINE_OF_TRIANGLE_ROUNDEDS,
		EShapeCapability.PRIMITIVE | EShapeCapability.BORDER_RADIUS
	);
};
