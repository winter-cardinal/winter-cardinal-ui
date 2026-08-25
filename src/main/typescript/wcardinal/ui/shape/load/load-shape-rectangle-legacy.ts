/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createRectangleLegacyUploaded } from "../variant/create-rectangle-legacy-uploaded";
import { deserializeRectangleLegacy } from "../variant/deserialize-rectangle-legacy";

export const loadShapeRectangleLegacy = (): void => {
	EShapeUploadeds[EShapeType.RECTANGLE_LEGACY] = createRectangleLegacyUploaded;
	EShapeDeserializers[EShapeType.RECTANGLE_LEGACY] = deserializeRectangleLegacy;
	EShapeCapabilities.set(
		EShapeType.RECTANGLE_LEGACY,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE
	);
};
