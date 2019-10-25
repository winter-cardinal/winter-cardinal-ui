/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapes } from "../e-shapes";
import { EShapeLabel } from "./e-shape-label";

export class EShapeLabels {
	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeLabel> | EShapeLabel {
		return EShapes.deserialize( item, manager, new EShapeLabel() );
	}
}
