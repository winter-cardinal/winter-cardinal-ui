/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DynamicSDFFontGenerator } from "../../util/dynamic-sdf-font-generator";
import { EShapeImageElements } from "../e-shape-image-elements";
import { EShapeImageSdf } from "./e-shape-image-sdf";

export const createImageSdf = (dataUrl: string, convertToSdf: boolean): Promise<EShapeImageSdf> => {
	if (convertToSdf) {
		return EShapeImageElements.toImageElement(dataUrl).then(
			(imageElement: HTMLImageElement): Promise<EShapeImageSdf> => {
				const generator = DynamicSDFFontGenerator.getInstance().init();
				generator.updateTexture(imageElement);
				generator.render();

				const canvas = document.createElement("canvas");
				generator.read(canvas);

				return createImageSdf(canvas.toDataURL(), false);
			}
		);
	} else {
		return EShapeImageElements.toImageElement(dataUrl).then(
			(imageElement: HTMLImageElement): EShapeImageSdf => {
				return new EShapeImageSdf(imageElement);
			}
		);
	}
};
