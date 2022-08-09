/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { deserializeBase } from "./deserialize-base";
import { EShapeConnectorElbow } from "./e-shape-connector-elbow";
import { EShapeConnectorLine } from "./e-shape-connector-line";

export const deserializeConnectorElbow = (
	item: DDiagramSerializedItem,
	manager: EShapeResourceManagerDeserialization,
	shape?: EShapeConnectorLine
): Promise<EShapeConnectorLine> | EShapeConnectorLine => {
	return deserializeBase(item, manager, shape || new EShapeConnectorElbow());
};
