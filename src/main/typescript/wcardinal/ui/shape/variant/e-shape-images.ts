/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramSerializedItem } from "../../d-diagram-serialized";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapes } from "../e-shapes";
import { EShapeImage } from "./e-shape-image";

export class EShapeImages {
	static from( dataUrl: string ): Promise<EShapeImage> {
		return EShapes.toImageElement( dataUrl ).then(( imageElement: HTMLImageElement ) => {
			return new EShapeImage( imageElement );
		});
	}

	static deserialize(
		item: DDiagramSerializedItem, manager: EShapeResourceManagerDeserialization
	): Promise<EShapeImage> | EShapeImage {
		return EShapes.deserialize( item, manager, EShapeImages.create() );
	}

	static create(): EShapeImage {
		return new EShapeImage();
	}
}
