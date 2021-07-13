/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createRectanglePivotedUploaded } from "../variant";
import { deserializeRectanglePivoted } from "../variant/deserialize-rectangle-pivoted";

export const loadShapeRectanglePivoted = (): void => {
	EShapeUploadeds[EShapeType.RECTANGLE_PIVOTED] = createRectanglePivotedUploaded;
	EShapeDeserializers[EShapeType.RECTANGLE_PIVOTED] = deserializeRectanglePivoted;
	EShapeCapabilities.set(
		EShapeType.RECTANGLE_PIVOTED,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE
	);
};
