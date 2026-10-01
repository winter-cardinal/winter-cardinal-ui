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

export const loadShapeRectangleRoundedLegacy = (): void => {
	EShapeUploadeds[EShapeType.RECTANGLE_ROUNDED_LEGACY] = createRectangleRoundedUploaded;
	EShapeDeserializers[EShapeType.RECTANGLE_ROUNDED_LEGACY] = deserializeRectangleRounded;
	EShapeCapabilities.set(
		EShapeType.RECTANGLE_ROUNDED_LEGACY,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE | EShapeCapability.BORDER_RADIUS
	);
};
