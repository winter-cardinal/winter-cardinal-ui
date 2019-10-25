/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../shape/e-shape-capabilities";
import { EShapeCapability } from "../shape/e-shape-capability";
import { EShapeDeserializers } from "../shape/e-shape-to-shape-or-promise";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { EShapeTriangleRoundedUploadeds } from "../shape/variant/e-shape-triangle-rounded-uploadeds";
import { EShapeTriangleRoundeds } from "../shape/variant/e-shape-triangle-roundeds";

export const loadShapeTriangleRounded = () => {
	EShapeUploadeds[ EShapeType.TRIANGLE_ROUNDED ] = EShapeTriangleRoundedUploadeds.create;
	EShapeDeserializers[ EShapeType.TRIANGLE_ROUNDED ] = EShapeTriangleRoundeds.deserialize;
	EShapeCapabilities.set(
		EShapeType.TRIANGLE_ROUNDED,
		EShapeCapability.PRIMITIVE | EShapeCapability.BORDER_RADIUS
	);
};
