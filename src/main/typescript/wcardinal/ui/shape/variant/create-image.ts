/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeImageElements } from "../e-shape-image-elements";
import { EShapeImage } from "./e-shape-image";

export const createImage = ( dataUrl: string ): Promise<EShapeImage> => {
	return EShapeImageElements.toImageElement( dataUrl ).then(( imageElement: HTMLImageElement ): EShapeImage => {
		return new EShapeImage( imageElement );
	});
};
