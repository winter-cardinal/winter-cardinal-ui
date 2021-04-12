/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapeImage } from "./e-shape-image";

export class EShapeImageSdf extends EShapeImage {
	constructor(image?: HTMLImageElement, type = EShapeType.IMAGE_SDF) {
		super(image, type);
	}

	clone(): EShapeImageSdf {
		return new EShapeImageSdf(this.image).copy(this);
	}
}
