/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../shape/e-shape-capabilities";
import { EShapeCapability } from "../shape/e-shape-capability";
import { EShapeDeserializers } from "../shape/e-shape-deserializers";
import { EShapeType } from "../shape/e-shape-type";
import { EShapeUploadeds } from "../shape/e-shape-uploadeds";
import { createTriangleRoundedUploaded } from "../shape/variant/create-triangle-rounded-uploaded";
import { deserializeTriangleRounded } from "../shape/variant/deserialize-triangle-rounded";

export const loadShapeTriangleRounded = () => {
	EShapeUploadeds[ EShapeType.TRIANGLE_ROUNDED ] = createTriangleRoundedUploaded;
	EShapeDeserializers[ EShapeType.TRIANGLE_ROUNDED ] = deserializeTriangleRounded;
	EShapeCapabilities.set(
		EShapeType.TRIANGLE_ROUNDED,
		EShapeCapability.PRIMITIVE | EShapeCapability.BORDER_RADIUS
	);
};
