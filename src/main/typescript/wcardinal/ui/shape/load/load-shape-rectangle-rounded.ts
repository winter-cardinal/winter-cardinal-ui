/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createRectangleRoundedUploaded } from "../variant/create-rectangle-rounded-uploaded";
import { deserializeRectangleRounded } from "../variant/deserialize-rectangle-rounded";

export const loadShapeRectangleRounded = (): void => {
	EShapeUploadeds[EShapeType.RECTANGLE_ROUNDED] = createRectangleRoundedUploaded;
	EShapeDeserializers[EShapeType.RECTANGLE_ROUNDED] = deserializeRectangleRounded;
	EShapeCapabilities.set(
		EShapeType.RECTANGLE_ROUNDED,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE | EShapeCapability.BORDER_RADIUS
	);
};
