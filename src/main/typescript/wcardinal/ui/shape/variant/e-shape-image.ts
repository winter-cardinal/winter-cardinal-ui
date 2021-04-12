/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeType } from "../e-shape-type";
import { EShapeRectangle } from "./e-shape-rectangle";

export class EShapeImage extends EShapeRectangle {
	constructor(image?: HTMLImageElement, type = EShapeType.IMAGE) {
		super(type);
		if (image != null) {
			this.image = image;
			this.size.set(image.width, image.height);
		}
		this.fill.alpha = 1.0;
	}

	clone(): EShapeImage {
		return new EShapeImage(this.image).copy(this);
	}
}
