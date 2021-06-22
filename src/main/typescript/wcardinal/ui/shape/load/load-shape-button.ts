/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeRuntimes } from "../e-shape-runtimes";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createButtonUploaded } from "../variant/create-button-uploaded";
import { deserializeButton } from "../variant/deserialize-button";
import { EShapeButtonRuntime } from "../variant/e-shape-button-runtime";

export const loadShapeButton = (): void => {
	EShapeUploadeds[EShapeType.BUTTON] = createButtonUploaded;
	EShapeDeserializers[EShapeType.BUTTON] = deserializeButton;
	EShapeRuntimes[EShapeType.BUTTON] = EShapeButtonRuntime;
	EShapeCapabilities.set(
		EShapeType.BUTTON,
		EShapeCapability.PRIMITIVE | EShapeCapability.STROKE_SIDE | EShapeCapability.BORDER_RADIUS
	);
};
