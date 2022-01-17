/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeDeserializers, EShapeOnDeserializeds } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createLineUploaded } from "../variant/create-line-uploaded";
import {
	deserializeConnectorLine,
	onDeserializedConnectorLine
} from "../variant/deserialize-connector-line";

export const loadShapeConnectorLine = (): void => {
	EShapeUploadeds[EShapeType.CONNECTOR_LINE] = createLineUploaded;
	EShapeDeserializers[EShapeType.CONNECTOR_LINE] = deserializeConnectorLine;
	EShapeOnDeserializeds[EShapeType.CONNECTOR_LINE] = onDeserializedConnectorLine;
	EShapeCapabilities.set(EShapeType.CONNECTOR_LINE, EShapeCapability.CONNECTOR);
};
