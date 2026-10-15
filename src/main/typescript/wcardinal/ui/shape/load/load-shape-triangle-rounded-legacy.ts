/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createTriangleRoundedLegacyUploaded } from "../variant/create-triangle-rounded-legacy-uploaded";
import { deserializeTriangleRoundedLegacy } from "../variant/deserialize-triangle-rounded-legacy";

export const loadShapeTriangleRoundedLegacy = (): void => {
	EShapeUploadeds[EShapeType.TRIANGLE_ROUNDED_LEGACY] = createTriangleRoundedLegacyUploaded;
	EShapeDeserializers[EShapeType.TRIANGLE_ROUNDED_LEGACY] = deserializeTriangleRoundedLegacy;
	EShapeCapabilities.set(
		EShapeType.TRIANGLE_ROUNDED_LEGACY,
		EShapeCapability.PRIMITIVE | EShapeCapability.BORDER_RADIUS
	);
};
