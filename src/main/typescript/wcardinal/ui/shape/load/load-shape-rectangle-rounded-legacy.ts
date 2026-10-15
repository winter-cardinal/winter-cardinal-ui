/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createRectangleRoundedLegacyUploaded } from "../variant/create-rectangle-rounded-legacy-uploaded";
import { deserializeRectangleRoundedLegacy } from "../variant/deserialize-rectangle-rounded-legacy";

export const loadShapeRectangleRoundedLegacy = (): void => {
	EShapeUploadeds[EShapeType.RECTANGLE_ROUNDED_LEGACY] = createRectangleRoundedLegacyUploaded;
	EShapeDeserializers[EShapeType.RECTANGLE_ROUNDED_LEGACY] = deserializeRectangleRoundedLegacy;
	EShapeCapabilities.set(
		EShapeType.RECTANGLE_ROUNDED_LEGACY,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE | EShapeCapability.BORDER_RADIUS
	);
};
