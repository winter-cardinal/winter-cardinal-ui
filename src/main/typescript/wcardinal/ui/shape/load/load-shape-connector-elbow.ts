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
import { deserializeConnectorElbow } from "../variant/deserialize-connector-elbow";
import { onDeserializedConnectorLine } from "../variant/deserialize-connector-line";

export const loadShapeConnectorElbow = (): void => {
	EShapeUploadeds[EShapeType.CONNECTOR_ELBOW] = createLineUploaded;
	EShapeDeserializers[EShapeType.CONNECTOR_ELBOW] = deserializeConnectorElbow;
	EShapeOnDeserializeds[EShapeType.CONNECTOR_ELBOW] = onDeserializedConnectorLine;
	EShapeCapabilities.set(EShapeType.CONNECTOR_ELBOW, EShapeCapability.CONNECTOR);
};
