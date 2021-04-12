/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createTriangleRoundedUploaded } from "../variant/create-triangle-rounded-uploaded";
import { deserializeTriangleRounded } from "../variant/deserialize-triangle-rounded";

export const loadShapeTriangleRounded = (): void => {
	EShapeUploadeds[EShapeType.TRIANGLE_ROUNDED] = createTriangleRoundedUploaded;
	EShapeDeserializers[EShapeType.TRIANGLE_ROUNDED] = deserializeTriangleRounded;
	EShapeCapabilities.set(
		EShapeType.TRIANGLE_ROUNDED,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE | EShapeCapability.BORDER_RADIUS
	);
};
