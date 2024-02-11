/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeImageLike } from "../e-shape-image-like";

type ImageElement = Promise<EShapeImageLike> | EShapeImageLike;

const imageElementCache: Record<string, ImageElement | undefined> = {};

export const toImageElement = (dataUrl: string): Promise<EShapeImageLike> => {
	const cachedImageElement = imageElementCache[dataUrl];
	if (cachedImageElement != null) {
		if ("url" in cachedImageElement) {
			return Promise.resolve(cachedImageElement);
		} else {
			return cachedImageElement;
		}
	} else {
		const result = new Promise<EShapeImageLike>((resolve, reject): void => {
			const imageElement = document.createElement("img");
			imageElement.onload = () => {
				const resolved = {
					url: dataUrl,
					width: imageElement.width,
					height: imageElement.height,
					source: imageElement
				};
				imageElementCache[dataUrl] = resolved;
				resolve(resolved);
			};
			imageElement.onabort = imageElement.onerror = () => {
				reject();
			};
			imageElement.src = dataUrl;
		});
		imageElementCache[dataUrl] = result;
		return result;
	}
};
