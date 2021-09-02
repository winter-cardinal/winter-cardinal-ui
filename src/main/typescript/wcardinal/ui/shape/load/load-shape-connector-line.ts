/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeDeserializers, EShapeOnDeserialized } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createLineUploaded } from "../variant/create-line-uploaded";
import {
	deserializeConnectorLine,
	onConnectorLineDeserialized
} from "../variant/deserialize-connector-line";

export const loadShapeConnectorLine = (): void => {
	EShapeUploadeds[EShapeType.CONNECTOR_LINE] = createLineUploaded;
	EShapeDeserializers[EShapeType.CONNECTOR_LINE] = deserializeConnectorLine;
	EShapeOnDeserialized[EShapeType.CONNECTOR_LINE] = onConnectorLineDeserialized;
	EShapeCapabilities.set(EShapeType.CONNECTOR_LINE, EShapeCapability.CONNECTOR);
};
