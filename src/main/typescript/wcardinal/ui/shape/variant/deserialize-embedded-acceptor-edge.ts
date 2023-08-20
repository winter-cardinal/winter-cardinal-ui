/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeAcceptorEdgeType } from "../e-shape-acceptor-edge-type";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeEmbeddedAcceptorEdge } from "./e-shape-embedded-acceptor-edge";
import { EShapeAcceptorEdgeSide } from "../e-shape-acceptor-edge-side";
import { EShapeResourceManagerDeserializationMode } from "../e-shape-resource-manager-deserialization-mode";

const toSubtype = (target: number): EShapeAcceptorEdgeType => {
	const result = EShapeAcceptorEdgeType.ALL & target;
	if (result !== 0) {
		return result as EShapeAcceptorEdgeType;
	}
	return EShapeAcceptorEdgeType.HEAD;
};

const toSide = (target: number): EShapeAcceptorEdgeSide => {
	return (EShapeAcceptorEdgeSide.ALL & (target >> 2)) as EShapeAcceptorEdgeSide;
};

const toVvisible = (target: number): boolean => {
	return 0 < (0x1 & (target >> 6));
};

export const deserializeEmbeddedAcceptorEdge = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeEmbeddedAcceptorEdge
): Promise<EShapeEmbeddedAcceptorEdge> | EShapeEmbeddedAcceptorEdge => {
	shape ??= new EShapeEmbeddedAcceptorEdge();
	const item15 = item[15];
	shape.subtype = toSubtype(item15);
	shape.side = toSide(item15);
	shape.vvisible = toVvisible(item15);
	const result = deserializeBase(item, manager, shape);
	if (shape.vvisible === false) {
		if (manager.mode === EShapeResourceManagerDeserializationMode.VIEWER) {
			shape.visible = false;
		}
	}
	return result;
};
