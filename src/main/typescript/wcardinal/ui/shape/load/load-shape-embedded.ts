/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeCapabilities } from "../e-shape-capabilities";
import { EShapeCapability } from "../e-shape-capability";
import { EShapeDeserializers } from "../e-shape-deserializers";
import { EShapeType } from "../e-shape-type";
import { EShapeUploadeds } from "../e-shape-uploadeds";
import { createRectanglePivotedUploaded } from "../variant/create-rectangle-pivoted-uploaded";
import { createGroupUploaded } from "../variant/create-group-uploaded";
import { deserializeEmbedded } from "../variant/deserialize-embedded";
import { createCircleUploaded } from "../variant/create-circle-uploaded";
import { deserializeEmbeddedAcceptorEdge } from "../variant/deserialize-embedded-acceptor-edge";

export const loadShapeEmbedded = (): void => {
	// Embedded
	EShapeUploadeds[EShapeType.EMBEDDED] = createGroupUploaded;
	EShapeDeserializers[EShapeType.EMBEDDED] = deserializeEmbedded;
	EShapeCapabilities.set(EShapeType.EMBEDDED, EShapeCapability.EMBEDDED);

	// Embedded layer
	EShapeUploadeds[EShapeType.EMBEDDED_LAYER] = createRectanglePivotedUploaded;

	// Embedded acceptor edge
	EShapeUploadeds[EShapeType.EMBEDDED_ACCEPTOR_EDGE] = createCircleUploaded;
	EShapeDeserializers[EShapeType.EMBEDDED_ACCEPTOR_EDGE] = deserializeEmbeddedAcceptorEdge;
	EShapeCapabilities.set(
		EShapeType.EMBEDDED_ACCEPTOR_EDGE,
		EShapeCapability.EMBEDDED_ACCEPTOR_EDGE
	);
};
