/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeImage } from "./e-shape-image";
import { toImageElement } from "./to-image-element";

export const createImage = (dataUrl: string): Promise<EShapeImage> => {
	return toImageElement(dataUrl).then((imageElement: HTMLImageElement): EShapeImage => {
		return new EShapeImage(imageElement);
	});
};
