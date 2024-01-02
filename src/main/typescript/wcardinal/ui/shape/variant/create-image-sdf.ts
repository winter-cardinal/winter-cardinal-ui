/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { SdfGenerator } from "../../util/sdf-generator";
import { EShapeImageSdf } from "./e-shape-image-sdf";
import { toImageElement } from "./to-image-element";

export const createImageSdf = (dataUrl: string, convertToSdf: boolean): Promise<EShapeImageSdf> => {
	if (convertToSdf) {
		let generator: SdfGenerator | undefined;
		return toImageElement(dataUrl).then(
			(imageElement: HTMLImageElement): Promise<EShapeImageSdf> => {
				generator ??= new SdfGenerator();
				generator.copy(imageElement);
				generator.generate();
				return createImageSdf(generator.canvas.toDataURL(), false);
			}
		);
	} else {
		return toImageElement(dataUrl).then((imageElement: HTMLImageElement): EShapeImageSdf => {
			return new EShapeImageSdf(imageElement);
		});
	}
};
